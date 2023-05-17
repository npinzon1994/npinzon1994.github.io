import React, {useState, useEffect, useRef} from "react";
import classes from "./ToolsList.module.css";
import { tools as languagesAndTools } from "./tools-icons";
import ToolItem from "./ToolItem";

const ToolsList = () => {
  const tools = languagesAndTools;

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  

  useEffect(() => {
    const handleScroll = () => {
      const element = divRef.current;
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (elementPosition < windowHeight) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className={classes["container"]}>
      <ul className={classes["tools-list"]}>
        {tools.map((tool) => (
          <ToolItem key={tool.id} name={tool.name} img={tool.img} alt={tool.alt} isVisible={isVisible} ref={divRef} />
        ))}
      </ul>
    // </div>
  );
};

export default ToolsList;
