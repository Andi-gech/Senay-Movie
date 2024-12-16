import React, { useState } from 'react'
import Header from './Components/Header'
import Cards from './Components/Cards'
import UseFetchMovieDetail from './hooks/UseFetchMovieDetail'
import { useParams } from 'react-router-dom'
import SearchPopup from './Components/SearchPopup'

export default function MovieDetail() {
    const {id}=useParams()
    const {data,isLoading}=UseFetchMovieDetail(id)
    const [selectedApi,setSelectedApi]=useState(0)
    const [open,setOpen]=useState(false)
    const API=[{
      name:"vidsrc",
      url:`https://vidsrc.net/embed/movie?tmdb=${id}`,
    },
  {
    name:"MovieAPi",
    url:`https://moviesapi.club/movie/${id}`,
  }]

    
    
  return (
    <div className='w-screen relative pb-5 min-h-screen '>
    <Header onopen={() => setOpen(true)} />
    <div className='flex  flex-col items-center justify-center'>
    <div className='sm:w-[70%] w-full sm:h-[450px] h-[300px]  shadow-2xl shadow-yellow-900 px-[10px] mt-[30px] bg-zinc-900'>
    {isLoading &&
        <div className='h-full shrink-0   flex items-center justify-center shadow-2xl shadow-black z-[10] overflow-hidden w-full rounded-md cursor-pointer bg-gradient-to-r  from-zinc-900 to-zinc-950 animate-pulse'>
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
       
    
      </div>

        }
        {data &&
        <iframe  allowFullScreen   src={API[selectedApi]?.url} className='w-full h-full '></iframe>
         } 
         </div>
    <div className='w-full h-[100px]  flex flex-row items-center justify-center'>
      {API?.map((item,index)=>{
        return( <div key={index} style={{
          border:selectedApi===index?'2px solid  orange':'',
        }} onClick={()=>{
          setSelectedApi(index)
        }} className='px-2 py-2 h-[50px] rounded-md w-[100px] mx-3 flex items-center justify-center bg-zinc-800'>
          <p className='text-white'>{item?.name}</p>
        </div>)
      })}
     
    

    </div>
    <div className='sm:w-[90%] w-full flex sm:flex-row flex-col mt-[70px] p-5 '>
      
<Cards islg={true} image={'https://media.themoviedb.org/t/p/w440_and_h660_face'+data?.data?.poster_path}/>
<div className='flex flex-col'>
{isLoading&&
  <>
  <h1 className='text-white mx-3 font-bold text-[30px] w-[300px] bg-zinc-900 animate-pulse rounded-full h-[30px]'></h1>
  <p className=' font-bolds mx-3 bg-zinc-900 w-[100px] mt-2 h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 mt-5 bg-zinc-900 w-[300px]  h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 bg-zinc-900 w-[300px] mt-2 h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 bg-zinc-900 w-[300px] mt-2 h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 mt-5 bg-zinc-900 w-[300px]  h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 bg-zinc-900 w-[300px] mt-2 h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
    <p className=' font-bolds mx-3 bg-zinc-900 w-[300px] mt-2 h-[10px] rounded-full animate-pulse text-sm'>
    
    </p>
  </>
  }
  
  {data &&
  <>
    <h1 className='text-white font-bold text-[30px] mx-3'>{data?.data?.title}</h1>
    <p className='text-gray-500  font-bolds mx-3 text-sm'>
      {data?.data?.tagline}
    </p>
    
    <p className=' font-bolds mx-3 text-sm'>
      {data?.data?.status}
    </p>
    <p className='text-white w-[500px] mx-3'>
       {data?.data?.overview}   </p>
    <div className='mt-2 flex flex-row    items-center'>
      <p className='text-white bg-yellow-500 w-[60px] mx-2 flex justify-center items-center font-semibold rounded-md'>imdb</p>
      <p className='text-white text-sm'>{data?.data?.vote_average}<span className='text-gray-500'>(10)</span></p>
      <p className='text-gray-500 font-bolds mx-1 text-sm'>{data?.data?.release_date}</p>
      <p className='text-gray-500 font-bolds mx-1 text-sm'>|</p>
      <p className='text-gray-500 font-bolds mx-1 text-sm'>{data?.data?.runtime}</p>
      <p className='text-gray-500 font-bolds mx-1 text-sm'>|</p>
      <p className='text-gray-500 font-bolds mx-1 text-sm'>{data?.data?.genres[0]?.name}</p>
    </div>
    </>
}
   


</div>
    </div>

    </div>
    {open &&
   <SearchPopup onclose={()=>setOpen(false)}/>}
    
  </div>
  )
}
