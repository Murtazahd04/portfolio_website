import React from 'react';
import Skill_Card from './Skill_Card';
import { FaReact, FaJava, FaPython, FaGitAlt, FaJs, FaDocker } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React JS", icon: <FaReact />, color: "#61DAFB" },
        { name: "Express JS", icon: <SiExpress />, color: "#ffffff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Section Heading - CHANGED to text-left */}
        <h2 className="text-4xl font-bold text-left text-white mb-12">
          My <span className="text-blue-500">Technical Skills</span>
        </h2>

        {/* Mapping through the Categories */}
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            
            {/* Category Title with separator line BELOW */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">
                {category.title}
              </h3>
              <div className="w-full h-px bg-gray-700"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <Skill_Card 
                  key={skillIndex}
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;