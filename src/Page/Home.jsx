import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Postcards } from '../Components/Postcards'
import parse from "html-react-parser";
import { useEffect, useState } from 'react';
import appwriteService from '../Service/api/service';

const Home = () => {
//   const [post, setPost] = useState(null);
//   useEffect(() => {
//         appwriteService.getPost('6693bedb002231508278').then((post) => {
//             if (post) setPost(post);
//             console.log("getPost", post);
//         });
// }, []);
  return (
    <div>
        {/* <div>
          {  post &&          
            parse(post?.content)
          } */}
        </div>
    // </div>
  )
}

export default Home