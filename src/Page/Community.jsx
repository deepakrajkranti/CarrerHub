import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import appwriteService from '../Service/api/service.js'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Components/Card.jsx'

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;

`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const LeftContainer = styled.div`
flex: 4;
max-width: 100%;
display: flex;
flex-direction: column;

`

const RightContainer = styled.div`
flex: 2;
max-width: 100%;
`

const Post = styled.div`
display: flex;
flex-direction: column;
height:1054px;
justify-content: space-evenly;
`

const PostTitle = styled.div`
`

const PostImage = styled.div`
align-items: center;
img {
max-width: 150px;
height: 150px;
object-fit: cover;

}
`

const OnePost = styled.div`
border-bottom: 1px solid #e8eded;
gap: 10px;
margin: 5px;
padding: 10px;
&:hover{
    border:none;
    transition: none;
    cursor: pointer;
  }
`

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
`

const Title = ({ children }) => <PostTitle><h1>{children} </h1></PostTitle>;
const Image = ({src, alt}) => (
  <PostImage>
    <img src = {src} alt = {alt} />
  </PostImage>
)


const Community = () => {
  const navigate = useNavigate()
  const[post, setPost] = useState([]);
  const[isLoading, setIsLoading] = useState(true) 

  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      post ? setPost(post.documents) : console.log("error in  retrieving posts");
    })
  }, [])

  return (
    <Container >
    <Wrapper>
        <Post>
        {/* {post.map((element) => (
              <OnePost key = {element.title} onClick={() => navigate(`/singlepost/${element.$id}`)}>
              <StyledDiv >
              <Title>{element.title}</Title>
              <Image src = {appwriteService.getFilePreview(element.featuredImage)} alt = {element.title} />
              </StyledDiv>
            </OnePost>
          ))} */}
          {
            post.map((data,index)=>{
              return(
                <Card key ={index} data={data}/>
              )
            })
          }
        </Post>
      </Wrapper>
    </Container>
  )
}

export default Community