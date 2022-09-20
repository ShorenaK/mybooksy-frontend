import {useParams} from 'react-router-dom';
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
    return (
      <div>
        <div>Reviews:</div>
        {variable.map((review, idx) => {
          return (
            <ul>
              <li>{review.comment}</li>
            </ul>
          )
        })}
      </div>
    )
}

export default Reviews