import hossein_img from "../images/lprofilepic.jpeg";
import Resume from "../images/Professional_Resume.pdf";
const Intro = () => {
  function openLink(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="Intro">
      <div className="textBtn">
        <div className="text">
          <span className="introHome">
            Hi, I'm Hossein. <br /> I'm a
            <span style={{ color: "#0469FF" }}> software engineer </span> <br />
            student in Ottawa.
          </span>
        </div>
        <div className="buttons">
          <button
            className="githubBtn btn btn-default"
            onClick={() => {
              openLink("https://github.com/Hossein-Hmb");
            }}>
            Github
          </button>
          <button
            className="linkedinBtn btn btn-default"
            onClick={() => {
              openLink("https://www.linkedin.com/in/hossein-hajmirbaba");
            }}>
            LinkedIn
          </button>
          <a href={Resume} className="pdfDownload" download="Resume">
            <button className="resumeBtn">Resume</button>
          </a>
        </div>
      </div>
      <div className="image">
        <img src={hossein_img} alt="Hossein's img" className="hosseinImg" />
      </div>
    </div>
  );
};

export default Intro;
