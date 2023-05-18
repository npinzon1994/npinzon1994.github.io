import React, { useState, useEffect } from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";

const Portfolio = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
