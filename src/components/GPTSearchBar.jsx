import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";
function GPTSearchBar() {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  // search movie in TMDB according to the query 
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json() ;
    return json.results;

  }

  const handleGPTSearchClick = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    // make an API call and get movie results
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies , comma seperated like the example result given ahead. example result is Gadar,Sholay,Don,Indian,Koi Mil Gaya , DISCLAIMER : NEVER go out of this format even if I enter any wrong query";
    // Make sure to include these imports:

    const genAI = new GoogleGenerativeAI(OPENAI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(gptQuery);
    const gptMovies = result.response.text().split(',');
    console.log(result.response.text());
    const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults); 
    dispatch(addGPTMovieResult({gptMovies,tmdbResults})); 
  };
  return (
    <div className="pt-[10%] flex justify-center relative">
      <form
        action=""
        className="bg-black w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 mx-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
