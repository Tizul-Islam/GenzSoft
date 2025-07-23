import React from 'react';
import './Genzsoft.css';

const IdeaProcess = () => {
  return (
    <section className="idea-process">
      <div className="container">
        <h1 className="main-heading">How GenzSoft Cloud Brings Your Ideas to Life</h1>
        <div className="divider"></div>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">01</div>
              <h2 className="step-title">Share Your Vision</h2>
            </div>
            <p className="step-description">
              Tell us about your business goals, challenges, and ideas. We analyze your needs and craft a strategy to bring your vision to life.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">02</div>
              <h2 className="step-title">Improve & Create</h2>
            </div>
            <p className="step-description">
              Our expert team designs and develops cutting-edge web, mobile, AI, and cloud solutions, ensuring innovation, efficiency, and scalability.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">03</div>
              <h2 className="step-title">Launch & Grow</h2>
            </div>
            <p className="step-description">
              We deliver a fully optimized solution, ready to scale with your business. With continuous support and work, your success never stops.
            </p>
          </div>
        </div>
        
        <a href="/order" className="cta-button">
          Place your first order now <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default IdeaProcess;