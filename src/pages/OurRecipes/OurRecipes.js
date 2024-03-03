import React from "react";
import receipe1 from "../../shared/assets/images/recepies/Classic Pecan Pie Bars.jpg";
import receipe2 from "../../shared/assets/images/recepies/chocolate pixies.jpg";
import receipe3 from "../../shared/assets/images/recepies/birthday cake.jpg";
import receipe4 from "../../shared/assets/images/recepies/Roasted Cauliflower.jpg";
import receipe5 from "../../shared/assets/images/recepies/Caramel Puff Corn.jpg";
import receipe6 from "../../shared/assets/images/recepies/Classic Peanut Butter Cookies.jpg";
import receipe7 from "../../shared/assets/images/recepies/Bacon and Egg Breakfast Pizza.jpg";
import receipe8 from "../../shared/assets/images/recepies/Clarified Butter.jpg";
import { Container } from "react-bootstrap";
import "./OurRecipes.scss";

const OurRecipes = () => {

  const data=[
    {img: receipe1,label:'Classic Pecan Pie Bars'},
    {img: receipe2,label:'Chocolate Pixies'},
    {img: receipe3,label:'Birthday Cake'},
    {img: receipe4,label:'Roasted Cauliflower'},
    {img: receipe5,label:'Caramel Puff Corn'},
    {img: receipe6,label:'Classic Peanut Butter Cookies'},
    {img: receipe7,label:'Bacon and Egg Breakfast Pizza'},
    {img: receipe8,label:'Clarified Butter'},
  ]
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div
        style={{ marginTop: 50 ,rowGap: 40, columnGap: 20 }}
        className="d-flex flex-wrap justify-content-between"
      >
        {data?.map((item)=>{return(<div className="receipe-card" key={item?.label} style={{padding: 10, backgroundColor: '#fff', width: 280, borderRadius: 10}}>
          <img
            src={item?.img}
            style={{ width: 240, height: 240, objectFit: "contain", borderRadius: 10 }}
          />
          <div style={{ backgroundColor: " #fff", padding: 20 }}>
            <span style={{fontSize: 20, fontWeight: 500}}>{item?.label}</span>
          </div>
        </div>)})}
        {/* <img
          src={receipes1}
          style={{ width: 300, height: 300, objectFit: "cover" }}
        />
        <img
          src={receipes2}
          style={{ width: 300, height: 300, objectFit: "cover" }}
        />
        <img
          src={receipes3}
          style={{ width: 300, height: 300, objectFit: "cover" }}
        /> */}
      </div>
    </Container>
  );
};

export default OurRecipes;
