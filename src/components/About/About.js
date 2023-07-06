import React, { useState, useEffect, useRef } from "react";
import classes from "./About.module.css";
import Headshot from "../UI/Headshot";
import Title from "../UI/Title";
import pfp from "../../assets/professional-headshot.jpg";

const About = (props) => {
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
    <section className={`${classes.wrapper} ${props.className}`} id={props.id}>
      <div
        className={`${classes["inner-container"]} ${
          isVisible ? classes.visible : ""
        }`}
        ref={divRef}
      >
        <div className={classes["info-container"]}>
          <Title title="About Me" style={{ paddingBottom: 0 }} />
          <p>
            I'm happy you liked my page enough to scroll this far! I'm a
            passionate Junior Software Engineer who's goal is to bring
            simplicity and user-friendliness to the forefront of my projects. I
            graduated from St. Joseph's University with a Bachelor's degree in
            Computer Science & Mathematics 👩‍🎓.
          </p>
        </div>
        <Headshot
          className={classes.headshot}
          src={pfp}
          alt="professional headshot"
        />
      </div>
    </section>
  );
};

export default About;
