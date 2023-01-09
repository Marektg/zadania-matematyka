import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './rightSide.module.scss';
import { MathJax } from 'better-react-mathjax';



const Link = styled(NavLink)`
    height: 60px;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px 20px 10px 20px;
    border-radius: 30px;
    border: none;
    margin-left: 20px;
    margin-top:20px;
    text-align: center;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6fa;
    text-decoration: none;
    &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;



const RightSide = ({ model }) => {
    const { mainGuz } = styles;
    switch (model) {
        case "a": return (
            <div className={mainGuz}>
                <Link to="/podstawowka/lnaturalne">Liczby naturalne</Link>
                <Link to="/podstawowka/lcalkowite">Liczby całkowite</Link>
                <Link to="/podstawowka/ulamki">Ułamki zwykłe i dziesiętne</Link>
                <Link to="/podstawowka/lniewymierne">Liczby niewymierne</Link>
                <Link to="/podstawowka/lrzeczywiste">Liczby rzeczywiste</Link>
                <Link to="/podstawowka/procenty">Procenty</Link>
                <Link to="/podstawowka/potegi">Potęgi</Link>
                <Link to="/podstawowka/wyrazenia">Wyrażenia algebraiczne</Link>
                <Link to="/podstawowka/rownania">Równania i nierówności</Link>
                <Link to="/podstawowka/uklady">Układy równań</Link>
                <Link to="/podstawowka/proste">Proste i odcinki</Link>
                <Link to="/podstawowka/katy">Kąty</Link>
                <Link to="/podstawowka/wielokaty">Wielokąty, koła i okręgi</Link>
                <Link to="/podstawowka/uklwspol">Układ współrzędnych</Link>
                <Link to="/podstawowka/bryly">Bryły</Link>
                <Link to="/podstawowka/kombinatoryka">Kombinatoryka i rachunek prawdopodobieństwa</Link>
                <Link to="/podstawowka/statystyka">Statystyka opisowa</Link>
            </div>
        );
        case "b": return (
            <div className={mainGuz}>
                <Link to="/srednia/lrzeczywiste">Liczby rzeczywiste</Link>
                <Link to="/srednia/jezyk">Język matematyki</Link>
                <Link to="/srednia/wyrazeniaAlgebraiczne">Wyrażenia algebraiczne</Link>
                <Link to="/srednia/uklady">Układy równań</Link>
                <Link to="/srednia/rownaniaINierownosciZwartbezIParametrem">Równania i nierówności z wartością bezwzględną i z parametrem</Link>
                <Link to="/srednia/funkcje">Funkcje i ich własności</Link>
                <Link to="/srednia/wlasnosciFunkcji">Podstawowe własności wybranych funkcji</Link>
                <Link to="/srednia/przeksztalceniaWykresowFunkcji">Przekształcenia wykresów funkcji</Link>
                <Link to="/srednia/fliniowa">Funkcja liniowa</Link>
                <Link to="/srednia/fkwadratowa">Funkcja kwadratowa</Link>
                <Link to="/srednia/geometriaPojeciaWstepneITrojkaty">Pojęcia wstępne i trójkąty</Link>
                <Link to="/srednia/geometriaKolaIOkregi">Koła i okręgi</Link>
                <Link to="/srednia/geometriaRozwiazywaniaTrojkatowPoleTrojkataIKola">Rozwiązywanie trójkątów, pole trójkąta, pole koła</Link>
                <Link to="/srednia/geometriaCzworokaty">Czworokąty</Link>
                <Link to="/srednia/geometriaPolaCzworokatow">Pola czworokątów</Link>
                <Link to="/srednia/trygonometriaKatOstrego">Trygonometria kąta ostrego</Link>
                <Link to="/srednia/wieloniany">Wielomiany</Link>
                <Link to="/srednia/fwymierne">Funkcje wymierne</Link>
                <Link to="/srednia/ftrygonomertyczne"><MathJax>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne</Link>
                <Link to="/srednia/fwykladnicza">Funkcja wykładnicza i logarytmiczne</Link>
                <Link to="/srednia/flogarytmiczna">Funkcja logarytmiczna</Link>
                <Link to="/srednia/ciagi">Ciągi</Link>
                <Link to="/srednia/kombinatorykaDwumianNewtonaTrojkatPascala">Kombinatoryka. Dwumian Newtona. Trójkąt Pascala</Link>
                <Link to="/srednia/ganalityczna">Geometria analityczna</Link>
                <Link to="/srednia/prawdopodobienstwo">Rachunek prawdopodobieństwa</Link>
                <Link to="/srednia/statystyka">Statystyka</Link>
                <Link to="/srednia/stereometria">Stereometria</Link>
                <Link to="/srednia/rachrozniczkowy"><MathJax>{"\\(\\star\\)"}</MathJax> Rachunek różniczkowy</Link>
            </div>
        );
        case "c": return (
            <div className={mainGuz}>
                <Link to="/matura/wymagania">Wymagania 2023</Link>
                <Link to="/matura/powtorzenie">Powtórzenie</Link>
                <Link to="/matura/zestawy">Zestawy</Link>
            </div>
        );
        case "cz": return (
            <div className={mainGuz}>
                <Link to="/matura/zestawy/podstawa">Poziom podstawowy</Link>
                <Link to="/matura/zestawy/rozszerzenie">Poziom rozszerzony</Link>
            </div>
        );
        case "cp": return (
            <div className={mainGuz}>
                <Link to="/matura/powtorzenie/liczby">Liczby, zbiory i wartość bezwzględna</Link>
                <Link to="/matura/powtorzenie/funkcjeIFunkcjaLiniowa">Funkcje. Funkcja liniowa</Link>
                <Link to="/matura/powtorzenie/funkcjaKwadratowa">Funkcja kwadratowa</Link>
                <Link to="/matura/powtorzenie/wielomiany">Wielomiany</Link>
                <Link to="/matura/powtorzenie/funkcjeWymierne">Funkcje wymierne</Link>
                <Link to="/matura/powtorzenie/trygonometria">Trygonometria</Link>
                <Link to="/matura/powtorzenie/funkcjeWykladniczeLogarytmiczne">Funkcje wykładnicze i logarytmiczne</Link>
                <Link to="/matura/powtorzenie/ciagi">Ciągi</Link>
                <Link to="/matura/powtorzenie/planimetria">Planimetria</Link>
                <Link to="/matura/powtorzenie/geometriaAnalityczna">Geometria analityczna</Link>
                <Link to="/matura/powtorzenie/stereometria">Stereometria</Link>
                <Link to="/matura/powtorzenie/rachunekRozniczkowy"><MathJax>{"\\(\\star\\)"}</MathJax>  Rachunek różniczkowy</Link>
                <Link to="/matura/powtorzenie/prawdopodobienstwoStatystyka">Rachunek prawdopodobieństwa i statystyka</Link>
            </div>
        );
        case "ck": return (
            <div className={mainGuz}>
                <Link to="/matura/ksiazkowe/kielbasa/algebra">Wyrażenia algebraiczne. Równania i nierówności algebraiczne..</Link>
                <Link to="/matura/ksiazkowe/kielbasa/liczbyRzeczywiste">Liczby rzeczywiste</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcje">Funkcje.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcjaLiniowa">Funkcja liniowa.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcjaKwadratowa">Funkcja kwadratowa.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/wielomiany">Wielomiany.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcjeWymierne">Funkcje wymierne.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcjaWykladnicza">Funkcja wykładnicza.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/funkcjaLogarytmiczna">Funkcja logarytmiczna.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/trygonometria">Trygonometria.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/ciagi">Ciągi.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/planimetria">Planimetria.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/geometriaAnalityczna">Geometria analityczna.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/stereometria">Stereometria.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/pochodna"><MathJax>{"\\(\\star\\)"}</MathJax> Pochodna. <MathJax>{"\\(\\star\\)"}</MathJax></Link>
                <Link to="/matura/ksiazkowe/kielbasa/zadaniaOptymalizacyjne">Zadania optymalizacyjne.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/rachunekPrawdopodobienstwa">Rachunek prawdopodobieństwa.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/statystyka">Statystyka.</Link>
                <Link to="/matura/ksiazkowe/kielbasa/zadaniaZamkniete">Zadania zamknięte.</Link>
            </div>
        );
        case "d": return (
            <div>tresde</div>
        );
        default: return (
            <div> Page is under construct</div>
        );

    }
}
RightSide.propTypes = {}

export default RightSide