import React from 'react';

const Skill_Card = ({ icon, name, color }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-gray-500 hover:-translate-y-1 transition-all duration-300 ease-in-out">
      {/* Icon Section */}
      <div className="text-5xl mb-3" style={{ color: color }}>
        {icon}
      </div>
      
      {/* Name Section */}
      <h3 className="text-lg font-semibold text-gray-200">
        {name}
      </h3>
    </div>
  );
};

export default Skill_Card;