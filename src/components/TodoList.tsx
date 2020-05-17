import React from 'react'
import { Todo } from '../models/todo.models'

interface TodoListProps {
  items: Todo[],
  onDelete: (index: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((todo, index) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDelete(index)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList