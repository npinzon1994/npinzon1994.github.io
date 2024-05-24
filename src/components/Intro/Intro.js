import classes from "./Intro.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/floating-arrow.svg";
import Wrapper from "../Layout/Wrapper";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import AgileGraphic from "./AgileGraphic";

const Intro = ({ id }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const moveRightDuration = 2.3;
    const rotationDuration = 6;

    const handleAnimate = async () => {
      animate(
        "div",
        { rotate: 360 },
        { duration: rotationDuration, ease: "linear" }
      );
      await animate(
        scope.current,
        { translateX: "0rem" },
        { duration: moveRightDuration, ease: "linear" }
      );
      await animate(
        scope.current,
        { rotate: -360 },
        { duration: rotationDuration, ease: "linear" }
      );
      await animate(
        scope.current,
        { translateX: "20.8rem" },
        { duration: moveRightDuration, ease: "easeOut" }
      );
    };
    handleAnimate();
  }, [scope, animate]);

  return (
    <Wrapper className={classes.wrapper} id={id}>
      <section className={classes.section}>
        <div className={classes["left-container"]}>
          <h1>Hi, I'm Nikki</h1>
          <p>
            <span
              role="heading"
              aria-level={1}
              className={classes["low-opacity-text"]}
            >
              I'm a Software Engineer with a passion for creating
            </span>{" "}
            <span
              role="heading"
              aria-level={1}
              className={classes["white-text"]}
            >
              fast, intuitive,{" "}
            </span>
            and{" "}
            <span
              role="heading"
              aria-level={1}
              className={classes["white-text"]}
            >
              engaging
            </span>{" "}
            <span
              role="heading"
              aria-level={1}
              className={classes["low-opacity-text"]}
            >
              web applications.
            </span>
          </p>
          <p>
            <span
              role="heading"
              aria-level={1}
              className={classes["low-opacity-text"]}
            >
              Shoot me a message!
            </span>
          </p>
          <div className={classes["button-container"]}>
            <a
              href="https://drive.google.com/file/d/13ylGh1YZ5j_NKGcejNE1JsV3gMH1ru_F/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my resume. Opens in a new tab."
            >
              Resume
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <AgileGraphic />
      </section>
      <ArrowIcon className={classes["downward-nav-arrow"]} />
    </Wrapper>
  );
};

export default Intro;
