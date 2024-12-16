import React, { useState } from 'react'
import Header from './Components/Header'
import Cards from './Components/Cards'
import UseFetchMovieDetail from './hooks/UseFetchMovieDetail'
import { useParams } from 'react-router-dom'
import UseFetchTvDetail from './hooks/UseFetchTvDetail'
import Tvselector from './Components/Tvselector'
import SearchPopup from './Components/SearchPopup'
import MovieCardSkeleton from './Components/MovieCardSkeleton'

export default function SeriesDetail() {
    const {id}=useParams()
    const {data,isLoading}=UseFetchTvDetail(id)
    const [selectedApi,setSelectedApi]=useState(0)
    const [selectedEpisode,setSelectedEpisode]=useState(1)
    const [selectedSeason,setSelectedSeason]=useState(1)
    const [open,setOpen]=useState(false)
    const API=[
      {
        name:"MovieAPi",
        url:`https://moviesapi.club/tv/${id}-${selectedSeason}-${selectedEpisode}`,
      },
        {
            name:"vidsrc",
              url:`https://vidsrc.net/embed/tv?tmdb=${id}&season=${selectedSeason}&episode=${selectedEpisode}`,
        },
 
]


  return (
    <div className='w-screen relative min-h-screen '>
      {open &&
   <SearchPopup onclose={()=>setOpen(false)}/>}
    <Header onopen={() => setOpen(true)} />
      {isLoading && <div className='flex sm:mx-[40px]  rounded-full flex-col h-[30px] w-[500px] bg-zinc-900 animate-pulse items-center justify-center'>
        </div>}
        {data &&
    <div className='flex  sm:px-4 flex-row items-center' >
      
        <p className='text-white font-bold text-[20px] sm:text-[30px] mx-5'>Now Watching</p>
        <p className='text-yellow-500 font-bold  mx-2'>
            {data?.data?.name}
        </p>
        <p className='text-gray-400'>
   S{selectedSeason}
</p>
<p className='text-gray-400'>
   E{selectedEpisode}
</p>
        </div>}
    <div className='flex  flex-col items-center justify-center'>
        
    <div className='sm:w-[70%] w-full sm:h-[450px]  h-[300px]  shadow-2xl shadow-yellow-900  mt-[30px] '>
        {isLoading &&
        <div className='h-full shrink-0   flex items-center justify-center shadow-2xl shadow-black z-[10] overflow-hidden w-full rounded-md cursor-pointer bg-gradient-to-r  from-zinc-900 to-zinc-950 animate-pulse'>
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
       
    
      </div>

        }
        {data &&
        <iframe  allowFullScreen   src={API[selectedApi]?.url} className='w-full h-full '></iframe>
         } </div>
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
    <div className='sm:w-[90%] w-full flex flex-col sm:flex-row mt-[70px] p-5 justify-between '>
  <div className='flex sm:flex-row flex-col'>
    {isLoading&& <div className='h-[300px] shrink-0  group relative mx-2 my-2 flex items-center justify-center shadow-2xl shadow-black z-[10] overflow-hidden w-[200px] rounded-md cursor-pointer bg-gradient-to-r  from-zinc-800 to-zinc-950 animate-pulse'>
  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
      </svg>
 

</div>}
    {data&&
  <Cards islg={true} image={'https://media.themoviedb.org/t/p/w440_and_h660_face'+data?.data?.poster_path}/>}
<div className='flex flex-col  justify-center'>
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
    <h1 className='text-white font-bold text-[30px] mx-3'>{data?.data?.name}</h1>
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


</div></div>    


<div className='w-[300px] h-[300px]  flex flex-col  overflow-y-scroll '>
    {data?.data?.seasons?.map((item,index)=>{
        return(
          <Tvselector index={index} setSelectedSeasons={(season)=>setSelectedSeason(season)} setselected={(epsodeno)=>{setSelectedEpisode(epsodeno)
            
          }} name={item.name} episodeCount={item.episode_count} key={index}/>
       
        )
    })}
    </div>
    </div>

    </div>
  
    
  </div>
  )
}
