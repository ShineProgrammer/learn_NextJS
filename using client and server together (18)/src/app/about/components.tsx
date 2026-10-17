"use client"
import React, { useState } from 'react'

function Components() {
    const [counter, setCounter] = useState(1)

   
  return (
    <div>components
        <button onClick={()=>{setCounter(counter + 1)}}>change{counter}</button>
    </div>
  )
}

export default Components