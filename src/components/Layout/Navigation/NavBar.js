import React from "react";
import classes from "./NavBar.module.css";
import HamburgerCollapse from "hamburger-react";

const NavBar = ({ isOpen, toggleMenu, windowWidth }) => {
  return (
    <nav className={classes.navbar}>
      <span>
        <a
          href="#home"
          onClick={isOpen ? toggleMenu : undefined}
          className={classes.title}
        >
          Nikki Pinzon
        </a>
      </span>
      {windowWidth > 768 && !isOpen ? (
        <ul className={classes.links}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <HamburgerCollapse
          toggle={toggleMenu}
          toggled={isOpen}
          rounded
          color="#fff"
          label="collapsable navigation"
        />
      )}
    </nav>
  );
};

export default NavBar;
