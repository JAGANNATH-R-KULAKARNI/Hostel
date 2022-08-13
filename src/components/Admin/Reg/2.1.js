import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./2.1.css";

export default function CustomizedSelects(props) {
  const [b, setB] = React.useState("A");
  const [f, setF] = React.useState(2);
  const [r, setR] = React.useState(401);
  const [h, setH] = React.useState("NIEMH");
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div>
      {/* <form>
        <div className="select-wrapper">
          <h4 style={{ textAlign: "center" }}>Block</h4>
          <select
            className="select"
            style={{ border: "3px solid black", marginTop: "-20px" }}
            value={b}
            onChange={(e) => {
              setB(e.target.value);
              props.setBlock(e.target.value);
              props.roomAllocationHandler(
                e.target.value,
                props.floor,
                props.room
              );
            }}
            id="blockSelect"
          >
            {props.blockList &&
              props.blockList.map((item) => {
                return (
                  <option
                    value={item["block"] + ""}
                    key={item["block"] + ""}
                    style={{ textAlign: "center", maxWidth: "80%" }}
                  >
                    {item["block"]}
                  </option>
                );
              })}
          </select>
        </div>
      </form>
      <form>
        <div className="select-wrapper">
          <h4 style={{ textAlign: "center" }}>Floor</h4>
          <select
            className="select"
            style={{ border: "3px solid black", marginTop: "-20px" }}
            value={f}
            onChange={(e) => {
              setF(e.target.value);
              props.setFloor(e.target.value);
              props.roomAllocationHandler(
                props.block,
                e.target.value,
                props.room
              );
            }}
            id="FloorSelect"
          >
            {props.floorList &&
              props.floorList.map((item) => {
                return (
                  <option
                    value={item["floor"]}
                    key={item["floor"]}
                    style={{ textAlign: "center", maxWidth: "80%" }}
                  >
                    {item["floor"]}
                  </option>
                );
              })}
          </select>
        </div>
      </form> */}
      <FormControl sx={{ m: 1, minWidth: m1 ? 90 : 81 }}>
        <InputLabel id="demo-simple-select-autowidth-label11">Building</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label11"
          id="Building-select-bro"
          value={h}
          onChange={(e) => {
            props.setBuilding(e.target.value);
            setH(e.target.value);
            props.roomAllocationHandler(
              e.target.value,
              props.block,
              props.floor,
              props.room
            );
            console.log(props.roomAllocation);
          }}
          autoWidth
          defaultValue="NIEMH"
        >
          {props.buildingList &&
            props.buildingList.map((item) => {
              return (
                <MenuItem value={item["building"] + ""} key={item["building"] + ""}>
                  {item["building"]}
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
            console.log(props.roomAllocation);
          }}
          autoWidth
          defaultValue="A"
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
      <FormControl sx={{ m: 1, minWidth: m1 ? 90 : 81 }}>
        <InputLabel id="demo-simple-select-autowidth-label22">Floor</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label22"
          id="Floor-Bro"
          value={f}
          onChange={(e) => {
            setF(e.target.value);
            props.setFloor(e.target.value);
            console.log(typeof e.target.value);

            props.roomAllocationHandler(
              props.building,
              props.block,
              e.target.value,
              props.room
            );
            console.log(props.roomAllocation);
          }}
          autoWidth
        >
          {props.floorList &&
            props.floorList.map((item) => {
              return (
                <MenuItem value={item["floor"]} key={item["floor"] + "floor"}>
                  {item["floor"]}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: m1 ? 90 : 81 }}>
        <InputLabel id="demo-simple-select-autowidth-label33">Room</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label33"
          id="Room-Select"
          value={r}
          onChange={(e) => {
            setR(e.target.value);
            props.setRoom(e.target.value);
            props.roomAllocationHandler(
              props.building,
              props.block,
              props.floor,
              e.target.value
            );
            console.log(props.roomAllocation);
          }}
          autoWidth
        >
          {props.roomList &&
            props.roomList.map((item) => {
              return <MenuItem value={item["room"]}>{item["room"]}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </div>
  );
}