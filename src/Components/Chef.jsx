import React from 'react';
import ChefDhamu from "../assets/Image/chefdamu.svg"
import ChefBhat from "../assets/Image/ChefBhat.svg"
import ChefSuresh from "../assets/Image/ChefSuresh.svg"
import Rangaraj from "../assets/Image/Madhampatty.svg"


const Chefs = () => {
    const chefs = [
        { name: "Kothandaraman Damodaran", position: "Ph.D in Hotel Management", image: ChefDhamu },
        { name: "Venkatesh Bhat", position: "CEO of Accord Group of Hotel", image: ChefBhat },
        { name: "Suresh", position: "Diploma of Hotel Management", image: ChefSuresh },
        { name: "Madhampatty Rangaraj", position: "Star Chef", image: Rangaraj }
      ];
      
  return (
    <div className="chefs-section">
      <h2>Our Special Chefs</h2>
      <div className="chefs-grid">
        {chefs.map((chef, index) => (
          <div className="chef-card" key={index}>
            <img src={chef.image} alt={chef.name} />
            <h3>{chef.name}</h3>
            <p>{chef.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chefs;
