import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./BranchSelector.css";

const BranchSelector = ({ selectedBranch, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [airports, setBranchs] = useState([]);

  const airportOptions = [
    {
      iata: "OSL",
      nameCompact: "Palanpur",
    },
    {
      iata: "BOO",
      nameCompact: "Mehsana",
    },
    {
      iata: "BGO",
      nameCompact: "Deesa",
    },
    {
      iata: "KRS",
      nameCompact: "Ahmedabad",
    },
  ];

  useEffect(() => {
    setBranchs(airportOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedBranch: airports.find(
        (airport) => airport?.iata === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {
    actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!airports) return null;

  const createBranchOptions = () => {
    return airports.map((item) => {
      return (
        <option key={item?.iata} value={item?.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

  return (
    <div className="airport-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <h2 className="airport-selector-heading">Madhvi Branch</h2>
            <select
              className="airport-selector"
              value={selectedBranch?.iata}
              onChange={handleSubmit}
            >
              {createBranchOptions()}
            </select>
            <button className="airport-button-confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
        elseShow={
          <>
            <h2 className="airport-selector-heading">Madhvi Branch</h2>
            <p>
              Great! You have chosen this branch: {selectedBranch.nameCompact}
            </p>
          </>
        }
      />
    </div>
  );
};

export default BranchSelector;
