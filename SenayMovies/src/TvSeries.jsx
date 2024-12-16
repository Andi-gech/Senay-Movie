import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import UseFetchGeners from './hooks/UseFetchGeners';
import MovieCards from './Components/MovieCards';
import UseFetchTv from './hooks/UseFetchTv';
import SearchPopup from './Components/SearchPopup';
import MovieCardSkeleton from './Components/MovieCardSkeleton';
import UseFetchSeriesGener from './hooks/UseFetchSeriesGener';

export default function TvSeries() {
  const [currentPage, setCurrentPage] = useState(1);
  const [SelectedGenere, setSelectedGenere] = useState(null);
  const [open,setOpen]=useState(false)
  const { data: geners } = UseFetchSeriesGener();
  const { data,refetch,isLoading,isFetching } = UseFetchTv(currentPage,SelectedGenere)
  useEffect(() => {
    refetch()
    window.scrollTo(0, 0);

  }, [currentPage,SelectedGenere])

  const handleNextPage = () => {
    if (currentPage < data?.data?.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };


  return (
    <div className='w-screen relative  min-h-screen'>
      {open &&
   <SearchPopup onclose={()=>setOpen(false)}/>}
      <Header onopen={() => setOpen(true)} />
      <div className='w-full h-[50px]  overflow-x-auto  pb-4  px-[10px] mt-[30px] flex flex-row'>
        <div onClick={() => setSelectedGenere(null)}  className={`px-4 cursor-pointer rounded-md flex items-center justify-center mx-2 shrink-0 ${!SelectedGenere  ? 'bg-yellow-500' : 'bg-zinc-900'}`}>
          <p className='text-white text-sm'>All</p>
        </div>
        {geners?.data?.map((item) => (
          <div key={item.id} onClick={() => {
            setCurrentPage(1)
            setSelectedGenere(item.id)
          }} className={`px-4 cursor-pointer rounded-md flex items-center justify-center mx-2 shrink-0 ${SelectedGenere === item.id ? 'bg-yellow-500' : 'bg-zinc-900'} `}>
            <p className='text-white text-sm'>{item.name}</p>
          </div>
        ))}
      </div>
      <div className='w-full'>
        <div className=' mt-[50px]'>
          <h1 className='text-white font-bold text-3xl px-[10px] mt-[10px]'>Popular TV Shows</h1>
        </div>
        <div className='sm:w-[90%] h-full mt-[20px] flex flex-row flex-wrap'>
          {!(isLoading||isFetching)&&
          <>{data?.data?.results?.map((item) => (
            <MovieCards key={item.id} movieid={item.id} series={true} image={'https://image.tmdb.org/t/p/w500' + item.poster_path} Title={item.name}  Year={item.first_air_date} />
          ))}</>
          }
          
          {(isLoading||isFetching)&&<div className='sm:w-[90%] h-full mt-[20px] flex flex-row flex-wrap'>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
           <MovieCardSkeleton/>
            </div>}
        </div>
      </div>
      <div className='w-full flex flex-row justify-center my-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 rounded-md bg-zinc-900 text-white ${currentPage === 1 ? 'opacity-50' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === data?.data?.total_pages}
          className={`px-4 py-2 mx-2 rounded-md bg-zinc-900 text-white ${currentPage === data?.data?.total_pages ? 'opacity-50' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
