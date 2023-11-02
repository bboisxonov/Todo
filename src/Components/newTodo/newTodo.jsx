import React from 'react'

function NewTodo({ children, todo, handleDelete, handleChecked }) {
    return (
        <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='newItem'>
            <input type="checkbox" data-todo-id={todo.id} onClick={handleChecked} defaultChecked={todo.isCompleted} />
            {children}
            <button data-todo-id={todo.id} onClick={handleDelete}>&times;</button>
        </li>
    )
}

export default NewTodo 