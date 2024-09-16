import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../MainLayout/DashboardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";



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
    element:<DashboardLayout></DashboardLayout>,
   children: [
    {
      path:'cart',
      element:<Cart></Cart>
    }
   ]
  }
]);