import React, { useState, useEffect } from "react";

import { ReactComponent as DepartureFlight } from "../../icons/plane-departure.svg";
import { ReactComponent as ArrivalFlight } from "../../icons/plane-arrival.svg";
import { ReactComponent as Arrows } from "../../icons/arrows-h.svg";
import image from '../../../../shared/assets/images/bottle.png'

import { allData, getFlight, getFlightsData } from "../../data/data";

import "./SingleFlight.css";
import { ConditionallyRender } from "react-util-kit";

const SingleFlight = ({
  selectedFlightId,
  selectedAirport,
  scrollIntoView,
}) => {
  const [selectedFlight, setSelectedFlight] = useState(null);


  useEffect(() => {
    const getFlights = async () => {
      let selectedFlightData = getFlight(selectedFlightId?.toLowerCase());
  
      if (selectedFlightData) {
        setSelectedFlight(selectedFlightData);
      } else {
        setSelectedFlight('notfound');
      }
    };
  
    setSelectedFlight(null); // Clear previous data
    getFlights();
  }, []);

  useEffect(() => scrollIntoView());

  if (selectedFlight === "notfound") {
    return (
      <div className="single-flight-container">
        Could not find any flights for that flightid. Please try another.
      </div>
    );
  }
  if (selectedFlight === null) {
    return (
      // <div className="single-flight-container">
      //   Could not find any flights for that flightid. Please try another.
      // </div>
      null
    );
  }

  if (!selectedFlight) return null;
  const departure = selectedFlight.IsDeparture;

  return (
    <div className="single-flight-container">
      <div className="single-flight-header">
        <div className="single-flight-icon-container">
        <img src={image} alt="My Image" style={{ height: '15px', width: '15px', objectFit:'contain' }} />
        </div>
        <h2 className="single-flight-heading">{selectedFlight.name}</h2>
      
      </div>

      {/* <img src={selectedFlight.image_url} /> */}
      <img src={selectedFlight.image_url} alt="My Image" style={{ height: '150px', width: '150px', objectFit:'contain', }} />
      
    </div>
  );
};

export default SingleFlight;
