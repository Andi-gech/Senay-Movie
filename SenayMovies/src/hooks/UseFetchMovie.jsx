import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

export default function UseFetchMovie(page,Genre) {
  
  const getTodos=async (p,Genre)=> {
    
    
      return await axios.get('https://senaymovieapi.senaycreatives.com/popular/page/'+p,{
        params: {
          genreId:Genre
      }
      })
       
    }
  return useQuery({ queryKey: ['Movies'], queryFn: ()=>getTodos(page,Genre),enabled:!!page })


 
}
