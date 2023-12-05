import React from 'react'
import "./todo.css"
import NewTodo from '../newTodo/newTodo'


function Todo() {

    const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem('todos')) || [])
    const [type, setType] = React.useState(window.localStorage.getItem('type') || 'all')

    function getTodoByType(_type, _todos) {
        if (_type === "all") {
            return _todos
        }
        if (_type === "completed") {
            return _todos.filter(todo => todo.isCompleted)
        }
        if (_type === "uncompleted") {
            return _todos.filter(todo => !todo.isCompleted)
        }
        else {
            return []
        }
    }

    function setTodoLocale(_type) {
        window.localStorage.setItem('type', _type)
        setType(_type)
    }

    const handleDelete = (evt) => {
        const todoId = evt.target.dataset.todoId - 0

        const filteredTodos = todos.filter((todo) => todo.id !== todoId)

        window.localStorage.setItem('todos', JSON.stringify(filteredTodos))

        setTodos(filteredTodos)

    }
    const handleChecked = (evt) => {
        const todoId = evt.target.dataset.todoId - 0

        const foundToDo = todos.find((todo) => todo.id === todoId)

        foundToDo.isCompleted = !foundToDo.isCompleted

        window.localStorage.setItem('todos', JSON.stringify([...todos]))

        setTodos([...todos])

    }

    return (
        <main className='todo' >
            <input className='todoInput' type="text" placeholder="What needs to be done?" onKeyUp={(evt) => {
                if (evt.code === 'Enter' && evt.target.value) {
                    const newTodoItem = {
                        id: todos[todos.length - 1]?.id + 1 || 0,
                        title: evt.target.value.trim(),
                        isCompleted: false,
                    }
                    window.localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]))
                    setTodos([...todos, newTodoItem])

                    evt.target.value = null
                }
            }} />

            <ul>
                {
                    todos.length > 0 && getTodoByType(type, todos).map((todo) => (<NewTodo todo={todo} handleChecked={handleChecked} handleDelete={handleDelete} key={todo.id} > {todo.title} </NewTodo>))
                }
            </ul>

            <button className='todo-types' onClick={() => setTodoLocale("all")}>all</button>
            <button className='todo-types' onClick={() => setTodoLocale("completed")}>completed</button>
            <button className='todo-types' onClick={() => setTodoLocale("uncompleted")}>uncompleted</button>
        </main>
    )
}

export default Todo




















{/* <div className="todo">
    <div className="todoBlock">
        <input className="todoInput" type="text" placeholder="What needs to be done?" />
        <ul className="newTodoList"></ul>
    </div>
    <p className="todoInfo">Double-click to edit a todo <br />
        Created by petehunt <br />
        Part of TodoMVC</p>
</div>
<template id="newToDo">
    <li className="newItem">
        <label htmlFor="checkbox" className="newTodoLabel">
            <input className="newToDocheckbox" type="checkbox" name="checkbox" id="checkbox" />
            <button className="toDoCheckbox"></button>
            <span className="newTodoName">today</span>
        </label>
        <button className="removeTodo">+</button>
    </li>
</template> */}