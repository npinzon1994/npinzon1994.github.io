import React, { useState, useEffect, useRef } from "react";
import classes from "./About.module.css";
import Wrapper from "../Layout/Wrapper";
import Section from "../Layout/Section";

const About = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = divRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper className={classes.wrapper} id={id}>
      <Section
        className={`${classes.section} ${isVisible ? classes.visible : ""}`}
        title="About Me"
        ref={divRef}
      >
        <p>
          I'm happy you liked my page enough to scroll this far! I'm a
          passionate Junior Software Engineer who's goal is to bring simplicity
          and user-friendliness to the forefront of my projects. I graduated
          from St. Joseph's University with a Bachelor's degree in Computer
          Science & Mathematics.
        </p>
      </Section>
    </Wrapper>
  );
};

export default About;
