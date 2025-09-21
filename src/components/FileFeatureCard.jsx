import React from 'react';
import './FeatureCard.css';

function FeatureCard() {
  return (
    <div className="feature-card-container">
      <div className="feature-card-header">
        <div className="feature-card-title">
          <i className="fa-solid fa-camera-security"></i>
          <span>Advanced File Threat Detection</span>
        </div>
        <div className="feature-card-list">
          <button className="feature-card-button">
            <i className="fa-solid fa-link"></i>
            <span>Scan files</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-exclamation-triangle"></i>
            <span>Detect Virus in files</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-exclamation-triangle"></i>
            <span>Verify Downloaded file</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-database"></i>
            <span>Store Evidence</span>
          </button>
        </div>
      </div>
      <p className="feature-card-note">    
         Before you download, open, or forward file anything from social media or unknown websites, run it through our verification tool.
         It scans Files, file attachments and page content to detect phishing, malware, deepfakes and material that could break laws or Attack your System platform rules.
          Taking this one extra step protects your device, your contacts, 
           Share this post to help friends and colleagues stay safe. 
           <br />
            #CyberNavy #StaySafeOnline #ThreatDetection
      
      </p>

      <div className="feature-card-header">
        <div className="feature-card-title">
          <i className="fa-solid fa-users"></i>
          <span>File Scanning</span>
        </div>
        <div className="feature-card-list">
          <button className="feature-card-button">
            <i className="fa-brands fa-website"></i>
            <span>Analyze Website files</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-brands fa-files"></i>  
            <span>Analyze Shared files Online</span>
          </button>
        </div>
      </div>
      <p className="feature-card-note">
        Demo posts contain sample content to showcase threat detection capabilities
      </p>
    </div>
  );
}

export default FeatureCard;