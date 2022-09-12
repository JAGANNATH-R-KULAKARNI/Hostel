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

  React.useEffect(() => {
    if (control) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = dd + "-" + mm + "-" + yyyy;

      setTo(today);
      fetchAttInfo();
      setControl(false);
    }
  }, []);

  async function fetchAttInfo() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    const att = await supabase.from("attendence").select("*");
    console.log("ATTTTTT");
    console.log(att);

    const temp = [];

    for (var i = 0; i < att.data.length; i++) {
      if (att.data[i]["date_a"] == today) {
        temp.push(att.data[i]);
      }
    }

    console.log(temp);

    setAttInfo(temp);
  }

  async function reportIt() {
    const { data, error } = await supabase.from("attendence").upsert(report);

    if (data) {
      alert("Successfull Marked");
    }

    if (error) {
      alert("Something went wrong :(");
    }
  }

  async function attendenceHandler(stu_id, val) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    const temp = [];
    const temp2 = [];

    for (var i = 0; i < students.length; i++) {
      temp.push({
        metaData: students[i]["metaData"],
        status:
          students[i]["metaData"]["s_id"] == stu_id
            ? val
            : students[i]["status"],
      });

      temp2.push({
        date_a: today,
        status:
          students[i]["metaData"]["s_id"] == stu_id
            ? val
            : students[i]["status"],
        student_id: students[i]["metaData"]["s_id"],
      });
    }

    setStudents(temp);
    setReport(temp2);
    console.log("Attendence Handler");
    console.log(temp);
    console.log(temp2);
  }

  async function findAvailability(bui, bl, fl, ro) {
    const { data, error } = await supabase.from("rooms").select("*");
    const stuData = await supabase.from("students").select("*");
    const temp = [];
    const temp2 = [];
    var flag = false;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    console.log("OKKKKK");
    console.log(stuData);
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
          for (var j = 0; j < stuData.data.length; j++) {
            if (stuData.data[j]["room_id"] == data[i]["id"]) {
              flag = false;

              for (var k = 0; k < attInfo.length; k++) {
                if (attInfo[k]["student_id"] == stuData.data[j]["s_id"]) {
                  flag = attInfo[k]["status"];
                  break;
                }
              }

              temp.push({ metaData: stuData.data[j], status: flag });

              temp2.push({
                date_a: today,
                status: flag,
                student_id: stuData.data[j]["s_id"],
              });
            }
          }

          setStudents(temp);
          setReport(temp2);

          console.log("Students bro");
          console.log(temp);
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
      <Grid item xs={12} sm={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-20px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>{to}</h3>
        </div>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <SelectUI
           id={props.s_id}
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
        <Grid item xs={12} sm={12}>
          <h2 style={{ width: "100%", textAlign: "center", marginTop: "0px" }}>
            Students{" "}
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              {students.map((item, index) => {
                return (
                  <CardUI
                    key={index}
                    s_id={item["metaData"]["s_id"]}
                    name={item["metaData"]["name"]}
                    usn={item["metaData"]["usn"]}
                    status={item["status"]}
                    attendenceHandler={attendenceHandler}
                    mail={item["metaData"]["email"]}
                    phno={item["metaData"]["phno"]}
                    yoj={item["metaData"]["year_joined"]}
                    room={item["metaData"]["room_id"]}
                    hf1={item["metaData"]["hf1"]}
                    hf2={item["metaData"]["hf2"]}
                    hf3={item["metaData"]["hf3"]}
                    hf4={item["metaData"]["hf4"]}
                    cd={item["metaData"]["cd"]}
                  />
                );
              })}
            </div>
          </div>
          <br />
          {/* {students.length > 0 ? (
            <ButtonUI text="Mark It" clicked={reportIt} />
          ) : null} */}
          <div style={{ height: "10px" }}></div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
