import React from "react";

import Link from "./Link";

const ContactLink = () => {
  const getUrl = () => {
    return `https://www.example.com/contactus`;
  };

  return <Link url={getUrl()} title={"contact us page."} />;
};

export default ContactLink;
