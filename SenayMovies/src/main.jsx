import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Popular from './Popular.jsx';
import TvSeries from './TvSeries.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MovieDetail from './MovieDetail.jsx';
import SeriesDetail from './SeriesDetail.jsx';
import Search from './Search.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './NotFound.jsx';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
     <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    
    <div className=' bg-gradient-to-r select-none from-black to-zinc-950 overflow-hidden'>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Movies" element={<Popular />} />
     
        <Route path="/Tvseries" element={<TvSeries />} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path='/series/:id' element={<SeriesDetail/>} />
        <Route path='/search/:query' element={<Search/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
    
    </Router>
    <Footer/>
    </div>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
