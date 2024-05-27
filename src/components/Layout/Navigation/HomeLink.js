import classes from "./HomeLink.module.css";

const HomeLink = ({ href }) => {
  return (
    <a href={href} className={classes.link}>
      <div className={classes.logo} />
      <span className={classes.name}>Nikki Pinzon</span>
    </a>
  );
};

export default HomeLink;
