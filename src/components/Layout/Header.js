import { useState } from "react";
import classes from "./Header.module.css";
import NavMenuOverlay from "./Navigation/NavMenuOverlay";
import NavBar from "./Navigation/NavBar";
import { useWindowWidth } from "../../hooks/use-window-width";

const Header = () => {
  const { windowWidth } = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={classes.header}>
      <NavMenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
      <NavBar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        windowWidth={windowWidth}
      />
    </header>
  );
};

export default Header;
