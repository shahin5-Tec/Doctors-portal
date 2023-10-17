import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Main from './Layout/Main';
import About from './components/About/About';
import Appoinment from './components/Appoinment/Appoinment';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/appoinment',
        element:<Appoinment/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router={router} />
)
