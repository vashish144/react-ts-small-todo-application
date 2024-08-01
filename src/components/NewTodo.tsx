import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";
const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const ctxValue = useContext(TodoContext);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let textInput = todoTextInputRef.current!.value;
    if (textInput.trim().length === 0) {
      return;
    }
    ctxValue.addTodo(textInput);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
