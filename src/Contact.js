import React from 'react'
import "./About.css";
import AboutBackgroundImage from './AboutBackground (1).png';

const Contact = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      <img src={AboutBackgroundImage} alt= "" className="about-background-image" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Food Is Contact
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
        </div>
      </div>
    </div>
  );
};

export default Contact;
