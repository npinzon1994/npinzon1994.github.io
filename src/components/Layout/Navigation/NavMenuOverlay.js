import React from "react";
import classes from './NavMenuOverlay.module.css';

const NavMenuOverlay = ({isOpen, toggleMenu}) => {
  return (
    <div className={`${classes["menu-overlay"]} ${isOpen ? classes.open : ""}`}>
      <ul className={classes.links}>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#tools" onClick={toggleMenu}>
            Tools
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenuOverlay;
