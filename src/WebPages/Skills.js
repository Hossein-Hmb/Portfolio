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

const Skills = () => {
  function skillInfo(title, icon, level) {
    return (
      <div className="skilldiv">
        <div className="title">
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

  function Icons(value) {
    return (
      <IconContext.Provider value={{ size: "70px" }}>
        <div>{value}</div>
      </IconContext.Provider>
    );
  }

  return (
    <div className="Skills" style={{ color: "white" }}>
      <div className="section__header">
        <h1 className="header">Skills</h1>
      </div>
      <div className="skillsContent">
        {skillInfo("HTML", <SiHtml5 />, "Intermediate")}
        {skillInfo("CSS", <SiCss3 />, "Intermediate")}
        {skillInfo("JavaScript", <SiJavascript />, "Beginner")}
        {skillInfo("React.JS", <SiReact />, "Beginner")}
      </div>
      <div className="skillsContent">
        {skillInfo("Git", <SiGit />, "Beginner")}
        {skillInfo("Java", <SiJava />, "Beginner")}
        {skillInfo("Python", <SiPython />, "Beginner")}
        {skillInfo("Figma", <SiFigma />, "Beginner")}
      </div>
    </div>
  );
};

export default Skills;
