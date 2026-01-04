import React from 'react';
import Skill_Card from './Skill_Card';
import { FaReact, FaJava, FaPython, FaGitAlt, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import '../styles/Skills.css'; // Import the CSS file

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
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        {/* Main Section Heading */}
        <h2 className="skills-heading">
          My <span className="skills-heading-highlight">Technical Skills</span>
        </h2>

        {/* Mapping through the Categories */}
        {skillCategories.map((category, index) => (
          <div key={index} className="category-wrapper">
            
            {/* Category Title with separator line BELOW */}
            <div className="category-header">
              <h3 className="category-title">
                {category.title}
              </h3>
              <div className="separator-line"></div>
            </div>

            {/* Grid */}
            <div className="skills-grid">
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