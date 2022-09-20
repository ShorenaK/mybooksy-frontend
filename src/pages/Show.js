// Delete and update page 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const Show = ({url}) => {
  const [book, setBook ]= useState(null)
  const { url } = useParams()
  // const { id } = useParams()
  // const URL = `http://localhost:4000/books/${id}`
  const URL = `https://mybooksy-project.herokuapp.com/books${id}`

  // const URL = `https://mybooksy-project.herokuapp.com/books?id=${id}`


  const getBook = async ()=>{
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setBook(result)
    }catch(err){
      console.log(err)
    }
  }
console.log(`current book ${JSON.stringify(book)}`)

useEffect(()=>{
  getBook()
}, [])

  const loaded = () => (
  <div className="book">
      <h1>Show Page</h1>
      <h1>{book.title}</h1>
       <img src={book.image}  alt="book"/>
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

const loading = () => {
  return <h1>Loading.........</h1>
 
}

  return (
    <div className="book-list">{book? loaded() : loading()}</div>
  )
}

export default Show