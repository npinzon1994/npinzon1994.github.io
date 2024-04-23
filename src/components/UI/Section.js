import React from "react";
import classes from "./Section.module.css";
import Title from "./Title";

const Section = (props) => {
  return (
    <section className={`${classes.wrapper} ${props.className}`} id={props.id}>
        <div className={classes['inner-container']}>
            <Title title={props.title}/>
            {props.children}
        </div>
    </section>
  );
};

export default Section;
