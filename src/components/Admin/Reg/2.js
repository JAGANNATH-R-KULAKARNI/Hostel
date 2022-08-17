import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectUI from "./2.1";
import { supabase } from "../../../Supabase";

export default function Two(props) {
  const [capacity, setCapacity] = React.useState(0);
  const [available, setAvailable] = React.useState(0);
  const [control, setControl] = React.useState(true);
  const [control1, setControl1] = React.useState(true);

  React.useEffect(() => {
    if (control) {
      setCapacity(props.roomInfo[0]);
      setAvailable(props.roomInfo[1]);
      setControl(false);
    }
  }, []);

  async function findAvailability(bui, bl, fl, ro) {
    const { data, error } = await supabase.from("rooms").select("*");
    console.log(bui + " " + bl + " " + fl + " " + ro);
    if (data) {
      console.log("Here in 2.js");
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        if (
          bui == data[i]["hostel_name"] &&
          bl == data[i]["block"] &&
          fl == data[i]["floor"] &&
          ro == data[i]["room"]
        ) {
          setCapacity(data[i]["capacity"]);
          console.log("here 1");
          setAvailable(data[i]["capacity"] - data[i]["occupied"]);
          console.log("here 2");
          props.setRoomId(data[i]["id"]);
          console.log("here 3");

          props.setRoomInfo([
            data[i]["capacity"],
            data[i]["capacity"] - data[i]["occupied"],
          ]);
          console.log("here 4");

          setControl1(!control1);
          console.log("here 5");

          break;
        }
      }
    }
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
            block={props.block}
            setBlock={props.setBlock}
            floor={props.floor}
            setFloor={props.setFloor}
            room={props.room}
            setRoom={props.setRoom}
            roomAllocationHandler={props.roomAllocationHandler}
            roomAllocation={props.roomAllocation}
            roomList={props.roomList}
            blockList={props.blockList}
            floorList={props.floorList}
            buildingList={props.buildingList}
            setBuildingList={props.setBuildingList}
            building={props.building}
            setBuilding={props.setBuilding}
            findAvailability={findAvailability}
          />
        </Grid>
        {control1 ? (
          <>
            <Grid item xs={12} sm={12}>
              <h2 style={{ textAlign: "center" }}>Capacity : {capacity}</h2>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: "-40px" }}>
              <h2 style={{ textAlign: "center" }}>Available : {available}</h2>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={12}>
              <h2 style={{ textAlign: "center" }}>Capacity : {capacity}</h2>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: "-40px" }}>
              <h2 style={{ textAlign: "center" }}>Available : {available}</h2>
            </Grid>
          </>
        )}
      </Grid>
    </React.Fragment>
  );
}
