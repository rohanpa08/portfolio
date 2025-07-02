import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container skills-content">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-summary">
          I specialize in a variety of web development technologies, allowing me to build complete, 
          efficient, and scalable web applications. From responsive front-end designs to robust back-end systems,
          I have the expertise to handle all aspects of modern web development.
        </p>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <i className={`${skill.iconClass} skill-icon`}></i>
            
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;