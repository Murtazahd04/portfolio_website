import React from 'react';
import { FaCode } from 'react-icons/fa';
import ServicesCard from './Services_Card';
import '../styles/Services.css'; // Import the CSS file

const Services = () => {
  return (
    <section
      id="services"
      className="services-section"
      aria-label="Services"
    >
      <div className="services-container">
        
        {/* Header Section */}
        <div className="services-header">
          <p className="services-label">Services</p>
        </div>

        {/* Grid Section */}
        <div className="services-grid">
          <ServicesCard
            icon={<FaCode size={22} />}
            title="Web Development"
            features={[
              'Full-stack web development (React, Express, MongoDB)',
              'Hosting & deployment (Vercel, Netlify, Render)',
              'Responsive UI & performance optimization',
            ]}
            ctaLabel="Get a quote"
            ctaHref="contact"
          />
          
          {/* Add more ServicesCard components here as needed */}
        </div>

      </div>
    </section>
  );
};

export default Services;