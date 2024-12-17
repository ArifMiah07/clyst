import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import CreateAPost from "../pages/Dashboard/CreateAPost/CreateAPost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/post',
            element: <CreateAPost></CreateAPost>
        }
      ]
    },
  ]);


export default router;