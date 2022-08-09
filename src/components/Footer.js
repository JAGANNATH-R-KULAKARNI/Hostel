import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://nie.ac.in/" target="_blank">
        NIE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            This is a Hotel Management Website
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
