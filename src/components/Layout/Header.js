import classes from "./Header.module.css";
import SideBar from "./Navigation/SideBar";
import NavBar from "./Navigation/NavBar";

const Header = ({ isOpen, toggleMenu }) => {
  return (
    <header className={classes.header}>
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
