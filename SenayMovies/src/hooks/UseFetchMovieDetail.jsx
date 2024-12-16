import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchMovieDetail(id) {
  
  const getTodos=async (id)=> {
    
    
      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/detail/'+id)
       
    }
  return useQuery({ queryKey: ['MoviesDetail'], queryFn: ()=>getTodos(id),enabled:!!id })


 
}
