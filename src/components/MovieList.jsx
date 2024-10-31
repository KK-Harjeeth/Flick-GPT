import React from 'react'
import MovieCard from './MovieCard'
function MovieList({title,movies}) {

  return (
    <div className='px-6'>
        <h1 className='text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies
            ?.filter((movie) => movie?.poster_path) // Only include movies with a valid poster_path
            .map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}/>
            ))}
                {/* <MovieCard posterPath={movies[4].poster_path}></MovieCard> */}
            </div>
        </div>
    </div>
  )
}

export default MovieList;