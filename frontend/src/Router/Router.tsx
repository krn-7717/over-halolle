import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MySkillsPage from "../pages/MySkillsPage";

const Router=createBrowserRouter([
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
  ]);

  export default Router;