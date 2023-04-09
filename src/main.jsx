import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OderReview from './components/OderReview/OderReview';
import GrandPa from './components/GrandPa/GrandPa';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('data.json')
      },
      {
        path:'/OderReview',
        element:<OderReview/>
      },
      {
        path:'/grandpa',
        element:<GrandPa/>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
