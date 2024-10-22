import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

function GPTMovieSuggestions() {
  const gpt = useSelector(store => store.gpt);
  const { gptMovies, tmdbResults } = gpt;
  const movieList = tmdbResults?.flat(); // Flatten the movie results list

  if (!gptMovies) return null;

  return (
    <div className='p-4 m-4 bg-black text-white relative bg-opacity-70'>
      {/* Display GPT movies list separated by commas */}
      <p className="py-2">
        <strong>Search Results: </strong>
        {gptMovies.join(', ')}
      </p>
      
      {/* Display the movie cards */}
      <MovieList title="" movies={movieList}></MovieList>
    </div>
  );
}

export default GPTMovieSuggestions;
