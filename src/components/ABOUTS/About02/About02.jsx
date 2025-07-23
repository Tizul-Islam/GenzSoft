import React from "react";
import "./About02.css";
import logo from '../About/image/growtika-9WnjxT1NCoY-unsplash.jpg';// Update path as needed

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-image">
        <img src={logo} alt="Software Development Visual" />
      </div>
      <div className="info-content">
        <h2 >Innovating for Your Success</h2>
        <p>
          Mamurjor IT is a dynamic software company specializing in cutting-edge technology
          solutions that empower businesses to thrive in the digital age. With a vision to drive
          innovation, we focus on delivering high-quality websites, software, video editing,
          digital marketing and consultation services tailored to meet diverse business needs.
        </p>
        <ul>
          <li>Over 8 Years of experience in the industry.</li>
          <li>Trusted by 350+ of satisfied clients worldwide.</li>
          <li>Delivering projects that align with your business goals.</li>
        </ul>
        <a href="#contact" className="contact-link">CONTACT US TODAY →</a>
      </div>
    </div>
  );
};

export default InfoSection;
