import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Postcards } from '../Components/Postcards'
import parse from "html-react-parser";
import { useEffect, useState } from 'react';
import appwriteService from '../Service/api/service';
import styled from 'styled-components'
import { Button } from '@mui/material';

const Home = () => {
//   const [post, setPost] = useState(null);
//   useEffect(() => {
//         appwriteService.getPost('6693bedb002231508278').then((post) => {
//             if (post) setPost(post);
//             console.log("getPost", post);
//         });
// }, []);
const Parent =styled.div`

`
const ContainerTop = styled.div`
display:flex;
height: 80vh;
`
const Left1 = styled.div`
height: 100%;
flex:2;
display:flex;
flex-direction: column;
padding: 4rem;
`
const TopText = styled.div`
margin-top: 2rem;
dispaly:flex;
align-items:center;
justify-content:center;
flex:1;
font-size: 4rem;
font-weight: bold;
`
const BootomText = styled.div`
flex:1;
font-size: 2rem;
`
const Right1 = styled.div`
flex:3;

`
const ImgContainer = styled.div`

height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
const Image = styled.img`
max-height: 90%;
max-width: 100%;
border-radius: 10px;
object-fit: cover;
`;

  return (

    <Parent>
      <ContainerTop>
    <Left1>
        <TopText>Unlock success with our landing page builder</TopText>
        <BootomText>Say goodbye to design and development hassles, and embrace effortless drag-and-drop landing page building with our robust, no-code landing page builder.. </BootomText>
        <Button variant="contained" sx={{width:"40%",height:'40px'}}>Contained</Button>
    </Left1>
    <Right1>
    <ImgContainer>
    <Image src="../../public/assets/pic2.png" alt="pic2" />
    </ImgContainer>     
     </Right1>      
      </ContainerTop>
    </Parent>

  )
}

export default Home