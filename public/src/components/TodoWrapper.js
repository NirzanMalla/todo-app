import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
uuidv4()

const TodoWrapper = () => {
    const[todos,setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }
    const delete1 = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const edit1 = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isEditing : !todo.isEditing} : todo))
    }

    const updatetask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todos, task, isEditing : !todo.isEditing}: todo))
    }

  return (
    <div className='TodoWrapper'>
        <h1>To-Do List</h1>
      <TodoForm addTodo = {addTodo}  />
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditTodoForm edit1={updatetask} task={todo}/> ): (<Todo task={todo} key={index} toggleComplete={toggleComplete} delete1={delete1} edit1={edit1}/>)
        ) 
            

      )}
      
    </div>
  )
}

export default TodoWrapper
