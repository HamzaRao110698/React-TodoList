import React from 'react'
import { HiOutlineTrash } from "react-icons/hi2";

function List({item, index , setdata , data}) {

  const del = (index) =>{

    console.log(data)
    const remaining = data.filter((item , i)=>{ return index  != i  })
      setdata(remaining)

  } 

  return (
    <div className='flex justify-center -ml-64    ' >
      <div className=' border-4 text-white p-4  mt-10 p-auto w-1/4 place-self-end -mb-10 '>
      {item}
      <span  className='flex justify-end '><HiOutlineTrash onClick={()=>{del(index)}}
      
         className=' text-black text-3xl hover:text-blue-500 cursor-pointer  '/></span>
     
      
      </div>
      
    </div>
  )
}

export default List
