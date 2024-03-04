import React from "react";

import "./DairySelector.css";

const DairySelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (type) => {
    setState((state) => ({
      ...state,
      flightType: type,
    }));

    actionProvider.handleDairyTypeChoice(type);
  };

  return (
    <div>
      <h1 className="flight-selector-header">
        What type of product are you looking for?
      </h1>
      <div className="flight-selector-button-container">
        <button
          className="flights-selector-button"
          onClick={() => setType("sweets")}
        >
          Sweets
        </button>
        <button
          className="flights-selector-button"
          onClick={() => setType("cookies")}
        >
          Cookies
        </button>
        <button
          className="flights-selector-button"
          onClick={() => setType("others")}
        >
          Others
        </button>
      </div>
    </div>
  );
};

export default DairySelector;
