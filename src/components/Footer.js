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
          <FaSearchLocation size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>
              <div>
            
              <h4>New York, NY</h4>
              </div>
            </div>
            <div className='phone'>
             <h4> <FaPhone size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> 1-800-111-1111</h4>
            </div>
            <div className='email'> 
                 <h4> <FaMailBulk size={20} style={{color:'#ffffff', marginRight: '1rem'}}/> MyBooksy@gmail.com</h4>
            </div>
            </div>
            <div className='right'>
        <h4>Developed By:</h4>
        <a href='https://github.com/Jordan-Burgess' style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }>Jordan Burgess</a>
        <a href='https://github.com/NathCoursey'  style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }> 
Nathalie Coursey</a>
        <a href='https://github.com/ShahryarAbbasi' size={40} style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }>Shahryar Abbasi</a>
        <a href='https://github.com/ShorenaK' size={40} style={{color:'rgb(107, 38, 38)', marginBottom: '.5rem'} }>Shorena Anzhilov</a>
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