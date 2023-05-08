import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={classes["nav-wrapper"]}>
      <nav className={classes.navigation}>
        <span>
          <a href="#home" className={classes.title}>Nikki <br />
          Pinzon</a>
        </span>
        <ul className={classes.links}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
