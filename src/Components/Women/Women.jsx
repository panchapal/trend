import React,{useEffect,useRef} from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import "./Women.css"
import w1 from "../../Assets/fashion-beautiful-black-asian-girl-model-with-cottagecore-style_962764-170579.jpg"
import w2 from "../../Assets/7865927.jpg";
import w3 from "../../Assets/indian-bride-illustration-wearing-traditional-wedding-bridal-dress-mehndi-haldi-vivah-ceremony_679930-920.avif"
import w4 from "../../Assets/flat-lay-feminine-elements-assortment.jpg"
import w5 from "../../Assets/cute-notebook-near-cosmetics.jpg"
import w6 from "../../Assets/close-up-pink-knitted-bag-still-life.jpg"
import Typed from "typed.js";
const Women = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Clothes For Women"],
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
    <Box className='clllll'>
    <section id="collection">
    <Grid className='women'>
    <Box className='anim'>
<Typography className="h1"><span ref={typedRef}></span></Typography>    
</Box>
</Grid>
      <Box sx={{ flexGrow: 1, p: 2 }}>
    
        <Grid  className="collections container">
        
          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w1}
                alt="Clothing Collections"
              />
              <Box className="img-content1">
                <Typography variant="h6">Lehenga</Typography>
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
          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w2}
                alt="Shoes Spring"
              />
              <Box className="img-content1">
                <Typography variant="h6">Saree</Typography>
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
          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w3}
                alt="Accessories"
              />
              <Box className="img-content1">
                <Typography variant="h6">Kurti</Typography>
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

          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w4}
                alt="Clothing Collections"
              />
              <Box className="img-content1">
                <Typography variant="h6">Heels</Typography>
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
          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w5}
                alt="Shoes Spring"
              />
              <Box className="img-content1">
                <Typography variant="h6">Makeup Kit</Typography>
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
          <Grid item xs={12} sm={6} className="content1">
            <Box>
              <img
                src={w6}
                alt="Accessories"
              />
              <Box className="img-content1">
                <Typography variant="h6">Hand Bag</Typography>
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

export default Women;
