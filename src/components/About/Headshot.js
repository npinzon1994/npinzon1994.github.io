import React from "react";
import classes from "./Headshot.module.css";

const Headshot = ({ src, alt, className }) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Headshot;
