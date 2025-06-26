import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const URLList = () => {
  const { links } = useSelector((state) => state.url);

  return (
    <List>
      {links.map((link) => (
        <ListItem key={link.shortcode}>
          <center><ListItemText
            primary={link.shortcode}
            secondary={`Original: ${link.originalUrl}`}
          /></center>
        </ListItem>
      ))}
      {links.length === 0 && (
        <Typography variant="subtitle1">No links generated yet.</Typography>
      )}
    </List>
  );
};

export default URLList;
