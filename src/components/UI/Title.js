import React from "react";
import classes from "./Title.module.css";

const Title = ({ title, windowWidth, style }) => {
  let subtitle;
  if (windowWidth) {
    subtitle =
      windowWidth < 540 ? (
        <span>(click on a project to learn more!)</span>
      ) : (
        <span>(hover over a project to learn more!)</span>
      );
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title} style={style}>
        {title}
      </h2>
      {subtitle}
    </div>
  );
};

export default Title;
