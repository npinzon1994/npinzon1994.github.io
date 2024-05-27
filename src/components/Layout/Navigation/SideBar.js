import { useRef, useEffect, useState } from "react";
import classes from "./SideBar.module.css";
import HamburgerCollapse from "hamburger-react";
import { useWindowWidth } from "../../../hooks/use-window-width";

const SideBar = () => {
  const { windowWidth } = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref]);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const isOnPhoneScreen = windowWidth <= 430;

  return (
    <div
      className={`${classes.sidebar} ${
        isOpen ? classes.open__sidebar : undefined
      }`}
      ref={ref}
    >
      <div className={classes["hamburger-container"]}>
        <HamburgerCollapse
          toggle={handleToggle}
          toggled={isOpen}
          rounded
          color="#fff"
          label="collapsible-navigation"
        />
      </div>
      <ul
        className={`${classes.links} ${
          isOpen ? classes.open__links : undefined
        }`}
      >
        <li>
          <a href="#home" onClick={isOnPhoneScreen ? handleToggle : undefined}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={isOnPhoneScreen ? handleToggle : undefined}
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#about" onClick={isOnPhoneScreen ? handleToggle : undefined}>
            About
          </a>
        </li>
        <li>
          <a href="#tools" onClick={isOnPhoneScreen ? handleToggle : undefined}>
            Tools
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={isOnPhoneScreen ? handleToggle : undefined}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
