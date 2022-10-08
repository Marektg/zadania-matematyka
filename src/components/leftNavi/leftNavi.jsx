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


const LeftNavi = ({ model }) => {
  const { leftNavi, navListGroup } = styles;
  switch (model) {
    case "a": return (
      <nav className={leftNavi}>
        <h3>Szkoła podstawowa</h3>
        <ul className={navListGroup}>
          <li><StyledLink to="/podstawowka/lnaturalne">Liczby naturalne</StyledLink></li>
          <li><StyledLink to="/podstawowka/lcalkowite">Liczby całkowite</StyledLink></li>
          <li><StyledLink to="/podstawowka/ulamki">Ułamki zwykłe i dziesiętne</StyledLink></li>
          <li><StyledLink to="/podstawowka/lniewymierne">Liczby niewymierne</StyledLink></li>
          <li><StyledLink to="/podstawowka/lrzeczywiste">Liczby rzeczywiste</StyledLink></li>
          <li><StyledLink to="/podstawowka/procenty">Procenty</StyledLink></li>
          <li><StyledLink to="/podstawowka/potegi">Potęgi</StyledLink></li>
          <li><StyledLink to="/podstawowka/wyrazenia">Wyrażenia algebraiczne</StyledLink></li>
          <li><StyledLink to="/podstawowka/rownania">Równania i nierówności</StyledLink></li>
          <li><StyledLink to="/podstawowka/uklady">Układy równań</StyledLink></li>
          <li><StyledLink to="/podstawowka/proste">Proste i odcinki</StyledLink></li>
          <li><StyledLink to="/podstawowka/katy">Kąty</StyledLink></li>
          <li><StyledLink to="/podstawowka/wielokaty">Wielokąty, koła i okręgi</StyledLink></li>
          <li><StyledLink to="/podstawowka/uklwspol">Układ współrzędnych</StyledLink></li>
          <li><StyledLink to="/podstawowka/bryly">Bryły</StyledLink></li>
          <li><StyledLink to="/podstawowka/kombinatoryka">Kombinatoryka i rachunek prawdopodobieństwa</StyledLink></li>
          <li><StyledLink to="/podstawowka/statystyka">Statystyka opisowa</StyledLink></li>
        </ul>
      </nav>
    );
    case "b": return (
      <nav className={leftNavi}>
        <h3>Szkoła średnia</h3>
        <ul className={navListGroup}>
          <li><StyledLink to="/srednia/lrzeczywiste">Liczby rzeczywiste</StyledLink></li>
          <li><StyledLink to="/srednia/jezyk">Język matematyki</StyledLink></li>
          <li><StyledLink to="/srednia/wyrazeniaAlgebraiczne">Wyrażenia algebraiczne</StyledLink></li>
          <li><StyledLink to="/srednia/uklady">Układy równań</StyledLink></li>
          <li><StyledLink to="/srednia/rownaniaINierownosciZwartbezIParametrem">Równania i nierówności z wartością bezwzględną i z parametrem</StyledLink></li>
          <li><StyledLink to="/srednia/funkcje">Funkcje i ich własności</StyledLink></li>
          <li><StyledLink to="/srednia/wlasnosciFunkcji">Podstawowe własności wybranych funkcji</StyledLink></li>
          <li><StyledLink to="/srednia/przeksztalceniaWykresowFunkcji">Przekształcenia wykresów funkcji</StyledLink></li>
          <li><StyledLink to="/srednia/fliniowa">Funkcja liniowa</StyledLink></li>
          <li><StyledLink to="/srednia/fkwadratowa">Funkcja kwadratowa</StyledLink></li>
          <li><StyledLink to="/srednia/geometriaPojeciaWstepneITrojkaty">Pojęcia wstępne i trójkąty</StyledLink></li>
          <li><StyledLink to="/srednia/geometriaKolaIOkregi">Koła i okręgi</StyledLink></li>
          <li><StyledLink to="/srednia/geometriaRozwiazywaniaTrojkatowPoleTrojkataIKola">Rozwiązywanie trójkątów, pole trójkąta, pole koła</StyledLink></li>
          <li><StyledLink to="/srednia/geometriaCzworokaty">Czworokąty</StyledLink></li>
          <li><StyledLink to="/srednia/geometriaPolaCzworokatow">Pola czworokątów</StyledLink></li>
          <li><StyledLink to="/srednia/trygonometriaKatOstrego">Trygonometria kąta ostrego</StyledLink></li>
          <li><StyledLink to="/srednia/wieloniany">Wielomiany</StyledLink></li>
          <li><StyledLink to="/srednia/fwymierne">Funkcje wymierne</StyledLink></li>
          <li><StyledLink to="/srednia/ftrygonomertyczne"><MathJax>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne</StyledLink></li>
          <li><StyledLink to="/srednia/fwykladnicza">Funkcja wykładnicza i logarytmiczne</StyledLink></li>
          <li><StyledLink to="/srednia/flogarytmiczna">Funkcja logarytmiczna</StyledLink></li>
          <li><StyledLink to="/srednia/ciagi">Ciągi</StyledLink></li>
          <li><StyledLink to="/srednia/kombinatorykaDwumianNewtonaTrojkatPascala">Kombinatoryka. Dwumian Newtona. Trójkąt Pascala</StyledLink></li>
          <li><StyledLink to="/srednia/ganalityczna">Geometria analityczna</StyledLink></li>
          <li><StyledLink to="/srednia/prawdopodobienstwo">Rachunek prawdopodobieństwa</StyledLink></li>
          <li><StyledLink to="/srednia/statystyka">Statystyka</StyledLink></li>
          <li><StyledLink to="/srednia/stereometria">Stereometria</StyledLink></li>
          <li><StyledLink to="/srednia/rachrozniczkowy"><MathJax>{"\\(\\star\\)"}</MathJax> Rachunek różniczkowy</StyledLink></li>
        </ul>
      </nav>
    );
    case "c": return (
      <nav className={leftNavi}>
        <h3>Matura</h3>
        <ul className={navListGroup}>
          <li><StyledLink to="/matura/wymagania">Wymagania 2023</StyledLink></li>
          <li><StyledLink to="/matura/powtorki">Powtórzenie</StyledLink></li>
          <li><StyledLink to="/matura/zestawy">Zestawy</StyledLink></li>
        </ul>
      </nav>
    );
    case "d": return (
      <nav className={leftNavi}>
        <h3>Studia</h3>
        <ul className={navListGroup}>
          <li><StyledLink to="/studia/analizaMatematyczna">Analiza matematyczna</StyledLink></li>
          <li><StyledLink to="/studia/ciagiIGranice">Ciągi i ich granice</StyledLink></li>
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