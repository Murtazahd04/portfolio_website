
// src/components/Services.jsx
import React from 'react';
import { FaCode } from 'react-icons/fa';
import ServicesCard from './Services_Card';

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      aria-label="Services"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-24">
        <div className="text-center md:text-left">
          <p className="text-3xl uppercase tracking-wide text-cyan-600 dark:text-cyan-400">Services</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServicesCard
            icon={<FaCode size={22} />}
            title="Web Development"
            features={[
              'Full‑stack web development (React, Node/Express, DB)',
              'Hosting & deployment (Vercel, Netlify, Render, VPS)',
              'Progressive Web Apps (offline caching)',
              'Responsive UI & performance optimization',
            ]}
            ctaLabel="Get a quote"
            ctaHref="contact"      // <-- target section id (no '#')
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
