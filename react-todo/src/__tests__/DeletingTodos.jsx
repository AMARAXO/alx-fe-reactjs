test('allows user to delete a todo', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText(/learn react/i);
    const deleteButton = screen.getAllByText(/delete/i)[0];
  
    fireEvent.click(deleteButton);
    expect(firstTodo).not.toBeInTheDocument();
  });
  