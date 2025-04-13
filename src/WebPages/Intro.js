import code from "../images/code.png";
import React from "react";
import "../CSS_files/IntroSection.css"; // Make sure to create a corresponding CSS file

const Intro = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hello World!</h1>
        <p>
          I'm <span className="highlight">Hossein</span>, designing interactive
          web experiences that connect businesses with their{" "}
          <span className="highlight">audience</span>.
        </p>
        <button className="contact-button">Contact Me</button>
      </div>
      <div className="hero-code">
        <img src={code} alt="Code Snippet" />
      </div>
    </div>
  );
};

export default Intro;
