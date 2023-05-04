import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { Link,MainGuz } from './rightSide.styled';





const RightSide = ({ model }) => {

    switch (model) {
        case "a": return (
            <MainGuz>
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
            </MainGuz>
        );
        case "b": return (
            <MainGuz>
                <Link to="/srednia/lrzeczywiste">Zbiory liczbowe. Liczby rzeczywiste</Link>
                <Link to="/srednia/wyrazeniaAlgebraiczne">Wyrażenia algebraiczne</Link>
                <Link to="/srednia/funkcje">Funkcje i ich własności</Link>
                <Link to="/srednia/fliniowa">Funkcja liniowa</Link>
                <Link to="/srednia/uklady">Układy równań</Link>
                <Link to="/srednia/planimetria">Planimetria</Link>
                <Link to="/srednia/trygonometria">Trygonometria</Link>
                <Link to="/srednia/przeksztalceniaWykresowFunkcji">Przekształcenia wykresów funkcji</Link>
                <Link to="/srednia/rownaniaINierownosciZwartbezIParametrem">Równania i nierówności z wartością bezwzględną i z parametrem</Link>
                <Link to="/srednia/fkwadratowa">Funkcja kwadratowa</Link>
                <Link to="/srednia/ganalityczna">Geometria analityczna</Link>
                <Link to="/srednia/wieloniany">Wielomiany</Link>
                <Link to="/srednia/fwymierne">Funkcje wymierne</Link>
                <Link to="/srednia/ciagi">Ciągi</Link>
                <Link to="/srednia/kombinatoryka">Kombinatoryka</Link>
                <Link to="/srednia/rachrozniczkowy"><MathJax>{"\\(\\star\\)"} Rachunek różniczkowy</MathJax></Link>
                <Link to="/srednia/fwykladnicza">Funkcja wykładnicza i logarytmiczne</Link>
                <Link to="/srednia/statystyka">Statystyka</Link>
                <Link to="/srednia/prawdopodobienstwo">Rachunek prawdopodobieństwa</Link>
                <Link to="/srednia/stereometria">Stereometria</Link>
                
            </MainGuz>
        );
        case "c": return (
            <MainGuz>
                <Link to="/matura/wymagania">Wymagania 2023</Link>
                <Link to="/matura/powtorzenie">Powtórzenie</Link>
                <Link to="/matura/zestawy">Zestawy</Link>
            </MainGuz>
        );
        case "cz": return (
            <MainGuz>
                <Link to="/matura/zestawy/podstawa">Poziom podstawowy</Link>
                <Link to="/matura/zestawy/rozszerzenie">Poziom rozszerzony</Link>
            </MainGuz>
        );
        case "cp": return (
            <MainGuz>
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
            </MainGuz>
        );
        case "ck": return (
            <MainGuz>
                <Link to="/matura/ksiazkowe/algebra">Wyrażenia algebraiczne. Równania i nierówności algebraiczne.</Link>
                <Link to="/matura/ksiazkowe/liczbyRzeczywiste">Liczby rzeczywiste.</Link>
                <Link to="/matura/ksiazkowe/funkcje">Funkcje.</Link>
                <Link to="/matura/ksiazkowe/funkcjaLiniowa">Funkcja liniowa.</Link>
                <Link to="/matura/ksiazkowe/funkcjaKwadratowa">Funkcja kwadratowa.</Link>
                <Link to="/matura/ksiazkowe/wielomiany">Wielomiany.</Link>
                <Link to="/matura/ksiazkowe/funkcjeWymierne">Funkcje wymierne.</Link>
                <Link to="/matura/ksiazkowe/funkcjaWykladnicza">Funkcja wykładnicza.</Link>
                <Link to="/matura/ksiazkowe/funkcjaLogarytmiczna">Funkcja logarytmiczna.</Link>
                <Link to="/matura/ksiazkowe/trygonometria">Trygonometria.</Link>
                <Link to="/matura/ksiazkowe/ciagi">Ciągi.</Link>
                <Link to="/matura/ksiazkowe/planimetria">Planimetria.</Link>
                <Link to="/matura/ksiazkowe/geometriaAnalityczna">Geometria analityczna.</Link>
                <Link to="/matura/ksiazkowe/stereometria">Stereometria.</Link>
                <Link to="/matura/ksiazkowe/pochodna"><MathJax>{"\\(\\star\\)"}</MathJax> Pochodna. <MathJax>{"\\(\\star\\)"}</MathJax></Link>
                <Link to="/matura/ksiazkowe/zadaniaOptymalizacyjne">Zadania optymalizacyjne.</Link>
                <Link to="/matura/ksiazkowe/rachunekPrawdopodobienstwa">Rachunek prawdopodobieństwa.</Link>
                <Link to="/matura/ksiazkowe/statystyka">Statystyka.</Link>
                <Link to="/matura/ksiazkowe/zadaniaZamkniete">Zadania zamknięte.</Link>
            </MainGuz>
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