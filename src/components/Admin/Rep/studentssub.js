import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./studentssubc.css";

export default function CustomizedSelects(props) {
  const [h, setH] = React.useState("mh");
  const [b, setB] = React.useState("A");
  const [f, setF] = React.useState(2);
  const [r, setR] = React.useState(401);
  const [control, setControl] = React.useState(true);

  const m1 = useMediaQuery("(min-width:600px)");

  React.useEffect(() => {
    if (control) {
      setH(props.building);
      setB(props.block);
      setF(props.floor);
      setR(props.room);

      setControl(false);
    }
  }, []);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: m1 ? 90 : 81 }}>
        <InputLabel id="demo-simple-select-autowidth-label44">
          Building
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label44"
          id="Building-select-bro"
          value={h}
          onChange={(e) => {
            props.setBuilding(e.target.value);
            setH(e.target.value);
            setB("");
            props.setBlock("");
            props.roomAllocationHandler(
              e.target.value,
              "",
              props.floor,
              props.room
            );

            props.findAvailability(
              e.target.value,
              props.block,
              props.floor,
              props.room
            );
            props.findAvailability(
              e.target.value,
              props.block,
              props.floor,
              props.room
            );
          }}
          autoWidth
        >
          {props.buildingList &&
            props.buildingList.map((item) => {
              return (
                <MenuItem
                  value={item["hostel_name"] + ""}
                  key={item["hostel_name"] + ""}
                >
                  {item["hostel_name"]}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: m1 ? 90 : 81 }}>
        <InputLabel id="demo-simple-select-autowidth-label11">Block</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label11"
          id="Block-select-bro"
          value={b}
          onChange={(e) => {
            props.setBlock(e.target.value);
            setB(e.target.value);
            props.roomAllocationHandler(
              props.building,
              e.target.value,
              props.floor,
              props.room
            );

            props.findAvailability(
              props.building,
              e.target.value,
              props.floor,
              props.room
            );
            props.findAvailability(
              props.building,
              e.target.value,
              props.floor,
              props.room
            );
          }}
          autoWidth
        >
          {props.blockList &&
            props.blockList.map((item) => {
              return (
                <MenuItem value={item["block"] + ""} key={item["block"] + ""}>
                  {item["block"]}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
