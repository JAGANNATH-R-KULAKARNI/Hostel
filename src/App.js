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


import { SFooter } from "./components/SFooter";
import "./App.css"

import { supabase } from "./Supabase";
import React from "react";
import AdminUI from "./components/Admin/Home";





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
    }, 100);
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
  }

  return (
    <div>
      <Router>
        <NavBarUI logOut={logOut} />
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/signin" element={<SignInUI />} />
          <Route path="/admin" element={<AdminUI />} />
        </Routes>
        <SFooter />
      </Router>
    </div>
  );
}

export default App;
