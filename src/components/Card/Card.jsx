import React from 'react';
import './Card.css';
import { FaChartBar, FaUsers, FaSmile, FaCreditCard } from 'react-icons/fa';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-text">
        <h2>
          Helping a local <br />
          <span>business reinvent itself</span>
        </h2>
        <p className='font-medium'>We reached here with our hard work and dedication</p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <FaChartBar className="stat-icon" />
          <div>
            <h3>15+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div>
            <h3>10+</h3>
            <p>Client</p>
          </div>
        </div>
        <div className="stat-item">
          <FaSmile className="stat-icon" />
          <div>
            <h3>98.9%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
        <div className="stat-item">
          <FaCreditCard className="stat-icon" />
          <div>
            <h3>500000+</h3>
            <p>Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
