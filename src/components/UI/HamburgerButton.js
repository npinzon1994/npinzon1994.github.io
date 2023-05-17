import React, { useState } from "react";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      className={`${classes.hamburger} ${isOpen ? classes.open : ""}`}
      onClick={onClick}
    >
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
      <span className={classes["hamburger__line"]} />
    </button>
  );
};

export default HamburgerButton;
