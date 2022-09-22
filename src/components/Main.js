import { Routes, Route, Outlet } from "react-router-dom";
import { Books } from "../pages/Books";
import {Show} from "../pages/Show";
import BookForm  from "./BookForm"
import ReviewForm from "./ReviewForm"
import EditForm from "./EditForm";
import EditReview from "./EditReview";
import Home from "./Home";
import AuthForm from "./AuthForm";


function Main({currentUser, getUser, handleLogin, handleSignup, isAuthenticated}) {
 
    return ( 
       <>
       <Outlet/>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/books" element={<Books />} />  
        <Route exact path="/books/:bookId" element={<Show />}/> 
        <Route exact path="/books/add" element={<BookForm />}/>
        <Route exact path="/reviews/:bookId/add" element={<ReviewForm />} />
        <Route exact path="/reviews/:reviewId/edit" element={<EditReview />} />
        <Route exact path="/books/:bookId/edit" element={<EditForm />}/>
        <Route exact path="/login" element={<AuthForm signal={handleLogin} login/>} />
        <Route exact path="/register" element={<AuthForm signal={handleSignup} />} />

      </Routes>
     </>
     )
  }
  
  export default Main;