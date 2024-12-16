import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchSeriesGener() {
  const getTodos=async ()=> {

      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/config/tv/genres')
       
    
  }
  return useQuery({ queryKey: ['TvGenre'], queryFn: getTodos })


}
