import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;