import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={classes["nav-wrapper"]}>
      <nav className={classes.navigation}>
        <span className={classes.title}>
          Nikki <br />
          Pinzon
        </span>
        <ul className={classes.links}>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
