import React from "react";
import classes from "./NavBar.module.css";
import HamburgerCollapse from "hamburger-react";
import HomeLink from "./HomeLink";
import { useWindowWidth } from "../../../hooks/use-window-width";

const NavBar = ({ isOpen, toggleMenu }) => {
  const { windowWidth } = useWindowWidth();
  
  return (
    <nav className={classes.navbar}>
      <HomeLink href="#home" isOpen={isOpen} toggleMenu={toggleMenu} />
      {windowWidth > 783 && !isOpen ? (
        <ul className={classes.links}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#tools">Tools</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : undefined}

      {/*We have a hamburger button in the sidebar so need to hide this one while it's open*/}
      {windowWidth <= 783 && !isOpen ? (
        <HamburgerCollapse
          toggle={toggleMenu}
          toggled={isOpen}
          rounded
          color="#fff"
          label="collapsible-navigation"
        />
      ) : undefined}
    </nav>
  );
};

export default NavBar;
