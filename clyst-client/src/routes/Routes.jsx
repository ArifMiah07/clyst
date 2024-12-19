import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import CreateAPost from "../pages/Dashboard/CreateAPost/CreateAPost";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

import Friend from "../pages/Board/Friend/Friend";

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
        }
      ]
    },
  ]);


export default router;