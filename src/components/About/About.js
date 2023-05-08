import React from "react";
import classes from "./About.module.css";
import Section from "../UI/Section";
import Headshot from "../UI/Headshot";
import Title from "../UI/Title";

const About = (props) => {
  return (
      <section className={`${classes.wrapper} ${props.className}`} id={props.id}>
        <div className={classes["inner-container"]}>
            <div className={classes["info-container"]}>
              <Title title="About Me" style={{paddingBottom: 0}}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Headshot className={classes.headshot}/>
        </div>
      </section>

  );
};

export default About;
