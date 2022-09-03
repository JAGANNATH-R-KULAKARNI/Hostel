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

export default function Room(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <Card
      sx={{
        maxWidth: m1 ? 350 : "100%",
        minWidth: m1 ? 350 : "100%",
        minHeight: 310,
        maxHeight: 350,
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
          Room
        </Typography>

        <Typography
          sx={{
            mb: 1.5,
            fontSize: "17px",
            textAlign: "center",
            fontWeight: 900,
            marginTop: "20px",
          }}
          color="text.secondary"
        >
          {props.user ? (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>{props.user["rooms"]["hostel_name"]}</p>
                <p>, Block - {props.user["rooms"]["block"]}</p>
              </div>
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  marginTop: "-20px",
                }}
              >
                <p>
                  {props.user["rooms"]["floor"] == 0
                    ? "Ground Floor"
                    : props.user["rooms"]["floor"] == 1
                    ? "1st Floor"
                    : props.user["rooms"]["floor"] == 2
                    ? "2nd Floor"
                    : props.user["rooms"]["floor"] == 3
                    ? "3rd Floor"
                    : `${props.user["rooms"]["floor"]} Floor`}
                </p>
                <p> Room No - {props.user["rooms"]["room"]}</p>
              </div>
            </div>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
}
