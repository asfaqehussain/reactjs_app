import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.scss";
import Reviews from "../Reviews/Reviews";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    // <Container>
    <Slider {...settings}>
      {/* Your slide components go here */}
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="review-card d-flex flex-column">
          <span className="desc">
            “I've been buying Madhvi Dairy's paneer for years, and it's always
            fresh and delicious. It adds the perfect creamy texture to my
            curries.”
          </span>
          <hr style={{ width: "100%" }} />
          <span className="label">D.G. Patel</span>
        </div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="review-card d-flex flex-column">
          <span className="desc">
            “Madhvi Dairy's ghee is a staple in my kitchen. It has a rich flavor
            and enhances the taste of all my dishes. Plus, it's great for
            cooking at high temperatures.”
          </span>
          <hr style={{ width: "100%" }} />
          <span className="label">Nikhil Choudhary</span>
        </div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="review-card d-flex flex-column">
          <span className="desc">
            “I recently tried Madhvi Dairy's yogurt, and I'm impressed! It's
            thick and creamy with just the right amount of tanginess. I use it
            in smoothies, dips, and even marinades.”
          </span>
          <hr style={{ width: "100%" }} />
          <span className="label">BalKishan sharma</span>
        </div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="review-card d-flex flex-column">
          <span className="desc">
            “I love Madhvi Dairy's range of flavored lassis. They're so
            refreshing and make a great snack or dessert option. The mango lassi
            is my favorite!”
          </span>
          <hr style={{ width: "100%" }} />
          <span className="label">Dhrupal Prajapati</span>
        </div>
      </div>

      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SlickSlider;
