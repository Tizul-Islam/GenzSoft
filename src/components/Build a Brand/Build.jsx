import React from 'react';
import { FaShieldAlt, FaRocket, FaHeadset } from 'react-icons/fa';
import './Buils.css';

const BrandLoveResponsive = () => {
  const features = [
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Reliable & Scalable Solutions",
      description: "Our high-performance services tailored to your business growth."
    },
    {
      icon: <FaRocket className="feature-icon" />,
      title: "Always Quick Turnaround",
      description: "We ensure fast delivery and efficient solutions to keep your business running smoothly."
    },
    {
      icon: <FaHeadset className="feature-icon" />,
      title: "24/7 Email & Live Chat Support",
      description: "Get round-the-clock assistance from our expert team wherever you need help."
    }
  ];

  return (
    <section className="brand-love-responsive">
      <div className="gradient-wrapper">
        <div className="content-wrapper">
          <h2 className="hero-heading">
            Build a Brand <span className="text-gradient">Your Customers Love</span>
          </h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="card-accent"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLoveResponsive;