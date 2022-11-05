import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './leftNavi.module.scss';
import { MathJax } from 'better-react-mathjax';


const StyledLink = styled(NavLink)`
    width: 100%;
    color: #000;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
      &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;


const LeftNavi = ({ model}) => {
  const { leftNavi, navListGroup } = styles;
  switch (model) {
    case "a": return (
      <nav className={leftNavi}>
        <h3>Szkoła podstawowa</h3>
        <ul className={navListGroup}>
          <li id='l1'><StyledLink to="/podstawowka/lnaturalne">Liczby naturalne</StyledLink></li>
          <li id='l2'><StyledLink to="/podstawowka/lcalkowite">Liczby całkowite</StyledLink></li>
          <li id='l3'><StyledLink to="/podstawowka/ulamki">Ułamki zwykłe i dziesiętne</StyledLink></li>
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
        </ul>
      </nav>
    );
    case "b":
      
      return (
      <nav className={leftNavi}>
        <h3>Szkoła średnia</h3>
        <ul className={navListGroup}>
          <li id='l1'><StyledLink to="/srednia/lrzeczywiste">Liczby rzeczywiste</StyledLink></li>
          <li id='l2'><StyledLink to="/srednia/jezyk">Język matematyki</StyledLink></li>
          <li id='l3'><StyledLink to="/srednia/wyrazeniaAlgebraiczne">Wyrażenia algebraiczne</StyledLink></li>
          <li id='l4'><StyledLink to="/srednia/uklady">Układy równań</StyledLink></li>
          <li id='l5'><StyledLink to="/srednia/rownaniaINierownosciZwartbezIParametrem">Równania i nierówności z wartością bezwzględną i z parametrem</StyledLink></li>
          <li id='l6'><StyledLink to="/srednia/funkcje">Funkcje i ich własności</StyledLink></li>
          <li id='l7'><StyledLink to="/srednia/wlasnosciFunkcji">Podstawowe własności wybranych funkcji</StyledLink></li>
          <li id='l8'><StyledLink to="/srednia/przeksztalceniaWykresowFunkcji">Przekształcenia wykresów funkcji</StyledLink></li>
          <li id='l9'><StyledLink to="/srednia/fliniowa">Funkcja liniowa</StyledLink></li>
          <li id='l10'><StyledLink to="/srednia/fkwadratowa">Funkcja kwadratowa</StyledLink></li>
          <li id='l11'><StyledLink to="/srednia/geometriaPojeciaWstepneITrojkaty">Pojęcia wstępne i trójkąty</StyledLink></li>
          <li id='l12'><StyledLink to="/srednia/geometriaKolaIOkregi">Koła i okręgi</StyledLink></li>
          <li id='l13'><StyledLink to="/srednia/geometriaRozwiazywaniaTrojkatowPoleTrojkataIKola">Rozwiązywanie trójkątów, pole trójkąta, pole koła</StyledLink></li>
          <li id='l14'><StyledLink to="/srednia/geometriaCzworokaty">Czworokąty</StyledLink></li>
          <li id='l15'><StyledLink to="/srednia/geometriaPolaCzworokatow">Pola czworokątów</StyledLink></li>
          <li id='l16'><StyledLink to="/srednia/trygonometriaKatOstrego">Trygonometria kąta ostrego</StyledLink></li>
          <li id='l17'><StyledLink to="/srednia/wieloniany">Wielomiany</StyledLink></li>
          <li id='l18'><StyledLink to="/srednia/fwymierne">Funkcje wymierne</StyledLink></li>
          <li id='l19'><StyledLink to="/srednia/ftrygonomertyczne"><MathJax>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne</StyledLink></li>
          <li id='l20'><StyledLink to="/srednia/fwykladnicza">Funkcja wykładnicza i logarytmiczne</StyledLink></li>
          <li id='l21'><StyledLink to="/srednia/flogarytmiczna">Funkcja logarytmiczna</StyledLink></li>
          <li id='l22'><StyledLink to="/srednia/ciagi">Ciągi</StyledLink></li>
          <li id='l23'><StyledLink to="/srednia/kombinatorykaDwumianNewtonaTrojkatPascala">Kombinatoryka. Dwumian Newtona. Trójkąt Pascala</StyledLink></li>
          <li id='l24'><StyledLink to="/srednia/ganalityczna">Geometria analityczna</StyledLink></li>
          <li id='l25'><StyledLink to="/srednia/prawdopodobienstwo">Rachunek prawdopodobieństwa</StyledLink></li>
          <li id='l26'><StyledLink to="/srednia/statystyka">Statystyka</StyledLink></li>
          <li id='l27'><StyledLink to="/srednia/stereometria">Stereometria</StyledLink></li>
          <li id='l28'><StyledLink to="/srednia/rachrozniczkowy"><MathJax>{"\\(\\star\\)"}</MathJax> Rachunek różniczkowy</StyledLink></li>
        </ul>
      </nav>
    );
    case "c": return (
      <nav className={leftNavi}>
        <h3>Matura</h3>
        <ul className={navListGroup}>
          <li id='l1'><StyledLink to="/matura/wymagania">Wymagania 2023</StyledLink></li>
          <li id='l2'><StyledLink to="/matura/powtorzenie">Powtórzenie</StyledLink></li>
          <li id='l3'><StyledLink to="/matura/zestawy">Zestawy</StyledLink></li>
        </ul>
      </nav>
    );
    case "d": return (
      <nav className={leftNavi}>
        <h3>Studia</h3>
        <ul className={navListGroup}>
          <li id='l1'><StyledLink to="/studia/analizaMatematyczna">Analiza matematyczna</StyledLink></li>
          <li id='l2'><StyledLink to="/studia/ciagiIGranice">Ciągi i ich granice</StyledLink></li>
        </ul>
      </nav>
    );
    default: return (
      <div> Page is under construct</div>
    );
  }
}

  LeftNavi.propTypes = {}

  export default LeftNavi