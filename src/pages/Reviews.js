import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {BsFillEmojiSmileFill, BsFillEmojiExpressionlessFill} from 'react-icons/bs'

function Reviews({user}){
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
        { user ?
          <Link to={`/reviews/${bookId}add/`}><button>Add Review</button></Link>
        : null }
        {variable.map((review, idx) => {
          if (review.recommend == true) {
          return (
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <h1><BsFillEmojiSmileFill /></h1>
              {user ?
              <>
              <Link to={`/reviews/${review._id}/edit/`}><button>Edit Review</button></Link>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Review</button>
              </>
              : null }
            </div>
          )} else {
            return(
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <h1><BsFillEmojiExpressionlessFill /></h1>
              {user ?
              <>
              <Link to={`/reviews/${review._id}/edit/`}><button>Edit Review</button></Link>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Review</button>
              </>
              : null }
            </div>
        )}
        })}
      </div>
    )
}

export default Reviews