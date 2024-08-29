import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Enter a new todo'), {
      target: { value: 'Write Tests' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
