import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blogs from './Blogs';
import Initiatives from './Initiatives';
import NavBarHead from './NavBarHead';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './Slider';



function App() {
  const parallaxRef = React.useRef(null);

  const handleNavigateTo = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <Router>
      <NavBarHead onNavigate={handleNavigateTo} />
      <Parallax pages={5} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={1}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Blogs />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <Initiatives />
        </ParallaxLayer>
      </Parallax>
    </Router>
  );
}

export default App;