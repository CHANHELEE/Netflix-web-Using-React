import React from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate,Navigate } from 'react-router-dom'
import {movieActions} from "../redux/reducers/moviesReducer"

const MovieCard = ({movie}) => {
  const genre = useSelector(state => state.movie.genre);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToDetail = (id) =>{
    dispatch(movieActions.changeSpinnerTrue())
    return navigate(`/movies/${id}`)
  }
  return (  
      <div 
      className="card"
      style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`+")"}}
      onClick={()=>goToDetail(movie.id)}>
      <div className="overlay">
          <h1>{movie.title}</h1>
          <div>{movie.genre_ids.map((id)=> <Badge bg="danger" >{genre.data.genres.find((item)=>item.id==id).name}</Badge>)}</div>
          <div>
            <span>평점: {movie.vote_average} </span>
            <span>&nbsp;&nbsp;&nbsp;{movie.adult?"청불":"전체이용가"}</span>
          </div>
        </div>
      </div>

  )
}

export default MovieCard