const express = require('express');
const multer = require('multer');
const FormData = require('form-data');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/scan', upload.single('file'), async (req, res) => {
    console.log('Upload endpoint /scan called');

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const formData = new FormData();
        formData.append('media', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        });

        const API_USER = process.env.SIGHTENGINE_USER;
        const API_SECRET = process.env.SIGHTENGINE_SECRET;

        if (!API_USER || !API_SECRET) {
            return res.status(500).json({ message: '⚠️ Server error: API keys not configured.' });
        }

        // Call Sightengine API
        const sightengineResponse = await axios.post(
            `https://api.sightengine.com/1.0/check.json?models=nudity,weapon,gore,violence,alcohol&api_user=${API_USER}&api_secret=${API_SECRET}`,
            formData,
            { headers: formData.getHeaders() }
        );

        const data = sightengineResponse.data;
        console.log('Full Sightengine API response:', JSON.stringify(data, null, 2));

        if (data.status !== 'success') {
            return res.status(500).json({ message: data.error?.message || '⚠️ Server error from content scan service.' });
        }

        const threshold = 0.2;
        let isUnsafe = false;
        let messages = [];

        // ----- Weapons -----
        if (data.weapon?.classes) {
            const detectedWeapons = Object.entries(data.weapon.classes)
                .filter(([_, prob]) => prob > threshold)
                .map(([type]) => type);

            if (detectedWeapons.length > 0) {
                isUnsafe = true;
                messages.push(`Weapon detected (${detectedWeapons.join(", ")})`);
            }
        }

        // ----- Violence -----
        if (data.violence?.prob > threshold) {
            isUnsafe = true;
            messages.push("Violence detected");
        }

        // ----- Gore -----
        if (data.gore?.prob > threshold) {
            isUnsafe = true;
            messages.push("Gore detected");
        }

        // ----- Alcohol -----
        if (data.alcohol?.prob > threshold) {
            isUnsafe = true;
            messages.push("Alcohol detected");
        }

        // ----- Nudity -----
        // Use 'safe' score instead of undefined fields
        if (data.nudity && data.nudity.safe < 0.9) {
            isUnsafe = true;
            messages.push("Inappropriate nudity detected");
        }

        // ----- Final Response -----
        res.json({
            status: isUnsafe ? 'unsafe' : 'safe',
            message: isUnsafe
                ? `⚠️ Warning: ${messages.join(", ")}`
                : '✅ Your content is clean and safe to upload on any platform.',
            details: isUnsafe ? { nudity: data.nudity, weapon: data.weapon, violence: data.violence, gore: data.gore, alcohol: data.alcohol } : undefined
        });

    } catch (error) {
        console.error('API error:', error.response?.data || error.message);
        res.status(500).json({ message: '⚠️ Server error during content scan.', error: error.message });
    }
});

module.exports = router;