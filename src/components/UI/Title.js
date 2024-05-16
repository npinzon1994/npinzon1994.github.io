import React from "react";
import classes from "./Title.module.css";

const Title = ({ title, style }) => {

  return (
    <div className={classes.container}>
      <h2 className={classes.title} style={style}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
