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
      dispatch(movieActions.getFail());


    }catch(e){
        dispatch(movieActions.getFail());
    }

  }
}


function findMoviesById(movieId){
  return async(dispatch)=>{
    try{
      dispatch(movieActions.changeSpinnerTrue());
      const externalId = await api.get(`/movie/${movieId}/external_ids?api_key=${API_KEY}`);
      const id = externalId.data.imdb_id;
      const findMovie = await api.get(`/find/${id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);
      const genre = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      const video = await api.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
      const review = await api.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
      const recommend = await api.get(`/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
      const detailInfo = await api.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      dispatch(movieActions.getFindMovie({findMovie}));
      dispatch(movieActions.getGenre({genre}));
      dispatch(movieActions.getVideo({video}));
      dispatch(movieActions.getReview({review}));
      dispatch(movieActions.getRecommend({recommend}));
      dispatch(movieActions.getDetail({detailInfo}));
      dispatch(movieActions.getFail());



    }catch(e){
        dispatch(movieActions.getFail());
    }

  }
}

export const moviesAction ={getMovies,findMoviesById}