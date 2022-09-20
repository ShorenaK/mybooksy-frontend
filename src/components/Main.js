import { Routes, Route, Outlet } from "react-router-dom";
import { Books } from "../pages/Books";
import {Show} from "../pages/Show";
import BookForm  from "./BookForm"
import ReviewForm from "./ReviewForm"
import EditForm from "./EditForm";



function Main(props) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/books" element={<Books />} />  
        <Route  exact path="/books/:bookId" element={<Show />}/> 
        <Route exact path="/books/add" element={<BookForm />}/>
        <Route exact path="/reviews/:bookId/add" element={<ReviewForm />} />
        <Route exact path="/books/:bookId/edit" element={<EditForm />}/>
      </Routes>
     </> 
     ) 
  }
  
  export default Main;