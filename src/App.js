import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import Home from "./WebPages/Home.js";
import About from "./WebPages/About.js";
import Work from "./WebPages/Work.js";
import Contact from "./WebPages/Contact.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
