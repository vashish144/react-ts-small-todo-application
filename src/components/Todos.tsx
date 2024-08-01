import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import { TodoContext } from "../store/todo-context";
const Todos: React.FC = (
) => {
  const ctxValue = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {ctxValue.items.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onRemoveTodo={ctxValue.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
