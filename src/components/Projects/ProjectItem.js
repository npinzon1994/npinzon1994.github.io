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
    <li key={language.id}>
      <img src={language.img} alt={language.alt} className={classes.language} />
    </li>
    // <span className={classes.language}>{language}</span>
  ));

  return (
    <div className={`${classes.overlay} ${isHovered ? classes.hovered : ""}`}>
      <div className={classes["info-container"]}>
        <span className={classes.title}>{title}</span>
        {!completed && (
          <span className={classes["coming-soon"]}>Coming soon!</span>
        )}
        <ul className={classes["language-container"]}>{languagesList}</ul>
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

const ProjectItem = ({
  handleMouseLeave,
  isVisible,
  video,
  title,
  tools,
  liveLink,
  codeLink,
  completed,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const toolsList = tools.map((tool) => (
    <li key={tool.id}>
      <img src={tool.img} alt={tool.alt} />
    </li>
  ));

  return (
    <li
      className={`${classes["container-grid"]} ${
        isVisible ? classes.visible : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className={classes["video-container"]}>
        <video width="100%" autoPlay playsInline muted loop>
          <source src={video.src} type={video.type} />
          Sorry, your browser does not support videos.
        </video>
      </div>

      <div className={classes["below-video-container"]}>
        <h4 className={classes["project-title"]}>{title}</h4>
        <div className={classes["tools-and-links-container"]}>
          <div>
            <span className={classes['built-with']}>BUILT WITH</span>
            <ul className={classes['tools-list']}>{toolsList}</ul>
          </div>
          <div className={classes["links-container"]}>
            {completed && (
              <a href={liveLink} target="_blank" rel="noreferrer">
                Live
              </a>
            )}
            <a href={codeLink} target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </div>
      </div>

      {/* <Description
        {...props}
        isHovered={isHovered}
        handleMouseLeave={handleLeave}
      /> */}
    </li>
  );
};

export default ProjectItem;
