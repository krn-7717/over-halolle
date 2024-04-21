import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../pages/MainLayout";
import SettingsPage from "../pages/main/SettingsPage";
import MySkillsPage from "../pages/main/MySkillsPage";
import ErrorPage from "../pages/ErrorPage";

const Router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage />,
      errorElement:<ErrorPage />,
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
      path:"/main",
      element:<MainLayout />,
      children:[
        {
            path:"settings",
            element:<SettingsPage />
          },
          {
            path:"",
            element:<MySkillsPage />
          }
      ]
    }
  ]);

  export default Router;