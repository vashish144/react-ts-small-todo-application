import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ item: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.item}
    </li>
  );
};

export default TodoItem;
