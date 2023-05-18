import React from "react";
import classes from "./Headshot.module.css";

const Headshot = (props) => {
  return <img src={props.src} alt={props.alt} className={`${classes.headshot} ${props.className}`} />;
};

export default Headshot;
