import React, { useState, useEffect } from "react";
import classes from "./Navigation.module.css";
import HamburgerButton from "../UI/HamburgerButton";
import HamburgerCollapse from "hamburger-react";

const Navigation = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={classes["nav-wrapper"]}>
      <div
        className={`${classes["menu-overlay"]} ${isOpen ? classes.open : ""}`}
      >
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
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <nav className={classes.navbar}>
        <span>
          <a
            href="#home"
            onClick={isOpen && toggleMenu}
            className={classes.title}
          >
            Nikki <br />
            Pinzon
          </a>
        </span>
        {windowWidth >= 768 && !isOpen ? (
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
          />
        )}
      </nav>
    </header>
  );
};

export default Navigation;
