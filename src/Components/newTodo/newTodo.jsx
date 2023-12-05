import React from 'react'
import "./newTodo.css"

function NewTodo({ children, todo, handleDelete, handleChecked }) {
    return (
        <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='newItem'>
            <input type="checkbox" data-todo-id={todo.id} onClick={handleChecked} defaultChecked={todo.isCompleted} />
            {children}
            <button className='remove-sign__todo' data-todo-id={todo.id} onClick={handleDelete}>&times;</button>
        </li>
    )
}

export default NewTodo 