import { forwardRef } from "react";
import classes from "./Section.module.css";

const Section = forwardRef(
  ({ className, children }, ref) => {
    return (
      <section className={`${classes.section} ${className}`} ref={ref}>
        {children}
      </section>
    );
  }
);

export default Section;
