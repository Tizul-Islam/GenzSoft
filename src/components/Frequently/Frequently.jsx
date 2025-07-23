import React, { useState } from 'react';
import './Frequently.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does GenzSoft Cloud offer?",
      answer: "We provide web & mobile app development, custom software solutions, AI & cloud services, IoT integrations, ERP solutions, DevOps support, UI/UX design, and software testing."
    },
    {
      question: "Can you develop a custom solution for my business?",
      answer: "Absolutely! We specialize in creating tailored solutions that address your specific business needs and challenges."
    },
    {
      question: "How long does it take to develop a project?",
      answer: "Project timelines vary based on complexity. After understanding your requirements, we'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-launch support including maintenance, updates, and troubleshooting."
    },
    {
      question: "What industries do you work with?",
      answer: "We serve diverse industries including healthcare, finance, education, retail, manufacturing, and more."
    },
    {
      question: "How do we get started?",
      answer: "Simply contact us for a free consultation. We'll discuss your needs and outline the next steps."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="section-title">Frequently Asked Questions (FAQs)</h1>
        <div className="divider"></div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="question-number">{index + 1}.</span>
                <h3>{faq.question}</h3>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;