import React from "react";
import ButtonUI from "../Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { supabase } from "../../Supabase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RegisterUI from "./Register";
import AnnounceUI from "./Announce";

import DetailsUI from "./Details1";

import MenuUI from "./Menu";

import AttendenceUI from "./Attendence";


import AttendenceUI from "./Attendence";
import ReportUI from "./Report";


export default function HomeAdmin() {
  const m1 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();
  const [register, setRegister] = React.useState(false);
  const [announce, setAnnounce] = React.useState(false);

  const [menu, setMenu] = React.useState(false);
  const [attendence, setAttendence] = React.useState(false);
  const [details, setDetails] = React.useState(false);


  const [report, setReport] = React.useState(false);


  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      console.log(data);
      if (data.email != process.env.REACT_APP_ADMIN2) navigate("/");
    } else {
      navigate("/signin");
    }
  }

  React.useEffect(() => {
    fetchTheProfile();
  }, []);

  return (
    <div>
      <h1
        style={{
          marginTop: "10px",
          width: "100%",
          textAlign: "center",
          fontSize: m1 ? "60px" : "40px",
          fontWeight: 700,
        }}
      >
        Admin Page
      </h1>
      {register ? (
        <RegisterUI registerHandler={() => setRegister(!register)} />
      ) : null}
      {announce ? (
        <AnnounceUI registerHandler={() => setAnnounce(!announce)} />
      ) : null}


      {menu ? (
        <MenuUI registerHandler={() => setMenu(!menu)} />
        ) : null}

      {attendence ? (
        <AttendenceUI registerHandler={() => setAttendence(!attendence)} />

      ) : null}

       {details ? (
        <DetailsUI registerHandler={() => setDetails(!details)} />

      ) : null}

      {attendence ? (
        <AttendenceUI registerHandler={() => setAttendence(!attendence)} />
      ) : null}
      {report ? <ReportUI registerHandler={() => setReport(!report)} /> : null}


      <div style={{ marginTop: m1 ? "-40px" : "-20px" }}>
        <Divider />
      </div>
      <div style={{ marginTop: m1 ? "40px" : "20px" }}>
        <ButtonUI
          text="Register a new Student"
          clicked={() => setRegister(!register)}
        />
        <br />


        


        <ButtonUI
          text="Take The Attendence"
          clicked={() => setAttendence(!attendence)}
        />


        <br />
        <ButtonUI
          text="Make An Announcement"
          clicked={() => setAnnounce(!announce)}
        />
        <br />
        <ButtonUI text="Attendence Report" clicked={() => setReport(!report)} />
        <br />
        <ButtonUI text="Edit the Hotels Menu" 
             clicked={() => setMenu(!menu)}/>
        <br />
        <ButtonUI text="Students Queries" />
        <br />
        <ButtonUI text="Students Details" 
            clicked={() => setDetails(!details)}/>
        <br />
        <br />
      </div>
    </div>
  );
}