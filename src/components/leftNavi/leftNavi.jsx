import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { StyledLink, Left, NaviListGroup } from './leftNavi.styled';



const LeftNavi = ({ model}) => {

  switch (model) {
    case "a": return (
      <Left>
        <h3>Szkoła podstawowa</h3>
        <NaviListGroup>
          <li id='l1'><StyledLink to="/podstawowka/lnaturalne">Liczby naturalne</StyledLink></li>
          <li id='l2'><StyledLink to="/podstawowka/lcalkowite">Liczby całkowite</StyledLink></li>
          <li id='l3'><StyledLink to="/podstawowka/NaviListGroupamki">Ułamki zwykłe i dziesiętne</StyledLink></li>
          <li id='l4'><StyledLink to="/podstawowka/lniewymierne">Liczby niewymierne</StyledLink></li>
          <li id='l5'><StyledLink to="/podstawowka/lrzeczywiste">Liczby rzeczywiste</StyledLink></li>
          <li id='l6'><StyledLink to="/podstawowka/procenty">Procenty</StyledLink></li>
          <li id='l7'><StyledLink to="/podstawowka/potegi">Potęgi</StyledLink></li>
          <li id='l8'><StyledLink to="/podstawowka/wyrazenia">Wyrażenia algebraiczne</StyledLink></li>
          <li id='l9'><StyledLink to="/podstawowka/rownania">Równania i nierówności</StyledLink></li>
          <li id='l10'><StyledLink to="/podstawowka/uklady">Układy równań</StyledLink></li>
          <li id='l11'><StyledLink to="/podstawowka/proste">Proste i odcinki</StyledLink></li>
          <li id='l12'><StyledLink to="/podstawowka/katy">Kąty</StyledLink></li>
          <li id='l13'><StyledLink to="/podstawowka/wielokaty">Wielokąty, koła i okręgi</StyledLink></li>
          <li id='l14'><StyledLink to="/podstawowka/uklwspol">Układ współrzędnych</StyledLink></li>
          <li id='l15'><StyledLink to="/podstawowka/bryly">Bryły</StyledLink></li>
          <li id='l16'><StyledLink to="/podstawowka/kombinatoryka">Kombinatoryka i rachunek prawdopodobieństwa</StyledLink></li>
          <li id='l17'><StyledLink to="/podstawowka/statystyka">Statystyka opisowa</StyledLink></li>
        </NaviListGroup>
      </Left>
    );
    case "b":
      
      return (
      <Left >
        <h3>Szkoła średnia</h3>
        <NaviListGroup >
          <li id='l1'><StyledLink to="/srednia/lrzeczywiste">Zbiory liczbowe. Liczby rzeczywiste</StyledLink></li>
            <li id='l2'><StyledLink to="/srednia/wyrazeniaAlgebraiczne">Wyrażenia algebraiczne</StyledLink></li>
            <li id='l3'><StyledLink to="/srednia/funkcje">Funkcje i ich własności</StyledLink></li>
            <li id='l4'><StyledLink to="/srednia/fliniowa">Funkcja liniowa</StyledLink></li>
            <li id='l5'><StyledLink to="/srednia/uklady">Układy równań</StyledLink></li>
            <li id='l6'><StyledLink to="/srednia/planimetria">Planimetria</StyledLink></li>
            <li id='l7'><StyledLink to="/srednia/trygonometria">Trygonometria</StyledLink></li>
          <li id='l8'><StyledLink to="/srednia/przeksztalceniaWykresowFunkcji">Przekształcenia wykresów funkcji</StyledLink></li>
              <li id='l9'><StyledLink to="/srednia/rownaniaINierownosciZwartbezIParametrem">Równania i nierówności z wartością bezwzględną i z parametrem</StyledLink></li>
          <li id='l10'><StyledLink to="/srednia/fkwadratowa">Funkcja kwadratowa</StyledLink></li>
            <li id='l11'><StyledLink to="/srednia/ganalityczna">Geometria analityczna</StyledLink></li>
            <li id='l12'><StyledLink to="/srednia/wielomiany">Wielomiany</StyledLink></li>
            <li id='l13'><StyledLink to="/srednia/fwymierne">Funkcje wymierne</StyledLink></li>
            <li id='l14'><StyledLink to="/srednia/ciagi">Ciągi</StyledLink></li>
            <li id='l15'><StyledLink to="/srednia/kombinatoryka">Kombinatoryka</StyledLink></li>
            <li id='l16'><StyledLink to="/srednia/rachrozniczkowy"><MathJax>{"\\(\\star\\)"} Rachunek różniczkowy</MathJax></StyledLink></li>
            <li id='l17'><StyledLink to="/srednia/fwykladnicza">Funkcja wykładnicza i logarytmiczne</StyledLink></li>
            <li id='l18'><StyledLink to="/srednia/statystyka">Statystyka</StyledLink></li>
            <li id='l19'><StyledLink to="/srednia/prawdopodobienstwo">Rachunek prawdopodobieństwa</StyledLink></li>
          <li id='l20'><StyledLink to="/srednia/stereometria">Stereometria</StyledLink></li>
            
        </NaviListGroup>
      </Left>
    );
    case "c": return (
      <Left >
        <h3>Matura</h3>
        <NaviListGroup >
          <li id='l1'><StyledLink to="/matura/wymagania">Wymagania 2023</StyledLink></li>
          <li id='l2'><StyledLink to="/matura/powtorzenie">Powtórzenie</StyledLink></li>
          <li id='l3'><StyledLink to="/matura/zestawy">Zestawy</StyledLink></li>
        </NaviListGroup>
      </Left>
    );
    case "cp": return (
      <Left>
        <h3>Matura</h3>
        <NaviListGroup >
          <li id='l1'><StyledLink to="/matura/wymagania">Wymagania 2023</StyledLink></li>
          <li id='l2'><StyledLink to="/matura/powtorzenie">Powtórzenie</StyledLink></li>
          <li id='l3'><StyledLink to="/matura/zestawy">Zestawy</StyledLink></li>
          <li id='l4'><StyledLink to="/matura/ksiazkowe">Ksiązkowe</StyledLink></li>
        </NaviListGroup>
      </Left>
    );
    case "d": return (
      <Left>
        <h3>Studia</h3>
        <NaviListGroup >
          <li id='l1'><StyledLink to="/studia/analizaMatematyczna">Analiza matematyczna</StyledLink></li>
          <li id='l2'><StyledLink to="/studia/ciagiIGranice">Ciągi i ich granice</StyledLink></li>
        </NaviListGroup>
      </Left>
    );
    default: return (
      <div> Page is under construct</div>
    );
  }
}



  export default LeftNavi