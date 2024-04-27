import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../pages/MainLayout";
import SettingsPage from "../pages/main/SettingsPage";
import MainHomePage from "../pages/main/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GithubAuth from "../auth/GithubAuth";
import QiitaAuth from "../auth/QiitaAuth";
import InputSkillPage from "../pages/main/InputSkillPage";

const Router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage />,
      errorElement:<ErrorPage />,
      loader:()=>{
        if(localStorage.getItem("userId")!==null){
        return redirect("/main")
        }else{
          return null
        }
      },
    },
    {
      path:"/login",
      element:<LoginPage />,
      loader:()=>{
        if(localStorage.getItem("userId")!==null){
        return redirect("/main")
        }else{
          return null
        }
      },
      
    },
    {
      path:"/signup",
      element:<SignupPage />,
      loader:()=>{
        if(localStorage.getItem("userId")!==null){
        return redirect("/main")
        }else{
          return null
        }
      },
    },
    {
      path:"/main",
      element:<MainLayout />,
      loader:()=>{
        if(localStorage.getItem("userId")===null){
        return redirect("/")
        }else{
          return null
        }
      },
      children:[
        {
          path:"",
          element:<MainHomePage />,
        },
        {
          path:"input-skill",
          element:<InputSkillPage />
        },
        {
            path:"settings",
            element:<SettingsPage />
          }
      ]
    },
    {
      path:"/auth/github/callback",
      element:<GithubAuth />
    },
    {
      path:"/auth/qiita",
      element:<QiitaAuth />
    }
  ]);

  export default Router;