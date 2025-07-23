import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Business with <br />
          <span>GenzSoft's Cutting-Edge Solutions.</span>
        </h1>
        <p>
          Leverage next-gen web, mobile, and cloud solutions to stay ahead <br />
          in the digital era and drive unstoppable success.
        </p>
        <div className="md:flex justify-center gap-4 mt-6">
          <a href="#contact" className="btn btn-light">Get in touch</a>
          <a href="#services" className="btn btn-primary">Explore our services →</a>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
