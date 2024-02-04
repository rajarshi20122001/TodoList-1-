"use client"
import React,{ useState } from 'react'

//On devolopment Trying to implement separate "complete" button for completed tasks

const page = () => {
  const [title , settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask,setmaintask]=useState([])
  const [compltedtask,setcpmpletedtask]=useState([])

  const formhandle=(e)=>{ //to save the data
    e.preventDefault()//stop page from reload
    setmaintask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    // console.log(maintask)
  }

  // const completehandeler=(i)=>{
  //   let abc=[...maintask]
  //   abc.slice(i,1)
  //   setmaintask(abc)
  // }

  const deletehandeler = (i) =>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    console.log(copytask)
    setmaintask(copytask)
  }

  let rendertask= <h2>No task is available</h2>

  // let completedTask=<h2>No completed task</h2>

  // if (maintask.length>0)
  // {
  //   completedTask=maintask.map((t,i)=>{//i will tell index
  //     return (
  //     <li key={i} className='flex items-center justify-between mb-2'>
  //       <div className='flex justify-between mb-2 w-2/3'>
  //       <h5 className='text-xl font-semibold text-red-20'>{t.title}</h5>
  //       <h5 className='text-xl font-light text-red-20'>{t.desc}</h5>
  //     </div>
  //     <button onClick={()=>{deletehandeler(i)}} className='bg-red-400 font-bold text-white px-4 rounded'>Delete</button>
  //     <button onClick={()=>{completehandeler(i)}} className='bg-blue-700 font-bold text-white px-4 rounded'>Complete</button>
  //     </li>
  //     );
  //   })
  // }

  if (maintask.length>0)
  {
    rendertask=maintask.map((t,i)=>{//i will tell index
      return (
      <li key={i} className='flex items-center justify-between mb-2'>
        <div className='flex justify-between mb-2 w-2/3'>
        <h5 className='text-xl font-semibold text-red-20'>{t.title}</h5>
        <h5 className='text-xl font-light text-red-20'>{t.desc}</h5>
      </div>
      <button onClick={()=>{deletehandeler(i)}} className='bg-red-400 font-bold text-white px-4 rounded'>Delete</button>
      {/* <button onClick={()=>{completehandeler(i)}} className='bg-blue-700 font-bold text-white px-4 rounded'>Complete</button> */}
      </li>
      );
    })
  }

  return (
    <>
    <h1 className='bg-black text-red-500 text-center p-3 text-2xl font-bold'>ToDoList</h1>
    <form onSubmit={formhandle}>
      <input type='text' className='border-zinc-800 border-3 m-5 px-4 py-2 text-black' placeholder='enter task here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input>
      <input type='text' className='border-zinc-800 border-3 m-5 px-4 py-2 text-black' placeholder='enter description here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      <button className='border-1 bg-cyan-400 rounded-md text-1xl px-1 py-1'>add task</button>
    </form>
    <hr />

    
    <div className='flex-col'>
      <div className='p-7 bg-yellow-500'>
      <ul className='mb-5'>{rendertask}</ul>
      </div>
      {/* <div className='p-7 bg-green-600'> */}
      {/* <ul className='mb-5'>{completedTask}</ul>
      </div> */}
    </div>

    </>
  )
}

export default page
