import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../MainLayout/DashboardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems"
import Payment from "../Pages/Dashboard/Payment/Payment";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element:<Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute ><DashboardLayout></DashboardLayout></PrivateRoute>,
   children: [
    //Normal users Routes
    {
      path:'cart',
      element:<Cart></Cart>
    },
    {
      path:'payment',
      element:<Payment></Payment>
    },
    //only Admin Users Routes
    {
      path:'addItems',
      element:<AdminRoutes><AddItems></AddItems></AdminRoutes>,
    },
    {
      path:'manageItems',
      element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
    },
    {
      path:'updateItems/:id',
      element:<AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
      loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
    }
    ,
    {
      path:'users',
      element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
    }
   ]
  }
]);