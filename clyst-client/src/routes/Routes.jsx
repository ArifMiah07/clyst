import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import CreateAPost from "../pages/Dashboard/CreateAPost/CreateAPost";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

import Friend from "../pages/Board/Friend/Friend";
import Group from "../pages/Board/Group/Group";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/post',
            element: <CreateAPost></CreateAPost>
        },
        {
          path: '/friends',
          element: <Friend></Friend>
        },
        {
          path:'/groups',
          element: <Group></Group>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);


export default router;