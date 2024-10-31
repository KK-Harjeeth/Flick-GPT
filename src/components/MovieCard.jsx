import React, { useState } from 'react';
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath, movieId }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  // Function to fetch the movie trailer
  const getMovieTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers[0];

      if (trailer) {
        // Construct the YouTube iframe URL
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?&autoplay=1`);
        setIsPopupOpen(true); // Open the popup
      } else {
        alert("No trailer available for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  // Handler for card click
  const handleCardClick = () => {
    getMovieTrailer(); // Fetch the trailer when the card is clicked
  };

  // Popup component for displaying the trailer
  const TrailerPopup = ({ isOpen, trailerUrl, onClose }) => {
    if (!isOpen) return null;

    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        onClick={onClose} // Close the popup when the background overlay is clicked
      >
        <div className="bg-white p-4 rounded shadow-lg w-[80%] h-[70%] relative" onClick={(e) => e.stopPropagation()}>
          <button 
            className="absolute top-2 right-2 text-red-500 text-xl focus:outline-none hover:text-red-700"
            onClick={onClose}
            aria-label="Close trailer"
          >
            Close
          </button>
          <iframe
            width="100%"
            height="100%"
            src={trailerUrl}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
            className="rounded"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay;"
          />
        </div>
      </div>
    );
  };

  return (
    <div className='w-48 pr-4 cursor-pointer' onClick={handleCardClick}>
      <img 
        src={`${IMG_CDN_URL}${posterPath}`} 
        alt="Movie Poster" 
        className="rounded transition-transform transform hover:scale-105"
      />
      <TrailerPopup
        isOpen={isPopupOpen}
        trailerUrl={trailerUrl}
        onClose={() => setIsPopupOpen(false)} // Close the popup when the button or overlay is clicked
      />
    </div>
  );
};

export default MovieCard;
