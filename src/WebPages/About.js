const About = () => {
  function wordCode() {
    let code = "code";
    return code;
  }
  return (
    <div className="aboutPage">
      <h1 className="intro">
        Hi, I'm Hossein. <br /> I'm a
        <span style={{ color: "#0469FF" }}> software engineer </span> <br />
        student in Ottawa.
      </h1>
      <div>
        <h3>A Little About Me</h3>
        <br />
        <p></p>
        <br />
        <h3>
          Why <span style={{ color: "#0469FF" }}> Software Engineer </span>?
        </h3>
        <br />
        <p>
          Growing up, I was always facinated by technology. I became curious on
          how video games are created, how websites are designed and how
          Augmented Reality works. And the answer behind all these questions is{" "}
          <span style={{ color: "#FF0000" }}>{wordCode()}</span>. That’s when I
          realized that everything around us is{" "}
          <span style={{ color: "#FF0000" }}>{wordCode()}</span>. Whether it is
          swinging around Manhattan with your friendly neighbourhood Spider-Man
          or searching your favorite restaurant on Google, its all thousands and
          thousands lines of{" "}
          <span style={{ color: "#FF0000" }}>{wordCode()}</span>.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
