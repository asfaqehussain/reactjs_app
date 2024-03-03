import React from "react";
import receipes from "../../shared/assets/images/image11.jpeg";
import receipes1 from "../../shared/assets/images/image16.jpeg";
import receipes2 from "../../shared/assets/images/image14.jpeg";
import receipes3 from "../../shared/assets/images/image12.jpeg";
import { Container } from "react-bootstrap";
import "./OurProduct.scss";

const OurProduct = () => {
  const data = [
    { img: receipes1, label: "" },
    { img: receipes2, label: "" },
    { img: receipes3, label: "" },
    { img: receipes, label: "" },
  ];
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        style={{ width: "100%" }}
        className="d-flex gap-3 flex-wrap justify-content-between mt-5"
      >
        <div className="our-products d-flex align-items-center justify-content-center flex-column">
          <span className="all-things-dairy-title">Our Products</span>
          <span className="all-things-dairy-desc">
            Sunup to sundown, the work that goes into each and every one of our
            delicious, farm-to-fork products makes even the most humble farmer
            swell with pride.
          </span>
          <div className="overlay"></div>
        </div>
        <Container className="d-flex align-items-center justify-content-center">
          <div
            style={{ marginTop: 50, rowGap: 40, columnGap: 20 }}
            className="d-flex flex-wrap justify-content-between"
          >
            {data?.map((item) => {
              return (
                <div
                  className="receipe-card"
                  key={item?.label}
                  style={{
                    padding: 10,
                    backgroundColor: "#fff",
                    width: 280,
                    borderRadius: 10,
                  }}
                >
                  <img
                    src={item?.img}
                    style={{
                      width: 240,
                      height: 240,
                      objectFit: "contain",
                      borderRadius: 10,
                    }}
                  />
                  <div style={{ backgroundColor: " #fff", padding: 20 }}>
                    <span style={{ fontSize: 20, fontWeight: 500 }}>
                      {item?.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurProduct;
