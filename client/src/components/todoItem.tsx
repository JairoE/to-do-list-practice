import type {Todo} from "../types";
import {useState} from "react";
interface TodoItemProps {
  todo: Todo;
  handleUpdateTodo: (
    id: number,
    updates: {text?: string; completed?: boolean}
  ) => void;
}

export const TodoItem = ({todo, handleUpdateTodo}: TodoItemProps) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const handleSaveTodo = () => {
    setEditing(false);
    handleUpdateTodo(todo.id, {text: editedText});
  };
  const handleEditTodo = (editing: boolean) => {
    setEditing(editing);
  };

  return (
    <div
      style={{display: "flex", gap: "10px", justifyContent: "space-between"}}
    >
      {editing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          style={{textDecoration: todo.completed ? "line-through" : "none"}}
        >
          {todo.text}
        </span>
      )}
      {editing ? (
        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
          <button onClick={() => handleSaveTodo()}>Save</button>
          <button onClick={() => handleEditTodo(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => handleEditTodo(true)}>Edit</button>
      )}
    </div>
  );
};

export default TodoItem;
