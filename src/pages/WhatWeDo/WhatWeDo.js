import React from "react";
import './WhatWeDo.scss'
import { Container } from "react-bootstrap";

const WhatWeDo = () => {
  return (
    <Container className="what-we-do d-flex align-items-center justify-content-center">
      <div
        className="mt-5"
        style={{
          fontSize: 20,
          fontWeight: 400,
          lineHeight: '35px',
          color: " grey",
          width: "70%",
          textAlign: "center",
          height: '84vh',
        }}
      >
        2014, 20 dairy farmers met in palanpur, banaskantha, to form the madhavi
        Cooperative Creameries Association. Their idea was simple: Join together
        to effectively market and distribute members’ dairy production across
        the country. Today, our four businesses (spanning the whole agricultural
        system!) give us a farmer-to-fork view of agriculture.
      </div>
    </Container>
  );
};

export default WhatWeDo;
