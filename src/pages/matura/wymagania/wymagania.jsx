import React from 'react'
import styles from './wymagania.module.scss';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MathJax } from 'better-react-mathjax';

const Link = styled(NavLink)`
    height: 60px;
    width: 100px;
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

const Wymagania = () => {
    const { main, dzial, contentList } = styles;
  return (
      <div>
          <h1>wymagania matematyka matura 2023</h1>
          <div className={main}>
              <div className={dzial}>
                  <h2>Liczby rzeczywiste</h2>
                  <ul className={contentList}>
                      <li>Działania w zbiorze liczb rzeczywistych</li>
                      <li>Proste dowody dotyczące podzielności liczb całkowitych i reszt z dzielenia</li>
                      <li>stosuje własności pierwiastków dowolnego stopnia</li>
                      <li>stosuje związek pierwiastkowania z potęgowaniem</li>
                      <li>stosuje własności monotoniczności potęgowania</li>
                      <li>zaznacza przedziały na osi liczbowej</li>
                      <li>stosuje interpretację geometryczną i algebraiczną wartości bezwzględnej</li>
                      <li>wykorzystuje własności potęgowania i pierwiastkowania w sytuacjach praktycznych</li>
                      <li>stosuje związek logarytmowania z potęgowaniem</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>stosuje wzór na zamianę podstawy logarytmu</li>
                      <li>przeprowadza proste dowody dotyczące podzielności liczb całkowitych i reszt z dzielenia</li>
                  </ul>

              </div>
              <div className={dzial}>
                  <h2>Wyrażenia algebraiczne</h2>
                  <ul className={contentList}>
                      <li>stosuje wzory skróconego mnożenia na: <MathJax inline>{"\\((a+b)^2,\\ (a-b)^2,\\ (a^2-b^2\\)"}</MathJax></li>
                      <li>dodaje, odejmuje i mnoży wielomiany jednej i wielu zmiennych</li>
                      <li>wyłącza poza nawias jednomian z sumy algebraicznej</li>
                      <li>rozkłada wielomiany na czynniki</li>
                      <li>mnoży i dzieli wyrażenia wymierne</li>
                      <li>dodaje i odejmuje wyrażenia wymierne</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>znajduje pierwiastki całkowite i wymierne wielomianu o współczynnikach
                          całkowitych</li>
                      <li>dzieli wielomian jednej zmiennej <MathJax inline>{"\\(𝑊(𝑥)\\)"} przez dwumian postaci {"\\(𝑥 − 𝑎\\)"}</MathJax></li>
                      <li>korzysta ze wzorów na: <MathJax inline>{"\\((a+b)^3\\,\\ (a-b)^3,\\ a^3+b^3,\\ a^3-b^3\\)"}</MathJax></li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Równania i nierówności</h2>
                  <ul className={contentList}>
                      <li>przekształca równania i nierówności w sposób równoważny</li>
                      <li>interpretuje równania i nierówności sprzeczne oraz tożsamościowe</li>
                      <li>rozwiązuje nierówności liniowe z jedną niewiadomą</li>
                      <li>rozwiązuje równania i nierówności kwadratowe</li>
                      <li>rozwiązuje równania wielomianowe postaci <MathJax inline>{"\\(W(x)=0\\)"}</MathJax> dla wielomianów doprowadzonych do postaci iloczynowej</li>
                      <li>rozwiązuje równania wymierne postaci <MathJax inline>{"\\(\\frac{V(x)}{W(x)}=0\\)"}</MathJax>, gdzie wielomiany <MathJax inline>{"\\(V(x)\\)"}</MathJax> i <MathJax inline>{"\\(W(x)\\)"}</MathJax> są zapisane w postaci iloczynowej</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>rozwiązuje nierówności wielomianowe typu: <MathJax inline>{"\\(W(x)>0,\\ W(x)\\geq0.\\ W(x)\\&lt0,\\ W(x)\\leq0\\)"}</MathJax></li>
                      <li>rozwiązuje równania i nierówności wymierne nie trudniejsze niż <MathJax inline>{"\\(\\frac{x + 1}{x(x - 1)}+\\frac{1}{x + 1}\\geq\\frac{2x}{(x - 1)(x + 1)}\\)"}</MathJax></li>
                      <li>stosuje wzory Viète’a dla równań kwadratowych</li>
                      <li>rozwiązuje równania i nierówności z wartością bezwzględną</li>
                      <li>analizuje równania i nierówności liniowe z parametrami oraz równania i nierówności kwadratowe z parametrami</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Układy równań</h2>
                  <ul className={contentList}>
                      <li>rozwiązuje układy równań liniowych z dwiema niewiadomymi</li>
                      <li>stosuje układy równań do rozwiązywania zadań tekstowych</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>rozwiązuje metodą podstawiania układy równań, z których jedno jest liniowe, a drugie kwadratowe</li>
                      <li>rozwiązuje układy równań kwadratowych</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Funkcje</h2>
                  <ul className={contentList}>
                      <li>określa funkcje za pomocą opisu słownego, tabeli, wykresu, wzoru</li>
                      <li>oblicza wartość funkcji zadanej wzorem</li>
                      <li>odczytuje i interpretuje wartości funkcji</li>
                      <li>interpretuje wykres funkcji</li>
                      <li>interpretuje współczynniki występujące we wzorze funkcji liniowej</li>
                      <li>wyznacza wzór funkcji liniowej na podstawie informacji o jej wykresie</li>
                      <li>szkicuje wykres funkcji kwadratowej zadanej wzorem</li>
                      <li>interpretuje współczynniki występujące we wzorze funkcji kwadratowej</li>
                      <li>wyznacza wzór funkcji kwadratowej</li>
                      <li>wyznacza największą i najmniejszą wartość funkcji kwadratowej w przedziale domkniętym</li>
                      <li>wykorzystuje własności funkcji liniowej i kwadratowej do interpretacji zagadnień geometrycznych</li>
                      <li>na podstawie wykresu funkcji <MathJax inline>{"\\(y=f(x)\\)"}</MathJax> szkicuje wykresy funkcji <MathJax inline>{"\\(y=f(x-a),\\ y=f(x)+b,\\ y=-f(x),\\ y=f(-x)\\)"}</MathJax></li>
                      <li>posługuje się funkcjami wykładniczą i logarytmiczną</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>na podstawie wykresu funkcji <MathJax inline>{"\\(y=f(x)\\)"}</MathJax> szkicuje wykresy funkcji <MathJax inline>{"\\(y=|f(x)|\\)"}</MathJax></li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Ciągi</h2>
                  <ul className={contentList}>
                      <li>oblicza wyrazy ciągu określonego wzorem ogólnym</li>
                      <li>bada, czy ciąg jest rosnący, czy malejący</li>
                      <li>sprawdza, czy dany ciąg jest arytmetyczny lub geometryczny</li>
                      <li>stosuje wzór na <MathJax inline>{"\\(n\\)"}</MathJax>-ty wyraz i na sumę <MathJax inline>{"\\(n\\)"}</MathJax> początkowych wyrazów ciągu arytmetycznego</li>
                      < li > stosuje wzór na <MathJax inline>{"\\(n\\)"}</MathJax>-ty wyraz i na sumę <MathJax inline>{"\\(n\\)"}</MathJax> początkowych wyrazów ciągu geometrycznego</li>
                      <li>wykorzystuje własności ciągów do rozwiązywania zadań</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>oblicza granice ciągów</li>
                      <li>rozpoznaje zbieżne szeregi geometryczne i oblicza ich sumę</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Trygonometria</h2>
                  <ul className={contentList}>
                      <li>Wykorzystuje definicje funkcji: sinus, cosinus i tangens dla kątów od <MathJax inline>{"\\(0^\\circ\\)"}</MathJax> do <MathJax inline>{"\\(180^\\circ\\)"}</MathJax>, w szczególności wyznacza wartości funkcji trygonometrycznych dla kątów <MathJax inline>{"\\(30^\\circ,\\  45^\\circ,\\  60^\\circ\\)"}</MathJax></li>
                      <li>korzysta z wzorów <MathJax inline>{"\\(sin^2\\alpha+cos^2\\alpha=1,\\ tg\\alpha=\\frac{\\sin\\alpha}{cos\\alpha}\\)"}</MathJax></li>
                      <li>stosuje twierdzenie cosinusów oraz wzór na pole trójkąta <MathJax inline>{"\\(P=\\frac{1}{2}\\cdot a\\cdot b\\cdot sin\\gamma\\)"}</MathJax></li>
                      <li>oblicza kąty trójkąta i długości jego boków przy odpowiednich danych</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>stosuje miarę łukową, zamienia miarę łukową kąta na stopniową i odwrotnie</li>
                      <li>posługuje się wykresami funkcji trygonometrycznych: sinus, cosinus, tangens</li>
                      <li>wykorzystuje okresowość funkcji trygonometrycznych</li>
                      <li>stosuje wzory redukcyjne dla funkcji trygonometrycznych</li>
                      <li>korzysta z wzorów na sinus, cosinus i tangens sumy i różnicy kątów, a także na funkcje trygonometryczne kątów podwojonych</li>
                      <li>rozwiązuje równania trygonometryczne</li>
                      <li>stosuje twierdzenie sinusów</li>
                      <li>oblicza kąty trójkąta i długości jego boków przy odpowiednich danych</li>
                  </ul>
              </div>

              <div className={dzial}>
                  <h2>Planimetria</h2>
                  <ul className={contentList}>
                      <li>wyznacza promienie i średnice okręgów, długości cięciw okręgów oraz odcinków stycznych</li>
                      <li>rozpoznaje trójkąty</li>
                      <li>rozpoznaje wielokąty foremne i korzysta z ich podstawowych własności</li>
                      <li>korzysta z własności kątów i przekątnych w czworokątach</li>
                      <li>stosuje własności kątów wpisanych i środkowych</li>
                      <li>stosuje wzory na pole wycinka koła i długość łuku okręgu</li>
                      <li>stosuje twierdzenia: Talesa, o dwusiecznej kąta oraz o kącie między styczną a cięciwą</li>
                      <li>korzysta z cech podobieństwa trójkątów</li>
                      <li>wykorzystuje zależności między obwodami oraz między polami figur podobnych</li>
                      <li>wskazuje podstawowe punkty szczególne w trójkącie oraz korzysta z ich własności</li>
                      <li>stosuje funkcje trygonometryczne do wyznaczania długości odcinków w figurach płaskich oraz obliczania pól figur</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>stosuje własności czworokątów wpisanych w okrąg i opisanych na okręgu</li>
                      <li>stosuje twierdzenie odwrotne do twierdzenia Talesa</li>
                      <li>przeprowadza dowody geometryczne</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Geometria analityczna na płaszczyźnie kartezjańskiej</h2>
                  <ul className={contentList}>
                      <li>rozpoznaje wzajemne położenie prostych na płaszczyźnie</li>
                      <li>posługuje się równaniem prostej na płaszczyźnie w postaci kierunkowej</li>
                      <li>oblicza odległość dwóch punktów w układzie współrzędnych</li>
                      <li>posługuje się równaniem okręgu</li>
                      <li>oblicza odległość punktu od prostej</li>
                      <li>wyznacza obrazy okręgów i wielokątów w symetriach osiowych i środkowej</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>posługuje się równaniem prostej w postaci ogólnej</li>
                      <li>zna pojęcie wektora i oblicza jego współrzędne oraz długość</li>
                      <li>znajduje punkty wspólne prostej i okręgu oraz prostej i paraboli</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Stereometria</h2>
                  <ul className={contentList}>
                      <li>rozpoznaje wzajemne położenie prostych w przestrzeni</li>
                      <li>posługuje się pojęciem kąta między prostą a płaszczyzną</li>
                      <li>rozpoznaje w graniastosłupach i ostrosłupach kąty między odcinkami</li>
                      <li>oblicza objętości i pola powierzchni graniastosłupów i ostrosłupów</li>
                      <li>wykorzystuje zależność między objętościami graniastosłupów oraz ostrosłupów podobnych</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>zna i stosuje twierdzenie o prostej prostopadłej do płaszczyzny i o trzech prostopadłych</li>
                      <li>posługuje się pojęciem kąta dwuściennego między półpłaszczyznami  </li>
                      <li>rozpoznaje w graniastosłupach i ostrosłupach kąty między ścianami</li>
                      <li>określa, jaką figurą jest dany przekrój prostopadłościanu płaszczyzną</li>
                      <li>wyznacza przekroje sześcianu i ostrosłupów prawidłowych oraz oblicza ich pola</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Kombinatoryka</h2>
                  <ul className={contentList}>
                      <li>zlicza obiekty w prostych sytuacjach kombinatorycznych</li>
                      <li>zlicza obiekty, stosując reguły mnożenia i dodawania</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>oblicza liczbę możliwych sytuacji, spełniających określone kryteria</li>
                      <li>stosuje współczynnik dwumianowy (symbol Newtona) przy rozwiązywaniu problemów kombinatorycznych</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Rachunek prawdopodobieństwa i statystyka</h2>
                  <ul className={contentList}>
                      <li>oblicza prawdopodobieństwo w modelu klasycznym</li>
                      <li>oblicza średnią arytmetyczną i średnią ważoną, znajduje medianę i dominantę</li>
                      <li>oblicza odchylenie standardowe zestawu danych</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>oblicza prawdopodobieństwo warunkowe, stosuje twierdzenie o prawdopodobieństwie całkowitym</li>
                      <li>stosuje schemat Bernoullego</li>
                  </ul>
              </div>
              <div className={dzial}>
                  <h2>Optymalizacja i rachunek różniczkowy</h2>
                  <ul className={contentList}>
                      <li>rozwiązuje zadania optymalizacyjne w sytuacjach dających się opisać funkcją kwadratową</li>
                  </ul>
                  <h4>poziom rozszerzony</h4>
                  <ul className={contentList}>
                      <li>oblicza granice funkcji (w tym jednostronne)</li>
                      <li>stosuje definicję pochodnej funkcji, podaje interpretację geometryczną pochodnej</li>
                      <li>oblicza pochodną funkcji potęgowej o wykładniku rzeczywistym</li>
                      <li>stosuje pochodną do badania monotoniczności funkcji</li>
                      <li>rozwiązuje zadania optymalizacyjne z zastosowaniem pochodnej</li>
                  </ul>
              </div>
          </div>
          <Link to="/matura">Powrót</Link>
          <footer>Źródło <a href="https://bip.cke.gov.pl/artykul/211/1659/egzamin-maturalny-w-formule-2023">CKE</a></footer>

</div>
  )
}


export default Wymagania