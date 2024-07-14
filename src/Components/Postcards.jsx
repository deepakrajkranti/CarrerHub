import React, { useEffect, useState } from 'react'
import appwriteService from "../Service/api/service"
import { styled } from 'styled-components'

const Container = styled.div`
display:flex;
`
const Card= styled.div`
height :200px;
width:200px;
display:flex;
flex-direction:column;
background-color:red;
`
const Top = styled.div`
height:100%;
width:100%;
flex:3
`
const Bottom = styled.div`
height:100%;
width:100%;
flex:2
`
export const Postcards = () => {
    const[post,SetPosts] = useState([]);

    useEffect(()=>{
           appwriteService.getPosts().then((posts) => {
         if (posts) {
            
            console.log("Appwrite service :: getPosts :: posts", posts);
            SetPosts(posts.documents);
        }
    })
    },[])
  return (
    <Container>
        { post.map((p1)=>
        <Card>
            <Top>
                {p1.title}
            </Top>
            <Bottom>
                HELLO
            </Bottom>
        </Card>
        )
}
    </Container>
  )
}
