import React from 'react';
import ServiceCards from './ServiceCards'; // make sure the path is correct

const Services = () => {
  const services = [
    {
      "id": 1,
      "title": "Web App Development",
      "description": "Develop robust online applications to suit your business needs and cater to your clients faithfully.",
      "image": "/images/web-app.jpg"
    },
    {
      "id": 2,
      "title": "Mobile App Development",
      "description": "Developing innovative and native mobile apps for Android, iOS platforms.",
      "image": "/images/mobile-app.jpg"
    },
    {
      "id": 3,
      "title": "AI & ML",
      "description": "Expertly crafted AI and ML solutions to transform your organization and drive smart decision-making.",
      "image": "/images/ai-ml.jpg"
    },
    {
      "id": 4,
      "title": "UI/UX Design",
      "description": "Creating user-centric and elegant designs to boost usability and engagement.",
      "image": "/images/uiux.jpg"
    },
    {
      "id": 5,
      "title": "Cloud Solutions",
      "description": "Secure, scalable, and efficient cloud infrastructure for your digital products.",
      "image": "/images/cloud.jpg"
    },
    {
      "id": 6,
      "title": "E-Commerce Solutions",
      "description": "Powerful e-commerce platforms tailored to your business model.",
      "image": "/images/ecommerce.jpg"
    },
    {
      "id": 7,
      "title": "DevOps Consulting",
      "description": "Streamline your software development process with DevOps practices.",
      "image": "/images/devops.jpg"
    },
    {
      "id": 8,
      "title": "Blockchain Development",
      "description": "Leverage blockchain for secure and transparent transactions.",
      "image": "/images/blockchain.jpg"
    },
    {
      "id": 9,
      "title": "Data Analytics",
      "description": "Transform data into actionable insights for better decision-making.",
      "image": "/images/data.jpg"
    }
  ];

  return (
    <div className="services-section">
      <h2 className="text-4xl font-bold text-center p-8">Our Services</h2>
      <ServiceCards data={services} />
    </div>
  );
};

export default Services;
