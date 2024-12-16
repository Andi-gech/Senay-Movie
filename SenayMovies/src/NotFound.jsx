import React, { useState } from 'react'
import Header from './Components/Header'
import SearchPopup from './Components/SearchPopup'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()


  return (
    <div className='w-screen h-screen bg-black relative min-h-screen '>
    <Header onopen={() => setOpen(true)} />
    {open &&
 <SearchPopup onclose={()=>setOpen(false)}/>}
 <div className='flex items-center flex-col h-full w-full  justify-center'>
    <div className='flex flex-row w-full items-center justify-center '>
    <svg className= 'size-[80px]'   xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

    <p className='text-white font-bold text-2xl'>Page Not Found</p>
    </div>
    
    <div onClick={()=>{
        navigate(-1)
    }} className='w-[150px] h-[50px] bg-zinc-900 flex items-center justify-center mt-6 rounded-md'>
        <p className='text-white font-bold text-xl'>Go Back</p>
    </div>
 </div>
 
   
 
  
   
  </div>)
}
