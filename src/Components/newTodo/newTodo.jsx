import React from 'react'
import "./newTodo.css"

function NewTodo({ children, todo, handleDelete, handleChecked }) {
    return (
        <li className='newItem'>
            <input type="checkbox" data-todo-id={todo.id} onClick={handleChecked} defaultChecked={todo.isCompleted} />


            <span className='todo-title' style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', opacity: todo.isCompleted ? '0.3' : '1' }}>{children}</span>


            <button className='remove-sign__todo' data-todo-id={todo.id} onClick={handleDelete}>&times;</button>
        </li>
    )
}

export default NewTodo 