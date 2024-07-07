import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Page/Home'
import Jobs from './Page/Jobs'
import Community from './Page/Community'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
function App() {

  return (
    <>
      <Router> 
                <Routes> 
                    <Route path="/" element={<Home/>} /> 
                    <Route path="jobs" element ={<Jobs/>}/>
                    <Route path="tutorials" element ={<Jobs/>}/>
                    <Route path="community" element ={<Community/>}/>
                </Routes> 
      </Router>  
      
  </>
  )
}

export default App
