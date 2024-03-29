import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  return (
    <>
      <div className='h-screen bg-gray-800 text-slate-100'>
        <Input taskk={task} setTask={setTask}/>
        <Button setTodos ={setTodos} task={task} />
        <TodoList todos = {todos}/>
      </div>
    </>
  )
}

export default App
