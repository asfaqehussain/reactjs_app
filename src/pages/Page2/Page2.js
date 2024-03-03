import React from "react";
import { Container } from "react-bootstrap";
import "./Page2.scss";
import receipe1 from "../../shared/assets/images/image2.jpeg";
import receipe2 from "../../shared/assets/images/image3.jpeg";
import receipe3 from "../../shared/assets/images/image7.jpeg";
import receipe4 from "../../shared/assets/images/snickerDoodles.jpeg";

const Page2 = () => {
  return (
    <Container className="view-collection-container">
      <div className="view-collection-title text-center">VIEW COLLECTION</div>
      <div className="d-flex flex-wrap gap-5 justify-content-evenly mt-2">
        <div className="receipe-wrapper d-flex flex-column">
          {" "}
          <img style={{ objectFit: "contain", width: '100%', height: '250px' }} src={receipe1} />
          <span className="text-center">MADHVI SPECIAL LASSI</span>
        </div>
        <div className="receipe-wrapper d-flex flex-column">
          {" "}
          <img style={{ objectFit: "contain" , width: '100%', height: '250px' }} src={receipe2} />
          <span className="text-center">RAJBHOG SWEET</span>
        </div>
        <div className="receipe-wrapper d-flex flex-column">
          {" "}
          <img style={{ objectFit: "contain", width: '100%', height: '250px' }} src={receipe3} />
          <span className="text-center">Cookies</span>
        </div>
        <div className="receipe-wrapper d-flex flex-column">
          {" "}
          <img style={{ objectFit: "contain", width: '100%', height: '250px' }} src={receipe4} />
          <span className="text-center">SNICKERDOODLES</span>
        </div>
      </div>
    </Container>
  );
};

export default Page2;
