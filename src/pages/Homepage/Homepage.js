import React from "react";
import { Button, Container } from "react-bootstrap";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { ConditionallyRender } from "react-util-kit";
import "./Homepage.scss";
import locationIcon from "../../shared/assets/images/location.png";
import anthemVideo from "../../shared/assets/images/anthemVideo.png";
import receipe1 from "../../shared/assets/images/image8.jpeg";
import receipe2 from "../../shared/assets/images/image9.jpeg";
import sendIcon from "../../shared/assets/images/sendicon.png";
import closemessageicon from "../../shared/assets/images/closeMessage.png";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Popover,
} from "@mui/material";
import Page1 from "../Page1/Page1";
import Page3 from "../Page4/Page3";
import { ReactComponent as ButtonIcon } from "../../shared/assets/icons/robot.svg";

// import config from "../../bots/docsbot/config";
import config from "../../bots/dairybot/config";
// import MessageParser from "../../bots/docsbot/MessageParser";
import MessageParser from "../../bots/dairybot/MessageParser";
// import ActionProvider from "../../bots/docsbot/ActionProvider";
import ActionProvider from "../../bots/dairybot/ActionProvider";
import { useState } from "react";
import InfinitySlider from "../../shared/components/InfinitySlider/InfinitySlider";
import Reviews from "../../shared/components/Reviews/Reviews";
import SlickSlider from "../../shared/components/SlickSlider/SlickSlider";
import OurRecipes from "../OurRecipes/OurRecipes";
import page4BgImg from "../../shared/assets/images/page4Img.jpeg";

