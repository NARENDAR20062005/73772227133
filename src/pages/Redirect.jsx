import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import api from '../api';

const Redirect = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    api.get(`/shortlinks/${shortcode}`).then((response) => {
      const { originalUrl } = response.data;
      if (originalUrl) {
        window.location.href = originalUrl;
      } else {
        console.error('Shortcode not found');
      }
    });
  }, [shortcode]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <CircularProgress />
    </Box>
  );
};

export default Redirect;
