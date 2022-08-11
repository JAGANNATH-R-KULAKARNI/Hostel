import React from "react";
import "./Home.css";
import background from "./images/Boys_hostel.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { supabase } from "../Supabase";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      console.log(data);
      if (data.email == process.env.REACT_APP_ADMIN2) navigate("/admin");
      else navigate("/");
    } else {
      navigate("/signin");
    }
  }

  React.useEffect(() => {
    setInterval(() => {
      fetchTheProfile();
    }, 1000);
  }, []);

  return (
    <div
      style={{
        marginTop: "-20px",
        maxHeight: "500px",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.88,
        minHeight: "500px",
      }}
    >
      <main className="app_bro">
        <div className="boxes">
          <ul style={{ opacity: 0.2 }} className="ul_bro">
            <li className="ul_bro_one"></li>
            <li className="ul_bro_two"></li>
            <li className="ul_bro_three"></li>
            <li className="ul_bro_four"></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
