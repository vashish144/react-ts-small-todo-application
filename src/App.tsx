import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const addTodoHandler = (inputText: string) => {
    const newTodo = new todo(inputText);
    console.log(newTodo);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodo} />
    </>
  );
}

export default App;
