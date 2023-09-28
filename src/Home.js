import React from 'react'
import "./About.css";
import AboutBackgroundImage from './AboutBackground (1).png';



const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <img src={AboutBackgroundImage} alt="Background" className="about-background-image" />
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Amalgam
        </h1>
        <div className="about-buttons-container">
        </div>
      </div>
    </div>
  );
};

export default Home;