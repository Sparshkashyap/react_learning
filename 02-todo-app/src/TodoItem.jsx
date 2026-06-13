import { useState } from "react";

function TodoItem({
  todo,
  todos,
  setTodos
}) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [editedText, setEditedText] =
    useState(todo.text);

  const deleteTodo = () => {
    const filteredTodos =
      todos.filter(
        (item) => item.id !== todo.id
      );

    setTodos(filteredTodos);
  };

  const updateTodo = () => {
    const updatedTodos =
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: editedText
          };
        }

        return item;
      });

    setTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        marginTop: "10px"
      }}
    >
      {isEditing ? (
        <>
          <input
            value={editedText}
            onChange={(e) =>
              setEditedText(
                e.target.value
              )
            }
          />

          <button
            onClick={updateTodo}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>
            {todo.text}
          </span>

          <button
            onClick={() =>
              setIsEditing(true)
            }
          >
            Edit
          </button>

          <button
            onClick={deleteTodo}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;