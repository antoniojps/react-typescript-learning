import React, { useRef } from 'react'

interface NewTodoProps {
  onAddTodo: (value: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    const value = textInputRef.current!.value
    onAddTodo(value)
    textInputRef.current!.value = ""
  }

  return (
    <form onSubmit={addTodo}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  )
}

export default NewTodo
