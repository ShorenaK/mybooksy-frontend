import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom' 
import { BiLike } from "react-icons/bi"
import '../styles/Bookinfo.css'
import dateFormat from 'dateformat'

export default function Bookinfo() {
  const [likes, setLikes] = useState(null);
  const [book, setBook ]= useState(null)
  const params = useParams()
  const bookId = `${params.bookId}/`
  const navigate = useNavigate()
  const URL = `https://mybooksy-project.herokuapp.com/books/${bookId}`

  const getBook = async ()=>{
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setBook(result)
      setLikes(result.likes)
    }catch(err){
      console.log(err)
    }
  }
console.log(`current book ${JSON.stringify(book)}`)
// Delete 
const removeBook = async () => {
  try {

      const options = { method: 'DELETE' }
      const response = await fetch(URL, options)
      const deletedBook = await response.json()
       console.log(deletedBook)
      navigate('/books')
  } catch (err) {
      console.log(err)
      navigate(URL)
  }
}
useEffect(()=>{
  getBook()
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const options = {
      method: "PUT",
      headers: {
          "Content-Type" : "application/json"
      },
      body: 'output'
  } 
  // const response = await fetch(URL, options)
  setLikes(likes + 1)
  } catch(error) {
    console.log(error)
  }
} 

  const loaded = () => (
   
  <div className="book">
      <h1>{book.title}</h1>
       <img src={book.image}  alt="book"/>
       <h4>Author: {book.author}</h4>
        <p>Genre: {book.genre}</p>
        <p>Page: {book.pages}</p>
        <p>{book.description}</p>
        <p>Publication Date: {dateFormat(book.publishDate, 'mmmm, dS, yyyy')}</p>
        <a href={book.link} style={{color:'rgb(107, 38, 38)'}}>Links </a>
        <form onSubmit={handleSubmit}>
           <p>{likes}</p>
            <button type="submit"><BiLike size={20} style={{color:'rgb(107, 38, 38)'}}/>Like</button>
           </form>
    <div> 
        <Link to={`/books/${bookId}edit/`}><button style={{color:'rgb(107, 38, 38)'}}>Edit book</button></Link>
        <button className="delete" onClick={removeBook} style={{color:'rgb(107, 38, 38)'}}>
									Remove Book
				</button>
    </div>
</div>
)

const loading = () => {
  return <h1>Loading.........</h1>
 
}
  return (
    <div className="book-list">{book? loaded() : loading()}
     </div>
  )
}
