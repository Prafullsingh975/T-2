import React from 'react'

const Button = (prop) => {
  const handleClick = ()=>{

    prop.setTodos((pre)=>[...pre,prop.task])
    // todos = [hello]
  }
  return (
    <button onClick={handleClick} className='bg-slate-300 ml-2 rounded-md py-1 px-3 text-gray-900' type="button">Add Task</button>
  )
}

export default Button