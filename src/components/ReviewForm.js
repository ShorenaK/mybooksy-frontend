import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

const BASE_URL = "https://mybooksy-project.herokuapp.com/"

function ReviewForm(props) {
    const params = useParams();
    const bookId = params.bookId;
    const navigate = useNavigate();
    const initForm = {
        recommend: true,
        comment: '',
        book: bookId,
    }
    const [reviewForm, setReviewForm] = useState(initForm);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newReview = {...reviewForm}
            const output = JSON.stringify(newReview)
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: output
            }
            const URL = BASE_URL + "reviews"
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setReviewForm(initForm)
            navigate(`/books/${bookId}`)
        } catch (error) {
            console.log(error)
        }   
    }
    
    const handleChange = (e) => {
        const data = {...reviewForm, [e.target.name]: e.target.value}
        setReviewForm(data)
    }

    return (
        <>
            <h1>Write a new review!</h1>
            <form onSubmit={handleSubmit}>
                <label>Would you recommend this book:
                    <input type="radio" required name="recommend" onChange={handleChange} value={true} />
                    Yes
                    <input type="radio" required name="recommend" onChange={handleChange} value={false} />
                    No
                </label>
                <br></br>
                <label>
                    Comment:
                    <input type="text" required name="comment" placeholder="What are your thoughts on this book?" onChange={handleChange} value={reviewForm.comment} />
                </label>
                <input type='Submit' value="Add Review" />
            </form>
        </>
    )
}

export default ReviewForm;