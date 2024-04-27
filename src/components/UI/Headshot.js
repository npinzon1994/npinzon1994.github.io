import React from "react";
import classes from "./Headshot.module.css";

const Headshot = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`${classes.headshot} ${className}`} />
  );
};

export default Headshot;
