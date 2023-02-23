const Home = () => {
  return (
    <div className="homePage">
      <h1 className="introHome">
          Hi, I'm Hossein. <br /> I'm a
          <span style={{ color: "#0469FF" }}> software engineer </span> <br/>
          student in Ottawa.
        </h1>
      <div className="components">
        <intro/>
        <aboutMe/>
        <skills/>
        <experience/>
        <personalWork/>
      </div>
    </div>
  );
};

export default Home;
