import {useState, useEffect} from "react";
import "./App.css";
import {createTodoItem, getTodosForUser, updateTodoItem} from "./api/client";
import {TodoItem} from "./components/todoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodosForUser(1);
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  // useEffect(() => {
  //   console.log("todos", todos);
  // }, [todos]);

  const handleAddTodo = async () => {
    // TODO: Send a POST request to the backend (/api/todos) to create a new todo for a specific user.
    try {
      const newTodo = await createTodoItem(newTodoText, 1);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error creating todo item:", error);
    }
  };

  const handleUpdateTodo = async (
    id: number,
    updates: {text?: string; completed?: boolean}
  ) => {
    try {
      const updatedTodo = await updateTodoItem(id, updates);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.error("Error updating todo item:", error);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="New todo..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) =>
                  handleUpdateTodo(todo.id, {completed: e.target.checked})
                }
              />
            </label>
            <TodoItem todo={todo} handleUpdateTodo={handleUpdateTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
