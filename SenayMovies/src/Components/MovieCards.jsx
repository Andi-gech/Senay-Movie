import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCards({ image,Title,movieid,series,Year}) {
  return (
    <Link to={series?`/series/${movieid}`:`/movie/${movieid}`} className='h-[200px] shrink-0  group relative mx-2 my-2 shadow-2xl shadow-black z-[10] overflow-hidden w-[150px] rounded-md cursor-pointer bg-gradient-to-r  from-zinc-800 to-zinc-950'>
    <img src={image} alt="" className='w-full h-full object-cover' />
    <div className='absolute top-0 z-20 w-full py-3 h-full flex items-center justify-end flex-col  bg-gradient-to-b group-hover:from-black group-hover:to-slate-900 group-hover:opacity-80 from-transparent to-zinc-950'>
        <p className='text-white font-semibold  w-full  px-2'>{Title}</p>
        <div className='flex flex-row w-full px-2 '>
            <p className='text-gray-600 '>{Year}</p>
            <p className='text-gray-600  mx-1'>{series?"series":"movie"}</p>
        </div>

    </div>

  </Link>
  )
}
