import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {BsFillEmojiSmileFill, BsFillEmojiExpressionlessFill} from 'react-icons/bs'
import '../styles/Bookinfo.css'

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
      <div className='book-reviews'>
             <h4>   Reviews:</h4>
        <Link to={`/reviews/${bookId}add/`}><button className='delete' style={{color:'rgb(107, 38, 38)', marginBottom:'2rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Add Review</button></Link>
        {variable.map((review, idx) => {
          if (review.recommend == true) {
          return (
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <h1><BsFillEmojiSmileFill /></h1>
              <Link to={`/reviews/${review._id}/edit/`}><button className='delete' style={{color:'rgb(107, 38, 38)', marginBottom: '2rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Edit Review</button></Link>
              <button className="delete" style={{color:'rgb(107, 38, 38)', marginBottom:'3rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}} onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }}>Remove Review</button>
            </div>
          )} else {
            return(
            <div className='review-wrapper'>
              <p>{review.comment}</p>
              <h1><BsFillEmojiExpressionlessFill /></h1>
              <Link to={`/reviews/${review._id}/edit/`}><button className='delete' style={{color:'rgb(107, 38, 38)', marginBottom:'3rem', marginLeft:'0.5rem',marginRight:'0.5rem',marginTop:'0.5rem'}}>Edit Review</button></Link>
              <button className="delete" onClick={async ()=> {
                const options = {method: 'DELETE'}
                const response = await fetch(`https://mybooksy-project.herokuapp.com/reviews/${review._id}`, options)
                const deletedReview = await response.json()
              }} style={{color:'rgb(107, 38, 38)'}}>Remove Review</button>
            </div>
        )}
        })}
      </div>
    )
}

export default Reviews