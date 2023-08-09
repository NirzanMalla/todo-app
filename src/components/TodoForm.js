import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='Input the task to be done today here!' value = {value} onChange={(e)=>setValue(e.target.value) }/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
