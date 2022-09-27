import '../styles/Video.css'
import{Link} from 'react-router-dom'

import bookVideo from '../assets/Books.mp4'

export default function Video() {
  return (
    <div className='hero'>
    <video autoPlay loop muted id="video"> 
        <source src={bookVideo} type='video/mp4'/>
    </video>

    
    <div className='content'>
   <div> 
      <Link to="/books" className='btn'>  
        <img style={{width:'300px', height: '300px'}} src="https://i.imgur.com/K6cdwpG.png" alt="logo" /> 
      </Link>
    </div>
    </div>
  )
}
