import {useState} from "react"
import '../styles/Navbar.css';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'



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