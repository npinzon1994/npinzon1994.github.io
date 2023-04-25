import React from "react";
import classes from "./ToolItem.module.css";

const ToolItem = (props) => {
  return (
    <li className={classes.tool} key={props.id}>
      <img src={props.img} alt={props.alt} />
      <span>{props.name}</span>
    </li>
  );
};

export default ToolItem;
