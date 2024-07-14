import React from 'react'
import { useForm } from 'react-hook-form';
import appwriteService from '../Service/api/service';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { ID } from 'appwrite';
import conf from '../config'

export const Post = () => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm();
    const editorRef = useRef(null);
    const log1 = () => {
        // var post={};
      if (editorRef.current) {
    
        console.log(editorRef.current.getContent());
      }
    };
    
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
            
            console.log("data", data);
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                data.content = editorRef.current.getContent();
                console.log("data", data);
                const dbPost = await appwriteService.createPost({ ...data, slug:ID.unique(),status:'active', userId: '87968' });
                console.log("dbPost", dbPost);
            }
        
    };
  return (
    <div>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} placeholder="Title" />
            {/* <input type="text" {...register("description")} placeholder="Description" /> */}
            <Editor
            label="Content :" name="content" 
        apiKey={conf.tinyMCEKey}
        onInit={(_evt, editor) => editorRef.current = editor}
        init={{
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        
      />
            <input type="file" {...register("image")} />
            <button type="submit" >Submit</button>
        </form>
  
       
    </div>
  )
}
