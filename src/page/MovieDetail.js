import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container';
import  {Badge}  from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from 'react';
import Review from '../component/Review';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieActions } from '../redux/reducers/moviesReducer';
import MovieCard from '../component/MovieCard';
import { moviesAction } from '../redux/actions/movieAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPeopleGroup  } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader";



const MovieDetail = () => {
  const dispatch = useDispatch();
  const [buttonChecker,buttonSet] = useState(true);

  const reviews= () =>{
      console.log("efwefwe")
      buttonSet(true);
  }

  const recommends = () =>{
    buttonSet(false);
  }

  const {id}=useParams();
  useEffect(()=>
  { 
    dispatch(moviesAction.findMoviesById(id));

  }
  ,[id]);


  const {loading,genre,findMovie,video,review,recommend} =useSelector(state => state.movie);
  console.log("recommend = ",recommend);
  console.log("review = ", review);
  console.log("video = ", video)
  console.log(loading)
  console.log("movie = ",findMovie);
  console.log("genre = ",genre);
  if(loading){
    return <div className="spinner"><ClipLoader color="#ffff" loading={loading}  size={150} /></div>
  }
  return (
    <div>
      <Container className="detail-container">
        <Row>
          <Col lg={4}>
            <img style={{border:"1px solid white"}} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${findMovie.poster_path}`}></img>
          </Col>

          <Col lg={8} className="detail-info">
            <div>{ findMovie.genre_ids.map((id)=> <Badge bg="danger" >{genre.data.genres.find((item)=>item.id==id).name}&nbsp;&nbsp;</Badge>)}</div>
            <h1>{findMovie.title}</h1>
            <div>
              <img style={{width:"20px" }} src='https://jeremyironsno1fan.files.wordpress.com/2009/01/imdb-logo-23962421_std.jpg'></img>
              <span>  {findMovie.vote_average}&nbsp;&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span> </span><span>{ findMovie.popularity}</span>

              <span>&nbsp;&nbsp;{findMovie.adult ? "    청불" : "    전체이용가"}</span>
            </div>
            <hr></hr>
            <div>{findMovie.overview}</div>
            <hr></hr>
            <div style={{padding:"5px"}}><Badge bg="danger">Budget</Badge> </div>
            <div style={{padding:"5px"}}><Badge bg="danger">Revenue</Badge></div>
            <div style={{padding:"5px"}}><Badge bg="danger">Release Day</Badge></div>
            <div style={{padding:"5px"}}><Badge bg="danger">Time</Badge></div>
            <hr></hr>

          
          </Col>
        
        
        </Row>
      
        <br/><br/><br/><br/><br/><br/>
        <div className="detail-button">
          <span className = "detail-button-box" onClick={reviews} style={{backgroundColor: buttonChecker ? 'red' : '' , color: buttonChecker ? 'white' : ''}}>Reviews{`(${review.data.results.length})`}</span>
          <span className = "detail-button-box" onClick={recommends} style={{backgroundColor: !buttonChecker ? 'red' : '' , color: !buttonChecker ? 'white' : ''}}>      Related Movies</span>

        </div>
        <hr></hr>  
        
        <div className="reviews" style={{display: !buttonChecker ? 'none' : ''}}>{review.data.results.map((item)=><Review review={item}></Review>)}</div>
        <br/>


        <div className="recommend" style={{display: buttonChecker ? 'none' : ''}}>{recommend.data.results.map((item)=> <MovieCard movie={item}></MovieCard>)}</div>

      </Container>
    
    </div>
  )
}

export default MovieDetail

