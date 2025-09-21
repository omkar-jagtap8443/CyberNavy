import React from 'react';
import './URLManager.css';

function URLManager() {
  return (
    <div className="url-manager-container">
      <div className="url-manager-header">
        <i className="fa-solid fa-shield-halved url-manager-icon"></i>
        <h2 className="url-manager-title">URL Blacklist Management</h2>
      </div>

      <div className="url-manager-form">
        <div className="form-group">
          <label className="form-label">Add New Threat URL</label>
          <input
            type="text"
            className="form-input"
            placeholder="https://malicious-site.com"
          />
        </div>
        <div className="form-group">
          <div className="form-select-wrapper">
            <select className="form-select">
              <option>Phishing</option>
              <option>Malware</option>
              <option>Spam</option>
            </select>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <button className="blacklist-button">
          <i className="fa-solid fa-plus"></i>
          <span>Blacklist</span>
        </button>
      </div>

      <div className="blacklisted-urls-section">
        <div className="blacklisted-urls-info">
          Blacklisted URLs (0)
        </div>
        <div className="blacklisted-urls-list">
          <i className="fa-solid fa-shield-check"></i>
          <p>No URLs in blacklist yet</p>
          <small>Add suspicious URLs to protect users</small>
        </div>
      </div>

      <div className="demo-threats-section">
        <h3>Quick Add Demo Threats</h3>
        <button className="demo-button">Add Phishing Demo</button>
        <button className="demo-button">Add Malware Demo</button>
      </div>
    </div>
  );
}

export default URLManager;