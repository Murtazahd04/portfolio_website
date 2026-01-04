import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Services_Card.css'; // Import the new CSS

const ServicesCard = ({ icon, title, features, ctaLabel, ctaHref }) => {
  return (
    <article className="service-card">
      <div className="card-header">
        {/* Icon container */}
        <div className="icon-box">
          {icon}
        </div>
        {/* Title */}
        <h3 className="card-title">{title}</h3>
      </div>

      {/* List items */}
      <ul className="feature-list">
        {features.map((feat, idx) => (
          <li key={idx} className="feature-item">
            • {feat}
          </li>
        ))}
      </ul>

      {/* Smooth scroll CTA */}
      <div className="cta-container">
        <Link
          to={ctaHref}            // e.g., "contact"
          smooth={true}
          duration={500}
          offset={-60}            // adjust for your fixed header height
          className="cta-link"
        >
          {ctaLabel}
          <span className="arrow-icon" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ServicesCard;