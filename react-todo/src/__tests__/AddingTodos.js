import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; 

test('allows user to add a todo', () => {
    render(React.createElement(TodoList));
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});
