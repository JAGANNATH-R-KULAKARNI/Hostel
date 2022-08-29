import NavBarUI from "./components/NavBar";
import FooterUI from "./components/Footer";
import HomeUI from "./components/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignInUI from "./components/Auth/SignIn";
import SFooter from "./components/SFooter";
import "./App.css";

import { supabase } from "./Supabase";
import React from "react";
import AdminUI from "./components/Admin/Home";
import RegisterUI from "./components/Admin/Register";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        LoginChangeHandler(event, session);

        if (event === "SIGNED_IN") {
          // setStatus(true);
          // Router.push("/home");
        }
        if (event === "SIGNED_OUT") {
          // setStatus(false);
          // Router.push("/home");
        }
      }
    );
    checkUser();
    // Router.push("/home");
    fetchTheProfile();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const user = await supabase.auth.user();
    if (!user) {
      Navigate("/signin");
    }
  }

  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 1000);
  }, []);

  async function LoginChangeHandler(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    })
      .then((u) => {
        checkUser();
      })
      .catch((u) => {
        checkUser();
      });
  }
  async function fetchTheProfile() {
    const data = await supabase.auth.user();
  }

  async function logOut() {
    await supabase.auth.signOut();
    Navigate("/signin");
    window.location.reload();
  }

  return (
    <div>
      <Router>
        <NavBarUI logOut={logOut} />
        <Routes>
          <Route path="/" element={<HomeUI logOut={logOut} />} />
          <Route path="/signin" element={<SignInUI />} />
          <Route path="/admin" element={<AdminUI />} />
        </Routes>
        <SFooter />
        {/* <main className="app_bro" style={{ marginTop: "-17px" }}>
          <div className="boxes">
            <ul style={{ opacity: 0.2 }} className="ul_bro">
              <li className="ul_bro_one"></li>
              <li className="ul_bro_two"></li>
              <li className="ul_bro_three"></li>
              <li className="ul_bro_four"></li>
            </ul>
          </div>
            <NavBarUI logOut={logOut} /> 
          <Routes>
            <Route path="/" element={<HomeUI />} />
            <Route path="/signin" element={<SignInUI />} />
            <Route path="/admin" element={<AdminUI />} />
          </Routes>
          <FooterUI />   */}
        {/* </main> */}
      </Router>
    </div>
  );
}

export default App;
