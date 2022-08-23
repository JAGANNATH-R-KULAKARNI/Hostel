
import * as React from "react";

import "./Button.css";
import useMediaQuery from "@mui/material/useMediaQuery";

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
          width: m1 ? "320px" : "100%",
          fontSize: m1 ? "15px" : "12px",
        }}
      >
        {props.text ? props.text : null}
      </button>
    </div>
  );
}

export default AButton;
