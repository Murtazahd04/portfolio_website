import React from 'react';
// We will use a placeholder image for now. 
// You can replace this URL with your local image path later (e.g., import myImg from '../assets/me.png')
import aboutImage from '../assets/formal_image.jpg'; 

const About = () => {
  return (
    // 'id="home"' is important so the Logo in Navbar scrolls here
    <section 
      id="home" 
      className="scroll-mt-24 min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 md:px-12 pt-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Hello, I am <br />
            {/* Name with Gradient and Bold styling */}
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Murtaza Huzefa Dhanerawala
            </span>
          </h1>

          {/* Sub-text / Bio */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I am currently studying in{' '}
            {/* College Name Gradient */}
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              M.H. Saboo Siddik College of Engineering
            </span>
            , I have enrolled in{' '}
            {/* Course Name Gradient */}
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
              Information Technology Course
            </span>
            .
          </p>

        </div>
{/* --- Right Side: Image --- */}
<div className="flex justify-center md:justify-end order-1 md:order-2">
  <div className="relative w-64 h-64 md:w-96 md:h-96">
    
    {/* Glow div removed */}

    {/* The Image Itself */}
    <img 
      src={aboutImage} 
      alt="Murtaza Huzefa Dhanerawala" 
      fetchPriority='high'
      className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl"
    />
    
  </div>
</div>

      </div>
    </section>
  );
};

export default About;