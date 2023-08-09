import React, { useState } from 'react'

const EditTodoForm = ({edit1, task}) => {
    const[value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        edit1(value, task.id)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' type='text' placeholder='update task here' value = {value} onChange={(e)=>setValue(e.target.value) }/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
