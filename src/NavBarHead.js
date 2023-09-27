import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import './NavBarHead.css';
import { Link, Routes, Route } from 'react-router-dom';
import Slider from './Slider';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blogs from './Blogs';
import Initiatives from './Initiatives';

const PAGES = ["Home", "About", "Contact", "Blogs", "Initiatives"];

const pageComponents = [Home, About, Contact, Blogs, Initiatives];

export default function NavBarHead() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className='appbar'>
        <Toolbar className='Headercolor' style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Slider open={drawerOpen} onClose={handleDrawerClose} />
          </div>
          <div className='tabs-container'>
            <Tabs
              centered
              textColor='inherit'
              value={value}
              onChange={handleChange}
              indicatorColor='secondary'
            >
              {PAGES.map((page, index) => (
                <Tab key={index} label={page} component={Link} to={`/${page.toLowerCase()}`} />
              ))}
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        {pageComponents.map((Component, index) => (
          <Route key={index} path={`/${PAGES[index].toLowerCase()}`} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}