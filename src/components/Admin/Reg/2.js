import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectUI from "./2.1";

export default function Two(props) {
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
            building={props.building}
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
          />
        </Grid>
        {/* <Grid item xs={12} sm={12}>
          <h2 style={{ textAlign: "center" }}>
            Capacity : {props.roomInfo[0]}
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: "-40px" }}>
          <h2 style={{ textAlign: "center" }}>
            Available : {props.roomInfo[1]}
          </h2>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}