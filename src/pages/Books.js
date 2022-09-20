// This page will fatch the Books data 

 import { useState, useEffect } from "react";
 import {Link} from 'react-router-dom' 

export const Books = (props) => {
    const [books, setBooks] = useState([])
    const URL = "https://mybooksy-project.herokuapp.com/books"  
    const getBooks = async () =>{
        try{
          const response = await fetch(URL)
          const allBooks = await response.json()
          setBooks(allBooks)
        }catch(err){
          console.log(err)
        }
    }
 useEffect(() => { 
  getBooks()
 }, [])

const loaded = ()=>{
  return books?.map((book)=>{
       return (
         <div key={book._id} className="book-card">
          <h1>{book.title}</h1>
          <Link to={`/books/${book._id}`}> 
          <img src={book.image}  alt="book"/>
          </Link>
           <h2>{book.author}</h2>
           <h3>{book.genre}</h3>
           <p>{book.pages}</p>
           <p>{book.description}</p>
           <p>{book.publishDate}</p>
            <a href={book.link}>Links</a>
           <p>{book.likes}</p>
           <p>{book.__v}</p>
        
        </div>
       )
  })
}
const loading = () => (
  <section className="book-list">
    <h1>
      Loading...
      <span>
        <img
          className="spinner"
          src="https://freesvg.org/img/1544764567.png"
          alt="sipnner"
        />{" "}
      </span>
    </h1>
  </section>
);
  return (
    <div className="book-list"> {books ? loaded() : loading() }

    </div>
  )
}

