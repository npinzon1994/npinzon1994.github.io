import React, { forwardRef } from "react";
import classes from "./ToolItem.module.css";

const ToolItem = forwardRef(({ id, name, img, alt, isVisible }, ref) => {
  return (
    <li
      className={`${classes.tool} ${isVisible ? classes.visible : ""}`}
      key={id}
      ref={ref}
    >
      <img src={img} alt={alt} />
      <span>{name}</span>
    </li>
  );
});

export default ToolItem;
