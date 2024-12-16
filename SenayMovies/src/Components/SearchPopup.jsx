import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import iconai from '../assets/iconai.png';
import SearchCard from './SearchCard';
import UseFetchSearchAi from '../hooks/UseFetchSearchAi';
import { ThreeDots } from 'react-loader-spinner';

export default function SearchPopup({ onclose }) {
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data, refetch, isRefetching, isLoading,isError } = UseFetchSearchAi(input);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page on new search
    refetch();
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input) {
      setCurrentPage(1); // Reset to the first page on new search
    refetch();
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data?.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='w-screen h-screen top-0 transition-all duration-500 bg-zinc-900 backdrop-blur-sm bg-opacity-45 flex items-center justify-center fixed top-0 z-40'>
      <div className='sm:w-[90%] w-full h-[97%] overflow-hidden px-2 rounded-md flex flex-col items-center bg-zinc-900 bg-opacity-90'>
        <div className='w-full flex p-[10px] justify-between'>
          <div className='flex items-center justify-center flex-row'>
            <p className='text-white font-bold sm:text-3xl text-xl'>Search With Gemini</p>
            <img src={iconai} alt="" className='w-[30px] h-[30px] rounded-full' />
          </div>
       
            <svg
onClick={()=>{
  setInput(null)
  onclose()}}
          className='text-white'
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill='white'
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
        </div>
        <div className='flex w-full flex-row items-center justify-center'>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="I want Movie like Merlin"
            className='sm:w-[40%] w-full rounded-md bg-zinc-800 text-white outline-none p-[10px]'
          />
          <svg
            onClick={handleSearch}
            className="h-[30px] w-[30px] mx-1  cursor-pointer hover:bg-gray-400 rounded-md text-gray-500 bg-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className='w-full mt-[0px]'>
          {data &&
          <h1 className='text-white font-bold'>Search Results for <span className='text-yellow-500'>{input}</span></h1>
          }
        </div>
        
        <div className='flex w-[90%]  overflow-x-auto overflow-hidden items-center flex-row'>
          {!isRefetching && data?.length > 0 &&
            <>
              {paginatedData?.map((item) => (
                <SearchCard key={item.title} Title={item.title} series={item.type === 'tv'} year={item.year} />
              ))}
            </>
          }

          {(isRefetching || isLoading) && (
            <div className='flex flex-row w-full h-[200px] items-center justify-center'>
              <p className='text-white text-3xl font-bold'>Thinking About It</p>
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                className="text-blue-400 z-40"
                color="yellow"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          {isError &&<p className='text-white'>Sorry i cant find </p>}
        </div>
        {!isRefetching && !isLoading && data?.length > 0 && (
          <div className='w-full flex justify-between mt-4'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className='text-white px-4 py-2 bg-red-600 rounded disabled:bg-gray-600'
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(data?.length / itemsPerPage)}
              className='text-white px-4 py-2 bg-red-600 rounded disabled:bg-gray-600'
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
