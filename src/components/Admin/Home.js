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
<<<<<<< HEAD
  const [announce, setAnnounce]=React.useState(false);
=======
  const [announce, setAnnounce] = React.useState(false);
>>>>>>> a7e4710a163d9c2f6d8c76c062d7d465014f82eb

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
<<<<<<< HEAD
     {announce ? (
        <AnnounceUI registerHandler={() => setAnnounce(!announce)} />
      ) : null}   
=======
      {announce ? (
        <AnnounceUI registerHandler={() => setAnnounce(!announce)} />
      ) : null}
>>>>>>> a7e4710a163d9c2f6d8c76c062d7d465014f82eb
      <div style={{ marginTop: m1 ? "-40px" : "-20px" }}>
        <Divider />
      </div>
      <div style={{ marginTop: m1 ? "40px" : "20px" }}>
        <ButtonUI
          text="Register a new Student"
          clicked={() => setRegister(!register)}
        />
        <br />
<<<<<<< HEAD
        <ButtonUI text="Make An Announcement"
        clicked={() => setAnnounce(!announce)} />
=======
        <ButtonUI text="Take The Attendence" />
        <br />
        <ButtonUI
          text="Make An Announcement"
          clicked={() => setAnnounce(!announce)}
        />
>>>>>>> a7e4710a163d9c2f6d8c76c062d7d465014f82eb
        <br />
        <ButtonUI text="Download Attendence Info" />
        <br />
        <ButtonUI text="Edit the Hostel Menu" />
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
