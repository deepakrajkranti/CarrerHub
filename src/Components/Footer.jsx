import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Container = styled.div`
width: 100%;
padding: 20px;
text-aligned: center;
bottom: 0;
background-color: gray;
`

const Content = styled.div`
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
`

const Items = styled.div`
text-size: 15px;
padding: 2px;
`

function Footer() {
  return (
    <Container>
        <Content>
            <Items>
                <LinkedInIcon />
            </Items>
            <Items>
            XIcon
            </Items>
            <Items>
                item 3
            </Items>
        </Content>
    </Container>
  )
}

export default Footer