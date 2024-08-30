import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the input and button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByLabelText('add-todo-button')).toBeInTheDocument();
  });

  test('allows users to add a todo', () => {
    render(<TodoList />);
    const input = screen.getByLabelText('todo-input');
    const addButton = screen.getByLabelText('add-todo-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('prevents adding an empty todo', () => {
    render(<TodoList />);
    const addButton = screen.getByLabelText('add-todo-button');

    fireEvent.click(addButton);

    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  test('allows users to delete a todo', () => {
    render(<TodoList />);
    const input = screen.getByLabelText('todo-input');
    const addButton = screen.getByLabelText('add-todo-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByLabelText(/delete-todo-/);
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  test('allows users to toggle a todo completion', () => {
    render(<TodoList />);
    const input = screen.getByLabelText('todo-input');
    const addButton = screen.getByLabelText('add-todo-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByLabelText(/toggle-todo-/);
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });
});
