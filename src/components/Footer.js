import '../styles/Footer.css'
import {FaFacebook, FaLinkedin, 
  FaMailBulk, FaPhone, FaSearchLocation, 
  FaTwitter, FaInstagram } from 'react-icons/fa'


function Footer(props) {
    return (
   <div className='footer'>
     <div className='footer-container'>
       <div className='left'>
        <div className='location'>
          <FaSearchLocation size={30} style={{color:'#ffffff', marginRight: '2rem'}}/>
              <div>
              <p>111 GA Street</p>
              <h4>New Your, NY</h4>
              </div>
            </div>
            <div className='phone'>
             <h4> <FaPhone size={20} style={{color:'#ffffff', marginRight: '2rem'}}/> 1-800-111-1111</h4>
            </div>
            <div className='email'> 
                 <h4> <FaMailBulk size={20} style={{color:'#ffffff', marginRight: '2rem'}}/> MyBooksy@gmail.com</h4>
            </div>
            </div>
            <div className='right'>
        <h4>About</h4>
          <div className='social'>
            <FaFacebook size={30} style={{color:'#ffffff', marginRight: '2rem'}}/>
            <FaInstagram size={30} style={{color:'#ffffff', marginRight: '2rem'}}/>
            <FaTwitter size={30} style={{color:'#ffffff', marginRight: '2rem'}}/> 
            <FaLinkedin size={30} style={{color:'#ffffff', marginRight: '2rem'}} />
          </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Footer;