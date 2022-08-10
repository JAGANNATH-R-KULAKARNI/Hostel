import NavBarUI from "./components/NavBar";
import FooterUI from "./components/Footer";
import HomeUI from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInUI from "./components/Auth/SignIn";
import { SFooter } from "./components/SFooter";
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <NavBarUI />
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/signin" element={<SignInUI />} />
        </Routes>
        <SFooter />
      </Router>
    </div>
  );
}

export default App;
