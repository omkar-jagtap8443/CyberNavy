import React from 'react';
import './FeatureCard.css';

function FeatureCard() {
  return (
    <div className="feature-card-container">
      <div className="feature-card-header">
        <div className="feature-card-title">
          <i className="fa-solid fa-camera-security"></i>
          <span>Advanced Threat Detection</span>
        </div>
        <div className="feature-card-list">
          <button className="feature-card-button">
            <i className="fa-solid fa-link"></i>
            <span>Check Malicious URL</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-exclamation-triangle"></i>
            <span>Detect Harassment</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-exclamation-triangle"></i>
            <span>Verify News Source</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-solid fa-database"></i>
            <span>Store Evidence</span>
          </button>
        </div>
      </div>
      <p className="feature-card-note">    
         Before you download, open, or forward anything from social media or unknown websites, run it through our verification tool.
         It scans URLs, file attachments and page content to detect phishing, malware, deepfakes and material that could break laws or platform rules.
          Taking this one extra step protects your device, your contacts, and the integrity of your online community.
           Share this post to help friends and colleagues stay safe. 
           <br />
            #CyberNavy #StaySafeOnline #ThreatDetection
      
      </p>

      <div className="feature-card-header">
        <div className="feature-card-title">
          <i className="fa-solid fa-users"></i>
          <span>Social Media Monitoring</span>
        </div>
        <div className="feature-card-list">
          <button className="feature-card-button">
            <i className="fa-brands fa-twitter"></i>
            <span>Analyze Twitter Post</span>
          </button>
          <button className="feature-card-button">
            <i className="fa-brands fa-facebook-f"></i>
            <span>Analyze Facebook Post</span>
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