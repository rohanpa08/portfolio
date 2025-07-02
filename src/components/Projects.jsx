import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {projectsData.map((project, index) => (
          <div 
            className={`project-card ${index % 2 !== 0 ? 'even' : ''}`} 
            key={project.id}
          >
            <div className="project-video">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span className="tech" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="btn btn-primary">Live Demo</a>
                <a href={project.githubLink} className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    
  );
};

export default Projects;