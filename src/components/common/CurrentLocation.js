import React from "react";

const CurrentLocation = () => {
  return (
    <div className="current-location">
      <div className="current-location-icon">
        <svg viewBox="0 0 9.372 15.991">
          <g id="location-svgrepo-com" transform="translate(-54.643)">
            <path
              id="Path_6"
              data-name="Path 6"
              d="M59.329,0a4.691,4.691,0,0,0-4.686,4.686A4.643,4.643,0,0,0,55.1,6.7l.019.04,3.541,6.855a.757.757,0,0,0,1.345,0l3.54-6.853.017-.036a4.643,4.643,0,0,0,.456-2.019A4.691,4.691,0,0,0,59.329,0Zm0,7.139a2.453,2.453,0,1,1,2.453-2.453A2.456,2.456,0,0,1,59.329,7.139Z"
              fill="#fff"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M98.772,249.018h-3.61a.454.454,0,1,0,0,.909h3.61a.454.454,0,1,0,0-.909Z"
              transform="translate(-37.638 -233.935)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div className="location-label">
        <h4>Rajkot</h4>
        <p>Current Location</p>
      </div>
    </div>
  );
};

export default CurrentLocation;
