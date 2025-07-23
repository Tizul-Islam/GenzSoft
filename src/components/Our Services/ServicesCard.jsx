import React from 'react';
import './Services.css';

const ServicesCard = ({ variant = 'default', title = 'Our Services & Solutions' }) => {
  const servicesData = {
    default: [
      {
        title: "Web App Development",
        description: "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
        icon: "💻"
      },
      {
        title: "Mobile App Development",
        description: "Developing innovative and native mobile apps for Android, iOS platforms.",
        icon: "📱"
      },
      {
        title: "AI & ML",
        description: "Expertly crafted AI and ML solutions to transform your organization and drive smart decision-making.",
        icon: "🧠"
      },
    
   
      {
        title: "E-commerce",
        description: "We provide ultimate e-commerce solution as well as customization for your e-commerce business",
        icon: "🛒"
      },
      {
        title: "E-Learning",
        description: "We develop custom Moodle-based platforms to bring your online learning vision to life.",
        icon: "🎓"
      },
      {
        title: "ERP",
        description: "ErpNext is the all-in-one management software to streamline every process in your organization. Integrate ERP and F System",
        icon: "📊"
      }
    ]
  };

  const services = servicesData[variant] || servicesData.default;

  return (
    <section className={`services-section ${variant}`}>
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            <div className="divider"></div>
          </div>
        )}
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-header">
                <span className="card-icon">{service.icon}</span>
                <h3 className="card-title">{service.title}</h3>
              </div>
              <p className="card-description">{service.description}</p>
              <a href="#" className="read-more">
                Readmore <span className="arrow">→</span>
              </a>
            </div>
            
          ))}
        </div>
        <a href="/order" className="cta-button">
          View all Services <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default ServicesCard;