import React from "react";
import LocationSelector from "./common/LocationSelector";
import UVICard from "./common/UVICard";
import WeatherPredictionCard from "./common/WeatherPredictionCard";

const SideBar = () => {
  const handleClick = () => {
    alert("button clicked");
  };

  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <LocationSelector />

        {/* Canvas Area  */}

        <UVICard />
        <h2 className="mt-1">Weather Prediction</h2>
        <WeatherPredictionCard />
        <WeatherPredictionCard />

        <button className="next-day" type="button" onClick={handleClick}>
          <svg viewBox="0 0 14.169 14.169">
            <path
              id="calender-svgrepo-com_1_"
              data-name="calender-svgrepo-com (1)"
              d="M14.044,3.417H12.627V2.708a.708.708,0,0,0-1.417,0v.708H6.959V2.708a.708.708,0,0,0-1.417,0v.708H4.125A2.125,2.125,0,0,0,2,5.542v8.5a2.125,2.125,0,0,0,2.125,2.125h9.918a2.125,2.125,0,0,0,2.125-2.125v-8.5a2.125,2.125,0,0,0-2.125-2.125Zm.708,10.627a.708.708,0,0,1-.708.708H4.125a.708.708,0,0,1-.708-.708V9.085H14.752Zm0-6.376H3.417V5.542a.708.708,0,0,1,.708-.708H5.542v.708a.708.708,0,1,0,1.417,0V4.834H11.21v.708a.708.708,0,1,0,1.417,0V4.834h1.417a.708.708,0,0,1,.708.708Z"
              transform="translate(-2 -2)"
              fill="#fff"
            />
          </svg>

          <label>Next 5 Days</label>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
