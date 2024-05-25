import React from "react";
import classes from "./SideBar.module.css";
import HamburgerCollapse from "hamburger-react";

const SideBar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
      <ul className={classes.links}>
        <li>
          <HamburgerCollapse
            toggle={toggleMenu}
            toggled={isOpen}
            rounded
            color="#fff"
            label="collapsible-navigation"
          />
        </li>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
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

export default SideBar;
