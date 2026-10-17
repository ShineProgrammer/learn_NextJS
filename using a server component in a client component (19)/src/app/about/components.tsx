"use client"
import React, { useState } from 'react'
import ServerComp from './ServerComp'

function Components({ children }: LayoutProps<"/">) {
    const [counter, setCounter] = useState(1)

   
  return (
    <div>components
        
        <button onClick={()=>{setCounter(counter + 1)}}>change{counter}</button>
        {children}
        
    </div>
  )
}

export default Components