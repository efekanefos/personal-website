import React from "react";
import "./Hero.css";
import resume from "../../images/resume.png";
import downArrow from "../../images/down_arrow.png";

function Hero({ theme, setTheme }) {
  return (
    <main className="heroContent">
      <h1 className={`heroTitle ${theme === "light" ? "darkText" : ""}`}>
        Frontend Developer
      </h1>
      <p className={`heroDesc ${theme === "light" ? "darkText" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsa.
        Lorem ipsum dolor sit
      </p>
      <button className="heroResumeButton">
        <div className="heroResumeImgContent">
          <img className="heroResumeImg" src={resume} alt="resume" />
        </div>
        <p className="heroResumeDesc">Download CV</p>
      </button>

      <div className="downSidedArrowContent">
        <a href="#aboutContent">
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
