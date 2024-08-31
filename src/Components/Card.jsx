import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import appwriteService from '../Service/api/service.js'
import { FaHandsClapping } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
const Container = styled.div`
display:flex;
border-bottom: 1px solid #e8eded;
height: 150px;
padding: 10px;
height: auto;
flex-wrap: wrap; /* Allow content to wrap on small screens */
align-items: center;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const LeftContainer = styled.div`
flex:4;
display:flex;
flex-direction:column;
width: 100%;
`
const RightContainer = styled.div`
flex:2;
display:flex;
align-items: center;
justify-content: center;

@media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Image = styled.img`
max-height: 120px;
max-width: 120px;
border-radius: 10px;
object-fit: cover;
@media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
const TopText = styled.div`
flex:1;
font-size: 2rem;
&:hover{
    cursor: pointer;
};
`
const BottomContent = styled.div`
flex:2;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap: wrap;
`
const BottomLeft = styled.div`
flex:2;
display:flex;
margin-left: 2rem;
@media (max-width: 768px) {
    margin-left: 0;
  }
`
const BottomRight = styled.div`
flex:1;
display:flex;
@media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }

`
const Text = styled.span`
font-size: 1.5rem;
margin-left: 1rem;
margin-top: 1.5rem;
font-style: italic;
font-family: Arial, Helvetica, sans-serif;
`

export const Card= ({data}) =>{
    const navigate = useNavigate()
  return (
    <div>
        <Container >
            <LeftContainer>
                <TopText onClick={() => navigate(`/singlepost/${data.$id}`)}>{data.title}</TopText>
                <BottomContent>
                    <BottomLeft>
                <IoIosStar style={ {fontSize: '24px', margin: '12px' }} /> <Text>Jun 1, 2021</Text>
                <FaHandsClapping style= {{fontSize: '24px', margin: '12px' }}/> <Text>5.2K</Text>
                <FaMessage style={ {fontSize: '24px', margin: '14px' ,marginLeft:'16px' }}/><Text>50</Text>
                </BottomLeft>
                <BottomRight>
                <IoIosRemoveCircleOutline style={ {fontSize: '24px', margin: '12px' }} />
                <CiSaveDown2 style={ {fontSize: '24px', margin: '12px' }}/>
                    </BottomRight>             
              </BottomContent>
            </LeftContainer>
            <RightContainer>
            <Image src = {appwriteService.getFilePreview(data.featuredImage)} alt = {data.title} />
            </RightContainer>
        </Container>
    </div>
  )
}
