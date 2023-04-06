import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App/App';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Layout from 'components/layout/layout';
import HomePage from './pages/homePage/homePage';
// import Podstawowka from './pages/podstawowka/podstawowka';
import Srednia from './pages/srednia/srednia';
import Lrzeczywiste from './pages/srednia/lrzeczywiste/lrzeczywiste';
import Fkwadratowa from './pages/srednia/fkwadratowa/fkwadratowa.jsx'
import Matura from './pages/matura/matura';
import Wymagania from './pages/matura/wymagania/wymagania';
import { MathJaxContext } from 'better-react-mathjax';
import Jezyk from './pages/srednia/jezyk/jezyk';
import Zestawy from './pages/matura/zestawy/zestawy';
import PoziomPodstawowy from './pages/matura/zestawy/poziomPodstawowy';
import PoziomRozszerzony from './pages/matura/zestawy/poziomRozszerzony';
import Powtorzenie from './pages/matura/powtorzenie/powtorzenie';
import PLiczby from './pages/matura/powtorzenie/pliczby';
import PCiagi from './pages/matura/powtorzenie/pciagi';
import PFunkcjeIFunkcjaLiniowa from './pages/matura/powtorzenie/pfunkcjeIFunkcjaLiniowa';
import Ksiazkowe from './pages/matura/ksiazkowe/ksiazkowe';
import Algebra from './pages/matura/ksiazkowe/algebra';
import LiczbyRzeczywiste from './pages/matura/ksiazkowe/liczbyRzeczywiste'
import Funkcje from './pages/matura/ksiazkowe/funkcje'
import FunkcjaLiniowa from './pages/matura/ksiazkowe/funkcjaLiniowa'
import FunkcjaKwadratowa from './pages/matura/ksiazkowe/funkcjaKwadratowa'
import Wielomiany from './pages/matura/ksiazkowe/wielomiany'
import FunkcjeWymierne from './pages/matura/ksiazkowe/funkcjeWymierne'
import FunkcjaWykladnicza from './pages/matura/ksiazkowe/funkcjaWykladnicza'
import FunkcjaLogarytmiczna from './pages/matura/ksiazkowe/funkcjaLogarytmiczna'
import Trygonometria from './pages/matura/ksiazkowe/trygonometria'
import Ciagi from './pages/matura/ksiazkowe/ciagi'
import Planimetria from './pages/matura/ksiazkowe/planimetria'
import GeometriaAnalityczna from './pages/matura/ksiazkowe/geometriaAnalityczna'


const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MathJaxContext version={3} config={config}>
      {/*<RouterProvider router={router} />*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='podstawowka' element={<Podstawowka />} />*/}
          <Route path='srednia' element={<Srednia />} />
          <Route path='srednia/lrzeczywiste' element={<Lrzeczywiste />} />
          <Route path='srednia/jezyk' element={<Jezyk />} />
          <Route path='srednia/fkwadratowa' element={<Fkwadratowa />} />

          <Route path='matura' element={<Matura />} />
          <Route path='matura/wymagania' element={<Wymagania />} />
          <Route path='matura/zestawy' element={<Zestawy />} />
          <Route path='matura/zestawy/podstawa' element={<PoziomPodstawowy />} />
          <Route path='matura/zestawy/rozszerzenie' element={<PoziomRozszerzony />} />
          <Route path='matura/powtorzenie' element={<Powtorzenie />} />
          <Route path='matura/powtorzenie/liczby' element={<PLiczby />} />
          <Route path='matura/powtorzenie/ciagi' element={<PCiagi />} />
          <Route path='matura/powtorzenie/funkcjeIFunkcjaLiniowa' element={<PFunkcjeIFunkcjaLiniowa />} />
          <Route path='matura/ksiazkowe' element={<Ksiazkowe />} />
          <Route path='matura/ksiazkowe/algebra' element={<Algebra />} />
          <Route path='matura/ksiazkowe/liczbyRzeczywiste' element={<LiczbyRzeczywiste />} />
          <Route path='matura/ksiazkowe/funkcje' element={<Funkcje />} />
          <Route path='matura/ksiazkowe/funkcjaLiniowa' element={<FunkcjaLiniowa />} />
          <Route path='matura/ksiazkowe/funkcjaKwadratowa' element={<FunkcjaKwadratowa />} />
          <Route path='matura/ksiazkowe/wielomiany' element={<Wielomiany />} />
          <Route path='matura/ksiazkowe/funkcjeWymierne' element={<FunkcjeWymierne />} />
          <Route path='matura/ksiazkowe/funkcjaWykladnicza' element={<FunkcjaWykladnicza />} />
          <Route path='matura/ksiazkowe/funkcjaLogarytmiczna' element={<FunkcjaLogarytmiczna />} />
          <Route path='matura/ksiazkowe/trygonometria' element={<Trygonometria />} />
          <Route path='matura/ksiazkowe/ciagi' element={<Ciagi />} />
          <Route path='matura/ksiazkowe/planimetria' element={<Planimetria />} />
          <Route path='matura/ksiazkowe/geometriaAnalityczna' element={<GeometriaAnalityczna />} />


          {/*<Route path='studia' element={<Studia />} />*/}
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>

      </BrowserRouter>





    </MathJaxContext>
  </React.StrictMode>
);