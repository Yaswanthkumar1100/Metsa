import React from 'react';
import NavBarHead from './NavBarHead';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Initiatives from './Initiatives';
import Blogs from './Blogs';


function App() {
  return (
    <Router>
      <NavBarHead />
      <Home />
      <About />
      <Contact />
      <Initiatives />
      <Blogs />
    </Router>
  );
}

export default App;
