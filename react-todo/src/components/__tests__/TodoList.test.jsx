import React, { useState, useCallback } from 'react';
import TodoList from '../components/TodoList';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Jest', completed: false }
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = useCallback(() => {
    if (newTodo.trim() === '') return;
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  }, [newTodo]);

  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id, e) => {
    e.stopPropagation(); // Prevent click event from triggering the <li> click handler
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={(e) => deleteTodo(todo.id, e)}>Delete</button>
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
