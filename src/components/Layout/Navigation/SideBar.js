import { useRef, useEffect, useState } from "react";
import classes from "./SideBar.module.css";
import HamburgerCollapse from "hamburger-react";

const SideBar = () => {
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

  return (
    <div
      className={`${classes.sidebar} ${
        isOpen ? classes.open__sidebar : undefined
      }`}
      ref={ref}
    >
      <div className={classes["hamburger-container"]}>
        <HamburgerCollapse
          toggle={() => setIsOpen(!isOpen)}
          toggled={isOpen}
          rounded
          color="#fff"
          label="collapsible-navigation"
        />
      </div>
      <ul
        initial={{ x: 250 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={`${classes.links} ${
          isOpen ? classes.open__links : undefined
        }`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
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
    </div>
  );
};

export default SideBar;
