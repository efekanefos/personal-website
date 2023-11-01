import React from "react";
import trelloProject from "../../images/trello_project.png";
import reactLogo from "../../images/projects_react.png";
import reactDnd from "../../images/projects_dnd.png";

function ProjectCard() {
  return (
    <div className="projectCardContent">
      <div className="projectCardOverviewContent">
        <a href="https://react-app-kanban.vercel.app/">
          <img
            src={trelloProject}
            alt="Project Overview"
            className="projectCardOverviewImg"
          />
        </a>
      </div>

      <div className="projectCardInfoContent">
        <h4 className="projectCardTitle">Trello Clone</h4>
        <p className="projectCardDesc">
          Behold, my impressive Trello Clone. It replicates the sleek UI of the
          original and packs a multitude of features. You can add tasks, edit
          tasks, move them freely vertically or horizontaly. You can add
          descriptions and comments to specific tasks and edit them with built
          in text editor.
        </p>
        <ul className="productCardTechStackList">
          <li className="productCardTechStackListItem">
            <img
              src={reactLogo}
              alt="React"
              className="productCardTechStackImg"
            />
          </li>
          <li className="productCardTechStackListItem">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 942 559.9"
            >
              <circle cx="749" cy="125.5" r="25.7"></circle>
              <path d="M643.3 211.5c0 21.2 0 76.5 0 91.8 0 19.5-3.5 90.9-76.1 90.9-75.9 0-74.3-71.3-74.3-98.8 0-23.4 0-70.4 0-83.8h-39v94.1s-8.1 128.5 111.3 128.5c119.4 0 115.4-124.5 115.4-124.5v-98.2h-37.3zM816.5 45.2H855v378.5h-38.5zM504 472.7c-79.4 0-194.9-12-268.3-12.8-12.2 0-23 1.5-32.6 3.9l13-11.6c14.3-12.9 37.6-20.9 43.4-22 94.4-18.6 164.8-93.7 164.8-212.8C424.3 83.2 329.3 0 212.1 0S0 76.9 0 217.3c0 126.8 84.9 208 193.1 216.5 0 0 5.7.1 6.4 3.6.6 3.1-4.8 7.6-4.8 7.6l-64.4 59.6 12.4 13.4 23.8-21.3c13.3-10.6 35.1-23.6 62.1-23.6 89.3 0 188.2 89.1 280.1 86.9 134.4-3.2 165.7-93 169.1-104.6.2-.4-55.6 17.3-173.8 17.3zM39.4 217.3c0-114.3 77.3-177 172.8-177 95.4 0 172.8 67.7 172.8 177 0 112.6-77.3 177-172.8 177-95.5-.1-172.8-67.8-172.8-177zM903.5 45.2H942v378.5h-38.5zM729.5 211.1H768v212.5h-38.5z"></path>
            </svg>
          </li>
          <li className="productCardTechStackListItem">
            <img
              src={reactDnd}
              alt="React Drag and Drop"
              className="productCardTechStackImg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
