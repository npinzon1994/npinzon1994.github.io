import { forwardRef } from "react";
import classes from "./Section.module.css";
import Title from "../UI/Title";

const Section = forwardRef(
  ({ title, windowWidth, style, className, children }, ref) => {
    return (
      <section className={`${classes.section} ${className}`} ref={ref}>
        <Title title={title} windowWidth={windowWidth} style={style} />
        {children}
      </section>
    );
  }
);

export default Section;
