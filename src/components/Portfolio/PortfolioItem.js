import React from "react";
import classes from "../Portfolio/PortfolioItem.module.css";

const Description = (props) => {
  const languages = props.languages.map((language) => (
    <span className={classes.language}>{language}</span>
  ));
  return (
    <a href={props.link} target={props.target}>
      <div className={classes.overlay}>
        <div className={classes["info-container"]}>
          <span className={classes.title}>{props.title}</span>
          <div className={classes["language-container"]}>{languages}</div>
        </div>
        <p className={classes.description}>{props.description}</p>
      </div>
    </a>
  );
};

const PortfolioItem = (props) => {
  return (
    <li className={classes["container-grid"]}>
      {/* <img src={props.img.src} alt={props.img.alt} className={classes.image} /> */}
      <video width="100%" autoPlay playsInline muted loop>
        <source src={props.video.src} type={props.video.type} />
        Sorry, your browser does not support videos.
      </video>
      <Description
        description={props.description}
        link={props.link}
        target={props.target}
        languages={props.languages}
        title={props.title}
      />
    </li>
  );
};

export default PortfolioItem;
