import React from 'react'
import { useState } from 'react';
import { DiAndroid } from "react-icons/di";

function Form({addlist}) {
  const [task,settask]=useState([])
  let handler=(e) => {
    e.preventDefault()
    settask("")
    

  }
  
  
  return (
    <div>
        <form onSubmit={handler} className='flex justify-center mt-24 '>
            <input type="text" placeholder='enter your task' className='p-4 border-4 bg-black text-2xl text-white w-1/3 rounded-full '
 
              value={task}
              onChange= { (e)=>{
                settask(e.target.value)
                
              

              }}


              
             

             />

             <button  className='mx-20 border-4 border-x-black p-4 rounded-full  mt-2  hover:bg-slate-300'
               
               onClick={() => {
                addlist(task)
               }}

                >
             <DiAndroid  className=' text-blue-600 border-1 text-4xl hover:bg-black'/>
             </button>
             


            




        </form>
        <hr className='flex justify-center w-1/2 mt-28 mx-96 border-2 border-black'/>

         <h1 className='flex justify-left ml-96 mt-6 border-b-4 w-1/6 text-4xl'>TODO LIST +++++</h1>

         <div className='text-white'></div>
      
    </div>
  )
}

export default Form
