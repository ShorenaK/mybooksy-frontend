import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

function Reviews(){

    const [variable, setVariable] = useState([]);
    const params = useParams();
    const bookId = `${params.bookId}/`

    useEffect(()=> {
        fetch(`https://mybooksy-project.herokuapp.com/reviews/${bookId}`)
        .then((res) => res.json())
        .then((json) => {
            setVariable(json)
          
        })
    })
    return (
      <div>
        <div>Reviews:</div>
        <Link to={`/reviews/${bookId}add/`}><p>Add Review</p></Link>
        {variable.map((review, idx) => {
          if (review.recommend == true) {
          return (
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <p>I Recommend</p>
              <Link to={`/reviews/${review._id}/edit/`}><button>Edit Review</button></Link>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Review</button>
            </div>
          )} else {
            return(
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <p>I do not Recommend</p>
              <Link to={`/reviews/${review._id}/edit/`}><button>Edit Review</button></Link>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Review</button>
            </div>
        )}
        })}
      </div>
    )
}

export default Reviews