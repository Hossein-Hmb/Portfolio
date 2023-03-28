import Intro from "./Intro.js";
import AboutMe from "./AboutMe.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";

const Home = () => {
  return (
    <div className="homePage">
      <div className="components">
        <Intro />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
