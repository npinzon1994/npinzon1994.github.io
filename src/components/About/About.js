import React, { useState, useEffect, useRef } from "react";
import classes from "./About.module.css";
import Wrapper from "../Layout/Wrapper";
import pfp from "../../assets/professional-headshot.png";
import Title from "../UI/Title";
import Section from "../Layout/Section";

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
        ref={sectionRef}
      >
        <div>
          <Title>About Me</Title>
          <p>
            I'm happy you liked my page enough to scroll this far! I'm a
            passionate Software Engineer who's goal is to bring simplicity and
            user-friendliness to the forefront of my projects. I graduated from
            St. Joseph's University with a Bachelor's degree in Computer Science
            & Mathematics.
          </p>
        </div>

        <div className={classes.headshot}>
          <img src={pfp} alt="Nikki Pinzon professional headshot" />
        </div>
        
      </Section>
    </Wrapper>
  );
};

export default About;
