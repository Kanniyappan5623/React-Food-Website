
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Menu from './Components/Menu';
import JoinUs from './Components/JoinUs';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Chefs from './Components/Chef';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Chefs /> 
      <AboutUs />
      <Blog />
      <Menu />
      <JoinUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
