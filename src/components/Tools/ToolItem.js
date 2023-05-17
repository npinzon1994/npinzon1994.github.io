import React, {forwardRef} from "react";
import classes from "./ToolItem.module.css";

const ToolItem = forwardRef((props, ref) => {  
  return (
    <li className={`${classes.tool} ${props.isVisible ? classes.visible : ''}`} key={props.id} ref={ref}>
      <img src={props.img} alt={props.alt} />
      <span>{props.name}</span>
    </li>
  );
});

export default ToolItem;
