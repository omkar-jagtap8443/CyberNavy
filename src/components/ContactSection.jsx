import React, { useRef, useState } from 'react';
import './ContactSection.css';
import GlobeImage from '../assets/Worldflow.png'; 
import emailjs from '@emailjs/browser';

function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_om",       
        "template_wyfgxno", 
        formRef.current,
        "NDxI2eRNsn2vroCHC" 
      )
      .then(
        () => {
          setLoading(false);
          formRef.current.reset();
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          alert("❌ Something went wrong. Please try again!");
        }
      );
  };

  return (
    <div id="contact-section" className="contact-section-container">
      <div className="contact-content-wrapper">
        {/* Left column for the Contact Form */}
        <div className="contact-form-column">
          <h2 className="get-in-touch-title">GET IN TOUCH</h2>
          <h1 className="contact-main-title">Contact.</h1>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input type="text" name="user_name" id="name" placeholder="What's your good name?" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input type="email" name="user_email" id="email" placeholder="What's your web address?" className="form-input" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea name="message" id="message" placeholder="What you want to say?" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right column for the image */}
        <div className="contact-image-column">
          <img 
            src={GlobeImage} 
            alt="3D Cyber Earth" 
            className="contact-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
