import {useState, useEffect} from "react"
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { getUserToken } from '../utils/authToken'

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.querySelector(".header").style.top = "0";
//   } else {
//     document.querySelector(".header").style.top = "-50px";
//   }
// }


  // const nav = document.querySelector(".header");
  // let lastScrollY = window.scrollY;

  // window.addEventListener("scroll", () => {
  //   if (lastScrollY < window.scrollY) {
  //     nav.classList.add("nav--hidden");
  //   } else {
  //     nav.classList.remove("nav--hidden");
  //   }

  //   lastScrollY = window.scrollY;
  // });

function Navbar({handleLogout, user, getUser}) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const getUser = getUser

  return (
    <header className='header'>
        <Link to="/"></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        { user ?
        <li size={60} style={{color:'#fff'}}>Welcome!  {user.username}</li>
        : null} 
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/books">Books</Link>
        </li>
        { user ? (<Link onClick={handleLogout} to="/">Logout</Link>) :
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </>
        }
        { user && user.isAdmin ? 
        <li>
            <Link to="/books/add">Add Book</Link>
        </li>
        : null } 
        </ul>
        <div className='hamburger' onClick={handleClick}> 
          {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}} />)}
          
        </div>
    </header>
  )
}

export default Navbar