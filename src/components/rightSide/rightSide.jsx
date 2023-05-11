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
                <Link to="/matura/kielbasa">Matura od...</Link>
                <Link to="/matura/terazMaturaRoz">Teraz Matura Rozszerzenie</Link>
            </MainGuz>
        )
        case "ckk": return (
            <MainGuz>
                <Link to="/matura/kielbasa/algebra">Wyrażenia algebraiczne. Równania i nierówności algebraiczne.</Link>
                <Link to="/matura/kielbasa/liczbyRzeczywiste">Liczby rzeczywiste.</Link>
                <Link to="/matura/kielbasa/funkcje">Funkcje.</Link>
                <Link to="/matura/kielbasa/funkcjaLiniowa">Funkcja liniowa.</Link>
                <Link to="/matura/kielbasa/funkcjaKwadratowa">Funkcja kwadratowa.</Link>
                <Link to="/matura/kielbasa/wielomiany">Wielomiany.</Link>
                <Link to="/matura/kielbasa/funkcjeWymierne">Funkcje wymierne.</Link>
                <Link to="/matura/kielbasa/funkcjaWykladnicza">Funkcja wykładnicza.</Link>
                <Link to="/matura/kielbasa/funkcjaLogarytmiczna">Funkcja logarytmiczna.</Link>
                <Link to="/matura/kielbasa/trygonometria">Trygonometria.</Link>
                <Link to="/matura/kielbasa/ciagi">Ciągi.</Link>
                <Link to="/matura/kielbasa/planimetria">Planimetria.</Link>
                <Link to="/matura/kielbasa/geometriaAnalityczna">Geometria analityczna.</Link>
                <Link to="/matura/kielbasa/stereometria">Stereometria.</Link>
                <Link to="/matura/kielbasa/pochodna"><MathJax>{"\\(\\star\\)"}</MathJax> Pochodna. <MathJax>{"\\(\\star\\)"}</MathJax></Link>
                <Link to="/matura/kielbasa/zadaniaOptymalizacyjne">Zadania optymalizacyjne.</Link>
                <Link to="/matura/kielbasa/rachunekPrawdopodobienstwa">Rachunek prawdopodobieństwa.</Link>
                <Link to="/matura/kielbasa/statystyka">Statystyka.</Link>
                <Link to="/matura/kielbasa/zadaniaZamkniete">Zadania zamknięte.</Link>
            </MainGuz>
        );
        case "cktmr": return (
            <MainGuz>
                <Link to="/matura/terazMaturaRoz/liczby">Liczby rzeczywiste i wyrażenia algebraiczne</Link>
                <Link to="/matura/terazMaturaRoz/funkcjaLiniowa">Funkcje i funkcja liniowa</Link>
                <Link to="/matura/terazMaturaRoz/funkcjaKwadratowa">Funkcja kwadratowa</Link>
                <Link to="/matura/terazMaturaRoz/wielomianyIWymierne">Wielomiany i wyrażenia wymierne</Link>
                <Link to="/matura/terazMaturaRoz/funkcjaWykladniczaILogarytmiczna">Funkcja wykładnicza i funkcja logarytmiczna</Link>
                <Link to="/matura/terazMaturaRoz/trygonometria">Trygonometria</Link>
                <Link to="/matura/terazMaturaRoz/ciagi">Ciągi</Link>
                <Link to="/matura/terazMaturaRoz/planimetria">Planimetria</Link>
                <Link to="/matura/terazMaturaRoz/geometriaAnalityczna">Geometria analityczna</Link>
                <Link to="/matura/terazMaturaRoz/stereometria">Stereometria</Link>
                <Link to="/matura/terazMaturaRoz/pochodna">Rachunek różniczkowy</Link>
                <Link to="/matura/terazMaturaRoz/rachunekPrawdopodobienstwaIStatystyka">Rachunek prawdopodobieństwa i statystyka</Link>

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