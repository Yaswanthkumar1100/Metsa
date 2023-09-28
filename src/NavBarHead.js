import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBarHead.css';
import Slider from './Slider';


export default function NavBarHead({ onNavigate }) {
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
    <AppBar className='appbar' style={{ backgroundColor: 'rgb(144, 203, 74)'}} >
      <Toolbar>
        <IconButton onClick={handleDrawerOpen}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Slider open={drawerOpen} onClose={handleDrawerClose} onNavigate={onNavigate}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Amalgam
        </Typography>
        <Button color="inherit" onClick={() => onNavigate(0)}>Home</Button>
        <Button color="inherit" onClick={() => onNavigate(1)}>About</Button>
        <Button color="inherit" onClick={() => onNavigate(2)}>Contact</Button>
        <Button color="inherit" onClick={() => onNavigate(3)}>Blogs</Button>
        <Button color="inherit" onClick={() => onNavigate(4)}>Initiatives</Button>
      </Toolbar>
    </AppBar>
  );
}