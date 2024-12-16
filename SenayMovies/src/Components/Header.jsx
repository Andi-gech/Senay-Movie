import React, { useState } from 'react'
import iconai from '../assets/iconai.png'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import MobileHeader from './MobileHeader'
export default function Header({onopen}) {
  const [input,setInput]=useState(null)
  const [open,setOpen]=useState(false)
  const navigation=useNavigate()
  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key)
    console.log('input',input)
    if (event.key === 'Enter' && input) {
      console.log("am in")
    navigation('/search/'+input)
    }
  };
  return (
    <>
    <MobileHeader onclose={()=>setOpen(false)} visible={open}/>
    <div className='flex flex-row z-[20] justify-between  mx-2 sm:mx-[50px] items-center my-4'>
     
    <Link to={'/'} className='flex hover:cursor-pointer  flex-row item-center justify-center mt-2'>
      <p className='text-white text-2xl font-bold'>Senay</p>
      <div className=' px-2 h-[32px] mx-2 flex  justify-center items-center     bg-yellow-500'>
        <p className='text-white font-bold'>Movies</p>
      </div>
    </Link>
    <div onClick={onopen} className='text-white sm:hidden font-bold  hover:cursor-pointer h-[35px] hover:bg-opacity-[0.5] hover:bg-gray-700 flex  justify-center items-center  border-[0.5px] p-[5px] rounded-md border-gray-700 mx-2  flex flex-row'>
      <img src={iconai} alt="" className='w-[20px] h-[20px] rounded-full' />
      <p className='text-white  mx-1'>search  Gemini</p>
      </div>
    <div onClick={()=>setOpen(true)} className='sm:hidden text-white h-[35px]'>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-8 w-8">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
    </div>
   
    <div className=' hidden sm:flex flex-row items-center justify-center'>
     
    <div className='text-white font-bold  hover:cursor-pointer h-[35px] hover:bg-opacity-[0.5] hover:bg-gray-700 flex  justify-center items-center  border-[0.5px] p-[5px] rounded-md border-gray-700 mx-2  flex flex-row'>
      <input onKeyDown={handleKeyDown} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="search" className='bg-transparent text-white outline-none w-[300px] ' />
      <svg  onClick={()=>{
        if(input){
          navigation('/search/'+input)
        }
      }} class="h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>
  
      </div>
      <Link to='/' className='text-white font-bold mx-5 hover:cursor-pointer hover:text-yellow-500 '>Home</Link>
      <Link to='/Movies' className='text-white font-bold mx-5 hover:cursor-pointer hover:text-yellow-500 '>Movies</Link>
      {/* <Link to='/trending' className='text-white font-bold mx-5 hover:cursor-pointer hover:text-yellow-500 '>Trending</Link> */}
      <Link to='/Tvseries' className='text-white font-bold mx-5 hover:cursor-pointer  hover:text-yellow-500'>Tv Series</Link>
      
      <div onClick={onopen} className='text-white font-bold  hover:cursor-pointer h-[35px] hover:bg-opacity-[0.5] hover:bg-gray-700 flex  justify-center items-center  border-[0.5px] p-[5px] rounded-md border-gray-700 mx-2  flex flex-row'>
      <img src={iconai} alt="" className='w-[20px] h-[20px] rounded-full' />
      <p className='text-white  mx-1'>search with Gemini</p>
      </div>
  
      
    </div>
  </div>
  </>
  )
}
