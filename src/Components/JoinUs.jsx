import React from 'react';
import '../App.css';

const JoinUs = () => {
  return (
    <div className="joinus-section">
      <h2>Join Our Member And Get Discount Up to 50%</h2>
      <form className="joinus-form">
        <input type="email" placeholder="Enter Your Email Here" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default JoinUs;
