import React from "react";
import classes from "./Headshot.module.css";
import pfp from "../../assets/professional-headshot.jpg";

const Headshot = (props) => {
  return (
    <div className={props.className}>
      <img src={pfp} alt="Nikki Pinzon headshot" className={classes.headshot} />
    </div>
  );
};

export default Headshot;
