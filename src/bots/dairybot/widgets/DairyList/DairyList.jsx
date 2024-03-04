import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import { getFlightsData } from "../../data/data";

import "./DairyList.css";

const DairyList = ({ flightType, selectedBranch, scrollIntoView }) => {
  const [flights, setFlights] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const getFlights = async () => {
      const flights = await getFlightsData(flightType);

      setFlights(flights);
      setType(flightType);
    };
    getFlights();
  }, []);

  useEffect(() => {
    scrollIntoView();
  });

  const flightSlice = flights.slice(0, 5);
  const departure = type === "departure";

  return (
    <div className="flight-list-container">
      <div className="flight-header-container">
        <div className="flight-id-header">Available item names</div>
      </div>
      <ul className="flight-list">
        {flightSlice.map((flight) => {
          return (
            <li className="flight-list-item" key={flight.FlightId}>
              <ConditionallyRender
                ifTrue={departure}
                show={<div className="flight-list-icon-container"></div>}
                elseShow={
                  <div className="flight-list-icon-container-arrival"></div>
                }
              />

              <div className="flight-id">{flight.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DairyList;
