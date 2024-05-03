import classes from "./Slice.module.css";

const Slice = ({color, skew, rotate}) => {
  return (
    <li className={classes.slice}>
      <div className={classes["slice-contents"]}></div>
    </li>
  );
};

export default Slice;
