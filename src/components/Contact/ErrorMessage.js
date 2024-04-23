import classes from "../Contact/ErrorMessage.module.css";

const ErrorMessage = (props) => {

  return (
    <span
      className={classes.invalid}
    >
      {props.message}
    </span>
  );
};

export default ErrorMessage;
