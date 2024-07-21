import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
color: black;
font-size:1.2em;
font-weight: bold;
//background-color: gray;
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
            <Section><Link to="/jobs">Tutorials</Link></Section>
            <Section><Link to="/jobs">Jobs</Link></Section>
            <Section><Link to="/community">Community</Link></Section>
            <Section><Link to="/community">Interview</Link></Section>
        </Left>
        <Right>
        <Section><button><Link to="jobs">Sign-In</Link></button></Section>
        <Section><button><Link to="jobs">Ask Question</Link></button></Section>
        </Right>
        </Navbardiv>
        </Container>
  )
}
