import React from 'react'
import { MathJax } from 'better-react-mathjax';
import { Link,MainGuz } from './rightSide.styled';





const RightSide = ({ model }) => {

    switch (model) {
        case "a": return (
            <MainGuz>
                <Link to="/podstawowka/lnaturalne">Liczby naturalne</Link>
                <Link to="/podstawowka/ulamkidziesietne">Ułamki dziesiętne</Link>
                <Link to="/podstawowka/podzielnosc">Podzielność liczb</Link>
                <Link to="/podstawowka/ulamkizwykle">Ułamki zwykłe</Link>
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
                <Link to="/matura/gcse">GCSE</Link>
            </MainGuz>
        );
        case "cz": return (
            <MainGuz>
                <Link to="/matura/zestawy/podstawa">Poziom podstawowy</Link>
                <Link to="/matura/zestawy/rozszerzenie">Poziom rozszerzony</Link>
            </MainGuz>
        );
        case "cgcse": return (
            <MainGuz>
            <Link to="/matura/gcse/section1">Arithmetic, Multiples and Factors</Link>
            <Link to="/matura/gcse/section2">Approximations</Link>
            <Link to="/matura/gcse/section3">Fractions</Link>
            <Link to="/matura/gcse/section4">Ratio and Proportion</Link>
            <Link to="/matura/gcse/section5">Percentages</Link>
            <Link to="/matura/gcse/section6">Expressions</Link>
            <Link to="/matura/gcse/section7">Powers and Roots</Link>
            <Link to="/matura/gcse/section8">Formulas</Link>
            <Link to="/matura/gcse/section9">Equations</Link>
            <Link to="/matura/gcse/section10">Direct and Invert Proportion</Link>
            <Link to="/matura/gcse/section11">Quadratic Equations</Link>
            <Link to="/matura/gcse/section12">Simultaneous Equations</Link>
            <Link to="/matura/gcse/section13">Inequalities</Link>
            <Link to="/matura/gcse/section14">Sequences</Link>
            <Link to="/matura/gcse/section15">Straight-Line Graphs</Link>
            <Link to="/matura/gcse/section16">Other Types of Graph</Link>
            <Link to="/matura/gcse/section17">Using Graphs</Link>
            <Link to="/matura/gcse/section18">Functions</Link>
            <Link to="/matura/gcse/section19">Differentiation</Link>
            <Link to="/matura/gcse/section20">Matrices</Link>
            <Link to="/matura/gcse/section21">Sets</Link>
            <Link to="/matura/gcse/section22">Angles and 2D Shapes</Link>
            <Link to="/matura/gcse/section23">Circle Geometry</Link>
            <Link to="/matura/gcse/section24">Units, Measuring and Estimating</Link>
            <Link to="/matura/gcse/section25">Compound Measures</Link>
            <Link to="/matura/gcse/section26">Constructions</Link>
            <Link to="/matura/gcse/section27">Pythagoras and Trigonometry</Link>
            <Link to="/matura/gcse/section28">Vectors</Link>
            <Link to="/matura/gcse/section29">Perimeter and Area</Link>
            <Link to="/matura/gcse/section30">3D Shapes</Link>
            <Link to="/matura/gcse/section31">Transformations</Link>
            <Link to="/matura/gcse/section32">Congruence and Similarity</Link>
            <Link to="/matura/gcse/section33">Collecting Data</Link>
            <Link to="/matura/gcse/section34">Averages and Range</Link>
            <Link to="/matura/gcse/section35">Displaying Data</Link>
            <Link to="/matura/gcse/section36">Probability</Link>
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