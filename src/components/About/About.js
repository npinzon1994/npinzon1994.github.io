import React from "react";
import classes from "./About.module.css";
import Headshot from "../UI/Headshot";
import Title from "../UI/Title";
import pfp from "../../assets/professional-headshot.jpg";

const About = (props) => {
  return (
    <section className={`${classes.wrapper} ${props.className}`} id={props.id}>
      <div className={classes["inner-container"]}>
        <div className={classes["info-container"]}>
          <Title title="About Me" style={{ paddingBottom: 0 }} />
          <p>
            I'm happy you liked my page enough to scroll this far! I'm a
            passionate Junior Software Engineer who's goal is to bring
            simplicity and user-friendliness to the forefront of my projects. I
            graduated from St. Joseph's University with a Bachelor's degree in
            Computer Science & Mathematics 👩‍🎓.
          </p>
          <p>When I'm not coding, I'm either sprawled out on the couch watching Netflix 📺 or catching Pokemon. Feel free to ask for my Switch Online if you ever want to have a Pokemon battle! 🎮</p>
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
