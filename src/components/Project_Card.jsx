import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Project_Card.css'; 

// CHANGE 1: Add 'isMiniProject' to props
const ProjectCard = ({ title, description, image, techStack, githubLink, demoLink, isMiniProject }) => {
  return (
    <article className="project-card">
      {/* Image Wrapper */}
      <div className="card-image-wrapper">
        
        {/* CHANGE 2: Add this block for the Badge */}
        {isMiniProject && (
          <span className="mini-project-badge">
            College Mini Project
          </span>
        )}

        <img 
          src={image} 
          alt={`${title} preview`} 
          className="project-image"
          loading="lazy" 
        />
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        
        <p className="project-desc">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="card-links">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-btn github-link"
            >
              <FaGithub size={20} /> Code
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-btn live-link"
            >
              <FaExternalLinkAlt size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;