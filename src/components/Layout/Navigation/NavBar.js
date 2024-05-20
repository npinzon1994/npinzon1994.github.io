import React from "react";
import classes from "./NavBar.module.css";
import HamburgerCollapse from "hamburger-react";
import { ReactComponent as Logo } from "../../../assets/site-logo.svg";
import HomeLink from "./HomeLink";

const NavBar = ({ isOpen, toggleMenu, windowWidth }) => {
  return (
    <nav className={classes.navbar}>
      <HomeLink href="#home" isOpen={isOpen} toggleMenu={toggleMenu}/>
      {/* <a href="#home" onClick={isOpen ? toggleMenu : undefined} className={classes.logo}>
        <Logo />
        <span>Nikki Pinzon</span>
      </a> */}
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
