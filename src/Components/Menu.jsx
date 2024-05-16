import React from 'react';
import sausagesImage from "../assets/Image/sausage.svg";
import buzzBurgersImage from '../assets/Image/BuzzBurger.svg';
import popporoniPizzaImage from '../assets/Image/popporoni_pizza.svg';
import greenSaladImage from '../assets/Image/green_salad.svg';
import smokinBurgerImage from '../assets/Image/smokin_burger.svg';
import americanBurgerImage from '../assets/Image/american_burger.svg';
import '../App.css';

const menuItems = [
  { name: "Green Sausages", price: "$250", image: sausagesImage },
  { name: "Buzz Burgers", price: "$250", image: buzzBurgersImage },
  { name: "Popporoni Pizza", price: "$250", image: popporoniPizzaImage },
  { name: "Green Salad", price: "$250", image: greenSaladImage },
  { name: "Smokin' Burger", price: "$250", image: smokinBurgerImage },
  { name: "American Burger", price: "$250", image: americanBurgerImage }
];

const Menu = () => {
  return (
    <div className="menu-section">
      <h2>Special Menu For You</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card " key={index}>
            
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
