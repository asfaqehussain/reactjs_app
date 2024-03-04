import React from "react";
import "./Reviews.scss";

const Reviews = () => {
  const data = [
    {
      desc: "I've been buying Madhvi Dairy's paneer for years, and it's always fresh and delicious. It adds the perfect creamy texture to my curries.",
      label: "D.G. Patel",
    },
    {
      desc: "Madhvi Dairy's ghee is a staple in my kitchen. It has a rich flavor and enhances the taste of all my dishes. Plus, it's great for cooking at high temperatures.",
      label: "Nikhil Choudhary",
    },
    {
      desc: "I recently tried Madhvi Dairy's yogurt, and I'm impressed! It's thick and creamy with just the right amount of tanginess. I use it in smoothies, dips, and even marinades.",
      label: "BalKishan sharma",
    },
    {
      desc: "I love Madhvi Dairy's range of flavored lassis. They're so refreshing and make a great snack or dessert option. The mango lassi is my favorite!",
      label: "Dhrupal Prajapati",
    },
  ];
  return (
    <>
      {data?.map((item) => {
        return (
          <div className="review-card d-flex flex-column">
            <span className="desc">{item?.desc}</span>
            <hr style={{ width: "100%" }} />
            <span className="label">{item?.label}</span>
          </div>
        );
      })}
    </>
  );
};

export default Reviews;
