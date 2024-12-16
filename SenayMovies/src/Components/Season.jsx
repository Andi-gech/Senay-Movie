import React from 'react'

export default function Season({name,onclick}) {
  return (
    <div  onClick={onclick} className='w-full cursor-pointer h-[50px]  flex items-center justify-center'>
        <p className='text-white font-bold'>{name}</p>
    </div>
  )
}
