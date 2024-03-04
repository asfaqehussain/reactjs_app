import React, { useState, useEffect } from "react";
import image from "../../../../shared/assets/images/bottle.png";

import { allData, getFlight, getFlightsData } from "../../data/data";

import "./SingleProduct.css";

const SingleProduct = ({
  selectedProductId,
  // selectedBranch,
  scrollIntoView,
}) => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    const getFlights = async () => {
      let selectedFlightData = getFlight(selectedProductId?.toLowerCase());

      if (selectedFlightData) {
        setSelectedBranch(selectedFlightData);
      } else {
        setSelectedBranch("notfound");
      }
    };

    setSelectedBranch(null); // Clear previous data
    getFlights();
  }, []);

  useEffect(() => scrollIntoView());

  if (selectedBranch === "notfound") {
    return (
      <div className="single-flight-container">
        Could not find any flights for that flightid. Please try another.
      </div>
    );
  }
  if (selectedBranch === null) {
    return null;
  }

  if (!selectedBranch) return null;
  const departure = selectedBranch.IsDeparture;

  return (
    <div className="single-flight-container">
      <div className="single-flight-header">
        <div className="single-flight-icon-container">
          <img
            src={image}
            alt="My Image"
            style={{ height: "15px", width: "15px", objectFit: "contain" }}
          />
        </div>
        <h2 className="single-flight-heading">{selectedBranch.name}</h2>
      </div>
      <img
        src={selectedBranch.image_url}
        alt="My Image"
        style={{ height: "150px", width: "150px", objectFit: "contain" }}
      />
    </div>
  );
};

export default SingleProduct;
