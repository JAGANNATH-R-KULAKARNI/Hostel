import React from "react";
import ButtonUI from "../Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { supabase } from "../../Supabase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HomeAdmin() {
  const m1 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();

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
    setInterval(() => {
      fetchTheProfile();
    }, 100);
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
      <div style={{ marginTop: m1 ? "-40px" : "-20px" }}>
        <Divider />
      </div>
      <div style={{ marginTop: m1 ? "40px" : "20px" }}>
        <ButtonUI text="Register a new Student" />
        <br />
        <ButtonUI text="Make An Announcement" />
        <br />
        <ButtonUI text="Download Attendence Info" />
        <br />
        <ButtonUI text="Edit the Hotels Menu" />
        <br />
        <ButtonUI text="Students Queries" />
        <br />
        <ButtonUI text="Students Details" />
        <br />
      </div>
    </div>
  );
}