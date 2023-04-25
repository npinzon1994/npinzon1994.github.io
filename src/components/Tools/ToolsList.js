import React from "react";
import classes from "./ToolsList.module.css";
import { tools as languagesAndTools } from "./tools-icons";
import ToolItem from "./ToolItem";

const ToolsList = () => {
  const tools = languagesAndTools;
  return (
    // <div className={classes["container"]}>
      <ul className={classes["tools-list"]}>
        {tools.map((tool) => (
          <ToolItem key={tool.id} name={tool.name} img={tool.img} alt={tool.alt} />
        ))}
      </ul>
    // </div>
  );
};

export default ToolsList;
