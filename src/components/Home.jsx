import React from "react";

import home from "../assets/svgs/home.svg";
import calender from "../assets/svgs/calender.svg";
import sport from "../assets/svgs/sport.svg";
import information from "../assets/svgs/information.svg";
import weather from "../assets/weather.png";
import WeatherCard from "./WeatherCard";

const Home = () => {
  return (
    <div className="main-container">
      <div className="nav-bar">
        <ul>
          <li>
            <a href="#" className="nav-link active">
              <img src={home} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <img src={calender} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <img src={sport} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <img src={information} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="tool-bar">Toolbar</div>
        <div className="main-section">
          Main Section
          <WeatherCard image={weather} />
        </div>
      </div>
      <div className="side-weather-bar">Side Weather Bar</div>
    </div>
  );
};

export default Home;
