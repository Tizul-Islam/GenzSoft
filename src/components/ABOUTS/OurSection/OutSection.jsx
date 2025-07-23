import './OurSection.css';
import logo from '../About/image/growtika-9WnjxT1NCoY-unsplash.jpg';
import React from 'react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wdth,wght@0,75..100,100..900;1,75..100,100..900&display=swap');
</style>
const OutSection = () => {
    return (
        <div className="info-section">
            <div className="info-text">
                <div className="info">
                    <div className="info01">
                        <h2 className='text[#ffff]'>Our Mission</h2>
                        <p>
                            To empower businesses by delivering cutting-edge digital solutions that foster growth,
                            innovation, and success. At Mamurjor IT, we help you Learn, Work, and Succeed through technology.
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="info02">
                        <h2>Our Vision</h2>
                        <p>
                            To be a global leader in software and web development, setting new standards for quality and
                            innovation while building lasting relationships with our clients.
                        </p>
                    </div>
                </div>

                <div className="info">
                    <div className="info03">
                        <h2>Our Journey</h2>
                        <p>
                            Since our inception, Mamurjor IT has evolved into a trusted partner for businesses worldwide.
                            Our skilled professionals have successfully delivered hundreds of projects, ranging from
                            e-commerce websites to enterprise-grade software solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="info-image">
                <img src={logo} alt="Software Development Visual" />
            </div>
        </div>
    );
};

export default OutSection;
