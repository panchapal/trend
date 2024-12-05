import React,{useEffect,useRef} from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import "./About.css"
import men from "../../Assets/pikaso_texttoimage_branded-shirt-for-men.jpeg"
import jacket from "../../Assets/still-life-rendering-jackets-display.jpg"
import shirt from "../../Assets/9704582.jpg"
import shoe from "../../Assets/fashion-shoes-sneakers.jpg"
import shoe1 from "../../Assets/pair-brown-shoes-with-black-leather-sole-word-bottom.jpg";
import shoe2 from "../../Assets/men-shoes.jpg"
import Typed from "typed.js";
const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Clothes For Men"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Box className='bclr'>
    <section id="collection">
     <Grid className='men'>
     <Box className='anim'>
<Typography className="h1"><span ref={typedRef}></span></Typography>    
</Box>    </Grid>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid  className="collections container">
          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={men}
                alt="Clothing Collections"
              />
              <Box className="img-content">
                <Typography variant="h6">Shirt's</Typography>
                <Button variant="contained" color="primary">
                  <a
                    href="#sellers"
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={jacket}
                alt="Shoes Spring"
              />
              <Box className="img-content">
                <Typography variant="h6">Jacket</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  <a
                    href="#sellers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={ shirt}
                alt="Accessories"
              />
              <Box className="img-content">
                <Typography variant="h6">Shirt</Typography>
                <Button variant="contained" color="primary">
                  <a
                    href="#sellers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={shoe}
                alt="Clothing Collections"
              />
              <Box className="img-content">
                <Typography variant="h6">Sneakers</Typography>
                <Button variant="contained" color="primary">
                  <a
                    href="#sellers"
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={shoe1}
                alt="Shoes Spring"
              />
              <Box className="img-content">
                <Typography variant="h6">Leather's Shoes</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  <a
                    href="#sellers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="content">
            <Box>
              <img
                src={shoe2}
                alt="Accessories"
              />
              <Box className="img-content">
                <Typography variant="h6">Sport Shoes</Typography>
                <Button variant="contained" color="primary">
                  <a
                    href="#sellers"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                   Visit NOW
                  </a>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
      </Box>
    </section>
    </Box>
  );
};

export default About;
