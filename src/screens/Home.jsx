import React from "react";

import WeatherCard from "../components/WeatherCard";
import NavComponent from "../components/common/NavComponent";
import AirQualityCard from "../components/AirQualityCard";
import LocationSelector from "../components/common/LocationSelector";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="container">
      <SideBar />
    </div>
  );
};

export default Home;
