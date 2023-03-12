import "./App.css";
import AboutMeSection from "./CSS_files/AboutMeSection.css";
import ExperienceSection from "./CSS_files/ExperienceSection.css";
import HomeCSS from "./CSS_files/HomeCSS.css";
import IntroSection from "./CSS_files/IntroSection.css";
import NavbarCSS from "./CSS_files/NavbarCSS.css";
import SkillsSection from "./CSS_files/SkillsSection.css";
import PersonalWorkSection from "./CSS_files/PersonalWorkSection.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import Home from "./WebPages/Home.js";

function App() {
  return (
    <Router>
      <div className="alert">
        <span>
          Hi, please keep in mind that this website is still under construction.
          Thank you!
        </span>
      </div>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
