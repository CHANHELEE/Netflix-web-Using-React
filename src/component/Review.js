import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser  } from '@fortawesome/free-solid-svg-icons'
const Review = ({review}) => {
  return (
    <div className="review-content">
      <div><FontAwesomeIcon icon={faUser} /> {review.author}</div>
      <br/>
      <div>{review.content}</div>
      <hr></hr>
    </div>
  )
}

export default Review