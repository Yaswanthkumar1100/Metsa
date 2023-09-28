import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const PAGES = ["Home", "About", "Contact", "Blogs", "Initiatives"];
const icons = [HomeIcon, InfoIcon, EmailIcon, LibraryBooksIcon, EmojiObjectsIcon];
const offsets = [0, 1, 2, 3, 4];

const Slider = ({ open, onClose, onNavigate }) => {
  const handleItemClick = (offset) => {
    onNavigate(offset);
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        {PAGES.map((page, index) => (
          <ListItemButton key={index} onClick={() => handleItemClick(offsets[index])}>
            <ListItemIcon>
              {React.createElement(icons[index])}
            </ListItemIcon>
            <ListItemText>{page}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Slider;
