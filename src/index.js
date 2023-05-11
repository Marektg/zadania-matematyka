import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App/App';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MathJaxContext } from 'better-react-mathjax';
// import { createBrowserRouter, RouterProvider} from 'react-router-dom';
// import Layout from 'components/layout/layout';
import HomePage from './pages/homePage/homePage';
// import Podstawowka from './pages/podstawowka/podstawowka';


import Srednia from './pages/srednia/srednia';
import Lrzeczywiste from './pages/srednia/lrzeczywiste/lrzeczywiste';
import Wyrazenia from './pages/srednia/wyrazeniaAlgebraiczne/wyrazeniaAlgebraiczne';
import FunkcjeWlasnosci from './pages/srednia/funkcje/funkcje.jsx';
import FunkcjaLiniowaS from './pages/srednia/funkcjaLiniowa/funkcjaLiniowa.jsx';
import Uklady from './pages/srednia/uklady/uklady.jsx';
import PlanimetriaS from './pages/srednia/planimetria/planimetria';
import Fkwadratowa from './pages/srednia/fkwadratowa/fkwadratowa.jsx';
import TrygonometriaS from './pages/srednia/trygonometria/trygonometria';
import Przeksztalcenia from './pages/srednia/przeksztalceniaWykresowFunkcji/przeksztalceniaWykresowFunkcji';
import Rownania from './pages/srednia/rownania/rownania';
import Analityczna from './pages/srednia/ganalityczna/ganalityczna';
import WielomianyS from './pages/srednia/wielomiany/wielomiany';
import FWymierna from './pages/srednia/fwymierna/fwymierna';
import CiagiS from './pages/srednia/ciagi/ciagi';
import Kombinatoryka from './pages/srednia/kombinatoryka/kombinatoryka';
import AnalizaMatematyczna from './pages/srednia/rachrozniczkowy/rachrozniczkowy';
import FWykladnicza from './pages/srednia/fwykladnicza/fwykladnicza';
import Statystyka from './pages/srednia/statystyka/statystyka';
import Prawdopodobienstwo from './pages/srednia/prawdopodobienstwo/prawdopodobienstwo';
import Stereometria from './pages/srednia/stereometria/stereometria';



import Matura from './pages/matura/matura';

import Wymagania from './pages/matura/wymagania/wymagania';

import Zestawy from './pages/matura/zestawy/zestawy';
import PoziomPodstawowy from './pages/matura/zestawy/poziomPodstawowy';
import PoziomRozszerzony from './pages/matura/zestawy/poziomRozszerzony';

import Powtorzenie from './pages/matura/powtorzenie/powtorzenie';
// import PLiczby from './pages/matura/powtorzenie/pliczby';
// import PCiagi from './pages/matura/powtorzenie/pciagi';
// import PFunkcjeIFunkcjaLiniowa from './pages/matura/powtorzenie/pfunkcjeIFunkcjaLiniowa';
// import Ksiazkowe from './pages/matura/ksiazkowe';

import Kielbasa from './pages/matura/kielbasa/kielbasa';
import Algebra from './pages/matura/kielbasa/algebra';
import LiczbyRzeczywiste from './pages/matura/kielbasa/liczbyRzeczywiste'
import Funkcje from './pages/matura/kielbasa/funkcje'
import FunkcjaLiniowa from './pages/matura/kielbasa/funkcjaLiniowa'
import FunkcjaKwadratowa from './pages/matura/kielbasa/funkcjaKwadratowa'
import Wielomiany from './pages/matura/kielbasa/wielomiany'
import FunkcjeWymierne from './pages/matura/kielbasa/funkcjeWymierne'
import FunkcjaWykladnicza from './pages/matura/kielbasa/funkcjaWykladnicza'
import FunkcjaLogarytmiczna from './pages/matura/kielbasa/funkcjaLogarytmiczna'
import Trygonometria from './pages/matura/kielbasa/trygonometria'
import Ciagi from './pages/matura/kielbasa/ciagi'
import Planimetria from './pages/matura/kielbasa/planimetria'
import GeometriaAnalityczna from './pages/matura/kielbasa/geometriaAnalityczna'

