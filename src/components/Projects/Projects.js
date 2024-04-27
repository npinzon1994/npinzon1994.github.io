import React, { useState, useEffect } from "react";
import classes from "../Projects/Projects.module.css";
import Wrapper from "../Layout/Wrapper";
import ProjectItem from "../Projects/ProjectItem";
import projectItems from "./project-items";
import { useWindowWidth } from "../../hooks/use-window-width";
import Section from "../Layout/Section";

const Projects = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { windowWidth } = useWindowWidth();

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

  const items = projectItems.map((item) => (
    <ProjectItem
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
    <Wrapper className={classes.wrapper} id={id}>
      <Section
        className={classes.section}
        title="My Projects"
        windowWidth={windowWidth}
      >
        <ul className={classes["portfolio-grid"]}>{items}</ul>
      </Section>
    </Wrapper>
  );
};

export default Projects;
