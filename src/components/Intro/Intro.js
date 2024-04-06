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
            Hi, I'm <span className={classes['green-text']}>Nikki!</span>
          </h1>
          <p>
            I'm a <span className={classes['green-text']}>Software Engineer</span> with a <span>passion</span> for <span>UI/UX</span>. <br />Shoot me a message!
          </p>
          <div className={classes["button-container"]}>
            <a href="#contact">Contact</a>
            <a

              href="https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/Nikki%20Pinzon%20Resume.pdf?alt=media&token=29aaf0a5-dd0d-418c-8de9-c46d8e4f3980"


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
