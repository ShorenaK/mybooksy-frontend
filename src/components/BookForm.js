import { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";

const getBooks = async (fn) => {
    try{
        const response = await fetch(BASE_URL + "books");
        const allBooks = await response.json();
        fn(allBooks)
    } catch (error){
        console.log(err)
    }
}

function BookForm(props) {

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


    return (
        <>
            <h1>Book Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title: 
                    <input type="text" required name="title" placeholder="Enter book name" onChange={handleChange} value={bookForm.title} />
                </label>
            </form>
        </>
    )
}

export default BookForm