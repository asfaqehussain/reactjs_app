import React, { useState } from "react";
import "./Page3.scss";
import { Container } from "react-bootstrap";
import page4BgImg from "../../shared/assets/images/page4Img.jpeg";
import Footer from "../../shared/components/Footer/Footer";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Popover,
} from "@mui/material";

const Page3 = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };
  return (
    <>
      <Dialog open={openAlert} onClose={handleAlertClose}>
        <DialogTitle style={{ color: "green" }}>
          {"Submitted Successfully"}
        </DialogTitle>

        <DialogContentText></DialogContentText>

        <DialogActions>
          <Button onClick={handleAlertClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <Container className="signup-wrapper">
        <div className="signup-title text-center">SIGN UP PAGE</div>
        <div className="d-flex justify-content-center mt-5">
          <div className="red-bg-wrapper d-flex flex-column">
            <span className="red-bg-text">Looking for inspiration?</span>
            <span className="red-bg-text">
              Signup for our newsletter today!
            </span>
          </div>
          <div className="input-wrapper">
            <input
              className="input-field w-100"
              placeholder="Enter Your Email"
            />
            <div className="mt-4 d-flex gap-3">
              <input className="input-field" placeholder="First Name" />
              <input className="input-field" placeholder="Last Name" />
            </div>
            <button onClick={handleClickOpen} className="learn-more-btn mt-4">
              Send
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page3;
