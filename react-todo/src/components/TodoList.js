import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Jest', completed: false }
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;
