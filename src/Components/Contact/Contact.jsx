import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import './Contact.css'; 

const Contact = () => {
  return (
    <Box className='box'>
    <Grid container spacing={2} className="contact-form-container">
      <Grid item xs={12} sm={6}>
        <div className="contact-form-paper">
          <Typography variant="h6" className="contact-form-title">
           INFORMATION
          </Typography>
          <Typography variant='h4'>Contact Us</Typography>
          <Typography variant="h1">
            Feel free to reach out to us using the contact form on the right. We are here to help with any inquiries or issues you may have.
          </Typography>
           
          <Typography variant='h4'>Ghatal</Typography>
          <Typography variant="h1">
            Ghatal, Gombhirnagar,Paschim Medinipur <br/> +919800400661
          </Typography>
          <Typography variant='h4'>Kolkata</Typography>
          <Typography variant="h1">
            Kestopur, Mission Bazar,SaltLake <br/> +919800400661
          </Typography>
          <Typography variant="body1" className="contact-form-info">
            <span className="contact-form-info-email">Email: support@example.com</span><br/>
            <span className="contact-form-info-phone">Phone: +1 (234) 567-8900</span>
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className="contact-form-paper">
          <Box component="form">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"            >
              Submit
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Contact;