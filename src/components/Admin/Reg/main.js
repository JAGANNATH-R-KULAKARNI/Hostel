import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
<<<<<<< HEAD
import AddressForm from "./1";
import PaymentForm from "./2";
import Review from "./3";
import "./tick.css";
=======
import One from "./1";
import Two from "./2";
import Three from "./3";
import "./tick.css";
import { supabase } from "../../../Supabase";
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://nie.ac.in/">
        NIE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Student", "Room", "Fees"];

<<<<<<< HEAD
function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

=======
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

<<<<<<< HEAD
  const handleNext = () => {
=======
  const [roomsData, setRoomsData] = React.useState(null);
  const [roomAllocation, setRoomAllocation] = React.useState(null);

  const [name, setName] = React.useState("");
  const [usn, setUSN] = React.useState("");
  const [yoj, setYoj] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phnum, setPhnum] = React.useState("");

  const [block, setBlock] = React.useState("A");
  const [floor, setFloor] = React.useState(2);
  const [room, setRoom] = React.useState(401);
  const [blockList, setBlockList] = React.useState([]);
  const [floorList, setFloorList] = React.useState([]);
  const [roomList, setRoomList] = React.useState([]);
  const [roomInfo, setRoomInfo] = React.useState([0, 0]);

  const [hf1, setHF1] = React.useState("");
  const [hf2, setHF2] = React.useState("");
  const [hf3, setHF3] = React.useState("");
  const [hf4, setHF4] = React.useState("");
  const [cd, setCD] = React.useState("");

  const [control, setControl] = React.useState(false);

  async function fetchRooms() {
    const { data, error } = await supabase.from("rooms").select("*");

    if (data) {
      setRoomsData(data);
      const temp = {};
      const temp1 = [];
      for (var i = 0; i < data.length; i++) {
        temp[data[i]["block"]] = false;
      }

      for (var i = 0; i < data.length; i++) {
        if (temp[data[i]["block"]]) continue;

        temp[data[i]["block"]] = true;
        temp1.push(data[i]);
      }

      setBlockList(temp1);
    }
  }

  async function roomAllocationHandler(block1, floor1, room1) {
    if (!roomsData) return;
    console.log("Rooms Allocation");
    console.log(roomsData);
    const tb = {};
    const tf = {};
    const tr = {};
    const rl = [];
    const fl = [];
    const bl = [];

    for (var i = 0; i < roomsData.length; i++) {
      if (roomsData[i]["capacity"] - roomsData[i]["occupied"] <= 0) {
        continue;
      }

      if (block1 == roomsData[i]["block"] && floor1 == roomsData[i]["floor"]) {
        tr[roomsData[i]["room"]] = false;
        rl.push(roomsData[i]);
      }

      if (block1 == roomsData[i]["block"]) {
        tf[roomsData[i]["floor"]] = false;
        fl.push(roomsData[i]);
      }

      bl.push(roomsData[i]);
      tb[roomsData[i]["block"]] = false;
    }

    const temp_b = [];
    const temp_f = [];
    const temp_r = [];

    for (var i = 0; i < bl.length; i++) {
      if (tb[bl[i]["block"]]) continue;

      tb[bl[i]["block"]] = true;
      temp_b.push(bl[i]);
    }

    for (var i = 0; i < fl.length; i++) {
      if (tf[fl[i]["floor"]]) continue;

      tf[fl[i]["floor"]] = true;
      temp_f.push(fl[i]);
    }

    for (var i = 0; i < rl.length; i++) {
      if (tr[rl[i]["room"]]) continue;

      tr[rl[i]["room"]] = true;
      temp_r.push(rl[i]);
    }

    console.log(temp_b);
    console.log(temp_f);
    console.log(temp_r);

    setRoomList(temp_r);
    setFloorList(temp_f);
    setBlockList(temp_b);

    for (var i = 0; i < roomsData.length; i++) {
      if (
        block == roomsData[i]["block"] &&
        floor == roomsData[i]["floor"] &&
        room == roomsData[i]["room"]
      ) {
        setRoomInfo([
          roomsData[i]["capacity"],
          roomsData[i]["capacity"] - roomsData[i]["occupied"],
        ]);
      }
    }

    setControl(!control);
  }

  React.useEffect(() => {
    setInterval(() => {
      fetchRooms();
    }, 1000);
  }, []);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <One
            name={name}
            usn={usn}
            yoj={yoj}
            email={email}
            phnum={phnum}
            setName={setName}
            setUSN={setUSN}
            setYoj={setYoj}
            setEmail={setEmail}
            setPhnum={setPhnum}
          />
        );
      case 1:
        return control ? (
          <Two
            block={block}
            setBlock={setBlock}
            floor={floor}
            setFloor={setFloor}
            room={room}
            setRoom={setRoom}
            roomAllocationHandler={roomAllocationHandler}
            roomAllocation={roomAllocation}
            roomList={roomList}
            blockList={blockList}
            floorList={floorList}
            roomInfo={roomInfo}
          />
        ) : (
          <Two
            block={block}
            setBlock={setBlock}
            floor={floor}
            setFloor={setFloor}
            room={room}
            setRoom={setRoom}
            roomAllocationHandler={roomAllocationHandler}
            roomAllocation={roomAllocation}
            roomList={roomList}
            blockList={blockList}
            floorList={floorList}
            roomInfo={roomInfo}
          />
        );
      case 2:
        return <Three />;
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    if (activeStep == 0) {
      if (
        name.length == 0 ||
        email.length == 0 ||
        usn.length == 0 ||
        yoj.length == 0 ||
        phnum.length == 0
      ) {
        // alert("All fields should be filled");
        // return;
      }
    }

>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ textAlign: "center" }}
                >
                  Successfully Registered
                </Typography>
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{
                        mt: 3,
                        ml: 1,
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    style={{ backgroundColor: "black" }}
                  >
                    {activeStep === steps.length - 1 ? "Register" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
