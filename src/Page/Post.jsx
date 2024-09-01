import React from 'react'
import { useForm } from 'react-hook-form';
import appwriteService from '../Service/api/service';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { ID } from 'appwrite';
import conf from '../config'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading';
import { useEffect } from 'react';

// const Container = styled.div`
// height:100vh;
// width:100vw;
// display:flex;
// align-items:center;
// justify-content:center;
// `
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
  &::placeholder {
    font-size: 1rem;

  }
`;

const FileInput = styled(Input)`
  height: auto;
  padding: 10px;
`;

const Button = styled.button`
  height: 50px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const StyledEditor = styled(Editor)`
  .tox-tinymce {
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Full viewport height */
    /* Full viewport width */
`;
export const Post = () => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm();
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(true);
    const log1 = () => {
        // var post={};
      if (editorRef.current) {
    
        console.log(editorRef.current.getContent());
      }
    };


    useEffect(() => {
      // Fallback: Hide loader after 5 seconds if the editor still hasn't loaded
      const timeoutId = setTimeout(() => {
          setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId); // Clean up timeout if editor loads in time
  }, []);
    
        // appwriteService.getPost('6692457800307fab63b0').then((res) => {
        //     console.log("getPost", res);
        // })
      
    const submit = async (data) => {
        // if (post) {
        //     const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        //     if (file) {
        //         appwriteService.deleteFile(post.featuredImage);
        //     }

        //     const dbPost = await appwriteService.updatePost(post.$id, {
        //         ...data,
        //         featuredImage: file ? file.$id : undefined,
        //     });

        //     if (dbPost) {
        //         navigate(`/post/${dbPost.$id}`);
        //     }
        // } else {
            
            // console.log("data", data);
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                data.content = editorRef.current.getContent();
                console.log("data", data);
                const dbPost = await appwriteService.createPost({ ...data, slug:ID.unique(),status:'active', userId: '87968' });
                console.log("dbPost", dbPost);
                if (dbPost) {
                  navigate(`/singlepost/${dbPost.$id}`);
              }
            }
        
    };

    if (loading) {
      return (
      <LoadingContainer>
      <ReactLoading type={"spin"} color={"#3498db"} height={150} width={150} />
     </LoadingContainer>
      )
    }

  return (
    <Container>
    <Form onSubmit={handleSubmit(submit)}>
      <Input type="text" {...register("title")} placeholder="Title" />
      <StyledEditor
        label="Content :"
        name="content"
        apiKey={conf.tinyMCEKey}
        onInit={(_evt, editor) => { editorRef.current = editor }}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
            "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime",
            "media", "table", "code", "help", "wordcount", "anchor",
          ],
          toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
      />
      <FileInput type="file" {...register("image")} />
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
  )
}
