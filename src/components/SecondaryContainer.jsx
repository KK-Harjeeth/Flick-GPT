import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
function SecondaryContainer() {
    const movies = useSelector(store=>store.movies);

  return (
    <div className='bg-black'>
        <div className='-mt-56 relative z-20'> 
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}></MovieList>
            <MovieList title={"Popular"} movies={movies?.popularMovies}></MovieList>
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}></MovieList>
            <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies}></MovieList>
        </div>
        {/* MovieList - popular 
        MovieCard * n
        MovieList - now playing 
        MovieList - trending 
        MovieList - popular  */}

    </div>
  )
}

export default SecondaryContainer;