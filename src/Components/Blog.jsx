import React from 'react';
import KungPaoChicken from "../assets/Image/Kung-Pao-Chicken.svg"
import Broccolisalad from "../assets/Image/Broccolisalad.svg"
import SesameNoodles from "../assets/Image/SesameNoodles.svg"


import '../App.css';

const blogs = [
  { title: "Better Than Takeout Kung Pao Chicken", description: "This is an easy and better than takeout recipe.", image: KungPaoChicken },
  { title: "The Best Sesame Soy Broccoli Salad", description: "Healthy and delicious broccoli salad.", image: Broccolisalad },
  { title: "Better Than Takeout Sesame Noodles", description: "Delicious sesame recipe better than takeout.", image: SesameNoodles }
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2>Blog Our Latest News</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
