import React from "react";
import classes from "./NavBar.module.css";
import HamburgerCollapse from "hamburger-react";

const NavBar = (props) => {
  return (
    <nav className={classes.navbar}>
      <span>
        <a
          href="#home"
          onClick={props.isOpen && props.toggleMenu}
          className={classes.title}
        >
          Nikki <br />
          Pinzon
        </a>
      </span>
      {props.windowWidth > 768 && !props.isOpen ? (
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
          toggle={props.toggleMenu}
          toggled={props.isOpen}
          rounded
          color="#fff"
        />
      )}
    </nav>
  );
};

export default NavBar;
