import React from "react";
import ButtonUI from "../Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { supabase } from "../../Supabase";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RegisterUI from "./Register";
import AnnounceUI from "./Announce";

export default function HomeAdmin() {
  const m1 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();
  const [register, setRegister] = React.useState(false);
  const [announce, setAnnounce]=React.useState(false);

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
      <div style={{ marginTop: m1 ? "-40px" : "-20px" }}>
        <Divider />
      </div>
      <div style={{ marginTop: m1 ? "40px" : "20px" }}>
        <ButtonUI
          text="Register a new Student"
          clicked={() => setRegister(!register)}
        />
        <br />
        <ButtonUI text="Make An Announcement" 
                  clicked={() => setAnnounce(!announce)}
                  />
        <br />
        <ButtonUI text="Download Attendence Info" />
        <br />
        <ButtonUI text="Edit the Hotels Menu" />
        <br />
        <ButtonUI text="Students Queries" />
        <br />
        <ButtonUI text="Students Details" />
        <br />
        <br />
      </div>
    </div>
  );
}
