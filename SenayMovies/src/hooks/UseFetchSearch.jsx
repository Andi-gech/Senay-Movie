import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchSearch(query) {
  const getTodos = async () => {
    return await axios.get('https://senaymovieapi.senaycreatives.com/popular/search/' + query)
  }

  return useQuery({ 
    queryKey: ['SearchMovies', query], 
    queryFn: getTodos,
    enabled: !!query, 
   
  })
}
