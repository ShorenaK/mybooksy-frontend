import {useNavigate, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

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
    // const removeReview = async () => {
    //   try {
    //     const options = {method: 'DELETE'}
    //     // const reviewId = variable._id
    //     console.log(variable)
    //     const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${bookId}`, options)
    //     const deletedReview = await response.json()
    //     // window.location.reload(false);
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    return (
      <div>
        <div>Reviews:</div>
        {variable.map((review, idx) => {
          if (review.recommend == true) {
          return (
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <p>I Recommend</p>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
                window.location.reload(false);
              }}>Remove Review</button>
            </div>
          )} else {
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <p>I do not Recommend</p>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
                window.location.reload(false);
              }}>Remove Review</button>
            </div>
          }
        })}
      </div>
    )
}

export default Reviews