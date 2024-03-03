import React from "react";
import logo from "../../assets/images/madhviLogo.png";
import { Container } from "react-bootstrap";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container pb-2 pt-2" style={{ backgroundColor: "#fff" }}>
      <Container className="d-flex justify-content-between align-items-center mt-2 pb-1">
        <div className="d-flex flex-column">
          {/* <img src={logo} height={"30px"} /> */}
          <span style={{ color: "red", fontSize: "14px", fontWeight: 600 }}>
            Terms and Conditions
          </span>
        </div>
        <div style={{ fontSize: "14px", fontWeight: 600 }}>
          copyright@2023 Madhvi Dairy Private Limited
        </div>
        <div>
          <button className="learn-more-btn">Help</button>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
