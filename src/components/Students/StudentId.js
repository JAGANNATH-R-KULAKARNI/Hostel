import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function StuudentId(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <Card
      sx={{
        maxWidth: m1 ? 350 : "100%",
        minWidth: m1 ? 350 : "100%",
        // maxHeight: 300,
        minHeight: 300,
        borderRadius: "100px",
      }}
      elevation={24}
    >
      <CardContent>
        <br />
        <Typography
          variant="h5"
          component="div"
          style={{ textAlign: "center", marginTop: "10px", fontWeight: 700 }}
        >
          Student ID
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: "130px",
            textAlign: "center",
          }}
          color="text.secondary"
        >
          {props.user ? props.user["s_id"] : null}
        </Typography>
      </CardContent>
    </Card>
  );
}
