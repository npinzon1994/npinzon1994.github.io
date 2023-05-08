import React from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";

const items = portfolioItems.map((item) => (
  <PortfolioItem
    key={item.id}
    video={{
      src: item.video.src,
      type: item.video.type,
    }}
    title={item.title}
    description={item.description}
    languages={item.languages}
    liveLink={item.liveLink}
    codeLink={item.codeLink}
  />
));

const Portfolio = (props) => {
  return (
    <div className={`${classes.wrapper} ${props.className}`} id={props.id}>
      <div className={classes["inner-container"]}>
        <h2 className={classes.title}>
          My Projects <span>(hover over each to learn more!)</span>
        </h2>
        <ul className={classes["portfolio-grid"]}>{items}</ul>
      </div>
    </div>
  );
};

export default Portfolio;
