import React from "react";
import NavLink from "./NavLink";

const homeIcon = (
  <svg stroke="#707070" viewBox="0 0 20 27" fill="red">
    <g id="Group_61" data-name="Group 61" transform="translate(-49 -191)">
      <g
        id="Rectangle_19"
        data-name="Rectangle 19"
        transform="translate(49 201)"
        fill="none"
        stroke-width="3"
      >
        <rect width="9" height="17" rx="4.5" stroke="none" />
        <rect x="1.5" y="1.5" width="6" height="14" rx="3" fill="none" />
      </g>
      <g
        id="Rectangle_20"
        data-name="Rectangle 20"
        transform="translate(60 191)"
        fill="none"
        stroke-width="3"
      >
        <rect width="9" height="27" rx="4.5" stroke="none" />
        <rect x="1.5" y="1.5" width="6" height="24" rx="3" fill="none" />
      </g>
    </g>
  </svg>
);

const sportIcon = (
  <svg stroke="#707070" viewBox="0 0 21.5 21.5">
    <g id="ic-sport-basketball" transform="translate(-1.25 -1.25)">
      <circle
        id="Ellipse_15"
        data-name="Ellipse 15"
        cx="10"
        cy="10"
        r="10"
        transform="translate(2 2)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <line
        id="Line_3"
        data-name="Line 3"
        x2="14"
        y2="14"
        transform="translate(5 5)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        x1="14"
        y2="14"
        transform="translate(5 5)"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        id="Path_8"
        data-name="Path 8"
        d="M12,2A10,10,0,0,1,2,12"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        fill-rule="evenodd"
      />
      <path
        id="Path_9"
        data-name="Path 9"
        d="M12,22A10,10,0,0,1,22,12"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        fill-rule="evenodd"
      />
    </g>
  </svg>
);

const calanderIcon = (
  <svg fill="#707070" viewBox="0 0 20 20">
    <path
      id="calender-svgrepo-com"
      d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
      transform="translate(-2 -2)"
    />
  </svg>
);

const informationIcon = (
  <svg fill="#707070" viewBox="0 0 20 20">
    <g id="info-svgrepo-com" transform="translate(0 -0.008)">
      <g id="Group_18" data-name="Group 18" transform="translate(0 0.008)">
        <g id="Group_17" data-name="Group 17">
          <path
            id="Path_10"
            data-name="Path 10"
            d="M10,.008a10,10,0,1,0,10,10A10.011,10.011,0,0,0,10,.008ZM10,18.19a8.182,8.182,0,1,1,8.182-8.182A8.191,8.191,0,0,1,10,18.19Z"
            transform="translate(0 -0.008)"
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M150.924,130.008a.924.924,0,0,0-.924.924v6.159a.924.924,0,1,0,1.848,0v-6.159A.924.924,0,0,0,150.924,130.008Z"
            transform="translate(-140.924 -122.212)"
          />
          <path
            id="Path_12"
            data-name="Path 12"
            d="M150.924,70.011a.923.923,0,1,0,.653.27A.932.932,0,0,0,150.924,70.011Z"
            transform="translate(-140.924 -65.775)"
          />
        </g>
      </g>
    </g>
  </svg>
);

const NavComponent = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="">
          <NavLink icon={homeIcon} />
        </li>
        <li className="">
          <NavLink icon={calanderIcon} />
        </li>
        <li className="active">
          <NavLink icon={sportIcon} />
        </li>
        <li className="">
          <NavLink icon={informationIcon} />
        </li>
      </ul>
    </div>
  );
};

export default NavComponent;
