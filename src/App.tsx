import React, { useState } from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './models/todo.models'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (newTodo: string) => {
    const newTodoItem = {
      text: newTodo,
      id: newTodo + new Date().getTime()
    }
    setTodos([...todos, newTodoItem])
  }

  const handleDeleteTodo = (deletedTodoIndex: number) => {
    const result = [...todos]
    result.splice(deletedTodoIndex, 1)
    setTodos(result)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo}/>
      <TodoList items={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
