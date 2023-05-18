import React, { useState, useEffect } from "react";
import classes from "../Portfolio/PortfolioItem.module.css";
import { ReactComponent as Cross } from "../../assets/cross.svg";

const Description = (props) => {
  const languages = props.languages.map((language) => (
    <span className={classes.language}>{language}</span>
  ));

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${classes.overlay} ${props.isHovered ? classes.hovered : ""}`}>
      {windowWidth < 540 && <Cross className={classes.cross} onClick={props.handleMouseLeave}/>}
      <div className={classes["info-container"]}>
        <span className={classes.title}>{props.title}</span>
        {!props.completed && (
          <span className={classes["coming-soon"]}>Coming soon!</span>
        )}
        <div className={classes["language-container"]}>{languages}</div>
        <span className={classes.description}>{props.description}</span>
        <div className={classes["button-container"]}>
          {props.completed && (
            <a href={props.liveLink} target="_blank" rel="noreferrer">
              Live Site
            </a>
          )}
          <a href={props.codeLink} target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioItem = (props) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <li
        className={`${classes["container-grid"]} ${
          props.isVisible ? classes.visible : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <video width="100%" height="100%" autoPlay playsInline muted loop>
          <source src={props.video.src} type={props.video.type} />
          Sorry, your browser does not support videos.
        </video>
        <Description
          description={props.description}
          link={props.link}
          target={props.target}
          languages={props.languages}
          title={props.title}
          liveLink={props.liveLink}
          codeLink={props.codeLink}
          completed={props.completed}
          isHovered={isHovered}
          handleMouseLeave={handleLeave}
        />
      </li>
    </>
  );
};

export default PortfolioItem;
