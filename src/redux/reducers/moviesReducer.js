import {  createSlice} from '@reduxjs/toolkit'

let initialState = {
  popularMovies:[],
  topRatedMovies:[],
  upComingMovies:[],
  genre:[],
  findMovie:[],
  video:[],
  review:[],
  recommend:[],
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
    getFindMovie(state,action){
      state.findMovie = action.payload.findMovie.data.movie_results[0];
    },
    getVideo(state,action){
      state.video = action.payload.video;
    },
    getReview(state,action){
      state.review = action.payload.review;
    },
    getRecommend(state,action){
      state.recommend = action.payload.recommend;
      state.loading= false;

    }


  }
})

export const movieActions = getMovies.actions
export default getMovies.reducer