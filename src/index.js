import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App/App';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Layout from 'components/layout/layout';
import HomePage from 'pages/homePage/homePage';
import Podstawowka from 'pages/podstawowka/podstawowka';
import Srednia from 'pages/srednia/srednia';
import Lrzeczywiste from 'pages/srednia/lrzeczywiste/lrzeczywiste';
import Matura from 'pages/matura/matura';
import Wymagania from 'pages/matura/wymagania/wymagania';
import { MathJaxContext } from 'better-react-mathjax';

// import { store } from 'redux/Store';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/podstawowka",
//     element: <Podstawowka />
//   },
//   {
//     path: "/srednia",
//     element: <Srednia />
//   },
//   {
//     path: "/srednia/lrzeczywiste",
//     element: <Lrzeczywiste />
//   },
//   {
//     path: "/matura",
//     element: <Matura />,
//   },

//   {
//     path: "matura/wymagania",
//     element: <Wymagania />
//   },




// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathJaxContext>
      {/*<RouterProvider router={router} />*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='podstawowka' element={<Podstawowka />} />
          <Route path='srednia' element={<Srednia />} />
            <Route path='srednia/lrzeczywiste' element={<Lrzeczywiste />} />
         
          <Route path='matura' element={<Matura />} />
            <Route path='matura/wymagania' element={<Wymagania />} />
   
          {/*<Route path='studia' element={<Studia />} />*/}

        </Routes>

      </BrowserRouter>





    </MathJaxContext>
  </React.StrictMode>
);