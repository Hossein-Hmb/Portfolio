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
          <a
            className="link"
            onClick={() => {
              openLink("https://github.com/Hossein-Hmb");
            }}>
            Github
          </a>
          <a
            className="link"
            onClick={() => {
              openLink("https://www.linkedin.com/in/hossein-hajmirbaba");
            }}>
            LinkedIn
          </a>
          <a href={Resume} className="link" download="Resume">
            Resume
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
