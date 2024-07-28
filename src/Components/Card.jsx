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

`
const LeftContainer = styled.div`
flex:4;
display:flex;
flex-direction:column;
`
const RightContainer = styled.div`
flex:2;
display:flex;
align-items: center;
justify-content: center;
`
const Image = styled.img`
max-height: 120px;
max-width: 120px;
border-radius: 10px;
object-fit: cover;
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
`
const BottomLeft = styled.div`
flex:2;
display:flex;
margin-left: 2rem;
`
const BottomRight = styled.div`
flex:1;

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
