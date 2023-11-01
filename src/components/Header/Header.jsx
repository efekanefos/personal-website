import React from "react";
import lightMode from "../../images/lightMode.png";
import linkedin from "../../images/linkedin.png";
import "./Header.css";

function Header({ theme, setTheme }) {
  return (
    <header className="headerContent">
      <div className="logoContent">
        <a href="/" className="logo">
          Logo
        </a>
      </div>

      <div className="infoHeaderContent">
        <div className="connectContent">
          <p className="connectDesc">Connect</p>
          <div className="connectImgContent">
            <img src={linkedin} alt="Linkedin Logo" className="connectImg" />
          </div>
        </div>
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="themeChangeContent"
        >
          <img
            src={lightMode}
            alt="Light Mode Symbol"
            className="themeChangeImg"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
