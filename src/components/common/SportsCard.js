import React from "react";

const SportsCard = () => {
  return (
    <div className="sport-card m-1 p-1 background-ink-dark border-radius-22">
      <h3>Charlton Athletic vs Milton Keynes Dons</h3>
      <div style={{ display: "block" }}>
        <p className="label green-label text-ink-dark">Footbal</p>
      </div>
      <ul>
        <li>
          <svg viewBox="0 0 23 23">
            <g
              id="Group_50"
              data-name="Group 50"
              transform="translate(0.375 -0.04)"
            >
              <rect
                id="Rectangle_35"
                data-name="Rectangle 35"
                width="23"
                height="23"
                transform="translate(-0.375 0.04)"
                fill="rgba(255,255,255,0)"
              />
              <path
                id="XMLID_490_"
                d="M33.113,1.234H31.985A1.4,1.4,0,0,0,30.6,0H25.278a1.4,1.4,0,0,0-1.384,1.234H22.766a1.05,1.05,0,0,0-1.05,1.05V4.462a1.05,1.05,0,0,0,1.05,1.05h1.118v.629a1.4,1.4,0,0,0,.7,1.207l2.03,1.172v.963h-.173a.993.993,0,0,0-.992.992V12.1H24.435a1.019,1.019,0,1,0,0,2.038h7.009a1.019,1.019,0,1,0,0-2.038H30.432V10.475a.993.993,0,0,0-.992-.992h-.173V8.52L31.3,7.348a1.4,1.4,0,0,0,.7-1.207V5.512h1.118a1.05,1.05,0,0,0,1.05-1.05V2.284A1.05,1.05,0,0,0,33.113,1.234ZM22.883,4.345V2.4h1V4.345ZM33,4.345h-1V2.4h1Z"
                transform="translate(-16.493 4.353)"
                fill="#f97f29"
              />
            </g>
          </svg>
          Home
        </li>
      </ul>
    </div>
  );
};

export default SportsCard;
