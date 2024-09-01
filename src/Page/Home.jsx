import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Postcards } from '../Components/Postcards'
import parse from "html-react-parser";
import { useEffect, useState } from 'react';
import appwriteService from '../Service/api/service';
import styled from 'styled-components'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Parent =styled.div`
display:flex;
flex-direction:column;

`
const ContainerTop = styled.div`
display:flex;
height: 80vh;
@media (max-width: 768px) {
  flex-direction: column;
  gap: 10px;
  height:auto;
}
`
const Left1 = styled.div`
height: 100%;
flex:2;
display:flex;
flex-direction: column;
padding: 4rem;
@media (max-width: 768px) {
  flex-direction: column;
  gap: 10px;
  height:auto;
}
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
display:flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
  gap: 10px;

}

`
const ImgContainer = styled.div`
display: flex;

@media (max-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
const Image = styled.img`
height:400px;
width:400px;
border-radius: 10px;
object-fit: cover;
@media (max-width: 768px) {
  height: 325px;
  width: 325px;
}
`;

const ContainerMiddle =styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin-bottom: 2rem;
@media (max-width: 768px) {
  gap: 10px;
}
`
const Top2 =styled.div`
height:20%;
display:flex;
text-align:center;
flex:1;
`
const Bottom2 =styled.div`
height:80%;
display:flex;
align-items:center;
flex:2;
gap: 15px;
@media (max-width: 768px) {
  flex-direction: column;

}

`
const Left2=styled.div`
height:80%;
display:flex;
justify-content:center;
align-items:center;
flex:1;
`
const Right2=styled.div`
height:80%;
flex:1;
display:flex;
justify-content:center;
align-items:center;
`
const Home = () => {
//   const [post, setPost] = useState(null);
//   useEffect(() => {
//         appwriteService.getPost('6693bedb002231508278').then((post) => {
//             if (post) setPost(post);
//             console.log("getPost", post);
//         });
// }, []);
const navigate = useNavigate()
const { status, userData } = useSelector((state) => state.auth);
// console.log("status",status)
// console.log("userData",userData)


  return (

    <Parent>
      <ContainerTop>
    <Left1>
        <TopText>Unlock success with Writing through Blogs</TopText>
        <BootomText>Where Ideas Code, Papers Shape, and Discussions Drive Innovation. </BootomText>
        <Button variant="contained" sx={{width:"40%",height:'40px',fontWeight:"bold",letterSpacing:"4px"}} onClick={()=>navigate('/signin')}>Start writing</Button>
    </Left1>
    <Right1>
    <ImgContainer>
    <Image src="../../assets/pic2.png" alt="pic2" />
    </ImgContainer>     
     </Right1>      
      </ContainerTop>
      <ContainerMiddle>
        <Top2>
            <TopText>Explain your Expertise for The Community through BLogs! </TopText>
        </Top2>
        <Bottom2>
          <Left2>
        <Image src="../../assets/pic4.png" alt="pic2" />
        </Left2>
        <Right2>
        <Image src="../../assets/pic5.png" alt="pic2" />
        </Right2>
        </Bottom2>
      </ContainerMiddle>
    </Parent>

  )
}

export default Home