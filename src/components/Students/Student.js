import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardUI from "./Card";
import useMediaQuery from "@mui/material/useMediaQuery";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Student(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <Card
      sx={{
        maxWidth: m1 ? 400 : "100%",
        minWidth: m1 ? 400 : "100%",
        minHeight: 350,
        maxHeight: 350,
        borderRadius: "100px",
      }}
      elevation={24}
    >
      <CardContent
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          padding: "30px",
        }}
      >
        {props.user && props.google ? (
          <CardUI user={props.user} google={props.google} />
        ) : null}
      </CardContent>
    </Card>
  );
}
