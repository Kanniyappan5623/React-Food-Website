import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/Icon/logo-black.png"
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div><img className="logo" src={logo} alt="logo" /></div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="nav-buttons">
      <button className="signup-btn">Sign Up</button>
      <button className="login-btn">Log In</button>
    </div>
  </nav>
  );
}

export default Navbar;
