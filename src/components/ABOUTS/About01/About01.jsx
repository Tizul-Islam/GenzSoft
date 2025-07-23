import React from 'react';
import './About01.css'; // We'll create this CSS file next

const MornurjorIT = () => {
  return (
    <div className="mornurjor-container">
      <header className="headerabout">
        <h1 className="title text-[#63b309] ">Innovating for Your Success</h1>
      </header>
      
      <main className="content">
        <p className="description">
          Mornurjor IT is a dynamic software company specializing in cutting-edge technology solutions that empower businesses to thrive in the digital age. With a vision to drive innovation, we focus on delivering high-quality websites, software, video editing, digital marketing and consultation services tailored to meet diverse business needs.
        </p>
        
        <ul className="stats-list">
          <li className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-text">Years of experience in the industry</span>
          </li>
          <li className="stat-item">
            <span className="stat-number">350+</span>
            <span className="stat-text">Satisfied clients worldwide</span>
          </li>
          <li className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-text">Projects aligned with business goals</span>
          </li>
        </ul>
        
        <div className="divider"></div>
        
        <div className="cta-section">
          <h2 className="cta-title">CONTACT US TODAY →</h2>
          <button className="cta-button">Get in Touch</button>
        </div>
      </main>
    </div>
  );
};

export default MornurjorIT;