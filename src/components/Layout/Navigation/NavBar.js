import classes from "./NavBar.module.css";
import HomeLink from "./HomeLink";
import { useWindowWidth } from "../../../hooks/use-window-width";

const NavBar = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <HomeLink href="#home" />
        {windowWidth > 783 ? (
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
        ) : (
          undefined
        )}
      </nav>
    </header>
  );
};

export default NavBar;
