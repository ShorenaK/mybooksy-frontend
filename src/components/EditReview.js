import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = "https://mybooksy-project.herokuapp.com/";

function EditReview(props) {
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState(null);
    const params = useParams()
    const bookId = params.bookId
    const URL = BASE_URL + `reviews`

    const getReview = async () => {
        const response = await fetch(URL)
        const data = response.json()
        setEditForm(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
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
            navigate(`/books/${bookId}`)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = {...editForm, [e.target.name]: e.target.value}
        setEditForm(data)
    }

    useEffect(() => {
        getReview()
    })

    return (
        <>
            {editForm ?
            <>
            <h1>Edit Review</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Would you recommend this book:
                    <input type="radio" required name="recommend" onChange={handleChange} value={editForm.recommend = true} />
                    Yes
                </label>
                <label>
                    <input type="radio" required name="recommend" onChange={handleChange} value={editForm.recommend = false} />
                    No
                </label>
                <br></br>
                <label>
                    Comment:
                    <input type="text" required name="comment" placeholder="What are your thoughts on this book?" onChange={handleChange} value={editForm.comment} />
                </label>
                <input type="Submit" value="Submit Changes" />
            </form>
            </> : null}
        </>
    )
}

export default EditReview