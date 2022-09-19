import { Routes, Route, Outlet } from "react-router-dom";
import { Books } from "../pages/Books";
import Show from "../pages/Show";

function Main(props) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/books" element={<Books />} />  
        <Route  exact path="/books/:bookId" element={<Show />}/> 
      </Routes>
      <Footer />
     </> 
     ) 
  }
  
  export default Main;