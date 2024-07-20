import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Community from './Page/Community.jsx'
import SinglePost from './Page/SinglePost.jsx'
import Home from './Page/Home.jsx'
import Jobs from './Page/Jobs.jsx'
import { Post } from './Page/Post.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/community",
        element: <Community />
      },
      {
        path: "/singlepost/:id",
        element: <SinglePost />
      },
      {
        path: "post",
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
