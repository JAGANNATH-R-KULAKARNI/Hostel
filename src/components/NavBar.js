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

const pages = ["Account", "Announcements"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const matches = useMediaQuery("(min-width:600px)");
  const [drawer, setDrawer] = React.useState(false);

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

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black" }}
      elevation={0}
    >
      {!matches && drawer ? <DrawerUI drawerHandler={drawerHandler} /> : null}
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
            href="/"
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
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={drawerHandler}
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
            href="/"
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

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
