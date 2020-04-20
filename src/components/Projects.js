import React from "react";
import nfl from "../images/nfl.png";
import dog from "../images/dog.png";
import "../css/Projects.css";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <div className="project">
          <h4>Giphy App</h4>
          <img src={dog} alt="dog"></img>
          <h5>A web app that uses Giphy's API to render gifs</h5>
          <a href="https://github.com/jrosario22/giphy-api">See Code</a>
        </div>
        <div className="project">
          <h4>2018 NFL Rushing Leaders</h4>
          <img src={nfl} alt="nfl-data"></img>
          <h5>
            Analyzed the rushing statistics of the 2018 NFL season to learn more
            about the game of football{" "}
          </h5>
          <a href="https://github.com/jrosario22/2018NFLRushingLeaders">
            See Code
          </a>
          <a href="https://sites.google.com/view/2018nflrushingleaders/home">
            See Data
          </a>
        </div>
      </div>
    </div>
  );
}
