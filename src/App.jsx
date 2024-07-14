import Home from './Page/Home'
import Jobs from './Page/Jobs'
import Community from './Page/Community'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import { useEffect } from 'react';
import appwriteService from './Service/api/service';
import { Post } from './Page/Post';
function App() {
//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//         if (posts) {
//             console.log("Appwrite service :: getPosts :: posts", posts);
//         }
//     })
// }, [])

  return (
    <>
      <Router> 
        
                <Routes> 
                    <Route path="/" element={<Home/>} /> 
                    <Route path="jobs" element ={<Post/>}/>
                    <Route path="tutorials" element ={<Jobs/>}/>
                    <Route path="community" element ={<Community/>}/>
                </Routes> 
      </Router>  
      
  </>
  )
}

export default App
