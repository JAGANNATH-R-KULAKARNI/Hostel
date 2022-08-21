import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import logo from "./Logo.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 10,
  lineHeight: "60px",
}));

const Item3 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: 300,
  maxHeight: 7700,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Report(props) {
  return (
    <Grid container spacing={2}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                // gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Item key={1} elevation={24} style={{ backgroundColor: "black" }}>
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
                    marginTop: "5px",
                  }}
                />
              </Item>
              <Item key={2} elevation={24} style={{ backgroundColor: "black" }}>
                Attendence Report
              </Item>
              <Item key={3} elevation={24} style={{ backgroundColor: "black" }}>
                {props.building} , {"Block - "}
                {props.block}
              </Item>
              <Item2
                key={4}
                elevation={24}
                style={{ backgroundColor: "white" }}
              ></Item2>
              {props.report &&
                props.report.map((item) => (
                  <Item3
                    key={"floor" + item["floor"]}
                    elevation={24}
                    style={{ backgroundColor: "black" }}
                  >
                    {"Floor - " + item["floor"]}
                  </Item3>
                ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
