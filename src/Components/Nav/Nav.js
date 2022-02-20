import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "../../Assets/menu.png";
import LoginIcon from "../../Assets/login.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import logo from "../../Assets/OmimaArtLogo2.png";
import classes from "./Nav.module.css";
// start
const pages = ["Gallery", "Exhibitions", "Contact ", "About"];

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const allowedSubs = [
    "google-oauth2|106716483523184248288",
    "auth0|620ea784e08c3d006a486b84",
  ];
  setTimeout(checkAdmin, 1000);
  function checkAdmin() {
    if (allowedSubs.includes(user?.sub)) setIsAdmin(true);
  }

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            className={classes.logo}
          >
            Omima Aboelnasr
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img src={MenuIcon} alt="Menu Icon" />
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.toLowerCase() === "home" ? "/" : page.toLowerCase()}
                  style={{ textDecoration: "none", color: "#4a4a4a" }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className={classes.logo}
          >
            Omima Aboelnasr
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.toLowerCase() === "home" ? "/" : page.toLowerCase()}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }} style={{ marginRight: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.picture} />
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
                <Link
                  to="/collection"
                  style={{ textDecoration: "none", color: "rgba(0,0,0,0.87)" }}
                >
                  <MenuItem key="My Collection" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">My Collection</Typography>
                  </MenuItem>
                </Link>
                <div onClick={() => logout()}>
                  <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
                {isAdmin && (
                  <Link
                    to="/admin"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    <MenuItem key="Admin" onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Admin</Typography>
                    </MenuItem>
                  </Link>
                )}
              </Menu>
            </Box>
          ) : (
            <img
              onClick={() => loginWithRedirect()}
              src={LoginIcon}
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              alt="Login"
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
