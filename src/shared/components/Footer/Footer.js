import React from "react";
import logo from "../../assets/images/madhviLogo.png";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-end mt-2">
      <div className="d-flex flex-column">
        <img src={logo} height={'30px'}/>
        <span style={{color: 'red',fontSize: '14px', fontWeight: 600}}>Terms and Conditions</span>
      </div>
      <div style={{fontSize: '14px', fontWeight: 600}}>copyright@2023 Madhvi Dairy Private Limited</div>
      <div>
        <button className="learn-more-btn mt-4 ms-3">Help</button>
      </div>
    </div>
  );
};

export default Footer;
