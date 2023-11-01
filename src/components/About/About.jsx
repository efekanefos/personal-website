import React from "react";
import "./About.css";
import profilePicture from "../../images/developer_profile_picture.png";
import aboutLinkedIn from "../../images/about_linkedin.png";
import aboutTwitter from "../../images/about_twitter.png";
import aboutGithub from "../../images/about_github.png";
import aboutInstagram from "../../images/about_instagram.png";

function About({ theme }) {
  return (
    <main id="aboutContent" className="aboutContent">
      <div className="aboutInfoContent">
        <h2 className={`aboutTitle ${theme === "light" ? "darkText" : ""}`}>
          ABOUT ME
        </h2>

        <p className={`aboutDesc ${theme === "light" ? "darkText" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit similique illum labore id, nam ex eum quasi quis totam
          expedita enim, veniam sed quidem. Quo aliquam minus tenetur suscipit.
          Soluta itaque ipsum maxime! Id, odio. Corporis nostrum velit
          excepturi. Soluta ducimus
        </p>

        <p className={`aboutDesc ${theme === "light" ? "darkText" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          suscipit similique illum labore id, nam ex eum quasi quis totam
          expedita enim, veniam sed quidem. Quo aliquam minus tenetur suscipit.
          Soluta itaque ipsum maxime! Id, odio. Corporis nostrum velit
          excepturi. Soluta ducimus itaque ipsum maxime! Id, odio. Corporis
          nostrum velit excepturi. Soluta Id, odio. Corporis nostrum velit
          excepturi.
        </p>

        <ul className="aboutList">
          <a
            className="aboutListItemLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/efekan-efe/"
          >
            <li className="aboutListItem">
              <div className="aboutIconContent">
                <img src={aboutLinkedIn} alt="LinkedIn" className="aboutIcon" />
              </div>
              <p className="aboutListItemDesc">LinkedIn</p>
            </li>
          </a>

          <a
            className="aboutListItemLink"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/efekannefee"
          >
            <li className="aboutListItem">
              <div className="aboutIconContent">
                <img src={aboutTwitter} alt="Twitter" className="aboutIcon" />
              </div>
              <p className="aboutListItemDesc">Twitter</p>
            </li>
          </a>

          <a
            className="aboutListItemLink"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/efekanefos"
          >
            <li className="aboutListItem">
              <div className="aboutIconContent">
                <img src={aboutGithub} alt="Github" className="aboutIcon" />
              </div>
              <p className="aboutListItemDesc">Github</p>
            </li>
          </a>

          <a
            className="aboutListItemLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/efekannefee/"
          >
            <li className="aboutListItem">
              <div className="aboutIconContent">
                <img
                  src={aboutInstagram}
                  alt="Instagram"
                  className="aboutIcon"
                />
              </div>
              <p className="aboutListItemDesc">Instagram</p>
            </li>
          </a>
        </ul>
      </div>
      <div className="aboutProfileContent">
        <div className="aboutProfileImgContent">
          <img src={profilePicture} alt="Profile" className="aboutProfileImg" />
        </div>
      </div>
    </main>
  );
}

export default About;
