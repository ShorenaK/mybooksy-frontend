import { Routes, Route, Outlet } from "react-router-dom";
import { Books } from "../pages/Books";
import {Show} from "../pages/Show";
import BookForm  from "./BookForm"
<<<<<<< HEAD
import ReviewForm from "./ReviewForm"
=======
import EditForm from "./EditForm";
>>>>>>> c9e39d3c20981cedd3818df968db47296b0be9bb



function Main(props) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/books" element={<Books />} />  
        <Route  exact path="/books/:bookId" element={<Show />}/> 
        <Route exact path="/books/add" element={<BookForm />}/>
<<<<<<< HEAD
        <Route exact path="/reviews/:bookId/add" element={<ReviewForm />} />
=======
        <Route exact path="/books/:bookId/edit" element={<EditForm />}/>
>>>>>>> c9e39d3c20981cedd3818df968db47296b0be9bb
      </Routes>
     </> 
     ) 
  }
  
  export default Main;