import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <center>
    <Typography
      variant="body2"
      color="text.secondary"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://nie.ac.in/" target="_blank">
        The National Institute of Engineering
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </center>
  );
}

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          display: "flex",
        flexDirection: "column",
          py: 4,
          px: 1,
          mt: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <CssBaseline />
        <Container maxWidth="500px">
          <Typography variant="body2" align="left" display="inline-block">
            NIE Men's Hostel<br/>
            Dr. B R Ambedkar Road<br/>
            Ashokapuram<br/>
            Mysuru, 570008<br/>
          </Typography >
          {/* <Typography variant="body2" align="left" display="inline-block" marginLeft={"1050px"}>
          NIE Girls Hostel<br/>
          Vidyaranyapuram Main Rd<br/>
          Vidyaranyapura<br/>
          Mysuru, 570008<br/> 
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
  );
}
