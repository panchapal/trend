import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ListItem, ListItemText } from "@mui/material";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import { logout, fetchUserDetails } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../Assets/preview3.png";
import profile_Url from "../../Helper/Helper";

const navItems = [
  { name: "Home", route: "/" },
  { name: "Men", route: "/about" },
  { name: "Women", route: "/women" },
  { name: "Store", route: "/store" },
  { name: "Contact", route: "/contact" },
  { name: "Add Product", route: "/createproduct" },
  { name: "Product", route: "/showproduct" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { userDetails, isLogin } = useSelector((state) => state.contents);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchUserDetails());
    }
  }, [dispatch, isLogin]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/userdetails");
  };

  const [isLogged, setIsLogged] = useState("");
  const storedName = localStorage.getItem("Name");

  useEffect(() => {
    setIsLogged(storedName);
  }, [storedName]);

  const filteredNavItems = isLogin
    ? navItems
    : navItems.filter(
        (item) => item.name !== "Add To Cart" && item.name !== "Product"
      );
      
  return (
    <div className="header">
      <AppBar className="app" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <img src={logo} className="img" alt="Logo" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {filteredNavItems.map((item) => (
                  <NavLink to={item.route} key={item.name} className="nav-link">
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={logo} className="img" alt="Logo" />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {filteredNavItems.map((item) => (
                <NavLink to={item.route} key={item.name} className="nav-link">
                  <Button
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      fontWeight: 600,
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    }}
                  >
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              {isLogin && (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="User Avatar"
                        src={
                          userDetails?.profile_pic
                            ? profile_Url(userDetails.profile_pic)
                            : ""
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleProfileClick}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                  <span
                    style={{
                      marginRight: "30px",
                      color: "black",
                      fontWeight: 600,
                      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                      fontSize: 13,
                    }}
                  >
                   Hello, {isLogged}
                  </span>
                  <button className="Btn" onClick={handleLogout}>
                    <div className="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>
                    <div className="text">Logout</div>
                  </button>
                </>
              )}
              {!isLogin && (
                <>
                  <Button
                    color="info"
                    variant="outlined"
                    component={Link}
                    to="/register"
                    sx={{
                      margin: 2,
                      color: "black",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                        color: "black",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    color="info"
                    variant="outlined"
                    component={Link}
                    to="/login"
                    sx={{
                      color: "black",
                      borderColor: "black",
                      "&:hover": {
                        borderColor: "black",
                        color: "black",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
