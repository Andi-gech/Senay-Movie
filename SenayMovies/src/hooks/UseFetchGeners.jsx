import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchGeners() {
  const getTodos=async ()=> {

      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/genres')
       
    
  }
  return useQuery({ queryKey: ['Genre'], queryFn: getTodos })


}
