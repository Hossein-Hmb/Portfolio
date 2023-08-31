import h_img from "../images/profile-pic.png";

const Intro = () => {
  function openLink(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="sectionAnim Intro">
      <div className="backgroundGradient"></div>
      <div className="textBtn">
        <div className="text">
          <span className="introHome">
            Hi, <span className="name">I'm Hossein.</span> <br />
            I'm a <span className="role">software engineer</span> <br />
            student in <span className="location">Ottawa.</span>
          </span>
        </div>
      </div>
      <div className="image">
        <img src={h_img} alt="Hossein's img" className="hosseinImg" />
      </div>
    </div>
  );
};

export default Intro;
