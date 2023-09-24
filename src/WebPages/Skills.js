import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiFigma,
  SiPython,
  SiJava,
} from "react-icons/si";
import { IconContext } from "react-icons";

//Arrow function to make a skill card
const Skills = () => {
  function skillInfo(title, icon, level) {
    return (
      <div className="skilldiv">
        <div className="skill_title">
          <h2>{title}</h2>
        </div>
        <div className="logo">{Icons(icon)}</div>
        <div className="progressbardiv">
          <div className="progressBar">
            <div className="progressLine"></div>
          </div>
        </div>
        <div className="level">{level}</div>
      </div>
    );
  }

  //Fucntion to give a value to icons
  function Icons(value) {
    return (
      <IconContext.Provider value={{ size: "70px" }}>
        <div>{value}</div>
      </IconContext.Provider>
    );
  }

  return (
    <div className="sectionAnim Skills">
      <div className="skillsContent">
        {skillInfo("HTML", <SiHtml5 />, "Intermediate")}
        {skillInfo("CSS", <SiCss3 />, "Intermediate")}
        {skillInfo("JavaScript", <SiJavascript />, "Beginner")}
        {skillInfo("React.js", <SiReact />, "Beginner")}
        {skillInfo("Git", <SiGit />, "Beginner")}
        {skillInfo("Java", <SiJava />, "Beginner")}
        {skillInfo("Python", <SiPython />, "Beginner")}
        {skillInfo("Figma", <SiFigma />, "Beginner")}
      </div>
    </div>
  );
};

export default Skills;
