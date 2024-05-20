import classes from "./HomeLink.module.css";

const HomeLink = ({ isOpen, toggleMenu, href }) => {
  return (
    <a
      href={href}
      onClick={isOpen ? toggleMenu : undefined}
      className={classes.link}
    >
      <div className={classes.logo}>
        {/* <span className={classes["inner-text"]}>NP</span> */}
      </div>
      <span className={classes.name}>Nikki Pinzon</span>
    </a>
  );
};

export default HomeLink;
