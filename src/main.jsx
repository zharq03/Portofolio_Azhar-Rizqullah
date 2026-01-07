// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


import Home from './pages/Home.jsx'      
import Didadar from './pages/didadar.jsx'  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,                   
  },
  {
    path: "/didadar",
    element: <Didadar />,                
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)