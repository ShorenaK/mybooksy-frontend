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
                    Date of Publication: 
                    <input type="date" required name="publishDate" onChange={handleChange} value={bookForm.publishDate} />
                </label>
                <label>
                    Link to Purchase: 
                    <input type="text" required name="link" placeholder="http://..." onChange={handleChange} value={bookForm.link} />
                </label>
            </form>
        </>
    )
}

export default BookForm