import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const MovieCard = ({movie}) => {
  const genre = useSelector(state => state.movie.genre);
  console.log(genre);
  return (
    <div 
    className="card"
    style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`+")"}}>


      <div className="overlay">
        <h1>{movie.title}</h1>
        <div>{movie.genre_ids.map((id)=> <Badge bg="danger" >{genre.data.genres.find((item)=>item.id==id).name}</Badge>)}</div>
        <div>
          <span>{movie.vote_average}</span>
          <span>{movie.adult?"청불":"전체"}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard