import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API_URL = "http://localhost:5000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  // GET
  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // CREATE
  const addTodo = async (title) => {
    await axios.post(API_URL, { title });
    fetchTodos();
  };

  // UPDATE
  const toggleTodo = async (id, completed) => {
    await axios.put(`${API_URL}/${id}`, { completed: !completed });
    fetchTodos();
  };

  // DELETE
  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">📝 To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
