import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Main from './Layout/Main';
import Home from './Page/Home/Home/Home';
import Error from './Page/Error/Error';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivetRoute from './Route/PrivetRoute';
import Classes from './Page/Classes/Classes';
import Instructors from './Page/Instructors/Instructors ';
import DashBoard from './Component/DashBoard/DashBoard';
import AddClass from './Component/AddClass/AddClass';
import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query'
import MyClass from './Component/MyClass/MyClass';
import AllUser from './Component/AllUser/AllUser';
import ManageClasses from './Component/ManageClass/ManageClasses';
import AdminRoute from './Route/AminRoute';
import MyEnrollClass from './Component/MyEnrolClass/MyEnrollClass';
import Manage from './Component/ManageClass/Manage';
import Payment from './Component/Payment/Payment';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children: [
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path: 'manageClass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'enrollClass',
        element: <MyEnrollClass></MyEnrollClass>
      },
      {
        path: 'manage',
        element: <Manage></Manage>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='mx-auto max-w-screen-xl'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
