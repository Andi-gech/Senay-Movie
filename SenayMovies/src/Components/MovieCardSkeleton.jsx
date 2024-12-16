import React from 'react'

export default function MovieCardSkeleton() {
  return (
    <div className='h-[200px] shrink-0  group relative mx-2 my-2 flex items-center justify-center shadow-2xl shadow-black z-[10] overflow-hidden w-[150px] rounded-md cursor-pointer bg-gradient-to-r  from-zinc-800 to-zinc-950 animate-pulse'>
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    <div className='absolute top-0 z-20 w-full py-3 h-full flex items-center justify-end flex-col  bg-gradient-to-b    from-transparent to-zinc-950'>
        <p className='text-white rounded-md animate-pulse bg-zinc-900 h-[15px] font-semibold  w-[80%]  px-2'></p>
        <div className='flex flex-row w-full px-2 '>
            <p className='text-gray-600 rounded-md animate-pulse bg-zinc-900 w-[100px] h-[15px]  mt-2'></p>
          
        </div>

    </div>

  </div>
  )
}
