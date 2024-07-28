import React, { useEffect, useState } from 'react'
import appwriteService from '../Service/api/service.js'
import styled from 'styled-components'
import parse from "html-react-parser"
import { useParams } from 'react-router-dom'


const Container = styled.div`
height: 100%;
max-width: 100vw;
display: flex;
align-items: center;
justify-content: center;
//font-family: Arial, Helvetica, sans-serif;
// text-align: center;
box-sizing: border-box;
overflow-x: hidden;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
`

const Title = styled.div`
font-size: 25px;
`
const TextContent = styled.div`
margin-top: 20px;
font-size: 15px;
max-width: 55%;
`

const ImageContainer = styled.div`
width: 55%;
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
`

const Image = styled.img`
max-width: 100%;
max-height: 100%;
`

function SinglePost() {
  const [post, setPost] = useState('')
  const {id} = useParams();

  useEffect(() => {
    if(localStorage.getItem(id)!==null){
      setPost(JSON.parse(localStorage.getItem(id)))
    }
    else{
    appwriteService.getPost(id).then((post) => {
      post ? setPost(post) : console.log("Getting Error ==>", post);
      let string = JSON.stringify(post) 
      localStorage.setItem(id, string) 
    })
  }

  },[])
  
  // {post && console.log(post.title)}
  return (
    <Container>
      <Content>
      <Title>
        <h1>{post && post.title}</h1>
      </Title>
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