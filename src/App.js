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
import Footer from './Footer';



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
      <Parallax pages={6} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={1} factor={2} style={{
            backgroundSize: 'cover'
          }}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={1} factor={2}
          style={{
            backgroundSize: 'cover'
          }}
          
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Blogs />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={1}>
          <Initiatives />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1} factor={1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </Router>
  );
}

export default App;