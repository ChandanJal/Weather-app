import React from "react";

import WeatherCard from "../components/WeatherCard";
import NavComponent from "../components/common/NavComponent";
import AirQualityCard from "../components/AirQualityCard";
import LocationSelector from "../components/common/LocationSelector";

const Home = () => {
  return (
    <div className="container">
      <LocationSelector />
    </div>
  );
};

export default Home;
