import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

import Friend from "../pages/Board/Friend/Friend";
import Group from "../pages/Board/Group/Group";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Search from "../pages/Board/Search/Search";
import App from "../App";
import Random from "../components/random/Random";
import PricingSection from "../components/random/PricingSection";
import DashboardStats from "../components/random/DashboardStats";
import FuturisticDashboard from "../components/random/FuturisticDashboard";
import QuantumCode from "../components/random/QuantumCode";
import Notebook from "../pages/Dashboard/Notebook/Notebook";
import AddQuickNote from "../pages/Dashboard/Notebook/Pages/AddQuickNote/AddQuickNote";
import SavedNotes from "../pages/Dashboard/Notebook/Pages/SavedNotes/SavedNotes";
import Note from "../pages/Dashboard/Notebook/Pages/Note/Note";
import CreateANewLibrary from "../pages/Dashboard/Notebook/Pages/CreateANewLibrary/CreateANewLibrary";

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
            element: <Dashboard></Dashboard>
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
        },
        {
          path: '/search',
          element: <Search></Search>
        },
        {
          path: '/notebook',
          element: <Notebook></Notebook>
        },
        {
          path: '/add-quick-note',
          element: <AddQuickNote></AddQuickNote>
        },
        {
          path: '/view-saved-notes',
          element: <SavedNotes></SavedNotes>
        },
        {
          path: 'note',
          element: <Note></Note>
        },
        {
          path: '/create-a-new-library',
          element: <CreateANewLibrary></CreateANewLibrary>
        },
        {
          path: '/create-a-new-book',
        },
        {
          path: '/create-a-new-notebook',
        },
        {
          path: '/create-a-new-memo',
        },
        {
          path: '/app',
          element: <App></App>
        },{
          path: '/random',
          element: <Random></Random>
        },{
          path: '/pricing',
          element: <PricingSection></PricingSection>
        },
        {
          path: '/dashboard-stats',
          element: <DashboardStats></DashboardStats>
        },{
          path:'/futuristic-dashboard',
          element: <FuturisticDashboard></FuturisticDashboard>
        },{
          path: '/qc',
          element: <QuantumCode></QuantumCode>
        }
      ]
    },
  ]);


export default router;