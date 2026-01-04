import React from 'react';
import '../styles/Skill_Card.css'; // Import the CSS file

const Skill_Card = ({ icon, name, color }) => {
  return (
    <div className="skill-card">
      {/* Icon Section */}
      <div 
        className="skill-icon" 
        style={{ color: color }} // Dynamic color from props
      >
        {icon}
      </div>
      
      {/* Name Section */}
      <h3 className="skill-name">
        {name}
      </h3>
    </div>
  );
};

export default Skill_Card;