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
import One from "./1";
import Two from "./2";
import Three from "./3";
import "./tick.css";
import { supabase } from "../../../Supabase";

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

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [roomsData, setRoomsData] = React.useState(null);
  const [roomAllocation, setRoomAllocation] = React.useState(null);

  const [name, setName] = React.useState("");
  const [usn, setUSN] = React.useState("");
  const [yoj, setYoj] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phnum, setPhnum] = React.useState("");

  const [building, setBuilding] = React.useState("yuvika");
  const [block, setBlock] = React.useState("A");
  const [floor, setFloor] = React.useState(2);
  const [room, setRoom] = React.useState(401);
  const [buildingList, setBuildingList] = React.useState([]);
  const [blockList, setBlockList] = React.useState([]);
  const [floorList, setFloorList] = React.useState([]);
  const [roomList, setRoomList] = React.useState([]);
  const [roomInfo, setRoomInfo] = React.useState([0, 0]);
  const [roomId, setRoomId] = React.useState(-1);

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
        temp[data[i]["hostel_name"]] = false;
      }

      for (var i = 0; i < data.length; i++) {
        if (temp[data[i]["hostel_name"]]) continue;

        temp[data[i]["hostel_name"]] = true;
        temp1.push(data[i]);
      }

      console.log(temp1);

      setBuildingList(temp1);
<<<<<<< HEAD
    }
  }

  async function RegisterStudent() {
    if (
      hf1.length == 0 ||
      hf2.length == 0 ||
      hf3.length == 0 ||
      hf4.length == 0 ||
      cd.length == 0
    ) {
      alert("All the field should be filled");
      return;
    }

    const { data, error } = await supabase.from("students").insert([
      {
        name: name,
        usn: usn,
        year_joined: yoj,
        email: email,
        phno: phnum,
        room_id: roomId,
        hf1: hf1,
        hf2: hf2,
        hf3: hf3,
        hf4: hf4,
        cd: cd,
      },
    ]);

    if (data) {
      alert("Successfully Registered");
      setActiveStep(activeStep + 1);
    }

    if (error) {
      console.log(error);
      alert("Some Error occured");
    }
  }

=======
    }
  }

  async function RegisterStudent() {
    if (
      hf1.length == 0 ||
      hf2.length == 0 ||
      hf3.length == 0 ||
      hf4.length == 0 ||
      cd.length == 0
    ) {
      alert("All the field should be filled");
      return;
    }

    const { data, error } = await supabase.from("students").insert([
      {
        name: name,
        usn: usn,
        year_joined: yoj,
        email: email,
        phno: phnum,
        room_id: roomId,
        hf1: hf1,
        hf2: hf2,
        hf3: hf3,
        hf4: hf4,
        cd: cd,
      },
    ]);

    if (data) {
      alert("Successfully Registered");
      setActiveStep(activeStep + 1);
    }

    if (error) {
      console.log(error);
      alert("Some Error occured");
    }
  }

>>>>>>> 44b689fb16fc41fc1bd75121eaaa404a9af551f1
  async function roomAllocationHandler(building1, block1, floor1, room1) {
    if (!roomsData) return;
    console.log("Rooms Allocation");
    console.log(roomsData);
    const tbu = {};
    const tb = {};
    const tf = {};
    const tr = {};

    const bul = [];
    const rl = [];
    const fl = [];
    const bl = [];

    for (var i = 0; i < roomsData.length; i++) {
      if (roomsData[i]["capacity"] - roomsData[i]["occupied"] <= 0) {
        continue;
      }

      if (
        block1 == roomsData[i]["block"] &&
        floor1 == roomsData[i]["floor"] &&
        building1 == roomsData[i]["hostel_name"]
      ) {
        tr[roomsData[i]["room"]] = false;
        rl.push(roomsData[i]);
      }

      if (
        block1 == roomsData[i]["block"] &&
        building1 == roomsData[i]["hostel_name"]
      ) {
        tf[roomsData[i]["floor"]] = false;
        fl.push(roomsData[i]);
      }

      if (building1 == roomsData[i]["hostel_name"]) {
        bl.push(roomsData[i]);
        tb[roomsData[i]["block"]] = false;
      }

      tbu[roomsData[i]["hostel_name"]] = false;
      bul.push(roomsData[i]);
    }

    const temp_bu = [];
    const temp_b = [];
    const temp_f = [];
    const temp_r = [];

    for (var i = 0; i < bul.length; i++) {
      if (tbu[bul[i]["hostel_name"]]) continue;

      tbu[bul[i]["hostel_name"]] = true;
      temp_bu.push(bul[i]);
    }

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
    setBuildingList(temp_bu);

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
            building={building}
            setBuilding={setBuilding}
            roomAllocationHandler={roomAllocationHandler}
            roomAllocation={roomAllocation}
            roomList={roomList}
            blockList={blockList}
            floorList={floorList}
            roomInfo={roomInfo}
            setRoomInfo={setRoomInfo}
            buildingList={buildingList}
            setBuildingList={setBuildingList}
            roomId={roomId}
            setRoomId={setRoomId}
          />
        ) : (
          <Two
            block={block}
            setBlock={setBlock}
            floor={floor}
            setFloor={setFloor}
            room={room}
            setRoom={setRoom}
            building={building}
            setBuilding={setBuilding}
            roomAllocationHandler={roomAllocationHandler}
            roomAllocation={roomAllocation}
            roomList={roomList}
            blockList={blockList}
            floorList={floorList}
            roomInfo={roomInfo}
<<<<<<< HEAD

            setRoomInfo={setRoomInfo}

=======
            setRoomInfo={setRoomInfo}
>>>>>>> 44b689fb16fc41fc1bd75121eaaa404a9af551f1
            buildingList={buildingList}
            setBuildingList={setBuildingList}
            roomId={roomId}
            setRoomId={setRoomId}
          />
        );
      case 2:
        return (
          <Three
            hf1={hf1}
            hf2={hf2}
            hf3={hf3}
            hf4={hf4}
            cd={cd}
            setHF1={setHF1}
            setHF2={setHF2}
            setHF3={setHF3}
            setHF4={setHF4}
            setCD={setCD}
          />
        );
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
        alert("All fields should be filled");
        return;
      }
    } else if (activeStep == 1) {
      if (roomInfo[0] == 0 || roomInfo[1] == 0) {
        alert("Choose a room");
        return;
      }
    } else if (activeStep == 2) {
      if (
        hf1.length == 0 ||
        hf2.length == 0 ||
        hf3.length == 0 ||
        hf4.length == 0 ||
        cd.length == 0
      ) {
        alert("All the field should be filled");
        return;
      }
    }

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
                    onClick={
                      activeStep === steps.length - 1
                        ? RegisterStudent
                        : handleNext
                    }
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
