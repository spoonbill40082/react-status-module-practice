import React, { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'

const TodoList = () => {
  const [todoValue, setTodoValue] = useState('')

  const { todos, addTodo, deleteTodo, completeTodo } = useTodoStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoValue)
    setTodoValue('')
  }

  return (
    <div style={{ backgroundColor: 'gray', padding: '10px', marginBottom: '20px' }}>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='new=todo'
          name='newTodo'
          value={todoValue}
          onChange={(e) => { setTodoValue(e.target.value) }}
        />
        <button type='submit'>Add</button>
      </form>
      <ul style={{ fontSize: '15px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', textIndent: -40 }}>
            <span style={{ textDecoration: todo.isCompleted ? "line-threough" : "unset" }}>
              {todo.text}{" "}
            </span>
            <span>
              {!todo.isCompleted ? (<button onClick={() => completeTodo(todo.id)}>🎉</button>) : null}
              <button onClick={() => deleteTodo(todo.id)}>💥</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
