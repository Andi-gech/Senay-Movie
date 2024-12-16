import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseSearchEachCourse(promt,year) {
  
  
  const getTodos=async (param,year)=> {
    console.log(param,year)
    
      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/search/' + param)

       
    }
  return useQuery({ queryKey: ['SearchMoviesDetail',promt,year], queryFn: ()=>getTodos(promt,year),enabled:!!promt })


 
}