import TerazMaturaRoz from './pages/matura/terazMaturaRoz/terazMaturaRoz';

import { Contact } from './components/contact/contact';


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
          <Route path='srednia/wyrazeniaAlgebraiczne' element={<Wyrazenia />} />
          <Route path='srednia/funkcje' element={<FunkcjeWlasnosci />} />
          <Route path='srednia/fLiniowa' element={<FunkcjaLiniowaS />} />
          <Route path='srednia/uklady' element={<Uklady />} />
          <Route path='srednia/planimetria' element={<PlanimetriaS />} />
          <Route path='srednia/trygonometria' element={<TrygonometriaS />} />
          <Route path='srednia/przeksztalceniaWykresowFunkcji' element={<Przeksztalcenia />} />
          <Route path='srednia/rownaniaINierownosciZwartbezIParametrem' element={<Rownania />} />
          <Route path='srednia/fkwadratowa' element={<Fkwadratowa />} />
          <Route path='srednia/ganalityczna' element={<Analityczna />} />
          <Route path='srednia/wielomiany' element={<WielomianyS />} />
          <Route path='srednia/fwymierne' element={<FWymierna />} />
          <Route path='srednia/ciagi' element={<CiagiS />} />
          <Route path='srednia/kombinatoryka' element={<Kombinatoryka />} />
          <Route path='srednia/rachrozniczkowy' element={<AnalizaMatematyczna />} />
          <Route path='srednia/fwykladnicza' element={<FWykladnicza />} />
          <Route path='srednia/statystyka' element={<Statystyka />} />
          <Route path='srednia/prawdopodobienstwo' element={<Prawdopodobienstwo />} />
          <Route path='srednia/stereometria' element={<Stereometria />} />

          <Route path='matura' element={<Matura />} />
          <Route path='matura/wymagania' element={<Wymagania />} />
          <Route path='matura/zestawy' element={<Zestawy />} />
          <Route path='matura/zestawy/podstawa' element={<PoziomPodstawowy />} />
          <Route path='matura/zestawy/rozszerzenie' element={<PoziomRozszerzony />} />
          <Route path='matura/powtorzenie' element={<Powtorzenie />} />
          
          
          <Route path='matura/kielbasa' element={<Kielbasa />} />
          <Route path='matura/kielbasa/algebra' element={<Algebra />} />
          <Route path='matura/kielbasa/liczbyRzeczywiste' element={<LiczbyRzeczywiste />} />
          <Route path='matura/kielbasa/funkcje' element={<Funkcje />} />
          <Route path='matura/kielbasa/funkcjaLiniowa' element={<FunkcjaLiniowa />} />
          <Route path='matura/kielbasa/funkcjaKwadratowa' element={<FunkcjaKwadratowa />} />
          <Route path='matura/kielbasa/wielomiany' element={<Wielomiany />} />
          <Route path='matura/kielbasa/funkcjeWymierne' element={<FunkcjeWymierne />} />
          <Route path='matura/kielbasa/funkcjaWykladnicza' element={<FunkcjaWykladnicza />} />
          <Route path='matura/kielbasa/funkcjaLogarytmiczna' element={<FunkcjaLogarytmiczna />} />
          <Route path='matura/kielbasa/trygonometria' element={<Trygonometria />} />
          <Route path='matura/kielbasa/ciagi' element={<Ciagi />} />
          <Route path='matura/kielbasa/planimetria' element={<Planimetria />} />
          <Route path='matura/kielbasa/geometriaAnalityczna' element={<GeometriaAnalityczna />} />
          
          <Route path='matura/terazMaturaRoz' element={<TerazMaturaRoz />} />

          {/*<Route path='studia' element={<Studia />} />*/}
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>

      </BrowserRouter>





    </MathJaxContext>
  </React.StrictMode>
);