
import React from 'react';

import aboutImage from '../assets/formal_image.jpg';

const About = () => {
  return (
    // Keep id="home" so the Navbar logo/links can scroll here
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 md:px-12 py-24"
      aria-label="Home / About"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          {/* Eyebrow label (optional) */}
          <p className="text-3xl uppercase tracking-wide text-cyan-500">About</p>

          {/* Main Heading (h1 here because this is your home section) */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Hello, I am <br />
            {/* Name with Gradient and Bold styling */}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Murtaza Huzefa Dhanerawala
            </span>
          </h1>

          {/* Sub-text / Bio */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            I am currently studying in{' '}
            {/* College Name Gradient */}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              M.H. Saboo Siddik College of Engineering
            </span>
            . I'm enrolled in the{' '}
            {/* Course Name Gradient */}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Information Technology
            </span>{' '}
            program.
          </p>
        </div>

        {/* --- Right Side: Image --- */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Circular profile image */}
            <img
              src={aboutImage}
              alt="Murtaza Huzefa Dhanerawala"
              className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
