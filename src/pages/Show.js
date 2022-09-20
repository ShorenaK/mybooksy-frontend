// Delete and update page 
<<<<<<< HEAD
import { useState, useEffect } from "react"
import { useParams , Link, useNavigate} from "react-router-dom"
import Reviews from "../pages/Reviews";
=======
import Bookinfo from "../components/Bookinfo"
>>>>>>> 1faf1a78d7a28e53c5a70179bb27d439065e8afd
export const Show = () => {
  
  return (
<<<<<<< HEAD
    <div>
      <div className="book-list">{book? loaded() : loading()}
      </div>
      <div><Reviews /> </div>
=======
    <div> 
   <Bookinfo /> 
>>>>>>> 1faf1a78d7a28e53c5a70179bb27d439065e8afd
    </div>
  )
}

export default Show