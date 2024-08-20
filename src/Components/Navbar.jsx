import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMdCreate } from "react-icons/io";
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import authService from '../Service/api/auth';

const Container = styled.div`
height: 60px;
color: black;
font-size:1.2em;
font-weight: bold;
box-sizing: border-box;
overflow-x: hidden;
`

const Navbardiv= styled.div`
display:flex;
height:60px
`

const Left=styled.div`
flex:4;
display:flex;
justify-content:space-around;
text-align: center;
`

const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:space-around;
`

const Section = styled.div`
display:flex;
align-items:center;
button{
  padding:0.7rem;
  font-family: inherit;
  font-weight: 400;
  border-radius: 6px;
  color:white;
  border:none;
  &:hover{
    border:none;
    transition: 0.3s ease-out;
  }
}
`
const Logo = styled.div`
display:flex;
text-align:center;
align-items:center;
justify-content:center;
height : 60px;
font-size: 1.5em;
font-weight: bold;
width: 60px;
border-radius: 50%;
background-color: #f2f2f2;
&:hover{

  cursor: pointer;
  background-color: #e6e6e6;
  transition: 0.3s ease-out;

}
`
const Menu = styled.div`

height: 200px;
width: 200px;
border-radius: 10px;
background-color: #f2f2f2;
position: absolute;
top: 65px;
right: 10px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
z-index: 1;
margin-top: 10px;
padding: 10px;
p{
  margin-top: 10px;
}

`

export const Navbar = () => {
const[isClicked, setIsClicked] = useState(false);
const navigate = useNavigate()
const logout = async() => {
  localStorage.clear();
  try{
    const result = await authService.deleteSessions(); 
    if(result)
    {
      navigate("/login")
    }
  }
  catch(error){
    console.log("error",error)
  }
  
}

  return (
        <Container>
        <Navbardiv>
        <Left>
            <Section><Link style={{color: "black"}} to="/">Home</Link></Section>
            <Section><Link style={{color: "black"}} to="/jobs">Jobs</Link></Section>
            <Section><Link style={{color: "black"}} to="/community">Community</Link></Section>
            <Section><Link style={{color: "black"}} to="/post"> <IoMdCreate style={ {fontSize: '20px'}} /> Create</Link></Section>
        </Left>
        <Right>
        {/* <Section><button><Link style={{color: "black"}} to="/login">Sign-In</Link></button></Section>
        <Section><button><Link style={{color: "black"}} to="/signin">Ask Question</Link></button></Section> */}
        <Logo onClick={ ()=>setIsClicked(!isClicked)}>D E</Logo>
        {
          isClicked && <Menu>
            <Link style={{color: "black" ,marginTop:"20px"}} to="/login"><AccountCircleIcon style={{fontSize:'40px'}} ></AccountCircleIcon>
            <p style={{marginTop:'0px'}}>Account</p></Link>
            <Link style={{color: "black" ,marginTop:"25px"}} onClick={logout}><LogoutIcon style={{fontSize:'40px'}}></LogoutIcon>
            <p style={{marginTop:'0px'}}>Logout</p>
            </Link>
          </Menu>



        }
        </Right>
        </Navbardiv>
        </Container>
  )
}
