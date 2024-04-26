import classes from "./Wrapper.module.css";

const Wrapper = ({ id, className, children }) => {
  return <div className={`${classes.wrapper} ${className}`} id={id}>{children}</div>;
};

export default Wrapper;
