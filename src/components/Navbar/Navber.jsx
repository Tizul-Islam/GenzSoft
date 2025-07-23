
import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './img/brandLogo-BQb_eGUV.png';
// import Abouts from "./components/About/About";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="GenZSoft Logo" />
      </a>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/services'>Services</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link> */}

        <a href="/" className="active">Home</a>       
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/details">Details</a>
      </nav>


      <a href="/contact" className="contact-btn">Contact US</a>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}

      </div>
    </header>
  );
};

export default Navbar;
