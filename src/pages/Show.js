// Delete and update page 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const Show = () => {
  const [book, setBook ]= useState(null)
  const { id } = useParams()
  const URL = `http://localhost:4000/books/${id}`
     
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

  return (
    <div>Show</div>
  )
}

export default Show