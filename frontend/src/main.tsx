import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.tsx'
import MySkills from './pages/MySkills.tsx'
import './index.css'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/my-skill",
    element:<MySkills />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
