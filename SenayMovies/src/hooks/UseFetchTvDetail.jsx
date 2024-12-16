import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchTvDetail(id) {
  
  const getTodos=async (id)=> {
    
    
      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/detail/Tv/'+id)
       
    }
  return useQuery({ queryKey: ['TvDetail'], queryFn: ()=>getTodos(id),enabled:!!id })


 
}
