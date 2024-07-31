import React from "react";
import todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
const Todos: React.FC<{ items: todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
