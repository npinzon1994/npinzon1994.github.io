import React, { useState, useEffect } from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";



const Portfolio = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const boxElements = document.querySelectorAll(`.${classes['container-grid']}`);

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
        <h2 className={classes.title}>
          My Projects <span>(hover over each to learn more!)</span>
        </h2>
        <ul className={classes["portfolio-grid"]}>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
