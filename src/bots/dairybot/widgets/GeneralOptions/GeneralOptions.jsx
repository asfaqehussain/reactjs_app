import React from "react";

import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Product",
      handler: props.actionProvider.handleProductChoice,
      id: 1,
    },
    {
      name: "Contact Us",
      handler: props.actionProvider.handleLostLuggage,
      id: 2,
    },
    {
      name: "Switch Branch",
      handler: props.actionProvider.handleAirport,
      id: 5,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
