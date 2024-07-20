import Home from './Page/Home'
import Jobs from './Page/Jobs'
import Community from './Page/Community'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Outlet
} from "react-router-dom"; 
import { useEffect } from 'react';
import appwriteService from './Service/api/service';
import { Post } from './Page/Post';
import SinglePost from './Page/SinglePost';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
  </>
  )
}

export default App
