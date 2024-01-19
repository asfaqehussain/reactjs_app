import React from "react";
import "./Page1.scss";
import bannerimg from "../../shared/assets/images/image11.jpeg";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";

const Page1 = () => {
    const navigate= useNavigate();
  return (
    <Container className="page-eat-it-container">
      <div className="eat-it-title">Eat It Like You Own It</div>
      <div className="position-relative">
        <img
          style={{ width: "80%", objectFit: "cover", height: "80vh" }}
          src={bannerimg}
        />
        <div className="favorite-receipe-wrapper d-flex flex-column position-absolute">
            <span className="favorite-receipe-text">Favorite Butter Receipe</span>
            <span>Here are some of our most receipes that use classic salted butter</span>
            <button onClick={()=>navigate('/page2')} className="learn-more-btn mt-4 ms-4 ">VIEW COLLECTION</button>
        </div>
      </div>
    </Container>
  );
};

export default Page1;
