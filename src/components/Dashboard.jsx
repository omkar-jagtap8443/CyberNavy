import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="title">Security Intelligence Dashboard</div>
      <div className="subtitle">Real-time monitoring and threat detection</div>

      <div className="cards">
        <div className="card">
          <h2>Threats Detected <i className="fa-solid fa-triangle-exclamation icon clickable" title="View Threats"></i></h2>
          
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
          <i className="fa-solid fa-circle-check icon clickable" title="Safe Content"></i>
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
            Content Moderation <i className="fa-solid fa-arrow-down" title="Scroll"></i>
          </h3>
        </div>

        <div className="card">
          <h2>Recent Alerts</h2>
          <h2>View All</h2>
          <i className="fa-solid fa-signal icon clickable" title="Online"></i>
          <small>No recent Alerts</small>
        </div>
      </div>

      <div className="box">
        <h4>Drop Files here or click to upload</h4>
        <i className="fa-solid fa-arrow-up-from-bracket" title="Upload"></i>
        <h5>
          Supports images, videos, and text files <br /> (max 10mb)
        </h5>
      </div>
    </div>
  );
}

export default Dashboard;
