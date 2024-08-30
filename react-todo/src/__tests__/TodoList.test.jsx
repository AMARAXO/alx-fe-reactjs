import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';


test('renders TodoList component', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/Learn React/i);
  expect(todoElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const newTodo = screen.getByText('New Todo');
  expect(newTodo).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoElement = screen.getByText('Learn React');

  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todoElement = screen.getByText('Learn React');
  const deleteButton = screen.getByText('Delete');

  fireEvent.click(deleteButton);

  expect(todoElement).not.toBeInTheDocument();
});
