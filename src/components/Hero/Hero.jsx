import React from "react";
import "./Hero.css";
import resume from "../../images/resume.png";
import downArrow from "../../images/down_arrow.png";

function Hero({ theme, setTheme }) {
  return (
    <main className="heroContent">
      <h1 className="heroTitle">Frontend Developer</h1>
      <p className="heroDesc">
        I’m a front-end developer specializing in the ReactJS ecosystem, with a
        keen eye for detail and a passion for creating intuitive and efficient
        user interfaces.
      </p>
      <button className="heroResumeButton">
        <div className="heroResumeImgContent">
          <img className="heroResumeImg" src={resume} alt="resume" />
        </div>
        <p className="heroResumeDesc">Download CV</p>
      </button>

      <div className="downSidedArrowContent">
        <a href="/">
          <img
            src={downArrow}
            alt="Down Sided Arrow"
            className="downSidedArrowImg"
          />
        </a>
      </div>
    </main>
  );
}

export default Hero;
