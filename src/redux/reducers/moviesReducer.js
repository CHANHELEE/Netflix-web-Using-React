import {  createSlice} from '@reduxjs/toolkit'

let initialState = {
  popularMovies:[],
  topRatedMovies:[],
  upComingMovies:[],
  genre:[],
  loading:true
}

const getMovies = createSlice({
  name:"movies",
  initialState,
  reducers:{
    getPopularMovie(state,action){
      state.popularMovies= action.payload.popularMovies;
    }
    ,
    getTopRatedMovie(state,action){
      state.topRatedMovies = action.payload.topRatedMovies;
    },
    getUpComingMovie(state,action){
      state.upComingMovies = action.payload.upComingMovies;
      state.loading=false;
    },
    getGenre(state,action){
      state.genre = action.payload.genre;
    },
    changeSpinnerTrue(state){
      state.loading=true;
    },
    getFail(state){
      state.loading=false;
    },
  }
})

export const movieActions = getMovies.actions
export default getMovies.reducer