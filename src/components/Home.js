import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div style={{ marginTop: "-20px", maxHeight: "488px" }}>
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
