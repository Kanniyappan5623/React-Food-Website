import React from 'react';
import aboutuschef from "../assets/Image/1.svg";
import '../App.css';

const AboutUs = () => {
  return (
    <div className="aboutus-section">
      <div className="aboutus-content">
        <h2>About Us</h2>
        <p>We have provided a quality driver. Fast delivery service by promoting a courteous and prompt service. We are committed to delivering food excellence to your door.</p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="aboutus-image">
        <img src={aboutuschef} alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;
