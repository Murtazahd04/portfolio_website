import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        <span className="contact-label">Get In Touch</span>
        
        <h2 className="contact-heading">
          Tell us about your business requirements <br className="hidden md:block" />
          and we will reach back to you soon with an implementation plan.
        </h2>

        <div className="contact-actions">
          {/* Email Button */}
          <a 
            href="mailto:murtazahd04@gmail.com"
            className="btn btn-primary"
          >
            <FaEnvelope size={20} />
            Send Email
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/murtaza-dhanerawala-37534a270"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaLinkedin size={22} />
            Message on LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;