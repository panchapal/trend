import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Container,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import "./Home.css";
import Typed from "typed.js";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import p10 from "../../Assets/business-executives-walking-conference-center-lobby.jpg";
import p11 from "../../Assets//seamstress-working-studio.jpg";

const Home = () => {

  const services = [
    {
      title: "Trendy Apparel",
      description:
        "Discover the latest fashion trends with our exclusive range of trendy apparel. From casual wear to formal attire, we have it all.",
      image:
        "https://img.freepik.com/free-photo/low-angle-man-with-braids-portrait_23-2151428268.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Eco-Friendly Clothing",
      description:
        "Shop sustainably with our eco-friendly clothing line. Made from recycled and organic materials, these clothes are both stylish and responsible.",
      image:
        "https://img.freepik.com/premium-photo/green-product-concept_727137-18522.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Custom Designs",
      description:
        "Stand out with our custom clothing designs. Whether you need personalized prints or tailored fits, our custom design service has you covered.",
      image:
        "https://img.freepik.com/free-vector/extreme-dirt-bike-cartoon-vector-illustration-biker-t-shirt-design_191095-4397.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512",
    },
    {
      title: "Seasonal Collections",
      description:
        "Explore our seasonal collections that capture the essence of every season. From summer to winter, our collections offer something for every occasion.",
      image:
        "https://img.freepik.com/premium-photo/autumn-female-outfit-clothes-accessories_106029-209.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Accessories & More",
      description:
        "Complete your look with our wide range of accessories. From belts and bags to hats and scarves, find everything you need to enhance.",
      image:
        "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229756.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Special Discounts",
      description:
        "Take advantage of our special discounts and offers on select items. Shop now to get the best deals on your favorite fashion pieces.",
      image:
        "https://img.freepik.com/premium-photo/happy-smiling-handsome-couple-man-woman-with-discount-up-90-sign-colorful-shopping-bags_97712-1363.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Personal Styling",
      description:
        "Receive personalized styling advice from our experts. Whether you need a wardrobe overhaul or just a few tips, our stylists are here to help.",
      image:
        "https://img.freepik.com/free-photo/women-having-fun-together-enjoying-weekend_155003-11789.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Exclusive Collections",
      description:
        "Shop our exclusive collections that you won’t find anywhere else. Unique designs and limited editions make these pieces truly special.",
      image:
        "https://img.freepik.com/free-photo/coat-rack-with-hanging-winter-clothes_1252-418.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      title: "Gift Cards",
      description:
        "Give the gift of choice with our gift cards. Perfect for any occasion, our gift cards let your loved ones pick their favorite items from our store.",
      image:
        "https://img.freepik.com/free-vector/elegant-gift-cards-set_1284-13688.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
  ];

  const blogPosts = [
    {
      title: "Understanding the Latest Trends in Tech",
      description:
        "A deep dive into the latest trends shaping the technology landscape.",
      imageUrl:
        "https://img.freepik.com/free-photo/public-speaker-doing-presentation-tech-forum-event_482257-90782.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "August 8, 2024",
      readMoreLink: "#",
    },
    {
      title: "How to Stay Ahead in Digital Marketing",
      description:
        "Tips and strategies to stay ahead in the ever-evolving world of digital marketing.",
      imageUrl:
        "https://img.freepik.com/free-photo/man-suit-standing-office-with-clipboard-pointing-poster-with-words_1098-17121.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "August 5, 2024",
      readMoreLink: "#",
    },
    {
      title: "The Rise of AI: What You Need to Know",
      description:
        "An overview of artificial intelligence advancements and their implications for various industries.",
      imageUrl:
        "https://img.freepik.com/premium-photo/businessman-interacts-with-futuristic-ai-interface-office-setting-demonstrating-seamless-tec_981101-9056.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "August 2, 2024",
      readMoreLink: "#",
    },
    {
      title: "Remote Work Best Practices for 2024",
      description:
        "Effective strategies for managing remote teams and maintaining productivity.",
      imageUrl:
        "https://img.freepik.com/free-photo/person-home-working-late-night_23-2150064929.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "July 30, 2024",
      readMoreLink: "#",
    },
    {
      title: "The Future of Blockchain Technology",
      description:
        "Exploring how blockchain technology is evolving and its potential applications beyond cryptocurrency.",
      imageUrl:
        "https://img.freepik.com/free-vector/data-safe-storage-center-isometric-composition-illustration_1284-55932.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "July 27, 2024",
      readMoreLink: "#",
    },
    {
      title: "Top Cybersecurity Threats to Watch Out For",
      description:
        "A guide to the most prevalent cybersecurity threats and how to protect your digital assets.",
      imageUrl:
        "https://img.freepik.com/free-photo/hackers-failing-crack-password_482257-77693.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
      date: "July 24, 2024",
      readMoreLink: "#",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Trendy T-Shirt",
      price: "$29.99",
      image:
        "https://img.freepik.com/free-vector/t-shirt-design-samples-with-illustration-guessing-arm-design_1284-44539.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Classic Jeans",
      price: "$49.99",
      image:
        "https://img.freepik.com/premium-photo/blue-jeans-with-accessories-items-white-background_1197797-184586.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Stylish Jacket",
      price: "$89.99",
      image:
        "https://img.freepik.com/premium-photo/suede-jacket_842983-15178.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Casual Sneakers",
      price: "$59.99",
      image:
        "https://img.freepik.com/free-photo/fashion-shoes-sneaker_1203-8074.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 5,
      title: "Elegant Dress",
      price: "$99.99",
      image:
        "https://img.freepik.com/premium-photo/wedding-dress_1246590-1767.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 6,
      title: "Comfortable Shorts",
      price: "$34.99",
      image:
        "https://img.freepik.com/premium-photo/isolated-pleated-shorts-boys-with-flat-front-adjustable-waist-fashion-design-concept-ideas_655090-3138275.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 7,
      title: "Warm Sweater",
      price: "$69.99",
      image:
        "https://img.freepik.com/premium-psd/winter-sweater_982911-19866.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 8,
      title: "Sporty Leggings",
      price: "$39.99",
      image:
        "https://img.freepik.com/premium-photo/3d-realistic-render-ladies-sports-leggings_1022901-87706.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 9,
      title: "Formal Shirt",
      price: "$54.99",
      image:
        "https://img.freepik.com/premium-photo/close-up-clothes-hanging-against-white-wall_1048944-19032531.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 10,
      title: "Denim Jacket",
      price: "$79.99",
      image:
        "https://img.freepik.com/premium-photo/blue-denim-jacket-with-word-brand-front_1230717-197908.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 11,
      title: "Winter Dress",
      price: "$44.99",
      image:
        "https://img.freepik.com/free-photo/portrait-beautiful-girl-with-long-hair-red-lips-warm-winter-clothes-wooden-she-is-smiling-side-keeps-eyes-closed_197531-1913.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 12,
      title: "Running Shoes",
      price: "$64.99",
      image:
        "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 13,
      title: "Puffer Vest",
      price: "$89.99",
      image:
        "https://img.freepik.com/premium-photo/creative-designs-vest-jacket-top-wear-professional-fashionable-versatile-blank-white_655090-988985.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 14,
      title: "Cargo Pants",
      price: "$49.99",
      image:
        "https://img.freepik.com/premium-photo/cargo-pants-crafted-from-cotton-twill-fabric-with-multiple-p-fashions-clothers-clean-background_1020495-83701.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
    {
      id: 15,
      title: "Graphic Tee",
      price: "$25.99",
      image:
        "https://img.freepik.com/premium-vector/stylish-tea-you-later-typography-tshirts-modern-fashion_1275766-115.jpg?uid=R157033485&ga=GA1.1.1483405829.1707822512&semt=ais_hybrid",
    },
  ];
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Collection 2024"],
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

  const typedRef1 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Services"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef1.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const typedRef2 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Haven"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef2.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const typedRef3 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Blog Posts"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef3.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const typedRef4 = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Clothes"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 500,
    };

    const typed = new Typed(typedRef4.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Box>
      <section id="home">
        <Box className="home_page">
          <Grid container>
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Box className="home_txt" p={2}>
                <Typography variant="h6" component="p" className="collectio">
                  TRENDING COLLECTION
                </Typography>
                <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                  Explore Winter
                  <br />
                  <span ref={typedRef}></span>
                </Typography>
                <Box className="home_label" mb={2}>
                  <Typography variant="body1">
                    We Design Pieces Of Furniture And object that
                    <br />
                    Perfectly Gap Between Functionally and Beauty.
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<LocalGroceryStoreIcon />}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Shop now
                </Button>
                <Box className="media-icons" mt={2}>
                  <a href="#1" id="page17">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#1" id="page18">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#1" id="page19">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#1" id="page20">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#1" id="page21">
                    <i class="fab fa-youtube"></i>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>

      {/* ABOUT PART */}
      <section>
        <Box sx={{ padding: "2rem", backgroundColor: "#f4f4f4" }}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            <span className="spann">Trend</span>
            <span className="span" ref={typedRef2}></span>{" "}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: "1.5rem", display: "flex" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      Our Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Trend Haven is dedicated to bringing you the latest trends
                      and insights in fashion, technology, and lifestyle. Our
                      mission is to curate the best trends and provide valuable
                      content to keep you ahead of the curve. We strive to be
                      your go-to source for all things trending and provide you
                      with inspiration and information to help you make informed
                      decisions.
                    </Typography>
                   <button
                      class="learn-more"
                      id="button"
                    >
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      src={p11} 
                      alt="Mission"
                      style={{
                        // maxwidth: "100%",
                        maxWidth:'100%',
                        height: "auto",
                        borderRadius: "4px",
                        
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: "1.5rem", display: "flex" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      Our Team
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Our team is composed of passionate individuals who are
                      experts in their respective fields. From fashion
                      enthusiasts to tech aficionados, our diverse team brings a
                      wealth of knowledge and experience to Trend Haven. We are
                      committed to delivering high-quality content and ensuring
                      that our readers have the best experience possible.
                    </Typography>
                    <button class="cta">
  <span>Contact Us &nbsp;</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      src={p10} 
                      alt="Tea"
                      style={{
                        maxWidth:'100%',
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        

        {/* SERVICE PART */}
        <Container sx={{ padding: 4 }} className="container">
          <Typography variant="h4" gutterBottom>
            Our <span ref={typedRef1}></span>
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={service.title}
                    // maxWidth='100%'
                    // height= "auto"
                    height='200'
                    image={service.image}
                    title={service.title}
                    sx={{ width: "100%", objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }} className="card">
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography variant="h5" color="textSecondary">
                      {service.description}
                    </Typography>
                    {/* <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 1,alignItems:'center',alignSelf:'center' }}
                  onClick={() => alert(`Learn more about ${service.title}`)}
                >
                  Learn More
                </Button> */}
                    <button
                      class="learn-more"
                      id="button"
                      onClick={() => alert(`Learn more about ${service.title}`)}
                    >
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Learn More</span>
                    </button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Blog */}

        <Box sx={{ padding: 4 }} className="Blog">
          <Typography variant="h4" gutterBottom>
            Latest <span ref={typedRef3}></span>
          </Typography>
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.imageUrl}
                    alt={post.title}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                    className="blog"
                  >
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      component="div"
                    >
                      {post.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                      component="div"
                      sx={{ marginTop: 1 }}
                    >
                      {post.date}
                    </Typography>
                    {/* <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 1,alignItems:'center',alignSelf:'center' }}
                  onClick={() => alert(`Learn more about ${post.title}`)}
                >
                  Read More
                </Button> */}
                    <button
                      class="button"
                      onClick={() => alert(`Learn more about ${post.title}`)}
                    >
                      <p class="button-text">Read More</p>{" "}
                      <p class="iconer">
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </p>
                    </button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/*Product*/}
        <Container className="product">
          <Typography variant="h4" gutterBottom sx={{ marginTop: 10 }}>
            Our <span ref={typedRef4}></span>
          </Typography>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {product.price}
                    </Typography>
                    <Box mt={2}>
                      <button class="butto">
                        <span>Add to cart</span>
                        <svg
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                          <g
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            id="SVGRepo_tracerCarrier"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <defs> </defs>{" "}
                            <g id="cart">
                              {" "}
                              <circle
                                r="1.91"
                                cy="20.59"
                                cx="10.07"
                                class="cls-1"
                              ></circle>{" "}
                              <circle
                                r="1.91"
                                cy="20.59"
                                cx="18.66"
                                class="cls-1"
                              ></circle>{" "}
                              <path
                                d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                                class="cls-1"
                              ></path>{" "}
                              <polyline
                                points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                                class="cls-1"
                              ></polyline>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <section>
    
      </section>
    </Box>
  );
};

export default Home;
