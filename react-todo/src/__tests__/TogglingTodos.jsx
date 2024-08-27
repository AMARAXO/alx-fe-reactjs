test('allows user to toggle a todo', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText(/learn react/i);
  
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
  
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: none');
  });
  