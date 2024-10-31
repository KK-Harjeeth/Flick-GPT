import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Browse() {
     const user  = useSelector((state) => state.user);
    const navigate=useNavigate();
    const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useEffect(()=>{
      if(!user){
        navigate('/')
      }
    },[])
  return (
    <div>

      <Header/> 
      {showGPTSearch?<GPTSearch/>:<MainContainer/>}
    </div>
  );
}

export default Browse;