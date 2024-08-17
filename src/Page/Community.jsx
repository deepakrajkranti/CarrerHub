import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import appwriteService from '../Service/api/service.js'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Components/Card.jsx'

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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
// justify-content: space-evenly; // this is the working good for mobile view but on new page content is not coming good so i have to change it to space-between
gap: 25px;
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
const Pagination = styled.div`
width:
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
button {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin: 0 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333333;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
    border-color: #cccccc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &.active {
    background-color: #007bff;
    border-color: #007bff;
    color: #ffffff;
  }

  &:disabled {
    background-color: #e9ecef;
    border-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
  }
`


// const Title = ({ children }) => <PostTitle><h1>{children} </h1></PostTitle>;
// const Image = ({src, alt}) => (
//   <PostImage>
//     <img src = {src} alt = {alt} />
//   </PostImage>
// )


const Community = () => {
  const navigate = useNavigate()
  const[post, setPost] = useState([]);
  const[isLoading, setIsLoading] = useState(true) 
  const [paginationNumbers, setPaginationNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastPost = currentPage * 6;
  const indexOfFirstPost = indexOfLastPost - 6;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if(localStorage.getItem('posts')!==null) {
       setPost(JSON.parse(localStorage.getItem('posts')))
      setPaginationNumbers(JSON.parse(localStorage.getItem('pageNumbers')))
      }
      else{
    appwriteService.getPosts().then((post) => {
      post ? setPost(post.documents) : console.log("error in  retrieving posts");
      const newPaginationNumbers = [];
      for (let i = 1; i <= Math.ceil(post.documents.length / 6); i++) {
        newPaginationNumbers.push(i);
      }
      setPaginationNumbers(newPaginationNumbers);
      let s1= JSON.stringify(newPaginationNumbers);
      let string = JSON.stringify(post.documents);
      localStorage.setItem('pageNumbers', s1)
      localStorage.setItem('posts', string)
    }); 
  }
 
  }, [])
  const handleclick = (e) => {
    setCurrentPage(Number(e.target.textContent));
  }

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
            currentPosts.map((data,index)=>{
              return(
                <Card key ={index} data={data}/>
              )
            })
          }
        </Post>
      </Wrapper>
      <Pagination>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={handleclick}>{pageNumber}</button>
      ))}
     </Pagination>
    </Container>
  )
}

export default Community