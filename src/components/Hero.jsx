const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-title">Rohan <span className="highlight">Pagare</span></h1>
        <h2 className="hero-subtitle">Full Stack Web Developer</h2>
        <p className="hero-text">
          Passionate about creating modern, responsive, and user-friendly web applications.
          Specialized in front-end and back-end technologies with a keen eye for design and
          functionality. Let's turn your ideas into reality!
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;