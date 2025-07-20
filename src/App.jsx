import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
const [todos, setTodos] = useState([])

const addTodo=(todo)=>{
  setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
}
const updateTodo = (id, todo) => {
  setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
}

const deleteTodo = (id) =>{
  setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id ))
}

const toggleComplete = (id) =>{
  setTodos((prev) => prev.map((prevTodo)=> prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
}

useEffect(()=>{
const todos = JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length > 0){
  setTodos(todos)
}
}, [])
  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo ,toggleComplete}}>
     
    </TodoProvider>
  )
}

export default App
