import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Container = styled.div`
width: 100%;
bottom: 0;
//background-color: gray;
// height: 10vw;
padding:  10px;
`

const Content = styled.div`
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
font-size: 12px;
`

const Items = styled.div`
display: flex;
gap: 15px;
`

const PrivacyText = styled.div`
// margin-top; 25px;
`

function Footer() {
  return (
    <Container>
        <Content>
            <Items>
                <LinkedInIcon fontSize='large' /> 
                <XIcon fontSize='large' />
                <YouTubeIcon fontSize='large'/>
                <FacebookIcon fontSize='large'/>
            </Items>
            <Items>
              <div>About Us</div>
              <div>Privacy Policy</div>
              <div>Contact Us</div>
              <div>Terms</div>
            </Items>
            <PrivacyText>
            ©2024 Careerhub. All contents are copywrite of their authors.
            </PrivacyText>
        </Content>
    </Container>
  )
}

export default Footer