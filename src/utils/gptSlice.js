import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch:false,
        gptMovies:null,
        tmdbResults:null,
    },
    reducers:{
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch;
        }, 
        addGPTMovieResult:(state,action)=>{
            const {gptMovies,tmdbResults} = action.payload;
            state.gptMovies = gptMovies;
            state.tmdbResults = tmdbResults;
        }

    }
})


export const {toggleGPTSearchView,addGPTMovieResult} = gptSlice.actions;
export default gptSlice.reducer