import React, { useState, ReactNode } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (item: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (item: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (inputText: string) => {
    const newTodo = new Todo(inputText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
