import React from "react";
import classes from "./Intro.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/triangle.svg";
import Headshot from "../UI/Headshot";
import pfp from "../../assets/professional-headshot.jpg";

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
<<<<<<< HEAD
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/Nikki%20Pinzon%20Resume.pdf?alt=media&token=9b2c3e96-787a-4e70-ab04-273c00359443"
=======
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/Nikki%20Pinzon%20Resume.pdf?alt=media&token=71b6d193-4297-4a7c-b593-8d7a8898050b"
>>>>>>> db2672014ddadbb7a506ca487df9cb6b5261368f
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <Headshot
        className={classes.headshot}
          src={pfp}
          alt="vector drawing of me"
        />
      </div>
      
      <ArrowIcon className={classes.arrow} />
    </section>
  );
};

export default Intro;
