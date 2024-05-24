import classes from "./ProjectItem.module.css";

const ProjectItem = ({
  handleMouseLeave,
  isVisible,
  video,
  title,
  tools,
  liveLink,
  codeLink,
  completed,
}) => {
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
            <span className={classes["built-with"]}>BUILT WITH</span>
            <ul className={classes["tools-list"]}>{toolsList}</ul>
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
    </li>
  );
};

export default ProjectItem;
