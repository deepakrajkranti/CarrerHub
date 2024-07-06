import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:40px;
width:100vw;
background-color: red;

`
const Navbardiv= styled.div`
display:flex;

`
const Left=styled.div`
flex:4;
display:flex;
justify-content:space-around;

`
const Right=styled.div`
flex:1;
`


export const Navbar = () => {
  return (
        <Container>
        <Navbardiv>
        <Left>
            <p>Tutorials</p>
            <p>Jobs</p>
            <p>eduvation</p>
        </Left>
        <Right>
            sign in
        </Right>
        </Navbardiv>
        </Container>

  )
}
