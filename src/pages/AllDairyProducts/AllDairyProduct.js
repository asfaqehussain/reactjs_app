import React from "react";
import receipes from "../../shared/assets/images/paneer.jpg";
import receipes1 from "../../shared/assets/images/yogurt.jpg";
import receipes2 from "../../shared/assets/images/cheese.jpg";
import receipes3 from "../../shared/assets/images/milk.webp";
import { Container } from "react-bootstrap";
import "./AllDairyProduct.scss";

const AllDairyProduct = () => {
  const data = [
    { img: receipes1, label: "Yogurt" },
    { img: receipes2, label: "Cheese" },
    { img: receipes3, label: "Milk" },
    { img: receipes, label: "Paneer" },
  ];

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        style={{ width: "100%" }}
        className="d-flex gap-3 flex-wrap justify-content-between mt-5"
      >
        <div className="all-things-dairy d-flex align-items-center justify-content-center flex-column">
          <span className="all-things-dairy-title">All Things Dairy</span>
          <span className="all-things-dairy-desc">
            Go ahead. Eat the butter. Eat the cheese. Eat the cookies. Eat it
            all. And eat it like you own it. Because buying our products
            directly benefits over 1000 Madhvi farmer-owners who do.
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

export default AllDairyProduct;
