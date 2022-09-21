import "../styles/BookForm.css"
import { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";

const getBooks = async (fn) => {
    try{
        const response = await fetch(BASE_URL + "books");
        const allBooks = await response.json();
        fn(allBooks)
    } catch (error){
        console.log(error)
    }
}
function BookFo
rm(props) {

    const initForm = {
        title: '',
        image: '',
        author: '',
        genre: '',
        pages: 0,
        description: '',
        publishDate: '',
        link: '',
    }

    const [bookForm, setBookForm] = useState(initForm);



    const handleSubmit = async (e) => {
        try {
            const newBook = { ...bookForm }
            const output = JSON.stringify(newBook)
            const options = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: output
            }
            const URL = BASE_URL + "books"
            const response = await fetch(URL, options)
            const responseData = await response.json()
            setBookForm(initForm)

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const data = { ...bookForm, [e.target.name]: e.target.value }
        setBookForm(data)
    }

    return (
        <>
            <h1>Book Form</h1>
            <form onSubmit={handleSubmit}>
                <div class="bform">
                <label>
                    Title: 
                    <input className="title" type="text" required name="title" placeholder="Enter book name" onChange={handleChange} value={bookForm.title} />
                </label>
                <label>
                    Book Cover: 
                    <input type="text" required name="image" placeholder="http://..." onChange={handleChange} value={bookForm.image} />
                </label>
                <label>
                    Author: 
                    <input type="text" required name="author" placeholder="Enter author name" onChange={handleChange} value={bookForm.author} />
                </label>
                <label>
                    Number of Pages: 
                    <input type="number" required min={1} name="pages" onChange={handleChange} value={bookForm.pages} />
                </label>
                <label>
                    Genre: 
                    <input type="text" required name="genre" placeholder="Enter book genres" onChange={handleChange} value={bookForm.genre} />
                </label>
                <label>
                    Description of Book: 
                    <input type="text" required name="description" placeholder="Enter description of book" onChange={handleChange} value={bookForm.description} />
                </label>
                <label>
                    Link to Purchase: 
                    <input type="text" required name="link" placeholder="http://..." onChange={handleChange} value={bookForm.link} />
                </label>
                <label>
                    Date of Publication: 
                    <input type="date" required name="publishDate" onChange={handleChange} value={bookForm.publishDate} />
                </label>
                <button name="Submit" id="button" value="Add Book">Add Book</button>
                </div>
            </form>
        </>
    )
}

export default BookForm