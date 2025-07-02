const Certificates = () => {
  return (
    <section className="certificate" id="certificates">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificate-container">
          <div className="certificate-content">
            <h3 className="certificate-title">Master in Full Stack Web Development</h3>
            <div className="certificate-issuer">IT Vedant Pvt Ltd</div>
            <p className="certificate-description">
              Completed an intensive full stack web development program covering front-end technologies 
              (HTML, CSS, JavaScript, React, Angular), back-end development (Python, Django), and database 
              management (MySQL). The course included hands-on projects and real-world applications to ensure 
              practical expertise in building complete web solutions.
            </p>
            <a href="/path-to-certificate.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certificate-image">
            <img 
              src="src\assets\images\certificate.jpg" 
              alt="Full Stack Web Development Certificate" 
              className="certificate-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;