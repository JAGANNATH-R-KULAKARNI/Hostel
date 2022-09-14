import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TableUI from "./table";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { supabase } from "../../../Supabase";
import Two from "./2";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import useMediaQuery from "@mui/material/useMediaQuery";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);
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
  const [prevRoomId, setPrevRoomId] = React.useState(0);
  const [studentId, setStudentId] = React.useState(0);
  const [initialRoom, setInitialRoom] = React.useState(null);

  const [hf1, setHF1] = React.useState("");
  const [hf2, setHF2] = React.useState("");
  const [hf3, setHF3] = React.useState("");
  const [hf4, setHF4] = React.useState("");
  const [cd, setCD] = React.useState("");

  const [initialize, setInitialize] = React.useState(false);
  const [control, setControl] = React.useState(false);

  const m1 = useMediaQuery("(min-width:600px)");

  const handleClose = () => {
    setOpen(false);
    props.toggleModel();
  };

  const updateDetails = async () => {
    var flag = 0;

    var studentsUpdate = null;
    var updateRooms1 = null;
    var updateRooms2 = null;

    if (prevRoomId != roomId && roomId != -1) {
      studentsUpdate = await supabase
        .from("students")
        .update({
          usn: usn,
          email: email,
          phno: phnum,
          year_joined: yoj,
          hf1: hf1,
          hf2: hf2,
          hf3: hf3,
          hf4: hf4,
          cd: cd,
          room_id: roomId,
        })
        .match({ s_id: studentId });

      updateRooms1 = await supabase
        .from("rooms")
        .update({ occupied: initialRoom[0]["occupied"] - 1 })
        .match({ id: prevRoomId });

      updateRooms2 = await supabase
        .from("rooms")
        .update({ occupied: roomInfo[0] - roomInfo[1] + 1 })
        .match({ id: roomId });
    } else {
      if (prevRoomId == roomId) {
        alert("Cannot change to same room");
        return;
      }

      studentsUpdate = await supabase
        .from("students")
        .update({
          usn: usn,
          email: email,
          phno: phnum,
          year_joined: yoj,
          hf1: hf1,
          hf2: hf2,
          hf3: hf3,
          hf4: hf4,
          cd: cd,
        })
        .match({ s_id: studentId });

      if (studentsUpdate.data) {
        console.log(studentsUpdate.data);
        alert("Successfull updated");
        handleClose();
        return;
      }
    }

    if (studentsUpdate.data) {
      flag++;
      console.log(studentsUpdate.data);
    }

    if (studentsUpdate.error) {
      console.log("Student Error");
      console.log(studentsUpdate.error);
    }

    if (updateRooms1.data) {
      console.log(updateRooms1.data);
      flag++;
    }

    if (updateRooms2.data) {
      console.log(updateRooms2.data);
      flag++;
    }

    if (updateRooms1.error) {
      console.log("Update Rooms 1 error");
      console.log(updateRooms1.error.message);
    }

    if (updateRooms2.error) {
      console.log("Update Rooms 2 error");
      console.log(updateRooms2.error.message);
    }

    if (flag == 3) {
      alert("Successfull updated");
      handleClose();
    } else {
      alert("Something went wrong");
      handleClose();
    }
  };

  React.useEffect(() => {
    if (!initialize) {
      setInitialize(true);
      setName(props.name);
      setUSN(props.usn);
      setEmail(props.email);
      setPhnum(parseInt(props.phno));
      setYoj(props.yoj);
      setHF1(props.hf1);
      setHF2(props.hf2);
      setHF3(props.hf3);
      setHF4(props.hf4);
      setCD(props.cd);
      // setRoomId(props.roomId);
      setPrevRoomId(props.roomId);
      setStudentId(props.s_id);
    }
  });

  async function fetchRooms0() {
    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("id", props.roomId);

    if (data) {
      console.log("Initial Room data");
      console.log(data);
      setInitialRoom(data);
    }
  }

  async function fetchRooms() {
    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .order("room", { ascending: true });

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
    }
  }

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
      fetchRooms0();
    }, 5000);
  }, []);

  return (
    <div>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "15px",
              fontWeight: 700,
            }}
          >
            {props.name}
          </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="usn_1718"
                  name="description"
                  label="USN"
                  fullWidth
                  value={usn}
                  onChange={(e) => setUSN(e.target.value)}
                  placeholder="USN"
                  type="text"
                />
              </Grid>
              {/* <Grid item xs={12} sm={12}>
                <TextField
                  id="email_1718"
                  name="description"
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  type="email"
                />
              </Grid> */}
              <Grid item xs={12} sm={12}>
                <TextField
                  id="phnum_1718"
                  name="description"
                  label="Phone number"
                  fullWidth
                  value={phnum}
                  onChange={(e) => setPhnum(e.target.value)}
                  placeholder="Phone number"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="yoj_1718"
                  name="description"
                  label="Year joined"
                  fullWidth
                  value={yoj}
                  onChange={(e) => setYoj(e.target.value)}
                  placeholder="Year joined"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Hostel fees 1st year"
                  fullWidth
                  value={hf1}
                  onChange={(e) => setHF1(e.target.value)}
                  placeholder="Hostel fees 1st year"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Hostel fees 2nd year"
                  fullWidth
                  value={hf2}
                  onChange={(e) => setHF2(e.target.value)}
                  placeholder="Hostel fees 2nd year"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Hostel fees 3rd year"
                  fullWidth
                  value={hf3}
                  onChange={(e) => setHF3(e.target.value)}
                  placeholder="Hostel fees 3rd year"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Hostel fees 4th year"
                  fullWidth
                  value={hf4}
                  onChange={(e) => setHF4(e.target.value)}
                  placeholder="Hostel fees 4th year"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  label="Caution deposit"
                  fullWidth
                  value={cd}
                  onChange={(e) => setCD(e.target.value)}
                  placeholder="Caution deposit"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <AllInclusiveIcon
                    style={{
                      fontSize: m1 ? "50px" : "30px",
                      marginBottom: "20px",
                    }}
                  />
                </div>

                {control ? (
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
                    setRoomInfo={setRoomInfo}
                    buildingList={buildingList}
                    setBuildingList={setBuildingList}
                    roomId={roomId}
                    setRoomId={setRoomId}
                  />
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              backgroundColor: "#730000",
              color: "white",
              fontSize: "14px",
            }}
            autoFocus
            onClick={updateDetails}
          >
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
