import React, { useState } from 'react';
import Season from './Season';

export default function TVSelector({ name, index,setSelectedSeasons,episodeCount,setselected }) {
    const [showEpisode, setShowEpisode] = useState(false);
    if(name=="Specials") return null
  // Create an array with the number of episodes and render each episode
  const renderEpisodes = () => {
    return Array.from({ length: episodeCount }, (_, ind) => (
        <div onClick={()=>{setselected(ind + 1)
            setSelectedSeasons(index )
        }}  className='w-[100%]  cursor-pointer  h-[40px]   shadow-gray-700 shadow-sm flex items-center justify-center'>
          <p className='text-gray-400 text-sm'>Episode {ind + 1}</p>
        </div>
    
    ));
  };
  

  return (
    <div className='w-full shrink-0 flex flex-col items-center my-1 bg-zinc-900 justify-center'>
      <Season onclick={() => setShowEpisode(!showEpisode)} name={name} />
      {showEpisode && 
      <div className='w-full flex items-center justify-center flex-col '>
        
        {renderEpisodes()}
      </div>}
    </div>
  );
}
