import React from "react";
import "./Home.css";
import background from "./images/Boys_hostel.jpg";

export default function Home(props) {
  return (
    <div
      style={{
        marginTop: "-20px",
        maxHeight: "500px",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
      }}
    >
      <main className="app_bro">
        <div className="boxes">
          <ul style={{ opacity: 0.1 }} className="ul_bro">
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
