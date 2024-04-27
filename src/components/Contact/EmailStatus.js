import React from "react";
import classes from "../Contact/EmailStatus.module.css";

const EmailStatus = ({ className, status, img }) => {
  return (
    <div className={classes.container}>
      <span className={className}>{status}</span>
      <img src={img.src || ""} alt={img.alt || ""} className={img.className} />
    </div>
  );
};

export default EmailStatus;
