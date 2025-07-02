import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank, faJira } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Rohan Pagare</div>
        <div className="footer-social">
          <a href="https://github.com/rohanpa08" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/rohan-pagare-9239a32a4/" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://hackerrank.com/yourprofile" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHackerrank} className="social-icon" />
          </a>
          <a href="https://yourdomain.atlassian.net" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faJira} className="social-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Rohan Pagare. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;