import React from "react";
import image from "../assets/weather.png";
import WeatherCardHeader from "./common/WeatherCardHeader";

const icon = (
  <svg viewBox="0 0 20 20">
    <path
      id="calender-svgrepo-com"
      d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
      transform="translate(-2 -2)"
      fill="#f97f29"
    />
  </svg>
);

const WeatherCard = () => {
  return (
    <div
      className="weather-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <WeatherCardHeader
        icon={icon}
        heading="Weather"
        label="What's the weather"
      />

      <div className="weather-container">
        <div className="weather-number">
          <h1>
            22<sup>o</sup>C
          </h1>
          <div className="weather-tag">
            <p>
              12<sup>o</sup>C
            </p>
          </div>
        </div>
      </div>
      <p>Clear cloud</p>

      <div className="weather-footer">
        <div className="weather-footer-card">
          <p>Pressure</p>
          <h3>800mb</h3>
        </div>
        <div className="weather-footer-card">
          <p>Visibility</p>
          <h3>800mb</h3>
        </div>
        <div className="weather-footer-card">
          <p>Humodity</p>
          <h3>800mb</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
