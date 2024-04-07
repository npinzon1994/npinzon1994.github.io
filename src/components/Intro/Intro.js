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

              href="https://drive.google.com/file/d/1mdIKRTvVFHZFkRnsmWDshlb2_J0w--gg/view?usp=sharing"


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
