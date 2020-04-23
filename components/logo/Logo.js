import React from "react";
import Classes from "./logo.css";
//Don't use the img tage to be able to use images in your App
//Instead imopter it to make webpack able to optimize your  images
import LogoImage from "./../../assets/IMages/127 burger-logo.png";
const logo = props => (
  <div className={Classes.Logo} style={{ height: props.height }}>
    <img src={LogoImage} alt="myBurger" />
  </div>
);
export default logo;
