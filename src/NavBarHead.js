import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBarHead.css';
import Slider from './Slider';

const PAGES = ["Home", "About", "Contact", "Blogs", "Initiatives"];

export default function NavBarHead({ onNavigate, parallaxRef }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar className='appbar' style={{ backgroundColor: 'rgb(144, 203, 74)'}}>
      <Toolbar>
        <IconButton onClick={handleDrawerOpen} edge="start" color="inherit" sx={{ marginRight: 2 }}>
          <MenuIcon />
        </IconButton>
        <Slider open={drawerOpen} onClose={handleDrawerClose} onNavigate={onNavigate} parallaxRef={parallaxRef} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Amalgam
        </Typography>
        {PAGES.map((page, index) => (
          <Button key={index} color="inherit" onClick={() => onNavigate(index)}>
            {page}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
