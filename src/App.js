import "./App.css";
import AboutMeSection from "./CSS_files/AboutMeSection.css";
import ExperienceSection from "./CSS_files/ExperienceSection.css";
import HomeCSS from "./CSS_files/HomeCSS.css";
import IntroSection from "./CSS_files/IntroSection.css";
import NavbarCSS from "./CSS_files/NavbarCSS.css";
import SkillsSection from "./CSS_files/SkillsSection.css";
import PersonalWorkSection from "./CSS_files/PersonalWorkSection.css";
import BlogCSS from "./CSS_files/BlogCSS.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./WebPages/Home.js";
import Footer from "./WebPages/Footer";
import BlogPage from "./WebPages/BlogComponent";
function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BlogComponent.js" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
