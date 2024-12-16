import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseFetchMovie from './hooks/UseFetchMovie';
import MovieCardSkeleton from './Components/MovieCardSkeleton';


// Lazy load components
const Cards = lazy(() => import('./Components/Cards'));
const Header = lazy(() => import('./Components/Header'));
const SearchPopup = lazy(() => import('./Components/SearchPopup'));


function App() {
  const { data, isLoading } = UseFetchMovie(1);
  const [image, setImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const navigation=useNavigate()
  
  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key)
    console.log('input',input)
    if (event.key === 'Enter' && input) {
      console.log("am in")
    navigation('/search/'+input)
    }
  };
  const search=(e)=>{
    if( input){
    e.preventDefault()
    navigation('/search/'+input)}
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (image < data?.data?.results?.slice(0, 4).length - 1) {
        setImage(image + 1);
      } else {
        setImage(0);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [image, data]);

  return (
    <div className='bg-gradient-to-r from-black to-zinc-800 flex flex-col w-full sm:min-h-screen overflow-x-hidden overflow-y-auto'>
    
      <div className='w-screen min-h-screen sm:h-screen flex flex-col overflow-x-hidden'>
        <div className='absolute  flex flex-row h-full w-full'>
          <img
            src={'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces' + data?.data?.results?.slice(0, 4)[image]?.poster_path}
            alt=""
            className='transition-all duration-1000 w-[100%] h-full sm:object-scale-down object-cover'
          />
        </div>

        <div className='absolute w-full h-full bg-gradient-to-r from-black via-zinc-950 to-transparent opacity-[89%]' />
        <div className='absolute w-full h-full bg-gradient-to-b from-black via-transparent to-transparent opacity-[30%]' />
        
        {/* Header */}
        <Suspense fallback={<div>Loading...</div>}>
          <Header onopen={() => setOpen(true)} />
        </Suspense>
        
        <div className='z-[10] h-full w-full flex sm:flex-row flex-col sm:justify-center justify-between'>
          <div className='text-white font-bold sm:hidden mt-[40px] sm:mt-0 mb-5 hover:cursor-pointer h-[35px] hover:bg-opacity-[0.5] hover:bg-gray-700 flex justify-center items-center border-[0.5px] p-[5px] rounded-md border-gray-700 mx-2 flex flex-row'>
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="search" className='bg-transparent text-white outline-none w-[300px]' />
            <svg onClick={search} className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className='sm:w-[40%] w-[95%] flex justify-center flex-col sm:pl-[50px] h-full'>
            <h1 className='text-white sm:w-[90%] w-full flex justify-start items-center font-semibold sm:text-5xl text-3xl'>
              {data?.data?.results?.slice(0, 4)[image]?.title}
            </h1>
            {isLoading && <h1 className='text-white sm:w-[90%] w-full h-[20px] bg-zinc-800 rounded-full animate-pulse flex justify-start items-center font-semibold sm:text-5xl text-3xl' />}
            {isLoading && <h1 className='text-white sm:w-[50%] w-full mt-4 h-[20px] bg-zinc-800 rounded-full animate-pulse flex justify-start items-center font-semibold sm:text-5xl text-3xl' />}
            {data && <div className='mt-2 flex flex-row items-center'>
              <p className='text-white bg-yellow-500 w-[60px] mx-2 flex justify-center items-center font-semibold rounded-md'>imdb</p>
              <p className='text-white text-sm'>{data?.data?.results?.slice(0, 4)[image]?.vote_average}<span className='text-gray-500'>(10)</span></p>
              <p className='text-gray-500 font-bolds mx-1 text-sm'>{data?.data?.results?.slice(0, 4)[image]?.release_date}</p>
              <p className='text-gray-500 font-bolds mx-1 text-sm'>|</p>
              <p className='text-gray-500 font-bolds mx-1 text-sm'>{data?.data?.results?.slice(0, 4)[image]?.original_language}</p>
              <p className='text-gray-500 font-bolds mx-1 text-sm'>|</p>
              <p className='text-gray-500 font-bolds mx-1 text-sm'>Action</p>
            </div>}
            <div className='mt-2 flex flex-row items-center'>
              {isLoading && <p className='w-[60%] h-[20px] mt-1 animate-pulse rounded-full bg-zinc-800' />}
              <p className='text-gray-500 font-bolds mx-1 text-sm'>
                {data?.data?.results?.slice(0, 4)[image]?.overview}
              </p>
            </div>
            {data && <div className='mt-2 flex flex-row items-center'>
              <Link to={'/movie/' + data?.data?.results?.slice(0, 4)[image]?.id} className='px-2 h-[50px] rounded-md border-2 flex justify-center items-center border-gray-500'>
                <p className='text-gray-200 font-bolds mx-1 text-sm'>Watch Trailer</p>
              </Link>
              <Link to={'/movie/' + data?.data?.results?.slice(0, 4)[image]?.id} className='px-2 h-[50px] rounded-md mx-2 bg-yellow-500 flex flex-row justify-center items-center'>
                <p className='text-black font-bold text-[15px] mx-1 text-sm'>Watch Now</p>
              </Link>
            </div>}
            {isLoading && <div className='mt-2 flex flex-row items-center'>
              <div className='px-2 h-[50px] w-[100px] shrink-0 bg-zinc-900 rounded-md animate-pulse flex justify-center items-center' />
              <div className='px-2 h-[50px] mx-4 w-[100px] shrink-0 bg-zinc-900 rounded-md animate-pulse flex justify-center items-center' />
            </div>}
          </div>
          {data && <div className='sm:w-[60%] mt-5 flex overflow-x-scroll h-full justify-center pb-10 flex-row items-end'>
            {data?.data?.results?.slice(0, 4).map((item, key) => (
              <div className={key === image ? "border-4 scale-110 transition-all duration-200 rounded-md border-yellow-500 mx-2" : "mx-2"} key={key}>
                <Suspense fallback={<MovieCardSkeleton />}>
                  <Cards image={'https://media.themoviedb.org/t/p/w440_and_h660_face' + item.poster_path} />
                </Suspense>
              </div>
            ))}
          </div>}
          {isLoading && <div className='sm:w-[60%] mt-5 flex overflow-x-scroll h-full justify-center pb-10 flex-row items-end'>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </div>}
        </div>
      </div>

      
      {/* Search popup */}
      {open && <Suspense fallback={<div>Loading...</div>}>
        <SearchPopup onclose={() => setOpen(false)} />
      </Suspense>}
    </div>
  );
}

export default App;

