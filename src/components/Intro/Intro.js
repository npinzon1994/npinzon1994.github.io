import React from "react";
import classes from "./Intro.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/triangle.svg";
import Headshot from "../UI/Headshot";
import pfp from "../../assets/professional-headshot.png";
import Wrapper from "../Layout/Wrapper";
import animatedGraphic from "../../assets/animated-graphic.webm";
import AgileGraphic from "./AgileGraphic/AgileGraphic";

const Intro = ({ id }) => {
  return (
    <Wrapper className={classes.wrapper} id={id}>
      <section className={classes.section}>
        <div className={classes["left-container"]}>
          <h1>Hi, I'm Nikki</h1>
          <h3>
            I'm a Software Engineer with a passion for creating{" "}
            <span
              className={classes["purple-text"]}
              role="heading"
              aria-level={1}
            >
              fast, scalable,{" "}
            </span>
            and{" "}
            <span
              className={classes["purple-text"]}
              role="heading"
              aria-level={1}
            >
              engaging
            </span>{" "}
            web applications.
          </h3>
          <h3>Shoot me a message!</h3>
          <div className={classes["button-container"]}>
            <a href="#contact">Contact</a>
            <a
              href="https://drive.google.com/file/d/13ylGh1YZ5j_NKGcejNE1JsV3gMH1ru_F/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my resume. Opens in a new tab."
            >
              Resume
            </a>
          </div>
        </div>
        <AgileGraphic />
        {/* <Headshot src={pfp} alt="Nikki Pinzon professional headshot" /> */}
      </section>
      <ArrowIcon className={classes.arrow} />
    </Wrapper>
  );
};

export default Intro;
