import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectUI from "./2.1";

<<<<<<< HEAD
export default function PaymentForm() {
=======
export default function Two(props) {
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
<<<<<<< HEAD
          <SelectUI />
        </Grid>
        <Grid item xs={12} sm={12}>
          <h2 style={{ textAlign: "center" }}>Capacity : 3</h2>
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginTop: "-40px" }}>
          <h2 style={{ textAlign: "center" }}>Available : 2</h2>
        </Grid>
=======
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
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
      </Grid>
    </React.Fragment>
  );
}
