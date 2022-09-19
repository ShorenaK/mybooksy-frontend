import './App.css';
// IMPORT COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from './components/Main';
import { Route, Routes } from "react-router-dom"


function App() {
  const URL = "https://mybooksy-project.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes>
      
      </Routes>
      <Footer />
       
    </div>
  );
}

export default App;
