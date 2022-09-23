import Reviews from "../pages/Reviews";

import Bookinfo from "../components/Bookinfo"

export const Show = ({user}) => {
  
  return (

    <div>
      <div> 
        <Bookinfo user={user}/> 
      </div>
      <div>
        <Reviews user={user}/> 
      </div>
    </div>

    
  )
}

export default Show