import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; 

test('allows user to delete a todo', () => {
    render(React.createElement(TodoList));
    const firstTodo = screen.getByText(/learn react/i);
    const deleteButton = screen.getAllByText(/delete/i)[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});
