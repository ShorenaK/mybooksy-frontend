import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL =  "https://mybooksy-project.herokuapp.com/";

// const getBooks = async (fn) => {
//     try{
//         const response = await fetch(BASE_URL + "books");
//         const allBooks = await response.json();
//         fn(allBooks)
//     } catch (error){
//         console.log(error)
//     }
// }

  function EditForm(props) {

    const navigate = useNavigate()
    const [editForm, setEditForm] = useState(null);
    const params = useParams()
    const bookId = params.bookId
    const URL = BASE_URL + `books/${bookId}`  

    const getBook = async () => {
        const response = await fetch(URL)
        const data = await response.json()
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
            console.log(responseData)
            navigate(`/books/${bookId}`)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = { ...editForm, [e.target.name]: e.target.value }
        setEditForm(data)
    }

    useEffect (() => {
        getBook()
    }, [])

    return (
        <>
            {editForm ?
            <>
           <form className="form" onSubmit={handleSubmit}>
           <h1>Book Edit Form !</h1>
            <label>
            Title: <input type="text" required name="title" placeholder="Enter book name" onChange={handleChange} value={editForm.title} />
            </label>
            <br></br>
             <label>
             Cover: <input type="text" required name="image" placeholder="http://..." onChange={handleChange} value={editForm.image} />
            </label>
            <br></br>
            <label>
             Author: <input type="text" required name="author" placeholder="Enter author name" onChange={handleChange} value={editForm.author} />
            </label>
            <br></br>
            <label>
            Pages: <input type="number" required min={1} name="pages" onChange={handleChange} value={editForm.pages} />
            </label>
            <br></br>
            <label>
            Genre: <input type="text" required name="genre" placeholder="Enter book genres" onChange={handleChange} value={editForm.genre} />
            </label>
            <br></br>
            <label>
        Description: <input style={{height:'200px'}} type="text" required name="description" placeholder="Enter description of book" onChange={handleChange} value={editForm.description} />
                </label>
                <br></br>
                <label>
        Link to Purchase: <input type="text" required name="link" placeholder="http://..." onChange={handleChange} value={editForm.link} />
                </label>
                <br></br>
                <label>
        Date of Publication: <input  type="date" required name="publishDate" onChange={handleChange} value={editForm.publishDate} />
                </label>
                <br></br>
                <input className="delete" style={{color:'rgb(107, 38, 38)', marginLeft: '8rem', marginTop: '3rem', borderRadius: 5 + 'px'}} type="Submit" value="Submit Changes" />
            </form>
           </> : null}
        </>
    )
}

export default EditForm