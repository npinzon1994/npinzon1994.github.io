import { useState } from "react";
import classes from "./ProjectItem.module.css";

const Description = ({
  languages,
  isHovered,
  title,
  completed,
  description,
  liveLink,
  codeLink,
}) => {
  const languagesList = languages.map((language) => (
    <span className={classes.language}>{language}</span>
  ));

  return (
    <div className={`${classes.overlay} ${isHovered ? classes.hovered : ""}`}>
      <div className={classes["info-container"]}>
        <span className={classes.title}>{title}</span>
        {!completed && (
          <span className={classes["coming-soon"]}>Coming soon!</span>
        )}
        <div className={classes["language-container"]}>{languagesList}</div>
        <span className={classes.description}>{description}</span>
        <div className={classes["button-container"]}>
          {completed && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              Live Site
            </a>
          )}
          <a href={codeLink} target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ handleMouseLeave, isVisible, video, ...props }) => {
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
          isVisible ? classes.visible : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <video width="100%" height="100%" autoPlay playsInline muted loop>
          <source src={video.src} type={video.type} />
          Sorry, your browser does not support videos.
        </video>
        <Description
          {...props}
          isHovered={isHovered}
          handleMouseLeave={handleLeave}
        />
      </li>
    </>
  );
};

export default ProjectItem;
