import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/EditReview.css'

const BASE_URL = "https://mybooksy-project.herokuapp.com/";

function EditReview(props) {
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState(null);
    const params = useParams()
    const reviewId = params.reviewId
    const URL = BASE_URL + `reviews/review/${reviewId}`

    const getReview = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setEditForm(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(editForm)
        try {
            const output = JSON.stringify(editForm)
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: output
            }
            const response = await fetch(URL, options)
            const responseData = await response.json()
            console.log(responseData)
            navigate(-1)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = {...editForm, [e.target.name]: e.target.value}
        console.log(data)
        setEditForm(data)
    }

    useEffect(() => {
        getReview()
    }, [])

    return (
        <>
            {editForm ?
            <div className="add_review">
            <h1>Edit Review</h1>
            <form onSubmit={handleSubmit}>
                <label> 
                    Would you recommend this book:
                    <input type="radio" required name="recommend" onChange={handleChange} value={true} />
                   <p>YES</p> 
                 </label> 
                   <label>
                    <input type="radio" required name="recommend" onChange={handleChange} value={false} />
                    <p>NO</p>
                    </label>
                    <br></br>
                <label>
                    <p>Comment:</p>
                    <input className="input_place" type="text" required name="comment" placeholder="What are your thoughts on this book?" onChange={handleChange} value={editForm.comment}/>
                </label>
                <input className="submit" type="Submit" value="Submit Changes" />
            </form>
            </div> : null}
        </>
    )
}

export default EditReview