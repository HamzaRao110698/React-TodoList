import React from 'react'
import Form from './component/Form'
import List from './component/List'
import './App.css'
import { useState } from 'react'


function App() {
  const [data,setdata]=useState([])

  
  let addlist= (task ) =>{
      setdata([...data,task])

  }
  

 

 
 

  return (
    <>
     <Form addlist={addlist}/>
     
     {data.map( (listitem , index) => {
      return (<List item={listitem}  index={index}  setdata={setdata} data={data} />)

     })}
    
      
     
    </>
  )
}

export default App
