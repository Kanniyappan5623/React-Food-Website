import React from 'react';
import '../App.css';

const Services = () => {
  return (
    <div className="services-section">
      <h2>Our Excellence Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Fast Delivery</h3>
          <p>We deliver food fast and hot.</p>
        </div>
        <div className="service-card">
          <h3>Quality Food</h3>
          <p>We provide high-quality food.</p>
        </div>
        <div className="service-card">
          <h3>Customer Support</h3>
          <p>24/7 customer support.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
