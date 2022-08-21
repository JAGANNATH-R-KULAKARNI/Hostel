import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectUI from "./studentssub";
import { supabase } from "../../../Supabase";
import CardUI from "./Card";
import ButtonUI from "../../Button2";

export default function Attendence(props) {
  const [control, setControl] = React.useState(true);
  const [control1, setControl1] = React.useState(true);
  const [students, setStudents] = React.useState([]);
  const [report, setReport] = React.useState([]);
  const [attInfo, setAttInfo] = React.useState([]);
  const [to, setTo] = React.useState("");
  const [roomsData, setRoomsData] = React.useState(null);
  const [roomAllocation, setRoomAllocation] = React.useState(null);

  const [building, setBuilding] = React.useState("yuvika");
  const [block, setBlock] = React.useState("");
  const [floor, setFloor] = React.useState(2);
  const [room, setRoom] = React.useState(401);
  const [buildingList, setBuildingList] = React.useState([]);
  const [blockList, setBlockList] = React.useState([]);
  const [floorList, setFloorList] = React.useState([]);
  const [roomList, setRoomList] = React.useState([]);
  const [roomInfo, setRoomInfo] = React.useState([0, 0]);

  const [finalReport, setFinalReport] = React.useState([]);

  React.useEffect(() => {
    if (control) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = dd + "-" + mm + "-" + yyyy;

      setTo(today);
      fetchRooms();
      fetchAttInfo();
      setControl(false);
    }
  }, []);

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
    }
  }

  async function fetchAttInfo() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    const att = await supabase.from("attendence").select("*,students(*)");

    console.log("ATTTTTT");
    console.log(att);

    const temp = [];

    for (var i = 0; i < att.data.length; i++) {
      if (att.data[i]["date_a"] == today) {
        temp.push(att.data[i]);
      }
    }

    console.log(temp);
    setAttInfo(att.data);
  }

  async function findAvailability(bui, bl, fl, ro) {
    console.log("Room List bro (inside findAvailability functn)");
    console.log(roomsData);
  }

  async function roomAllocationHandler(building1, block1, floor1, room1) {
    if (!roomsData) return;

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

    var attInfo2 = [];

    for (var i = 0; i < attInfo.length; i++) {
      for (var j = 0; j < temp_r.length; j++) {
        if (temp_r[j]["id"] == attInfo[i]["students"]["room_id"]) {
          attInfo2.push({
            data: attInfo[i],
            floor: temp_r[j]["floor"],
          });
          break;
        }
      }
    }

    console.log("ROOM LIST ! (in roomAllocationHandler)");
    console.log(temp_r);
    console.log("Attendence Info !  (in roomAllocationHandler)");
    console.log(attInfo);
    console.log("Attendence Info !  (in roomAllocationHandler) 2");
    console.log(attInfo2);
    console.log("FLOOR LIST");
    console.log(temp_f);

    const floors_i = [];

    for (var i = 0; i < temp_f.length; i++) {
      floors_i.push(temp_f[i]["floor"]);
    }

    floors_i.sort();
    console.log("FLOORS LIST 2 !");
    console.log(floors_i);
    const temp7 = [];

    for (var i = 0; i < floors_i.length; i++) {
      const temp8 = [];
      for (var j = 0; j < attInfo2.length; j++) {
        if (floors_i[i] == attInfo2[j]["floor"]) {
          temp8.push({
            floor: floors_i[i],
            data: attInfo[j],
          });
        }
      }

      temp7.push(temp8);
    }

    setFinalReport(temp7);

    console.log("---------------------------------------------");
    console.log("Final Report");
    console.log(temp7);
    console.log("---------------------------------------------");
    setRoomList(temp_r);
    // setFloorList(temp_f);
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

    // setControl(!control);
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <SelectUI
            block={block}
            setBlock={setBlock}
            floor={props.floor}
            setFloor={props.setFloor}
            room={props.room}
            setRoom={props.setRoom}
            roomAllocationHandler={roomAllocationHandler}
            roomList={roomList}
            blockList={blockList}
            floorList={floorList}
            buildingList={buildingList}
            building={building}
            setBuilding={setBuilding}
            findAvailability={findAvailability}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
