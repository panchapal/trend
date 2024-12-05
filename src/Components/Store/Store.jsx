import React from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import './Store.css'; 
import p1 from "../../Assets/pair-purple-sneakers-white-background-3d-illustration.jpg"
import p2 from "../../Assets/still-life-with-classic-shirts-hanger.jpg"
import p3 from "../../Assets/jackets-display.jpg"
import p4 from "../../Assets/blue-t-shirt.jpg"
import p5 from "../../Assets/white-denim-jacket-front-view-streetwear-fashion.jpg"
import p6 from "../../Assets/bag-hanging-from-furniture-item-indoors.jpg";
import p7 from "../../Assets/flat-lay-feminine-elements-arrangement.jpg";
import p8 from "../../Assets/different-type-makeup-products-black-backdrop.jpg"

const Store = () => (
  
    <Box className="container1" >
      <Typography variant="h3">Best Seller<i class='bx bx-right-arrow-alt'></i></Typography>
      <Grid container spacing={2} className="content2" >
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <div className="image">
            <img src={p2} alt="PS England Shoes" />
            <Box>
              <Typography variant="body1" className="para">H&M Relaxed Fit Shirt</Typography>
             
              <Typography variant="h6" className="price-tag">
                $17.00
                <Box>
                  <i className='bx bxs-circle red'></i>
                  <i className='bx bxs-circle blue'></i>
                  <i className='bx bxs-circle white'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                  Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p3} alt="PS England Jacket" />
            <Box>
              <Typography variant="body1" className="name-of-p">H&M Jacket</Typography>
              
              <Typography variant="h6" className="price-tag">
                $32.12
                <Box>
                  <i className='bx bxs-circle green'></i>
                  <i className='bx bxs-circle grey'></i>
                  <i className='bx bxs-circle brown'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p1} alt="PS England Shirt" />
            <Box>
              <Typography variant="body1" className="name-of-p">H&M Shoes</Typography>
             
              <Typography variant="h6" className="price-tag">
                $50.63
                <Box>
                  <i className='bx bxs-circle brown'></i>
                  <i className='bx bxs-circle green'></i>
                  <i className='bx bxs-circle blue'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p4} alt="PS England Shoes" />
            <Box>
              <Typography variant="body1" className="name-of-p">H&M Blue T-Shirt</Typography>
              
              <Typography variant="h6" className="price-tag">
                $23.64
                <Box>
                  <i className='bx bxs-circle red'></i>
                  <i className='bx bxs-circle grey'></i>
                  <i className='bx bxs-circle blue'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
      <div className='m'>
      <Typography variant="h3">Top Seller<i class='bx bx-right-arrow-alt'></i></Typography>
      <Grid container spacing={2} className="content2" >
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <div className="image">
            <img src={p5} alt="PS England Shoes" />
            <Box>
              <Typography variant="body1" className="para">H&M Women's Jacket</Typography>
             
              <Typography variant="h6" className="price-tag">
                $17.00
                <Box>
                  <i className='bx bxs-circle red'></i>
                  <i className='bx bxs-circle blue'></i>
                  <i className='bx bxs-circle white'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                  Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p6} alt="PS England Jacket" />
            <Box>
              <Typography variant="body1" className="name-of-p">Worn-look denim shoulder bag</Typography>
              
              <Typography variant="h6" className="price-tag">
                $32.12
                <Box>
                  <i className='bx bxs-circle green'></i>
                  <i className='bx bxs-circle grey'></i>
                  <i className='bx bxs-circle brown'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p7} alt="PS England Shirt" />
            <Box>
              <Typography variant="body1" className="name-of-p">Leather Statement Court Shoes</Typography>
             
              <Typography variant="h6" className="price-tag">
                $50.63
                <Box>
                  <i className='bx bxs-circle brown'></i>
                  <i className='bx bxs-circle green'></i>
                  <i className='bx bxs-circle blue'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="image">
            <img src={p8} alt="PS England Shoes" />
            <Box>
              <Typography variant="body1" className="name-of-p">Makeup Kit</Typography>
              
              <Typography variant="h6" className="price-tag">
                $23.64
                <Box>
                  <i className='bx bxs-circle red'></i>
                  <i className='bx bxs-circle grey'></i>
                  <i className='bx bxs-circle blue'></i>
                </Box>
              </Typography>
              <Box className="buy-now">
                <Button variant="contained">
                Shop Now
                </Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
      </div>
    </Box>
);

export default Store;
