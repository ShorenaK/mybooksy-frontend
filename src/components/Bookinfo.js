import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom' 
import { BiLike } from "react-icons/bi"

export default function Bookinfo({user}) {
  const [likes, setLikes] = useState(null);
  const [book, setBook ]= useState(null)
  const userInfo = user
  const params = useParams()
  const bookId = `${params.bookId}/`
  const navigate = useNavigate()
  const URL = `https://mybooksy-project.herokuapp.com/books/${bookId}`

  const getBook = async ()=>{
    try {
      const response = await fetch(URL)
      const result = await response.json()
      setBook(result)
      setLikes(result.likes.length)
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

const handleSubmitLike = async (e) => {
  e.preventDefault()
  book.likes.push(userInfo._id)
  const output = JSON.stringify(book)
  try {
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
  setLikes(likes + 1)
  } catch(error) {
    console.log(error)
  }
} 

const handleSubmitUnlike = async (e) => {
  e.preventDefault()
  const index = book.likes.indexOf(userInfo._id)
  book.likes.splice(index, 1)
  const output = JSON.stringify(book)
  try {
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
  setLikes(likes - 1)
  } catch(error) {
    console.log(error)
  }
} 

  const loaded = () => (
   
  <div className="book">
      <h1></h1>
      <h1>{book.title}</h1>
       <img src={book.image}  alt="book"/>
       <h2>Author: {book.author}</h2>
        <h3>Genre: {book.genre}</h3>
        <p>Page: {book.pages}</p>
        <p>{book.description}</p>
        <p>Publication Date: {book.publishDate}</p>
        <a href={book.link}>Links</a>
        
        {book.likes.includes(userInfo._id) ? 
        <form onSubmit={handleSubmitUnlike}>
          <p>{likes}</p>
          <button type="submit"><BiLike size={20}/>Unlike</button>
        </form>
        : 
        <form onSubmit={handleSubmitLike}>
          <p>{likes}</p>
          <button type="submit"><BiLike size={20}/>Like</button>
        </form>
        }
    <div> 
        <Link to={`/books/${bookId}edit`}><button>Edit book</button></Link>
        <button className="delete" onClick={removeBook}>
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
