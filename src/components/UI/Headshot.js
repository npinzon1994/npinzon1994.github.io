import React from "react";
import classes from "./Headshot.module.css";

const Headshot = (props) => {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} className={classes.headshot} />
    </div>
  );
};

export default Headshot;
