import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
// Import Link from react-scroll instead of react-router-dom
import { Link } from 'react-scroll';

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
        <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo - Scrolls to top */}
                    {/* --- Logo Section --- */}
                    <div className="shrink-0 cursor-pointer">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="flex items-center"
                        >
                            <span className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 transition-all duration-300">
                                &lt;Murtaza /&gt;
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}        // Watches scroll position to update active state
                                    smooth={true}     // Enables smooth scrolling animation
                                    offset={-70}      // OFFSETS SCROLL to account for fixed header height
                                    duration={500}    // Time in ms for scroll animation
                                    activeClass="bg-blue-600 text-white" // Class applied when section is in view
                                    className="px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsOpen(false)} // Close menu on click
                                className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-700 hover:text-white transition-colors duration-300"
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