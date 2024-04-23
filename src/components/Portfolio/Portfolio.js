import React, { useState, useEffect } from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";
import {useWindowWidth} from '../../hooks/use-window-width';

const Portfolio = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const {windowWidth} = useWindowWidth();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const boxElements = document.querySelectorAll(
      `.${classes["container-grid"]}`
    );

    boxElements.forEach((box) => {
      const boxTop = box.offsetTop;

      if (scrollTop > boxTop - windowHeight + 100) {
        setIsVisible(true);
      }
    });
  };

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
      completed={item.completed}
      isVisible={isVisible}
    />
  ));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${classes.wrapper} ${props.className}`} id={props.id}>
      <div className={classes["inner-container"]}>
        <div className={classes["title-container"]}>
          <h2 className={classes.title}>My Projects</h2>
          {windowWidth < 540 ? <span>(click on a project to learn more!)</span> : <span>(hover over a project to learn more!)</span>}
        </div>
        <ul className={classes["portfolio-grid"]}>{items}</ul>
      </div>
    </div>
  );
};

export default Portfolio;
