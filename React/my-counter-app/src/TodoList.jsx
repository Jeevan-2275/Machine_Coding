import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // State to store todo items
  const [newTodo, setNewTodo] = useState(''); // State to store the input value

  // Handle input changes
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add a new todo item
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); // Add the new todo item to the list
      setNewTodo(''); // Clear the input field after adding
    }
  };

  // Delete a todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Remove the item at the specified index
    setTodos(updatedTodos); // Update the state with the new list
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
