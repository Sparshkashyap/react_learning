import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>

      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;