import "./Button.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

function AButton(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <button
        className="btn"
        onClick={props.clicked ? props.clicked : null}
        style={{
          backgroundColor: "#730000",
          //   fontFamily: "Bungee",
          width: m1 ? "500px" : "85%",
          fontSize: m1 ? "15px" : "12px",
        }}
      >
        {props.text ? props.text : null}
      </button>
    </div>
  );
}

export default AButton;
