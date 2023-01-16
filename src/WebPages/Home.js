const Home = () => {
  return (
    <div className="homePage">
      <div className="">
        <h1 className="introHome">
          Hi, I'm Hossein. <br /> I'm a
          <span style={{ color: "#0469FF" }}> software engineer </span> <br />
          student in Ottawa.
        </h1>
      </div>
      <div className="buttons">
        <a href="/About"><button type="button" className=" homeBtn btn" >About Me</button></a>
        <a href="/Work"><button type="button" className=" homeBtn btn" >My Work</button></a>
        <a href="/Contact"><button type="button" className=" homeBtn btn" >Contact Me</button></a>
      </div>
    </div>
  );
};

export default Home;
