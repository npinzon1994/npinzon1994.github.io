import React from "react";
import classes from './NavMenuOverlay.module.css';

const NavMenuOverlay = (props) => {
  return (
    <div className={`${classes["menu-overlay"]} ${props.isOpen ? classes.open : ""}`}>
      <ul className={classes.links}>
        <li>
          <a href="#projects" onClick={props.toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#about" onClick={props.toggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={props.toggleMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenuOverlay;
