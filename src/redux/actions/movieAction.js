import {movieActions} from "../reducers/moviesReducer"
import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
  return async(dispatch)=>{
    try{
      dispatch(movieActions.changeSpinnerTrue());
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)

      const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

      let [popularMovies,topRatedMovies,upComingMovies,genre]=await Promise.all([popularMovieApi,topRatedApi,upComingApi,genreApi])
      dispatch(movieActions.getPopularMovie({popularMovies}));
      dispatch(movieActions.getTopRatedMovie({topRatedMovies}));
      dispatch(movieActions.getUpComingMovie({upComingMovies}));
      dispatch(movieActions.getGenre({genre}));
    }catch(e){
        dispatch(movieActions.getFail());
    }

  }
}

export const moviesAction ={getMovies}