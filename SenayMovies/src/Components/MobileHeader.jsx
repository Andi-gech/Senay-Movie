import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileHeader({ visible, onclose}) {
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    let timeout;
    if (visible) {
      timeout = setTimeout(() => {
        setShowBlur(true);
      }, 300); // Match the duration of the transform animation
    } else {
      setShowBlur(false);
    }
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <div
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
      className={`fixed sm:hidden flex-row items-center justify-end flex z-[500] right-0 w-full h-full ${
        showBlur ? 'backdrop-blur-md bg-zinc-900 bg-opacity-50' : ''
      } `}
    >
      <div
        onClick={onclose}
        className='w-[50px] text-white self-start text-sm h-[50px] bg-zinc-500 bg-opacity-15'
      >
        <svg
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
      <div className='w-[80%] h-full flex-col pt-[40px] bg-gradient-to-b from-zinc-950 rounded-l-lg to-zinc-950'>
        <Link to={"/"} className='w-full h-[60px] flex items-center bg-yellow-900 bg-opacity-10 justify-center my-4'>
          <p className='text-white text-2xl font-bold'>Home</p>
        </Link>
        <Link to={"/Movies"} className='w-full h-[60px] flex items-center bg-yellow-900 bg-opacity-10 justify-center my-4'>
          <p className='text-white text-2xl font-bold'>Movie</p>
        </Link>
        <Link to={"/TvSeries"} className='w-full h-[60px] flex items-center bg-yellow-900 bg-opacity-10 justify-center my-4'>
          <p className='text-white text-2xl font-bold'>Tv</p>
        </Link>
        <Link className='w-full h-[60px] flex items-center bg-yellow-900 bg-opacity-10 justify-center my-4'>
          <p className='text-white text-2xl font-bold'>Home</p>
        </Link>
      </div>
    </div>
  );
}
