import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{ name: string; rand: string,id:number }> = (props) => {
  return (
    <span style={{ backgroundColor: `${props.rand}` }} className={classes.item}>
      {props.name}
    </span>
  );
};

export default CategoryItem;
