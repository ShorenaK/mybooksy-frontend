import { Routes, Route, Outlet } from "react-router-dom"

function Main(props) {
  const URL = "https://mybooksy-project.herokuapp.com/"
 
    return ( 
       <>
       <Outlet/>
       <Routes>
      
      </Routes>
      <Footer />
     </> 
     ) 
  }
  
  export default Main;