import React from "react";
import classes from "./Section.module.css";
import Title from "./Title";

const Section = (props) => {
  return (
    <div className={`${classes.wrapper} ${props.className}`}>
        <div className={classes['inner-container']}>
            <Title title={props.title}/>
            {props.children}
        </div>
    </div>
  );
};

export default Section;
