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
import AdbIcon from "@mui/icons-material/Adb";
import logo from "./images/Logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerUI from "./Drawer";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { supabase } from "../Supabase";
import CloseIcon from "@mui/icons-material/Close";

const pages = [];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const matches = useMediaQuery("(min-width:600px)");
  const [drawer, setDrawer] = React.useState(false);
  const [email, setEmail] = React.useState(null);

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

  const drawerHandler = () => {
    setDrawer(!drawer);
  };

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      console.log(data);
      setEmail(data.email);
    }
  }

  React.useEffect(() => {
    setInterval(() => {
      fetchTheProfile();
    }, 1000);
  }, []);

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black" }}
      elevation={0}
    >
      {!matches && drawer ? (
        <DrawerUI drawerHandler={drawerHandler} logOut={props.logOut} />
      ) : null}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {matches ? (
            <img
              src={logo}
              height={50}
              width={50}
              alt="NIE"
              style={{
                backgroundColor: "white",
                padding: "2px",
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "7px",
                borderTopLeftRadius: "7px",
              }}
            />
          ) : null}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={process.env.REACT_APP_ADMIN2 == email ? "/admin" : "/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "35px",
              fontSize: "25px",
            }}
          >
            <span style={{ marginTop: "2px" }}> NIE </span>

            <span
              style={{
                fontSize: "14px",
                marginTop: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
                paddingLeft: "6px",
                paddingTop: "2px",
                maxHeight: "25px",
                fontWeight: 900,
                marginLeft: "5px",
              }}
            >
              {" "}
              HOSTEL
            </span>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              maxWidth: "70px",
            }}
          >
            {location.pathname != "/signin" ? (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.handleClose}
                color="inherit"
              >
                <CloseIcon />
              </IconButton>
            ) : null}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div style={{ display: "flex" }}>
            {!matches ? (
              <img
                src={logo}
                height={35}
                width={35}
                alt="NIE"
                style={{
                  backgroundColor: "white",
                  padding: "2px",
                  borderBottomLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "7px",
                  borderTopLeftRadius: "7px",
                  paddingLeft: "2px",
                  marginLeft: "30px",
                }}
              />
            ) : null}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href={process.env.REACT_APP_ADMIN2 == email ? "/admin" : "/"}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                marginLeft: "15px",
                fontSize: "20px",
                paddingRight: "50px",
              }}
            >
              <span style={{ marginTop: "6px" }}> NIE </span>

              <span
                style={{
                  fontSize: "11px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "6px",
                  paddingTop: "5px",
                  maxHeight: "25px",
                  fontWeight: 900,
                  marginLeft: "5px",
                }}
              >
                {" "}
                hostel
              </span>
            </Typography>
          </div>
          {location.pathname != "/signin" ? (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "20px",
                marginTop: "3px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          ) : null}
          {matches && location.pathname != "/signin" ? (
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: 900,
                border: "3px solid white",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "white";
              }}
              onClick={props.handleClose}
            >
              Close
            </Button>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
