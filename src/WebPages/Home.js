import Intro from "./Intro.js";
import AboutMe from "./AboutMe.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import PersonalWork from "./PersonalWork.js";

const Home = () => {
  return (
    <div className="homePage">
      <div className="components">
        <div className="Intro"/>
          <Intro/>
        <div/>
        <div className="AboutMe"/>
          <AboutMe/>
        <div/>
        <div className="Skills"/>
          <Skills/>
        <div/>
        <div className="Experience"/>
          <Experience/>
        <div/>
        <div className="PersonalWork"/>
          <PersonalWork/>
        <div/>
      </div>
    </div>
  );
};

export default Home;