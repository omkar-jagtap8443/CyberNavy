import React, { useState } from "react";
import * as nsfwjs from "nsfwjs";
import "./Dashboard.css";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Drag & drop handling
  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("⚠️ Please select a file first!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      // Change the URL if your backend is hosted elsewhere
      const response = await fetch("http://localhost:5000/api/upload/scan", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      setResult({
        warning: data.status === "unsafe",
        message: data.message || "No message returned."
      });
      setShowModal(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("❌ Analysis failed!");
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="title">Security Intelligence Dashboard</div>
      <div className="subtitle">Real-time monitoring and threat detection</div>

      <div className="cards">
        <div className="card">
          <h2>
            Threats Detected{" "}
            <i
              className="fa-solid fa-triangle-exclamation icon clickable"
              title="View Threats"
            ></i>
          </h2>
          <div className="value">0</div>
          <small>Active alerts</small>
        </div>

        <div className="card">
          <h2>Files Scanned</h2>
          <i className="fa-solid fa-file icon clickable" title="View Files"></i>
          <div className="value">0</div>
          <small>Total processed</small>
        </div>

        <div className="card">
          <h2>Clean Content</h2>
          <i
            className="fa-solid fa-circle-check icon clickable"
            title="Safe Content"
          ></i>
          <div className="value">100.0%</div>
          <small>Safe files</small>
        </div>

        <div className="card">
          <h2>System Status</h2>
          <i className="fa-solid fa-signal icon clickable" title="Online"></i>
          <div className="value">Online</div>
          <small>99.9% uptime</small>
        </div>

        <div className="card4">
          <h2>Content Analysis</h2>
          <small>Analysis Type</small>
          <h3>
            Content Moderation{" "}
            <i className="fa-solid fa-arrow-down" title="Scroll"></i>
          </h3>
        </div>

        <div className="card">
          <h2>Recent Alerts</h2>
          <h2>View All</h2>
          <i className="fa-solid fa-signal icon clickable" title="Online"></i>
          <small>No recent Alerts</small>
        </div>
      </div>

      {/* Upload Box */}
      <div
        className="box"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <h4>
          {file ? `Selected: ${file.name}` : "Drop Files here or click to upload"}
        </h4>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileSelect}
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <i className="fa-solid fa-arrow-up-from-bracket" title="Upload"></i>
        </label>
        <h5>
          Supports images and videos <br /> (max 10mb)
        </h5>
        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          className="upload-btn"
        >
          {loading ? "Analyzing..." : "Analyze Content"}
        </button>
      </div>

      {/* 🔥 Modal Popup */}
      {showModal && result && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Analysis Result</h3>
            <p
              style={{
                color: result.warning ? "red" : "green",
                fontWeight: "600",
              }}
            >
              {result.message}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="upload-btn"
              style={{ marginTop: "15px" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;