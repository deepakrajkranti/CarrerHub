import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create';

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
height:100%;
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

export const Navbar = () => {
  return (
        <Container>
        <Navbardiv>
        <Left>
            <Section><Link style={{color: "black"}} to="/jobs">Tutorials</Link></Section>
            <Section><Link style={{color: "black"}} to="/jobs">Jobs</Link></Section>
            <Section><Link style={{color: "black"}} to="/community">Community</Link></Section>
            <Section><Link style={{color: "black"}} to="/post"> Create</Link></Section>
        </Left>
        <Right>
        <Section><button><Link style={{color: "black"}} to="jobs">Sign-In</Link></button></Section>
        <Section><button><Link style={{color: "black"}} to="jobs">Ask Question</Link></button></Section>
        </Right>
        </Navbardiv>
        </Container>
  )
}
