import React from 'react';
import { Container, Typography } from '@mui/material';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList';

const Home = () => (
  <Container><br></br>
    <Typography variant="h4"
            align="center"
            fontWeight="bold"
            color="Black"
            gutterBottom>
      <center>Short Link Generator</center>
    </Typography>
    <URLForm />
    <URLList />
  </Container>
);

export default Home;
