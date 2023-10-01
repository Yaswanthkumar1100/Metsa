import React from 'react';
import BlogCard from './BlogCard';
import orange from './orange.jpg';
import green from './green.jpg';
import './Blogs.css';

const Blogs = () => {
  const blogsData = [
    {
      title: 'Blog Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur...',
      image: orange,
    },
    {
      title: 'Blog Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur...',
      image: green,
    },
  ];

  return (
    <div className="blogs-section-container">
      <h1 className="primary-heading">Blogs</h1>
      <div className="blogs-container">
        {blogsData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            content={blog.content}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
