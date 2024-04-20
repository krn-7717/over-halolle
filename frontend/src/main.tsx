import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import MySkillsPage from './pages/MySkillsPage.tsx'
import './index.css'
import SignupPage from './pages/SignupPage.tsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/login",
    element:<LoginPage />
  },
  {
    path:"/signup",
    element:<SignupPage />
  },
  {
    path:"/my-skill",
    element:<MySkillsPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
