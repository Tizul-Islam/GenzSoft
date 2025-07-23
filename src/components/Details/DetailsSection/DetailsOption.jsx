import React, { useState } from 'react';
import './DetailsOption.css';
import contactImage from '../../../../images/member.jpg'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        service: '',
        budget: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-form-container">
            <div className="form-header">
               <div className="">
               <h2>Have a project idea in mind? Let's get started</h2>
                <p>
                    We'll schedule a call to discuss your idea. After discovery sessions, we'll send a proposal,
                    and upon approval, we'll get started.
                </p>
               </div>
                <div className="image-section">
                    <img src={contactImage} alt="Contact us" className="contact-image" />
                </div>
                <div className="signature">
                    <p className="name">Rasel Ahmed</p>
                    <p className="title">Co-Founder & Chief Digital Officer</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Jane Cooper"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="companyName">Company name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Ex. Tesla Inc"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="You@Example.Com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="service">Service required*</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Your Service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="budget">Project budget*</label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Your Range</option>
                        <option value="5k-10k">$5K - $10K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k+">$50K+</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="details">Project details*</label>
                    <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us more about your idea"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Send inquiry</button>
            </form>

            <div className="alternative-option">
                <p>Not interested to submit the form? <a href="#">Book A Call Directly</a></p>
            </div>
        </div>
    );
};

export default ContactForm;