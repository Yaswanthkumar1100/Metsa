import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';


const PAGES = ["Home", "About", "Contact", "Blogs", "Initiatives"];
const icons = [HomeIcon, InfoIcon, EmailIcon, LibraryBooksIcon, EmojiObjectsIcon];

const Slider = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        {PAGES.map((page, index) => (
          <ListItemButton key={index} component={Link} to={`/${page.toLowerCase()}`}>
            <ListItemIcon>
              {React.createElement(icons[index])} {/* Use the respective icon for each page */}
            </ListItemIcon>
            <ListItemText>{page}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Slider;
