import React from 'react';
import ProjectCard from './Project_Card';
import '../styles/Projects.css'; 
import crm from '../assets/Crm_Home_Page.png'
import doctor_project from '../assets/doctor dashboard.png'
import college_asset_management from  '../assets/asset_management .jpg'
import porfolio_project  from '../assets/portfolio_img.png'
const Projects = () => { // <--- THIS LINE WAS MISSING
  const projectList = [
    {
      id: 1,
      title: "Gym Management App",
      description: "The Gym Management was Made for Admin who can Manage the Gym Membership,Gym Members Efficiently",
      image: crm,
      techStack: ["Python", "SQLite", "Tkinter"],
      githubLink: "https://github.com/ABIZER-web/gymmy.git",
      demoLink: "https://drive.google.com/file/d/1bAlSBnkqg7cDJ_mnc8YpjEmaxGwuuNkS/view?usp=sharing",

      // CHANGE 1: Add the flag here
      isMiniProject: true 
    },
    {
      id: 2,
      title: "College Asset Management Website",
      description: "This Webiste was made to track the College Assets and one Can Find the Inactive Assets Easily",
      image: college_asset_management,
      techStack: ["Django", "Sqlite"],
      githubLink: "https://github.com/Murtazahd04/College_Asset_Management_Website.git",
      
      // You can add it here too if needed, or leave it false/undefined
      isMiniProject: true
    },

    {
      id: 3,
      title: "Doctor Appointment Website",
      description: "This Website was made so the Pateints can book Appointments digitally.",
      image:doctor_project,
      techStack: ["React Js", "Tailwind CSS","Mongodb","Express Js"],
      githubLink: "https://github.com/Murtazahd04/doctor-appointment-website-feedback.git",
      demoLink: "https://doctorappointmentwebsitefrontend.vercel.app/",
      isMiniProject: true
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal developer portfolio designed to showcase my skills and projects with a modern dark theme.",
      image: porfolio_project,
      techStack: ["React Js", "CSS3"],
      githubLink: "https://github.com/Murtazahd04/portfolio_website.git",
      demoLink: "https://portfolio-website-blush-six-60.vercel.app/",
      isMiniProject: false
    },

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header">
          <p className="projects-label">Projects</p>
        </div>

        {/* Grid of Cards */}
        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              // CHANGE 2: Pass the prop to the card
              isMiniProject={project.isMiniProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;