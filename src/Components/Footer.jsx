// import React from 'react';

// function Footer() {
//   return (
//     <footer className='Size' Class='text-center'>
//       <p>Copyright © Developed by Angainfotech2024 </p>
//     </footer>
//   );
// }
// export default Footer;

import React from 'react';
import Facebook from "../assets/Icon/facebook.png"
import Instagram from "../assets/Icon/instagram.png"
import Logo from "../assets/Image/AngaFoodLogo.svg"
import Twitter from "../assets/Icon/twitter.png"
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">      
        <div><a href="#"><img className="footer-logo" src={Logo} alt="logo" /></a></div>
        <div className="footer-links">
          <h3>Information</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#takeaway">Takeaway</a></li>
            <li><a href="#dinein">Dine In</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
