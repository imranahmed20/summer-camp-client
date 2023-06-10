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
      }
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
        path: 'myCart',
        element: <MyClass></MyClass>
      },
      {
        path: 'allUsers',
        element: <AllUser></AllUser>
      },
      {
        path: 'manageClass',
        element: <ManageClasses></ManageClasses>
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
