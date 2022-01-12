import React from "react";
import image from "../assets/air-quality.png";
import WeatherCardHeader from "./common/WeatherCardHeader";

const icon = (
  <svg viewBox="0 0 20.31 20.31">
    <g id="Group_63" data-name="Group 63" transform="translate(1449 -442)">
      <path
        id="Path_19"
        data-name="Path 19"
        d="M3,7.493H9.409A2.747,2.747,0,1,0,6.662,4.747"
        transform="translate(-1450.084 441)"
        fill="none"
        stroke="#f97f29"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        id="Path_20"
        data-name="Path 20"
        d="M4,16H14.071a2.747,2.747,0,1,1-2.747,2.747"
        transform="translate(-1450.169 439.817)"
        fill="none"
        stroke="#f97f29"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        id="Path_21"
        data-name="Path 21"
        d="M2,11.493H17.564a2.747,2.747,0,1,0-2.747-2.747"
        transform="translate(-1450 440.662)"
        fill="none"
        stroke="#f97f29"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </g>
  </svg>
);

const AirQualityCard = () => {
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
        heading="Air Quality"
        label="Main Pollution: PM 2.5"
        theme="light"
      />

      <div className="weather-container">
        <div className="weather-number">
          <h1 className="air-quality-heading">396</h1>
          <div className="weather-tag weather-tag-air">
            <p>AQI</p>
          </div>
        </div>
      </div>
      <p className="air-quality-label">West Wild</p>

      <div className="air-quality-footer">
        <div className="air-quality-footer-labels">
          <p>Good</p>
          <p>Hazardos</p>
        </div>
        <progress value="50" max="100"></progress>
      </div>
    </div>
  );
};

export default AirQualityCard;
