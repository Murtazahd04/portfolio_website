import React from 'react';
import '../styles/About.css'; // Import the CSS file
import aboutImage from '../assets/formal_image.jpg';

const About = () => {
  return (
    // Keep id="home" so the Navbar logo/links can scroll here
    <section
      id="home"
      className="about-section"
      aria-label="Home / About"
    >
      <div className="about-container">
        {/* --- Left Side: Text Content --- */}
        <div className="about-text-content">
          {/* Eyebrow label */}
          <p className="about-label">About</p>

          {/* Main Heading */}
          <h1 className="about-heading">
            Hello, I am <br />
            {/* Name with Gradient */}
            <span className="gradient-text">
              Murtaza Huzefa Dhanerawala
            </span>
          </h1>

          {/* Sub-text / Bio */}
          <p className="about-bio">
            I am currently studying in{' '}
            <span className="gradient-text">
              M.H. Saboo Siddik College of Engineering
            </span>
            . I'm enrolled in the{' '}
            <span className="gradient-text">
              Information Technology
            </span>{' '}
            program.
          </p>
        </div>

        {/* --- Right Side: Image --- */}
        <div className="about-image-content">
          <div className="image-wrapper">
            <img
              src={aboutImage}
              alt="Murtaza Huzefa Dhanerawala"
              className="profile-image"
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