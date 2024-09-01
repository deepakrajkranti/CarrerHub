import React, { useEffect, useState } from 'react'
import appwriteService from '../Service/api/service.js'
import styled from 'styled-components'
import parse from "html-react-parser"
import { useParams } from 'react-router-dom'
import { FaHandsClapping } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import ReactLoading from 'react-loading';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  padding: 0 15px;
`;

const Title = styled.div`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const TextContent = styled.div`
  margin-top: 20px;
  font-size: 1.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'Roboto', sans-serif;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;

  p {
    line-height: 1.5;
    margin: 0 0 1em;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    overflow: auto;
    max-width: 100%;
    max-height: 400px; /* Adjust the height as needed */
    white-space: pre-wrap; /* Ensures that long lines of code wrap */
    margin: 0 0 1em;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.95em;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 768px) {
    max-height: 200px;
  }
`;
const BottomContent = styled.div`
width: 100%;
margin-bottom: 20px;
display:flex;
border-bottom: 1px solid #e8eded;
border-top: 1px solid #e8eded;
align-items:center;
justify-content:space-between;
`
const BottomLeft = styled.div`
flex:2;
display:flex;
`
const BottomRight = styled.div`
flex:1;
display:flex;
margin-left: auto;
`
const Text = styled.span`
font-size: 1.5rem;
margin-left: 1rem;
margin-top: 1.5rem;
font-style: italic;
font-family: Arial, Helvetica, sans-serif;
`
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Full viewport height */
`;

function SinglePost() {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    if(localStorage.getItem(id)!==null){
      setPost(JSON.parse(localStorage.getItem(id)))
    }
    else{
    setLoading(true);
    appwriteService.getPost(id).then((post) => {
      setLoading(false);
      post ? setPost(post) : console.log("Getting Error ==>", post);
      let string = JSON.stringify(post) 
      localStorage.setItem(id, string) 
    })
  }

  },[])
  
  if (loading) {
    return (
    <LoadingContainer>
    <ReactLoading type={"spin"} color={"#3498db"} height={150} width={150} />
   </LoadingContainer>
    )
  }

  return (
    <Container>
      <Content>
      <Title>
        <h1>{post && post.title}</h1>
      </Title>
      <BottomContent>
                    <BottomLeft>
                <FaHandsClapping style= {{fontSize: '24px', margin: '12px' }}/> <Text>5.2K</Text>
                <FaMessage style={ {fontSize: '24px', margin: '14px' ,marginLeft:'16px' }}/><Text>50</Text>
                </BottomLeft>
                <BottomRight>
                <IoIosRemoveCircleOutline style={ {fontSize: '24px', margin: '12px' }} />
                <CiSaveDown2 style={ {fontSize: '24px', margin: '12px' }}/>
                    </BottomRight>             
        </BottomContent>
        <ImageContainer>
        {post && <Image src = {appwriteService.getFilePreview(post.featuredImage)} />}
        </ImageContainer>
      <TextContent>
        {post && parse(post.content)}
      </TextContent>
      </Content>
    </Container>
  )
}

export default SinglePost