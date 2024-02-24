import React, { useState } from 'react'

const Input = (prop) => {
    console.log(prop);
    const handleChange = (e)=>{
        prop.setTask(e.target.value)
    }
  return (
    <input className='text-gray-800' onChange={handleChange} type="text" name="todo" placeholder='Enter Task' value={prop.taskk}/>
  )
}

export default Input