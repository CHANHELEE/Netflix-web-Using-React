import React from 'react'
import { useEffect } from 'react'
import { moviesAction } from '../redux/actions/movieAction'
import { useDispatch,useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'

const Home = () => {
 
  
  const dispatch = useDispatch();
  useEffect(()=>
  {
    dispatch(moviesAction.getMovies());
  }
  ,[])

  const {popularMovies,topRatedMovies,upComingMovies,loading} = useSelector(state => state.movie);
  console.log(popularMovies)
  if(loading){
    return <div className="spinner"><ClipLoader color="#ffff" loading={loading}  size={150} /></div>
  }
  return (
    <div >
      
      <Banner movie={popularMovies.data.results[0]}/>

      <h1 className="movie-sort">Popular Movie</h1>
      <MovieSlide movie={popularMovies}/>
      <h1 className="movie-sort">Top rated Movie</h1>
      <MovieSlide movie={topRatedMovies}/>
      <h1 className="movie-sort">Upcoming Movie</h1>
      <MovieSlide movie={upComingMovies}/>
    
    </div>
  )
}

export default Home