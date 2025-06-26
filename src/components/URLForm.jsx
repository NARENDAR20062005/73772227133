import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  Divider,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createShortLink } from '../store/urlSlice';
import { Link as LinkIcon } from '@mui/icons-material';

const URLForm = () => {
  const [url, setUrl] = useState('');
  const [customShortcode, setCustomShortcode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createShortLink({ url, customShortcode }));
    setUrl('');
    setCustomShortcode('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        background: 'gray',
        width: '90%',
        borderRadius: 8,
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          borderRadius: 4,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            🔗 Shorten Your URL
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" mb={3}>
            Paste a long URL and optionally customize your short code.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Enter a long URL"
              variant="outlined"
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Custom Shortcode (optional)"
              variant="outlined"
              fullWidth
              value={customShortcode}
              onChange={(e) => setCustomShortcode(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                fontWeight: 'bold',
                py: 1.5,
                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                '&:hover': {
                  background: 'linear-gradient(to right, #0072ff, #00c6ff)',
                },
              }}
            >
              Shorten Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default URLForm;
