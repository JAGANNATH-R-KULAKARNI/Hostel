import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { supabase } from "../Supabase";
import AlertUI from "./Students/Alert";
import StudentIdUI from "./Students/StudentId";
import StudentUI from "./Students/Student";
import Home2UI from "./Home2";
import RoomUI from "./Students/Room";
import useMediaQuery from "@mui/material/useMediaQuery";
import HotelImagesUI from "./Students/HotelImages";
import QueriesUI from "./Students/Queries";

export default function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [alertModal, setAlertModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [userDetails, setUserDetails] = React.useState(null);
  const [googleData, setGoogleData] = React.useState(null);
  const m1 = useMediaQuery("(min-width:600px)");

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      const userDetails = await supabase
        .from("students")
        .select("*,rooms(*)")
        .eq("email", data["email"]);
      console.log(data);
      setGoogleData(data);
      if (data.email == process.env.REACT_APP_ADMIN2) navigate("/admin");
      // else navigate("/");
      console.log(data["email"]);
      const studentData = await supabase
        .from("students")
        .select("*")
        .eq("email", data["email"]);
      console.log(studentData);
      setEmail(data["email"]);
      setName(data["user_metadata"]["name"]);
      if (studentData.data.length != 1) {
        setAlertModal(true);
      }

      setUserDetails(userDetails["data"][0]);
    } else {
      navigate("/signin");
    }

    console.log("User Details");

    console.log(userDetails["data"][0]);
  }

  React.useEffect(() => {
    setInterval(() => {
      fetchTheProfile();
    }, 1000);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      {alertModal ? (
        <AlertUI
          closeAlertModal={() => setAlertModal(!alertModal)}
          email={email}
          logOut={props.logOut}
          name={name}
        />
      ) : null}
      <Home2UI />
      {userDetails ? (
        <div
          style={{
            display: m1 ? "flex" : "block",
            justifyContent: "center",
            marginTop: "-200px",
          }}
        >
          <div>
            <StudentIdUI user={userDetails} />
          </div>
          <div style={{ width: "5%", height: "50px" }}></div>
          <div style={{ marginTop: "-25px" }}>
            <StudentUI user={userDetails} google={googleData} />
          </div>
          <div style={{ width: "5%", height: "30px" }}></div>
          <div>
            <RoomUI user={userDetails} />
          </div>
        </div>
      ) : null}
      <div style={{ marginTop: m1 ? "130px" : "70px" }}>
        <HotelImagesUI />
      </div>
      {m1 ? <br /> : null}
      {m1 ? <br /> : null}
      <div>{userDetails ? <QueriesUI user={userDetails} /> : null}</div>
      <br />
    </div>
  );
}
