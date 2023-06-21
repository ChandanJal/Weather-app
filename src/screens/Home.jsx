import React from "react";

import WeatherCard from "../components/WeatherCard";
import NavComponent from "../components/common/NavComponent";
import AirQualityCard from "../components/AirQualityCard";
import LocationSelector from "../components/common/LocationSelector";
import SideBar from "../components/SideBar";
import CurrentLocation from "../components/common/CurrentLocation";
import SportsCard from "../components/common/SportsCard";

const Home = () => {
  return (
    <div className="container">
      {/* <SportsCard /> */}
      <SideBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WeatherCard />
        <AirQualityCard />
      </div>
    </div>
  );
};

export default Home;
