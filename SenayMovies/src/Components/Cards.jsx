import React from 'react'

export default function Cards({image,islg}) {
  return (
    <div style={{width:islg?'230px':'150px',
    height:islg?'300px':'200px',
    }} className='h-[200px] shadow-2xl shadow-black z-[10] overflow-hidden w-[150px] rounded-md bg-gradient-to-r  from-zinc-800 to-zinc-950'>
    <img src={image} alt="" className='w-full h-full object-cover' />
  </div>
  )
}
