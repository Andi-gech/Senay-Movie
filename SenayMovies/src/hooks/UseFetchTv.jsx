import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchTv(page,Genre) {
  
  const getTodos=async (p,Genre)=> {
    console.log(p,Genre)
    
    
      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/tv/'+p,{
        params: {
          genreId:Genre
      }
      })
       
    }
  return useQuery({ queryKey: ['Tv'], queryFn: ()=>getTodos(page,Genre),enabled:!!page })


 
}
