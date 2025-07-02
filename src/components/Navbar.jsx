import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'skills', text: 'Skills' },
    { id: 'education', text: 'Education' },
    { id: 'certificates', text: 'Certificates' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohan_Pagare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content">
        <a href="#home" className="logo">Rohan Pagare</a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.text}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#!" 
              className="nav-link" 
              id="resumeBtn" 
              onClick={handleDownloadResume}
            >
              Resume
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;