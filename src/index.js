import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App/App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route, } from 'react-router-dom';
import HomePage from 'pages/homePage/homePage';
import Podstawowka from 'pages/podstawowka/podstawowka';

// import { store } from 'redux/Store';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/podstawowka",
    element: <Podstawowka/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);