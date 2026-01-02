// src/components/Services_Card.jsx
import React from 'react';
import { Link } from 'react-scroll';

const ServicesCard = ({ icon, title, features, ctaLabel, ctaHref }) => {
  return (
    <article className="rounded-2xl border border-gray-600 bg-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {/* Icon container: Dark cyan background with light cyan icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-900/40 text-cyan-300">
          {icon}
        </div>
        {/* Title: White text */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {/* List items: Light gray text */}
      <ul className="mt-6 space-y-2 text-sm text-gray-300">
        {features.map((feat, idx) => (
          <li key={idx}>• {feat}</li>
        ))}
      </ul>

      {/* Smooth scroll CTA */}
      <div className="mt-8">
        <Link
          to={ctaHref}            // e.g., "contact"
          smooth={true}
          duration={500}
          offset={-60}            // adjust for your fixed header height
          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 cursor-pointer"
        >
          {ctaLabel}
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ServicesCard;