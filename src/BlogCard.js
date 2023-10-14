import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, content, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog" className="blog-card-image" />
      <div className="blog-card-content">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-text">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
