import classes from "./Intro.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/triangle.svg";
import Wrapper from "../Layout/Wrapper";
import { useAnimate } from "framer-motion";

import { ReactComponent as Gear } from "../../assets/agile-graphic/gear.svg";
import { ReactComponent as StartingBlock } from "../../assets/agile-graphic/starting-block.svg";
import { ReactComponent as LaunchArrow } from "../../assets/agile-graphic/launch-arrow.svg";
import { ReactComponent as SpinningArrow } from "../../assets/agile-graphic/spinning-arrow.svg";
import { ReactComponent as AnimatedIcon } from "../../assets/agile-graphic-icons/requirements.svg";

import Ring from "./AgileGraphic/Ring";
import { useEffect } from "react";

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
          <h3>
            I'm a Software Engineer with a passion for creating{" "}
            <span role="heading" aria-level={1}>
              fast, scalable,{" "}
            </span>
            and{" "}
            <span role="heading" aria-level={1}>
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

        <div className={classes["agile-graphic"]}>
          <Ring />
          {/* <SpinningArrow className={classes["spinning-arrow"]} /> */}

          <div className={classes["animation-path"]} ref={scope}>
            <div className={classes["animated-icon-container"]}>
              <AnimatedIcon className={classes["animated-icon"]} />
            </div>
          </div>

          <Gear className={classes.gear} />
          <StartingBlock className={classes["starting-block"]} />
          <LaunchArrow className={classes["launch-arrow"]} />
        </div>
      </section>
      <ArrowIcon className={classes["downward-nav-arrow"]} />
    </Wrapper>
  );
};

export default Intro;
