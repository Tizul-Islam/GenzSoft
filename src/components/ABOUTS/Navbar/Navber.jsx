import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './img/brandLogo-BQb_eGUV.png';

const Navbar = ({ backgroundColor = '#1a1a2e', linkColor = '#ffff'  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header " style={{ backgroundColor }}>
      <a href="/" className="logo">
        <img src={logo} alt="GenZSoft Logo" />
      </a>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to='/' style={{ color: linkColor }}>Home</Link>
        <Link to='/about' style={{ color: linkColor }}>About Us</Link>
        <Link to='/services' style={{ color: linkColor }}>Services</Link>
        <Link to='/portfolio' style={{ color: linkColor }}>Portfolio</Link>
        <Link to='/contact' style={{ color: linkColor }}>Contact</Link>
        <Link to='/details' style={{ color: linkColor }}>Details</Link>
      </nav>

      <a href="/contact" className="contact-btn">Contact US</a>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;
