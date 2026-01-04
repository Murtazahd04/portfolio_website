import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../styles/Header.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">

          {/* --- Logo Section --- */}
          <div className="logo-container">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="logo-link"
            >
              <span className="logo-text">
                &lt;Murtaza /&gt;
              </span>
            </Link>
          </div>

          {/* --- Desktop Menu --- */}
          <div className="desktop-menu">
            <div className="nav-links-wrapper">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}        // Watches scroll position to update active state
                  smooth={true}     // Enables smooth scrolling animation
                  offset={-70}      // OFFSETS SCROLL for header height
                  duration={500}    // Time in ms
                  activeClass="active" // Applies the .active CSS class when in view
                  className="nav-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="mobile-menu-btn-wrapper">
            <button
              onClick={toggleMenu}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-links-container">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active" // Applies .active style for mobile too
                spy={true}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="mobile-nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;