import React from "react";
import classes from "../Portfolio/Portfolio.module.css";
import PortfolioItem from "../Portfolio/PortfolioItem";
import portfolioItems from "./portfolio-items";
import Section from "../UI/Section";

const items = portfolioItems.map((item) => (
  <PortfolioItem
    key={item.id}
    video={{
      src: item.video.src,
      type: item.video.type
    }}
    title={item.title}
    description={item.description}
    languages={item.languages}
    link={item.link}
    target={item.target}
  />
));

const Portfolio = () => {
  return (
    <Section title="My Projects">
      <ul className={classes["portfolio-grid"]}>{items}</ul>
    </Section>
  );
};

export default Portfolio;
