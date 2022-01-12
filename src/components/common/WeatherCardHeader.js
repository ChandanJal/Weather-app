import React from "react";

const WeatherCardHeader = ({ icon, heading, label, theme }) => {
  let headerClass = "weather-card-header ";
  headerClass += theme || theme == "light" ? "light" : "";
  return (
    <div className={headerClass}>
      <div className="weather-header-icon">{icon}</div>

      <div className="weather-header-container">
        <h3>{heading}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default WeatherCardHeader;
