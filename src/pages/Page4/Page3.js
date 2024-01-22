import React from "react";
import "./Page3.scss";
import { Container } from "react-bootstrap";
import page4BgImg from "../../shared/assets/images/page4Img.jpeg";
import Footer from "../../shared/components/Footer/Footer";

const Page3 = () => {
  return (
    <Container className="signup-wrapper">
      <div className="signup-title text-center">SIGN UP PAGE</div>
      <div className="d-flex justify-content-center">
        <div className="red-bg-wrapper d-flex flex-column">
          <span className="red-bg-text">Looking for inspiration?</span>
          <span className="red-bg-text">Signup for our newsletter today!</span>
        </div>
        <div className="input-wrapper">
          <input className="input-field" placeholder="Enter Your Email" />
          <div className="mt-4 d-flex gap-3">
            <input className="input-field" placeholder="First Name" />
            <input className="input-field" placeholder="Last Name" />
          </div>
          <button className="learn-more-btn mt-4 ms-3">Send</button>
        </div>
      </div>
      <div className="mt-5">
        <img style={{ width: "100%", height: "380px" }} src={page4BgImg} />
      </div>
      <Footer />
    </Container>
  );
};

export default Page3;
