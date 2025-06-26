

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => (
  <AppBar position="static" sx={{ bgcolor: 'gray', boxShadow: 3 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Short Link Generator
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          Home
        </Button>
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>
          About
        </Button>
        <Button color="inherit" to="/URLList" sx={{ fontWeight: 'bold' }}>
          Contact
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