const Homepage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showChatbot, toggleChatbot] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const locationData = [
    {
      label: "MADHVI RESTRO - Gathaman Rd",
      link: "https://www.google.com/maps/place/MADHVI+RESTRO/@24.1685203,72.4355227,17z/data=!3m1!4b1!4m6!3m5!1s0x395ce95b6332f7b1:0x63b85b7e92d46aec!8m2!3d24.1685203!4d72.4355227!16s%2Fg%2F11c2mw6v48?entry=ttu",
    },
    {
      label: "Palanpur - Gathaman Gate Rd",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@24.1696212,72.4327564,17z/data=!3m1!4b1!4m5!3m4!1s0x395ceb30f8250a55:0xaa231b6795758549!8m2!3d24.1696163!4d72.4349451",
    },
    {
      label: "Palanpur - Tirupati Plaza",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@24.1731862,72.4053396,15z/data=!4m9!1m2!2m1!1stirupati+madhvi!3m5!1s0x395cebde245aaaab:0xd01e16fffe662e6f!8m2!3d24.1732129!4d72.4217489!15sCg90aXJ1cGF0aSBtYWRodmlaESIPdGlydXBhdGkgbWFkaHZpkgELZGFpcnlfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTJiMWxwZUU5UkVBReABAA",
    },
    {
      label: "Dhanera - Madhusudan Plaza",
      link: "https://www.google.com/maps/place/Madhvi/@24.5034696,72.0287149,17z/data=!3m1!4b1!4m5!3m4!1s0x395cab2a81ed283d:0x58fdabb08371de4f!8m2!3d24.5034647!4d72.0309036",
    },
    {
      label: "Tharad - Bombay Market",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@24.3850487,71.6283668,17z/data=!4m9!1m2!2m1!1stharad+madhvi!3m5!1s0x395b4905d586efef:0x278fc4e7b92ed7cd!8m2!3d24.3843352!4d71.6316629!15sCg10aGFyYWQgbWFkaHZpIgOIAQFaDyINdGhhcmFkIG1hZGh2aZIBC2RhaXJ5X3N0b3Jl4AEA",
    },
    {
      label: "Chhapi - Golden Plaza",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@24.0289219,72.3837393,17z/data=!3m1!4b1!4m5!3m4!1s0x395cf25c383a38cb:0xfeb87f245af23d9c!8m2!3d24.028917!4d72.385928",
    },
    {
      label: "Siddhpur - Dethali Cross Road",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@23.9209534,72.3618392,17z/data=!4m9!1m2!2m1!1ssiddhpur+madhvi!3m5!1s0x395cf59fb14c5193:0x77b38acdb4820a31!8m2!3d23.9196736!4d72.366842!15sCg9zaWRkaHB1ciBtYWRodmlaESIPc2lkZGhwdXIgbWFkaHZpkgELZGFpcnlfc3RvcmXgAQA",
    },
    {
      label: "Visnagar - Sona Complex Rd 1",
      link: "https://www.google.com/maps/place/Madhvi/@23.7063214,72.5323377,17z/data=!4m9!1m2!2m1!1sVisnagar+madhvi!3m5!1s0x395c501dc80e929f:0xe14a04dfc3d8f5ab!8m2!3d23.7050992!4d72.5369243!15sCg9WaXNuYWdhciBtYWRodmlaESIPdmlzbmFnYXIgbWFkaHZpkgELZGFpcnlfc3RvcmXgAQA",
    },
    {
      label: "Gandhinagar - Near Rellence Chowkdl",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@23.0721929,72.2510518,11z/data=!4m9!1m2!2m1!1sgandhinagar+madhvi!3m5!1s0x395c2b5ea4002479:0xd8128f64687f44af!8m2!3d23.1851104!4d72.6331397!15sChJnYW5kaGluYWdhciBtYWRodmkiA4gBAVoUIhJnYW5kaGluYWdhciBtYWRodmmSAQtkYWlyeV9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSMWFIWnBVMFIzRUFF4AEA",
    },
    {
      label: "Ahmedabad - SATYAMEV EMINENCE, Science City Rd",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@23.0716846,72.2510526,11z/data=!4m9!1m2!2m1!1sahmedabad+madhvi!3m5!1s0x395e9d1a416d3441:0x4a138d13df5d5ff6!8m2!3d23.0716846!4d72.5147245!15sChBhaG1lZGFiYWQgbWFkaHZpWhIiEGFobWVkYWJhZCBtYWRodmmSAQtkYWlyeV9zdG9yZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSbGFVOTJVR2xCUlJBQuABAA",
    },
    {
      label:
        "Ahmedabad - GF 12/13, 6, SATELITE, behind Rahul Tower, Vraj Vihar, Jodhpur Village",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@23.0147026,72.3860974,12z/data=!4m10!1m2!2m1!1smadhvi+dairy+ahmedabad!3m6!1s0x395e9b642307db87:0xce5103a5f066a3c8!8m2!3d23.0147026!4d72.5179333!15sChZtYWRodmkgZGFpcnkgYWhtZWRhYmFkIgOIAQFaGCIWbWFkaHZpIGRhaXJ5IGFobWVkYWJhZJIBC2RhaXJ5X3N0b3JlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJvTm1SeVYzUlJSUkFC4AEA!16s%2Fg%2F11srhg4n_c",
    },
    {
      label: "Himmatnagar - Oppo Dev Dhan Complex, Sahakari Jin Road",
      link: "https://www.google.com/maps/place/Madhvi+Dairy/@23.5826687,72.9708896,17z/data=!3m1!4b1!4m6!3m5!1s0x395db99fa7a3ad21:0x462f94fd7c49eea3!8m2!3d23.5826687!4d72.9730783!16s%2Fg%2F11tgfnmddz",
    },
  ];

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="home-container pb-3 pt-3">
        <div className="text-center text-white home-title pt-5">
          - WELCOME TO MADHVI -
        </div>
        <div className="home-content d-flex flex-column">
          <span className="text-white owners-title">
            For The Love Of Our Dairy And Our Farmers -Owners
          </span>
          <span className="owners-subtitle text-white">
            Buying Madhvi Dairy Products Directly Benefits Our Over 1000
            Farmers-Owners. So Eat the Butter, The Cheeze, The Cookies, All Of
            It. Eat it likr you own it.
          </span>
          <button className="learn-more-btn mt-5">LEARN MORE</button>
        </div>
        <div className="d-flex w-100 justify-content-end ps-3 mb-3">
          {/* {!anchorEl ? (
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
          )} */}

          {/* <Popover
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
          > */}
          {/* <div
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
            </div> */}
          <div
            style={{ backgroundColor: "#fff" }}
            className="app-chatbot-container"
          >
            <ConditionallyRender
              ifTrue={showChatbot}
              show={
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              }
            />
          </div>

          <button
            className="app-chatbot-button"
            onClick={() => toggleChatbot((prev) => !prev)}
          >
            <ButtonIcon className="app-chatbot-button-icon" />
          </button>
          {/* </Popover> */}
        </div>
      </div>
      <div
        style={{ marginBottom: "100px", marginTop: "100px" }}
        className=" d-flex flex-column slider-container"
      >
        <span className="slider-text">Feeling Hungry?</span>
        <span className="slider-title">
          <span style={{ fontWeight: 500 }}>Checkout</span> Whats on the menu?
        </span>
        <div className="mt-4">
          <InfinitySlider />
        </div>
      </div>

      <div style={{ marginBottom: "100px", marginTop: "100px" }} className="">
        <span className="slider-title">Our Recipes</span>
        <OurRecipes />
      </div>
      <div
        style={{ marginBottom: "100px", marginTop: "100px" }}
        className=" d-flex flex-column slider-container align-items-center "
      >
        <span className="slider-text">Don't take our word for it</span>
        <span className="slider-title">
          <span style={{ fontWeight: 500 }}>What</span> Hear What foodies say
        </span>
        <div
          className="mt-4 slider-slick-main-wrapper"
          style={{ maxWidth: "90%" }}
        >
          <SlickSlider />
        </div>
      </div>
      <div style={{ marginBottom: "100px", marginTop: "100px" }} className="">
        <Page1 />
      </div>
      <div
        style={{ marginBottom: "100px", marginTop: "100px" }}
        className=" d-flex flex-column location-container align-items-center "
      >
        <span
          className="slider-title"
          style={{ color: "#000", fontSize: 45, fontWeight: 700 }}
        >
          <span style={{ fontWeight: 400 }}>Find</span> Madhvi Location Near you
        </span>
        <div className="d-flex flex-wrap gap-3 mt-5">
          {locationData.map((item) => {
            return (
              <div className="location-wrapper d-flex align-items-center justify-content-center gap-1">
                <img
                  src={locationIcon}
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
                <a href={item?.link} className="locationText">
                  {item?.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{}} className="">
        <Page3 />
      </div>
      <div style={{ marginTop: "100px" }} className=" farmer-since">
        <img style={{ width: "100%" }} src={page4BgImg} />
        <div class="contentLayer">
          <h5>Farmer-Owned Since 1921</h5>
          <p>
            In 1921, we formed Minnesota Cooperative Creameries Association with
            the belief that we&#39;re better when we work together.
          </p>
          {/* <a href="/our-company/  "
           class="button whiteBtn"
           aria-label="Eternal - Learn More">Learn More</a> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
