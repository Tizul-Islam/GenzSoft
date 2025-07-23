import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="genusoft-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="brand-section">
            <div className="logo">GenZSoft</div>
            <p className="brand-description">
              GenuSoft Cloud is a next-generation software company revolutionizing web, mobile, AI, and cloud technologies. We specialize in delivering scalable, secure, and intelligent digital solutions tailored to modern business needs.
            </p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3 className="links-title">GenZSoft</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/portfolio">Our Portfolio</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3 className="links-title">COMMUNITY</h3>
              <ul>
                <li><a href="/centers">Centers</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/support">Help and Support</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3 className="links-title">CONTACT INFO</h3>
              <ul>
                <li>Ultra Sector 10, Road 12, House 9</li>
                <li>+8801518399378</li>
                <li>genusoft.cloud@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            Copyright © 2025 Gen/Soft Cloud. All rights reserved.
          </div>
          <div className="legal">
            Unauthorized use, reproduction, or distribution of any content without permission is prohibited. Contact us for inquiries.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;