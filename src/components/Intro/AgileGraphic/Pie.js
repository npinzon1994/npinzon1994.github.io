import classes from "./Pie.module.css";

const Pie = ({ children }) => {
  return <div className={classes.pie}>{children}</div>;
};

export default Pie;
