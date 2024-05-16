import React, { useState, useEffect, useRef } from "react";
import classes from "./About.module.css";
import Wrapper from "../Layout/Wrapper";
import Section from "../Layout/Section";
import Headshot from "../UI/Headshot";
import pfp from "../../assets/professional-headshot.png";

const About = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
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
        ref={sectionRef}
      >
        <p>
          I'm happy you liked my page enough to scroll this far! I'm a
          passionate Software Engineer who's goal is to bring simplicity
          and user-friendliness to the forefront of my projects. I graduated
          from St. Joseph's University with a Bachelor's degree in Computer
          Science & Mathematics.
        </p>
        <Headshot src={pfp} alt="Nikki Pinzon professional headshot" />
      </Section>
    </Wrapper>
  );
};

export default About;
