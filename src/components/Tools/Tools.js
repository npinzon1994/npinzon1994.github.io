import React, { useState, useEffect, useRef } from "react";
import classes from "./Tools.module.css";
import { tools as languagesAndTools } from "./tools-data";
import Wrapper from "../Layout/Wrapper";
import Section from "../Layout/Section";
import ToolItem from "./ToolItem";
import Title from "../UI/Title";

const Tools = ({ id }) => {
  const tools = languagesAndTools;

  const [isVisible, setIsVisible] = useState(false);
  const toolItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = toolItemRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper id={id} className={classes.wrapper}>
      <Section>
        <Title className={classes.title}>My Tools</Title>
        <ul className={classes.tools}>
          {tools.map((tool) => (
            <ToolItem
              key={tool.id}
              name={tool.name}
              img={tool.img}
              alt={tool.alt}
              isVisible={isVisible}
              ref={toolItemRef}
            />
          ))}
        </ul>
      </Section>
    </Wrapper>
  );
};

export default Tools;
