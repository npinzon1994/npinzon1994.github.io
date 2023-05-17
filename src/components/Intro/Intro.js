import React from "react";
import classes from "./Intro.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/triangle.svg";
import Headshot from "../UI/Headshot";
import vectorArt from "../../assets/vector-selfie.svg";

const Intro = (props) => {
  return (
    <section className={classes.wrapper} id={props.id}>
      <div className={classes.container}>

        <div className={classes.content}>
          <h1>
            Hi, I'm <span>Nikki!</span>
          </h1>
          <p>
            I'm a <span>Junior Software Engineer</span> looking to ease the
            lives of everyone around me through code.
          </p>
          <div className={classes["button-container"]}>
            <a href="#contact">Contact</a>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/Nikki%20Pinzon%20Resume.pdf?alt=media&token=344ad158-9eff-4f2c-b479-01000982c9c8"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <Headshot
          src={vectorArt}
          alt="vector drawing of me"
        />
      </div>
      
      <ArrowIcon className={classes.arrow} />
    </section>
  );
};

export default Intro;
