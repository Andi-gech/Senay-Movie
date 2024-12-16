import React from 'react'
import Header from './Components/Header'
import SearchPopup from './Components/SearchPopup'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import UseFetchSearch from './hooks/UseFetchSearch'
import MovieCards from './Components/MovieCards'

export default function Search() {
    const [open, setOpen] = useState(false)
    const {query}=useParams()
    
    const {data,isLoading}=UseFetchSearch(query)
    console.log(data?.data?.results)

  return (
    <div className='w-screen bg-black relative min-h-screen '>
    <Header onopen={() => setOpen(true)} />
    {open &&
 <SearchPopup onclose={()=>setOpen(false)}/>}
 <div className='w-full flex items-center justify-center flex-col bg-black'>
<div className='w-[90%] h-[100px] flex flex-row items-center'>
    <p className='text-white font-bold text-2xl'>Search Result </p>
    <p className='text-orange-500 mx-5 font-bold text-2xl'>
{query}
    </p>

</div>

    <div className='w-[90%] h-[1px] bg-gray-500'></div>
    </div>
    {data && 
    <div className='w-full flex flex-row flex-wrap my-3 sm:px-[50px]'>
        {data?.data?.results?.map((item)=>{
            return (
                <MovieCards Title={item?.title||item?.name}  movieid={item?.id}  series={item?.media_type==='tv'?true:false} image={'https://media.themoviedb.org/t/p/w440_and_h660_face'+item?.poster_path}/>
            )
        })}
       
        

 </div>}
 
  
   
  </div>
  )
}
