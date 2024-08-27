// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const headingElement = screen.getByText(/todo list/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(3);
  });

  test('allows user to add a todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements).toHaveLength(4);
    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test('allows user to toggle a todo', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText(/learn react/i);

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: none');
  });

  test('allows user to delete a todo', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText(/learn react/i);
    const deleteButton = screen.getAllByText(/delete/i)[0];

    fireEvent.click(deleteButton);
    expect(firstTodo).not.toBeInTheDocument();
  });
});
