import React from 'react';
import Chefimage from "../assets/Image/ChefImage.svg"
import '../App.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Instant Food, for Instant Hunger</h1>
        <p>Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src= {Chefimage} alt="Chef" />
      </div>
    </div>
  );
}

export default Hero;
