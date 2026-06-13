import { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input
    };

    setTodos([...todos, newTodo]);

    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter Todo"
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;