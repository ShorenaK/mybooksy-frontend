// Delete and update page 
import { useState, useEffect } from "react"
import { useParams , Link, useNavigate} from "react-router-dom"
import Reviews from "../pages/Reviews";

import Bookinfo from "../components/Bookinfo"

export const Show = () => {
  
  return (

    <div>
      <div> 
        <Bookinfo /> 
      </div>
      <div>
        <Reviews /> 
      </div>
    </div>

    
  )
}

export default Show