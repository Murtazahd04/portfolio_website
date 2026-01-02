
// src/components/Services_card.jsx
import React from 'react';
import { Link } from 'react-scroll';

const ServicesCard = ({ icon, title, features, ctaLabel, ctaHref }) => {
  return (
    <article className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-gray-800 dark:text-gray-300">
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
          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200 cursor-pointer"
        >
          {ctaLabel}
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ServicesCard;
