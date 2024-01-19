import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.scss";
import messageicon from "../../shared/assets/images/message.png";
import anthemVideo from "../../shared/assets/images/anthemVideo.png";
import receipe1 from "../../shared/assets/images/image8.jpeg";
import receipe2 from "../../shared/assets/images/image9.jpeg";
import sendIcon from "../../shared/assets/images/sendicon.png";
import closemessageicon from "../../shared/assets/images/closeMessage.png";
import { Popover } from "@mui/material";
import Page1 from "../Page1/Page1";
import Page3 from "../Page4/Page3";

const Homepage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Container className="home-container">
        <div className="text-center text-white home-title">
          - WELCOME TO MADHVI -
        </div>
        <div className="home-content d-flex flex-column">
          <span className="text-white owners-title">
            For The Love Of Our Dairy And Our Farmers -Owners
          </span>
          <span className="owners-subtitle text-white mt-5">
            Buying Madhvi Dairy Products Directly Benefits Our Over 1000
            Farmers-Owners. So Eat the Butter, The Cheeze, The Cookies, All Of
            It. Eat it likr you own it.
          </span>
          <button className="learn-more-btn mt-5">LEARN MORE</button>
        </div>
        <div className="d-flex w-100 justify-content-end ps-3 mb-3">
          {!anchorEl ? (
            <img
              onClick={handleClick}
              className="message-icon position-absolute"
              src={messageicon}
            />
          ) : (
            <img
              onClick={handleClose}
              className="message-icon position-absolute"
              src={closemessageicon}
            />
          )}

          <Popover
            id={id}
            //   style={{width: '500px'}}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              className="popup-content-wrapper d-flex flex-column"
              style={{ padding: 10, width: "350px", gap: "10px" }}
            >
              <div
                className="popup-content-card"
                style={{ padding: 10, borderRadius: 10 }}
              >
                <span className="message-card-title">Welcome!</span>
                <div className="messages-wrapper pt-2 pb-2 ps-2 mt-2 pe-2 d-flex gap-2 align-items-center justify-content-between">
                  <span className="message-container-text">
                    Chat with our Virtual Assistant
                  </span>
                  <img src={sendIcon} />
                </div>
              </div>
              <div
                className="popup-content-card d-flex flex-column gap-2"
                style={{ padding: 10, borderRadius: 10 }}
              >
                <div className="messages-wrapper d-flex gap-2 align-items-center">
                  <img
                    src={receipe1}
                    style={{
                      width: 35,
                      height: 35,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  />
                  <span className="message-container-text">
                    Cinnamon Apple Crisp Receipe
                  </span>
                </div>
                <div className="messages-wrapper d-flex gap-2 align-items-center">
                  <img
                    src={receipe2}
                    style={{
                      width: 35,
                      height: 35,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  />
                  <span className="message-container-text">Our Farmers</span>
                </div>
              </div>
              <div
                className="popup-content-card"
                style={{ padding: 10, borderRadius: 10 }}
              >
                <span className="message-card-title ">
                  Eat It Like You Own It Anthem Video
                </span>
                <div className="d-flex align-item-center justify-content-center mt-2">
                  <img
                    src={anthemVideo}
                    style={{ borderRadius: "10px" }}
                    height={"150px"}
                  />
                </div>
              </div>
            </div>
          </Popover>
        </div>
      </Container>
      <div className="mt-5">
        <Page1 />
      </div>
      <div className="mt-5">
        <Page3 />
      </div>
    </>
  );
};

export default Homepage;
