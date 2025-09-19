const express = require('express');
const multer = require('multer');
const FormData = require('form-data');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/scan', upload.single('file'), async (req, res) => {
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

        // Expanded models to check for a wider range of content
        const sightengineResponse = await axios.post(
            `https://api.sightengine.com/1.0/check.json?models=nudity,weapon,gore,violence,drug,alcohol&api_user=${API_USER}&api_secret=${API_SECRET}`,
            formData,
            { headers: formData.getHeaders() }
        );

        const sightengineData = sightengineResponse.data;

        if (sightengineData.status !== 'success') {
            console.error('Sightengine API Error:', sightengineData);
            return res.status(500).json({ message: sightengineData.error.message || '⚠️ Server error from content scan service.' });
        }

        let isUnsafe = false;
        let message = '✅ Your content is clean and safe to upload on any platform.';

        // Set a lower, more sensitive threshold for detection
        const threshold = 0.2; 

        // Check for specific categories with custom messages
        if (sightengineData.weapon && sightengineData.weapon.prob > threshold) {
            isUnsafe = true;
            message = '⚠️ Warning: A weapon was detected in this content.';
        } else if (sightengineData.violence && sightengineData.violence.prob > threshold) {
            isUnsafe = true;
            message = '⚠️ Warning: Violence was detected in this content.';
        } else if (sightengineData.gore && sightengineData.gore.prob > threshold) {
            isUnsafe = true;
            message = '⚠️ Warning: Gore was detected in this content.';
        } else if (sightengineData.drug && sightengineData.drug.prob > threshold) {
            isUnsafe = true;
            message = '⚠️ Warning: Drugs or drug-related content were detected.';
        } else if (sightengineData.alcohol && sightengineData.alcohol.prob > threshold) {
            isUnsafe = true;
            message = '⚠️ Warning: Alcohol was detected in this content.';
        } else if (sightengineData.nudity && (sightengineData.nudity.sexual_activity || sightengineData.nudity.sexual_display)) {
            isUnsafe = true;
            message = '⚠️ Warning: Inappropriate content was detected.';
        }

        res.json({ status: isUnsafe ? 'unsafe' : 'safe', message });

    } catch (error) {
        console.error('API error:', error);
        res.status(500).json({ message: '⚠️ Server error during content scan.', error: error.message });
    }
});

module.exports = router;