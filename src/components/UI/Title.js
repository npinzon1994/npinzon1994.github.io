import React from "react";
import classes from "./Title.module.css";

const Title = ({ className, children }) => {
  return <h2 className={`${classes.title} ${className}`}>{children}</h2>;
};

export default Title;
