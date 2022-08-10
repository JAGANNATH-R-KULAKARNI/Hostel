import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../images/Logo.png";
import { supabase } from "../../Supabase";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  async function signInWithGoogle() {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "google",
      });
      if (error) throw error;

      if (user) {
        console.log("user details");
        console.log(user);
        alert("here");
      }
    } catch (error) {
      console.error(error.error_description || error.message);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
           
          </Avatar> */}
          <img
            src={logo}
            height={70}
            width={70}
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

          <Typography
            component="h1"
            variant="h5"
            style={{
              marginTop: "10px",
              fontWeight: 900,
            }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Sign In
            </Button>

            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  style={{ color: "black" }}
                  onClick={signInWithGoogle}
                >
                  {"Are you an Admin? Click Here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br />
        <br />
        <br />
      </Container>
    </ThemeProvider>
  );
}
