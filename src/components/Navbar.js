import {useState} from "react"
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

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


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <header className='header'>
        <Link to="/"></Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/books">Books</Link>
        </li>
         {/* <li>
            <Link to={`/books/add/`}><p>Add book</p></Link>
        </li>  */}
        <li>
            <Link to="/books/add">Add Book</Link>
        </li> 
        </ul>
        <div className='hamburger' onClick={handleClick}> 
          {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}} />)}
          
        </div>
    </header>
  )
}

export default Navbar