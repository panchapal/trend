import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import "./Footer.css"
import logo from "../../Assets/Logo-removebg-preview.png"
const Footer = () => {
  return (
    <>
    <Box className='footer'>
      <Grid container spacing={2} justifyContent="space-between">
        {/* Left Side */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" component="div">
          <span className='spa'>Trend</span>
          <span>Haven</span><span className='dot'>.</span>
          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Address: Kestopur,Mission Bazar,SaltLake
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Contact: panchananpal13@gmail.com
          </Typography>
        </Grid>

        {/* Center */}
        <Grid item xs={12} md={4} textAlign="center">
        <Typography variant="h6" component="div">
        <img src={logo} alt='logo'/>
          </Typography>
          <Typography variant="body2" color="textSecondary"  component="div">
            Follow us on social media
          </Typography>
          <Typography variant="body2" color="textSecondary"  component="div">
            Facebook | Twitter | Instagram
          </Typography>
        </Grid>

        {/* Right Side */}
        
      </Grid>
    </Box>
    <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'center' }} className='footer1'>
          <Typography variant="body2" color="textSecondary" component='div'>
            © 2024 <span className='spa'>Trend</span>
            <span>Haven</span><span className='dot'>.</span> All rights reserved.Privacy Policy | Terms of Service
          </Typography>
          <Typography variant="body2" color="textSecondary">
          </Typography>
        </Grid>
    </>
  );
};

export default Footer;
