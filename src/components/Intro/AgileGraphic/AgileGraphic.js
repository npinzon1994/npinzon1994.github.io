import React from "react";
import classes from "./AgileGraphic.module.css";
import { ReactComponent as GearIcon } from "../../../assets/agile-graphic/gear.svg";

const AgileGraphic = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.pie}>
        <li className={classes.slice}>
          <div className={classes["slice-contents"]}></div>
        </li>
        <li className={classes.slice}>
          <div className={classes["slice-contents"]}></div>
        </li>
        <li className={classes.slice}>
          <div className={classes["slice-contents"]}></div>
        </li>
        <li className={classes.slice}>
          <div className={classes["slice-contents"]}></div>
        </li>
        <li className={classes.slice}>
          <div className={classes["slice-contents"]}></div>
        </li>
      </ul>
      <GearIcon className={classes.gear} />
    </div>
  );
};

export default AgileGraphic;
