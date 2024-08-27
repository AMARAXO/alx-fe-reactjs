import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

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
