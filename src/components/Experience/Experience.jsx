import React from "react";
import "./Experience.css";

function Experience() {
  const skills = [
    "React.js",
    "Front-End Development",
    "Javascript",
    "Github",
    "Web Development",
    "Git",
    "Wordpress",
    "nopCommerce",
    "Cascading Style Sheets (CSS)",
  ];

  return (
    <main className="experienceContent">
      <h2 className="experienceTitle">EXPERIENCE</h2>
      <div className="experienceColumns">
        <div className="experienceDateContent">
          <p className="experienceDate">2022 - current</p>
        </div>

        <div className="experienceInfoContent">
          <h3 className="experienceCompanyTitle">Nitro Mechatronics</h3>
          <p className="experiencePositionDesc">
            Webmaster / Front-End Developer
          </p>
          <p className="experienceWorkDesc">
            At first i was re-creating company's old Wordpress based websites.
            Then i started to create new Wordpress websites for other products
            of company. While i was studying Vanilla Js & Wordpress we started
            to build websites using nopCommerce. I was building Front-End
            templates for nopCommerce websites with using HTML,CSS and Vanilla
            Js. Now i am building these templates with React.js.
          </p>

          <ul className="experienceSkillList">
            {skills.map((skill, index) => (
              <li key={index} className="experienceSkillListItem">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Experience;
