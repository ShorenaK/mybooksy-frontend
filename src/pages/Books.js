// This page will fatch the Books data 

 import { useState, useEffect } from "react";
//  import {Link} from 'react-router-dom' 

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
        <div key={book._id}>
          <h2>{book.title}</h2>
          <img src={book.image}  alt="book"/>
           <h3>{book.author}</h3>
           <h4>{book.genre}</h4>
           <p>{book.pages}</p>
           <p>{book.description}</p>
           <p>{book.publishDate}</p>
            <p>{book.link}</p>
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

