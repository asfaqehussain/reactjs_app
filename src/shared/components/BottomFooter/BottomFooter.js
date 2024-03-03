import React from "react";
import "./BottomFooter.scss";
import { Container } from "react-bootstrap";

const BottomFooter = () => {
  return (
    <div className="bottom-footer-main d-flex align-item-center justify-content-center pt-10 pb-10">
      <Container className="bottom-footer-wrapper text-center w-100 gap-10 flex-column flex-sm-row d-flex align-items-center justify-content-between">
        <span className="bottom-footer-text">
          © Copyright 2024 TrendGram, Inc.
        </span>
        <div className="d-flex align-items-center gap-8">
          <span className="bottom-footer-text">Privacy Policy</span>
          <span className="bottom-footer-text ft-20">{"•"}</span>
          <span className="bottom-footer-text">Terms & Conditions</span>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
