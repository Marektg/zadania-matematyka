import { nanoid } from "@reduxjs/toolkit"

const zestawy = [
    {
        "id": `${nanoid()}`,
        "tytul": "Próbny Egzamin Maturalny z Matematyki",
        "poziom": "poziom podstawowy",
        "data": "26 lutego 2022",
        "zadania": [
            {

                "id": `${nanoid()}`,
                "tresc": "Andrzej połowę kwoty otrzymanej od taty przeznaczył na nową kurtkę, a \\(20\\%\\) tego, co mu pozostało przeznaczył na bilet do kina. Ile procent kwoty otrzymanej od taty pozostało Andrzejowi?",
                "canvas": [],
                "podpunkty": ["\\(30\\%\\)", "\\(80\\%\\)", "\\(40\\%\\)", "\\(20\\%\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",


            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(-4\\)", "\\(\\frac{1}{4}\\)", "\\(4\\)", "\\(-\\frac{1}{4}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 2 (1 pkt)",

                "tresc": "Liczba \\(log_{3\\sqrt{2}}\\frac{1}{36}-2log_{3\\sqrt{2}}3\\) jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(48\\)", "\\(44\\)", "\\(46\\)", "\\(43\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 3 (1 pkt)",

                "tresc": "Rozważamy przedziały liczbowe \\((-\\infty, -log2022>\\) i \\(<\\sqrt{2022}, +\\infty)\\). Ile jest wszystkich liczb całkowitych, które nie należą do żadnego z tych przedziałów?"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(4\\)", "\\(4^2\\)", "\\(2^3\\)", "\\(2\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 4 (1 pkt)",

                "tresc": "Liczba \\(\\sqrt[3]{\\sqrt{(8^{\\frac{5}{3}}\\cdot 4^{\\frac{7}{2}})}}\\) jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(6\\)", "\\(9\\)", "\\(2\\)", "\\(3\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 5 (1 pkt)",

                "tresc": "W rozwinięciu dziesiętnym ułamka \\(\\frac{3}{13}\\) na trzydziestym miejscu po przecinku stoi cyfra"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\((-\\infty,1>\\)", "\\(<1,+\\infty)\\)", "\\(-\\infty,7>\\)", "\\(<7,+\\infty)\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 6 (1 pkt)",

                "tresc": "Zbiorem wszystkich rozwiązań nierówności \\(5-\\frac{2-6x}{4}\\leq 2x+1\\) jest przedział"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z120227", "width": "400", "height": "240" }],
                "podpunkty": ["Liczba \\(f(1)+g(1)\\) jest równa \\(2\\)", "Zbiory wartości funkcji \\(f\\) i \\(g\\) są równe.", "Funkcje \\(f\\) i \\(g\\) mają takie same miejsca zerowe.", "Punkt \\(P = (−1 ,0)\\) należy do wykresów funkcji \\(f\\) i \\(g\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "trescpocanvie": "Funkcja \\(g\\) jest określona wzorem \\(g(x)=f(x-1)\\) dla \\(x\\in<-5,6>\\).Wskaż zdanie prawdziwe.",
                "ramkapo": null,
                "numer": "Zadanie 7 (1 pkt)",
                "koniec": [],

                "tresc": "Na poniższym rysunku przedstawiono wykres funkcji \\(f\\) określonej w zbiorze \\(⟨− 6,5⟩\\)"

            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["jedno rozwiązanie", "dwa rozwiązania", "trzy rozwiązania", "cztery rozwiązania"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 8 (1 pkt)",

                "tresc": "Równanie \\(\\frac{x^3+9x^2}{81-x^2}=0\\) ma w zbiorze liczb rzeczywistych dokładnie",
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(m<-\\frac{2}{\\sqrt{2}}\\)", "\\(m<\\sqrt{2}-1\\)", "\\(m>-\\sqrt{2}\\)", "\\(m>-\\frac{\\sqrt{2}}{2}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 9 (1 pkt)",

                "tresc": "Funkcja \\(f\\) jest określona dla każdej liczby rzeczywistej \\(x\\) wzorem \\(f(x)=m\\sqrt{2}(x-1)+2x\\). Ta funkcja jest rosnąca dla każdej liczby \\(m\\) spełniającej warunek",
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(-\\frac{2}{3}\\)", "\\(\\frac{3}{2}\\)", "\\(4\\)", "\\(\\frac{1}{2}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 10 (1 pkt)",

                "tresc": "Funkcja kwadratowa \\(f\\) jest określona wzorem \\(f(x) = − 2(x + a)(x − 2a )\\). Wierzchołek paraboli, która jest wykresem funkcji \\(f\\) , ma współrzędną \\(y\\) równą \\(2\\). Zatem liczba \\(a\\) może być równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(\\frac{10}{17}\\)", "\\(− 2\\)", "\\(1,7\\)", "\\(1\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 11 (1 pkt)",

                "tresc": "Punkt \\(P\\) jest punktem wspólnym wykresu funkcji \\(y = 2,89^{−x}\\) i prostej \\(2x + 1 = 0\\). Odległość punktu \\(P\\) od osi \\(Ox\\) układu współrzędnych jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(-\\frac{1}{4}\\)", "\\(4\\)", "\\(1\\)", "\\(\\frac{1}{4}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 12 (1 pkt)",

                "tresc": "Wartość wyrażenia \\((sin150^{\\circ}+\\frac{cos120^{\\circ}}{sin30^{\\circ}})^{-2}\\) jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\((a_n)\\)", "\\((b_n )\\)", "\\((c_n)\\)", "\\((d_n)\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 13 (1 pkt)",

                "tresc": "Dane są ciągi \\((a_n), (b_n), (c_n), (d_n )\\), określone dla każdej liczby naturalnej \\(n ≥ 1\\)  wzorami: \\(a_n = (−n )^3 + n\\), \\(b_n = 216^{\\frac{1}{n}}\\), \\(c_n=|n − n^3|\\), \\(d_n =\\frac{n^2−9}{3n+9n^2}\\). Dodatnia liczba całkowita dwucyfrowa jest trzecim wyrazem ciągu"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(S = (− 5,12)\\)","\\(S = (5,12) \\)","\\(S = (− 5,− 12)\\)","\\(S = (5,− 12)\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 14 (1 pkt)",

                "tresc": "Dany jest odcinek \\(AB\\), gdzie \\(A = (7,9)\\), \\(B(3,15 )\\). Punkt \\(S\\) jest środkiem odcinka \\(AB\\). Obrazem punktu \\(S\\) w symetrii względem osi \\(Oy\\) jest punkt"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(28\\)","\\(29\\)","\\(33\\)","\\(40\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 15 (1 pkt)",

                "tresc": "Ciąg arytmetyczny \\((an)\\) jest określony dla każdej liczby naturalnej \\(n \\geq 1\\). Trzeci i piąty wyraz ciągu spełniają warunek \\(a_3 + a_5 = 56\\). Wtedy czwarty wyraz tego ciągu jest równy"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(x = 9\\)", "\\(x = − 3\\)", "\\(x = − 1 ,2\\)","\\(x = 2,4\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 16 (1 pkt)",

                "tresc": "Trójwyrazowy ciąg \\((x,− 6,1 5)\\) jest ciągiem geometrycznym. Wtedy"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(\\frac{4}{3}\\)", "\\(8\\)", "\\(4\\)","\\(12\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 17 (1 pkt)",

                "tresc": "Pole pewnego sześciokąta foremnego jest równe  \\(\\frac{8\\sqrt{3}}{3}\\). Obwód tego sześciokąta jest równy"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z1202218", "width": "400", "height": "300" }],
                "podpunkty": ["\\(25^{\\circ}\\)", "\\(40^{\\circ}\\)", "\\(45^{\\circ}\\)","\\(50^{\\circ}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "trescpocanvie": "Miara kąta \\(ABC\\) jest równa",
                "ramkapo": null,
                "numer": "Zadanie 18 (1 pkt)",
                "koniec": [],

                "tresc": "Dane są okrąg i prosta styczna do tego okręgu w punkcie \\(A\\). Punkty \\(B\\) i \\(C\\)  są położone na okręgu tak, że \\(BC\\) jest jego średnicą. Cięciwa \\(AB\\) tworzy ze styczną kąt o mierze \\(50^{\\circ}\\) (zobacz rysunek)."
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z1202219", "width": "550", "height": "400" }],
                "podpunkty": ["\\(20^{\\circ}\\)", "\\(30^{\\circ}\\)", "\\(40^{\\circ}\\)","\\(50^{\\circ}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "trescpocanvie": "Miara kąta \\(BAC\\) jest równa",
                "ramkapo": null,
                "numer": "Zadanie 19 (1 pkt)",

                "tresc": "Punkty \\(D\\) , \\(E\\) i \\(F\\) są punktami styczności okręgu wpisanego w trójkąt \\(ABC\\) z jego bokami i \\(|∡EDF | = 70^{\\circ}\\) (zobacz rysunek)."
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(122\\)", "\\(106\\)", "\\(94\\)","\\(112\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 20 (1 pkt)",

                "tresc": "Jeśli \\(a− b = 10\\) oraz \\(ab = 6\\) , to \\(a^2 + b^2\\) jest równe"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\((− 17,− 3)\\)", "\\((15,28)\\)", "\\((− 9,7)\\)","\\((8,21)\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 21 (1 pkt)",

                "tresc": "Punkty \\(A = (− 12,2)\\), \\(B = (1,15)\\) i \\(C\\) leżą na jednej prostej. Punkt \\(C\\) może mieć współrzędne"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["dziewięciokąt","jedenastokąt","dziesięciokąt","piętnastokąt"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 22 (1 pkt)",

                "tresc": "W każdym \\(n\\)–kącie wypukłym \\((n ≥ 3)\\) liczba przekątnych jest równa \\(\\frac{n(n−-3)}{2}\\). Wielokątem wypukłym, w którym liczba przekątnych jest o \\(33\\) większa od liczby boków, jest"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(\\frac{7}{4}\\)", "\\((-\\frac{7}{4})\\)", "\\((-\\frac{4}{7})\\)","\\(\\frac{4}{7}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 23 (1 pkt)",

                "tresc": "Prosta \\(k\\) ma równanie \\(x = −\\frac{4}{7}y + 24\\). Współczynnik kierunkowy prostej prostopadłej do prostej \\(k\\) jest równy"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(6\\)", "\\(6\\sqrt{2}\\)", "\\(12\\)","\\(3\\sqrt{2}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 24 (1 pkt)",

                "tresc": "Okrąg o środku \\(S = (− 6,− 5)\\) jest styczny do osi \\(Oy\\) układu współrzędnych w punkcie \\(A\\) oraz jest styczny do prostej \\(y = 1\\) w punkcie \\(B\\). Promień okręgu o średnicy \\(AB\\) jest równy"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(24\\sqrt{6}\\)", "\\(36\\sqrt{2}\\)", "\\(6\\sqrt{3}\\)","\\(12\\sqrt{6}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 25 (1 pkt)",

                "tresc": "Przekątna graniastosłupa prawidłowego czworokątnego, w którym wysokość jest \\(2\\) razy dłuższa od krawędzi podstawy, jest równa \\(6\\). Wynika stąd, że objętość tego graniastosłupa jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(3,125\\)", "\\(\\frac{1}{8}\\)", "\\(1,125\\)","\\(\\frac{7}{8}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": "z1202226",
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 26 (1 pkt)",
              

                "tresc": "W tabeli podano dane dotyczące wyników z pracy klasowej z matematyki uzyskanych w pewnej klasie.Różnica średniej arytmetycznej ocen i mediany wynosi"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(216\\)", "\\(219\\)", "\\(221\\)","\\(246\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 27 (1 pkt)",

                "tresc": "Ile jest liczb naturalnych trzycyfrowych większych od \\(694\\), które mają trzy różne cyfry?"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(0,6\\)", "\\(\\frac{5}{12}\\)", "\\(\\frac{5}{7}\\)","\\(0,4\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 28 (1 pkt)",

                "tresc": "W pudełku znajdują się płytki z literami. Na każdej płytce jest wydrukowana jedna litera – spółgłoskowa albo samogłoskowa. Płytek z literami spółgłoskowymi jest o \\(40%\\) więcej niż płytek z literami samogłoskowymi. Losujemy jedną płytkę. Prawdopodobieństwo wylosowania płytki z literą samogłoskową jest równe"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 29 (2 pkt)",

                "tresc": "Rozwiąż nierówność: \\(2(x+2)^3(x-3)<(x^2-4)(x+2)^2\\). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 30 (2 pkt)",

                "tresc": "Rozwiąż równanie \\(\\frac{x+-12}{x−5} = 3x\\). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 31 (2 pkt)",

                "tresc": "Funkcja liniowa \\(f\\) przyjmuje wartość \\(2\\) dla argumentu \\(− 1\\), a ponadto \\(f (−2 )− f (7) = 3\\). Wyznacz wzór funkcji \\(f\\). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 32 (2 pkt)",

                "tresc": "Wykaż, że jeżeli \\(a\\) jest parzystą liczbą całkowitą dodatnią, to liczba \\(\\frac{a^2}{4} + a\\) nie jest kwadratem liczby całkowitej. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z1202233", "width": "500", "height": "400" }],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "trescpocanvie": "Oblicz pole trójkąta \\(ABS\\) jeżeli pole trójkąta \\(DSE\\) równe \\(36\\).",
                "ramkapo": null,
                "numer": "Zadanie 33 (2 pkt)",

                "tresc": "Na bokach \\(AC\\) i \\(BC\\) trójkąta \\(ABC\\) wybrano odpowiednio punkty \\(E\\) i \\(D\\) w ten sposób, że \\(|AE | : |EC | = |DB | : |DC | = 1 : 3\\). Punkt \\(S\\) jest punktem wspólnym odcinków \\(AD\\) i \\(BE\\) (zobacz rysunek). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 34 (2 pkt)",

                "tresc": "Ze zbioru wszystkich liczb naturalnych dwucyfrowych, których cyfra dziesiątek należy do zbioru \\({1 ,3,4,5,6,7,8}\\), a cyfra jedności należy do zbioru \\({0,1,2,3,4 }\\), losujemy jedną liczbę. Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wylosujemy liczbę dwucyfrową, która jest podzielna przez \\(8\\). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 35 (5 pkt)",

                "tresc": "Punkty \\(B = (− 8,26 )\\), \\(C = (6,24)\\) i \\(D = (− 16 ,2)\\) są wierzchołkami trapezu równoramiennego \\(ABCD\\) o podstawach \\(AB\\) i \\(CD\\). Wyznacz współrzędne wierzchołka \\(A\\) tego trapezu jeżeli wiadomo, że \\(|AD | = |AB | = |BC |\\). "
            }
        ],
    },
    {
        "id": `${nanoid()}`,
        "tytul": "Próbny Egzamin Maturalny z Matematyki",
        "poziom": "poziom podstawowy",
        "data": "5 marca 2022",
        "zadania": [
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(\\sqrt{2}-\\sqrt{6}\\)", "\\(2\\)", "\\(\\sqrt{3}+2\\sqrt{6}\\)", "\\(\\sqrt[3]{2}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",

                "tresc": "Wartość wyrażenia \\((\\sqrt{2}-\\sqrt[3]{3})\\cdot (\\sqrt{8}-\\sqrt{6})-(\\sqrt{6}+\\sqrt{2}+\\sqrt[3]{3})\\cdot (\\sqrt{6}-2\\sqrt{2})\\) jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(x=log_2\\sqrt{3}\\)", "\\(x=log_34\\)", "\\(x=log_32\\)", "\\(x=2log_23\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 2 (1 pkt)",

                "tresc": "Funkcja wykładnicza określona wzorem \\(f(x)=(\\sqrt{2})^x\\) przyjmuje wartość \\(3\\) dla argumentu"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(125\\%\\) liczby \\(x\\)", "\\(75\\%\\) liczby \\(x\\)", "\\(25\\%\\) liczby \\(x\\)", "\\(80\\%\\) liczby \\(x\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 3 (1 pkt)",

                "tresc": "Liczba \\(x\\) stanowi \\(125\\%\\) liczby dodatniej \\(y\\). Wynika stąd, że liczba \\(y\\) to "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(6\\)", "\\(3\\)", "\\(4\\)", "\\(5\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 4 (1 pkt)",

                "tresc": "Suma \\(3log\\sqrt[3]{100}+ log100^2\\) jest równa"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(4^{\\frac{1}{2}}\\cdot 3^{-2}\\cdot 7\\)", "\\(3^{\\frac{1}{2}}\\cdot 4^{\\frac{1}{2}}\\cdot 7\\)", "\\(2^{\\frac{1}{2}}\\cdot 8^{\\frac{1}{2}}\\cdot 7^2\\)", "\\(9^{\\frac{1}{2}}\\cdot 4^{-\\frac{1}{2}}\\cdot 7^2\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 5 (1 pkt)",

                "tresc": "Liczbą niewymierną jest liczba:"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z220226a", "width": "600", "height": "60" }, { "id": "z220226b", "width": "600", "height": "60" }, { "id": "z220226c", "width": "600", "height": "60" }, { "id": "z220226d", "width": "600", "height": "60" }],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 6 (1 pkt)",

                "tresc": "Wskaż rysunek, na którym przedstawiony jest zbiór wszystkich liczb rzeczywistych spełniających jednocześnie nierówności \\(0<7+3x\\) oraz \\(7−3x\\leq 5x−3\\)."
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": ["\\(f(x ) = 2x − 6\\)", "\\(f (x) = 2x\\)", "\\(f(x ) = 2x + 3\\)","\\(f(x) = 2x + 2\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 7 (1 pkt)",

                "tresc": "Gdy przesuniemy wykres funkcji \\(y = f(x )\\) o \\(2\\) jednostki w lewo i o \\(3\\) jednostki w dół, to otrzymamy wykres funkcji \\(y = 2x + 1\\). Zatem"
            },
            {

                "id": `${nanoid()}`,
                "canvas": [{ "id": "z220228", "width": "400", "height": "400" }],
                "podpunkty": ["\\(x = \\frac{1}{2}\\)", "\\(x =\\frac{4}{7}\\)", "\\(x =\\frac{2}{3}\\)","\\(x =\\frac{5}{8}\\)"],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 8 (1 pkt)",
                "trescpocanvie": "Jeżeli \\(P = (x,y)\\) jest punktem wspólnym prostych, których fragmenty przedstawiono na rysunku, to ",
                "koniec": [],
                "tresc": "Na rysunku przedstawiono fragmenty dwóch prostych na płaszczyźnie oraz zaznaczono kilka punktów o współrzędnych całkowitych, przez które przechodzą te proste."
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 9 (1 pkt)",

                "tresc": "Na rysunku przedstawiono wykres funkcji f określonej w zbiorze − 3,9). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\">PIC\" class=\"graphics\" width=\"320\" height=\"167\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wskaż zdanie prawdziwe. <br class=\"newline\"> A) Zbiorem wartości funkcji f jest przedział ⟨− 3,3) </span><br class=\"newline\"> B) Funkcje y = f(x) i y = f(x) + 1 mają tyle samo miejsc zerowych </span><br class=\"newline\"> C) Funkcja f osiąga wartość równą 2 w trzech punktach. </span><br class=\"newline\"> D) Wartość funkcji f dla argumentu x = − 1 jest liczbą dodatnią. </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 10 (1 pkt)",

                "tresc": "Zdanie „kwadrat różnicy dwóch kolejnych liczb naturalnych nieparzystych jest niemniejszy niż 5” można zapisać w postaci nierówności: <br class=\"newline\"> A)  2 [(n + 3) − (n + 2)] ≥ 5 </span>  B)  2 2 (2n + 3 ) − (2n + 1) ≥ 5 </span><br>  C) 2n + 3)2 − (2n + 1 )2 > 5 </span>  D) 2n + 3) − (2n + 1 )]2 ≥ 5 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 11 (1 pkt)",

                "tresc": "Funkcja f jest określona wzorem f(x ) = −x 2 + 4x dla każdej liczby rzeczywistej x. Zbiorem wartości funkcji f jest przedział <br class=\"newline\"> A) − ∞ ,− 2⟩ </span>  B) ⟨2,+ ∞ ) </span>  C) ⟨− 4,+ ∞ ) </span>  D) − ∞ ,4⟩ </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 12 (1 pkt)",

                "tresc": "Funkcja kwadratowa f określona wzorem  1 f(x) = 2(x− 1)(x + 3) jest rosnąca w przedziale <br class=\"newline\"> A) ⟨− 1,+ ∞ ) </span>  B) − ∞ ,− 1⟩ </span>  C) − ∞ ,− 2⟩ </span>  D) ⟨− 2,+ ∞ ) </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 13 (1 pkt)",

                "tresc": "Liczba rozwiązań równania x2+-3x+2- x+2 = 0 jest równa <br class=\"newline\"> A) 0 </span>  B) 1 </span>  C) 2 </span>  D) 3 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 14 (1 pkt)",

                "tresc": "Suma wszystkich trzycyfrowych liczb parzystych jest równa <br class=\"newline\"> A) 100+12000⋅ 449 </span>  B) 200+2998 ⋅450 </span>  C) 100+998⋅ 449 2 </span>  D) 100+-998-⋅450 2 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 15 (1 pkt)",

                "tresc": "Ciąg geometryczny an), określony dla każdej liczby naturalnej n ≥ 1, jest rosnący i wszystkie jego wyrazy są dodatnie. Ponadto spełniony jest warunek a5 = a1 ⋅a2 . Niech q oznacza iloraz ciągu an ). Wtedy <br class=\"newline\"> A) a1 = 1q </span>  B) a1 = q </span>  C)  2 a1 = q </span>  D)  3 a1 = q </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 16 (1 pkt)",

                "tresc": "Wyrażenie cos2α−sin2α sin2α+-cos2α- 1− sin2α ⋅ sin2α+1, gdzie α jest kątem ostrym, jest równe<br class=\"newline\"> A) sin 22α </span>  B) 1− tg 22α </span>  C) 12-- cos 2α </span>  D) cos22α − sin2 2α </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 17 (1 pkt)",

                "tresc": "Dany jest ciąg geometryczny an) o wszystkich wyrazach niezerowych i pierwszym wyrazie a = 6 1. Jeżeli 3a + 4a = 0 3 4, to wzorem ogólnym ciągu a ) n jest <br class=\"newline\"> A)  ( 3)n an = 6⋅ − 4 </span>  B)  (3 )n−1 an = 6 ⋅ 4 </span>  C)  ( ) an = − 8 ⋅ − 3 n 4 </span>  D)  ( 3)n an = 8⋅ 4 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 18 (1 pkt)",

                "tresc": "Bok rombu ma długość równą  √ -- 5 2. Przekątne tego rombu nie mogą mieć długości <br class=\"newline\"> A) 14 i 2 </span>  B) 10 i 10 </span>  C) 8√ 2- i 6√ 2- </span>  D) 6 √ 2- i 4√ 2- </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 19 (1 pkt)",

                "tresc": "Punkty A,B ,C i D leżą na okręgu o środku w punkcie O. Cięciwy DB i AC przecinają się w punkcie E,  ∘ |∡ACB | = 58 oraz  ∘ |∡AEB | = 14 5 (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\">PIC\" class=\"graphics\" width=\"211\" height=\"187\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Miara kąta DAC jest równa <br class=\"newline\"> A) 58∘ </span>  B) 8 7∘ </span>  C) 32∘ </span>  D) 85∘ </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 20 (1 pkt)",

                "tresc": "W trójkącie ABC bok AC ma długość 10, a wysokość CD tego trójkąta dzieli bok AB na odcinki o długościach AD | = 6 i BD | = 24 (zobacz rysunek obok). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\">PIC\" class=\"graphics\" width=\"217\" height=\"94\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Długość boku BC jest równa <br class=\"newline\"> A) √ --- 10 </span>  B)  √ --- 4 35 </span>  C) 8√ 1-0 </span>  D) 16 √ 2- </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 21 (1 pkt)",

                "tresc": "Dany jest odcinek AB, gdzie A = (− 4,1 6) i B = (− 8,10) oraz prosta k o równaniu y = − 3x + b. Jeżeli prosta k przecina odcinek AB w takim punkcie S, że AS | = |SB |, to liczba b jest równa <br class=\"newline\"> A) 31 </span>  B) − 5 </span>  C) 4 </span>  D) − 14 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 22 (1 pkt)",

                "tresc": "Proste o równaniach y = − -1--x− 1 m+ 2 i y = 1 x+ 1 3 są równoległe. Wynika stąd, że <br class=\"newline\"> A)  5 m = 3 </span>  B) m = 1 </span>  C) m = 73 </span>  D) m = − 5 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 23 (1 pkt)",

                "tresc": "Punkt A = (3 ,− 5 ) jest wierzchołkiem sześciokąta foremnego ABCDEF wpisanego w okrąg o środku S = (1,1). Pole tego sześciokąta jest równe <br class=\"newline\"> A)  √ -- 60 3 </span>  B)  √ -- 10 3 </span>  C)  √ -- 27 3 </span>  D)  √ --- 30 1 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 24 (1 pkt)",

                "tresc": "Na rysunku przedstawiono trzy ﬁgury. Figura F1 powstała z koła o promieniu 4r, z którego wycięto wnętrza czterech kół o promieniu r. Figura F2 składa się z dwóch stycznych zewnętrznie kół o promieniach 3r i 2r. Figura F3 powstała z koła o promieniu 4r, z którego wycięto wnętrza dwóch kół o promieniu 2r. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\">PIC\" class=\"graphics\" width=\"573\" height=\"159\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Jeżeli P 1, P2 i P3 oznaczają pola ﬁgur odpowiednio F1, F2 i F3, to <br class=\"newline\"> A) P = P 1 2 i P ⁄= P 1 3 </span>  B) P = P = P 1 2 3 </span><br>  C) P1 = P 3 i P 1 ⁄= P2 </span>  D) P2 > P1 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 25 (1 pkt)",

                "tresc": "Łukasz dodał do siebie liczby krawędzi, wierzchołków oraz ścian pewnego graniastosłupa. Którą z liczb mógł otrzymać w wyniku? <br class=\"newline\"> A) 103 </span>  B) 104 </span>  C) 105 </span>  D) 106 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 26 (1 pkt)",

                "tresc": "Ile jest wszystkich czterocyfrowych liczb naturalnych podzielnych przez 13?<br class=\"newline\"> A) 692 </span>  B) 691 </span>  C) 690 </span>  D) 693 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 27 (1 pkt)",

                "tresc": "W pudełku znajdują się tylko kule białe i kule czerwone. Stosunek liczby kul białych do liczby kul czerwonych jest równy 4:5. Wylosowanie każdej kuli z tego pudełka jest jednakowo prawdopodobne. Losujemy jedną kulę. Niech A oznacza zdarzenie polegające na tym, że wylosowana z pudełka kula będzie biała. Prawdopodobieństwo zdarzenia A jest równe <br class=\"newline\"> A) 1 4 </span>  B) 1 5 </span>  C) 4 9 </span>  D) 5 9 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 28 (1 pkt)",

                "tresc": "Sześciowyrazowy ciąg liczbowy 1,3,x + 3,2x ,7,9) jest niemalejący. Mediana wyrazów tego ciągu jest równa 6. Wynika stąd, że <br class=\"newline\"> A) x = 3,5 </span>  B) x = 83 </span>  C)  10 x = 3 </span>  D) x = 3 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 29 (2 pkt)",

                "tresc": "Rozwiąż równanie:  2 3(2x + 4)(x− 1)+ 5(x− 1) = 4(x + 2)(x − 1 ). "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 30 (2 pkt)",

                "tresc": "W graniastosłupie prawidłowym trójkątnym powierzchnia boczna po rozwinięciu jest kwadratem o polu  2 32 4 cm. Oblicz objętość tej bryły . "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 31 (2 pkt)",

                "tresc": "Wykaż, że dla dowolnej liczby całkowitej k prawdziwa jest nierówność 1 6k2 + 16k+ 3 > 0. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 32 (2 pkt)",

                "tresc": "Rozwiąż równanie </p> <div class=\"math-display\"> 5x−--3- 3x-−--1 7x− 1 = 4x + 2. \" class=\"math-display\"></div> <p class=\"nopar\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 33 (2 pkt)",

                "tresc": "Na bokach AB i AD rombu ABCD wybrano odpowiednio punkty E i F tak, że AE | = |AF |. Pole pięciokąta BCDF E jest 17 razy większe niż pole trójkąta AEF. Punkt G jest punktem wspólnym odcinka EF i przekątnej AC. Oblicz Oblicz AG| |AC|. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\">PIC\" class=\"graphics\" width=\"199\" height=\"139\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 34 (2 pkt)",

                "tresc": "Punkty A = (2,− 4), B = (2,4) i C = (− 5,− 4) są wierzchołkami trójkąta ABC. Napisz równanie prostej zawierającej tą średnicę okręgu opisanego na trójkącie ABC, której końcem jest punkt A. </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 35 (5 pkt)",

                "tresc": "Dany jest ciąg an ) określony wzorem an = 66−-8n 9 dla każdej liczby naturalnej n ≥ 1. Trójwyrazowy ciąg  2 (a15,1− x ,a9), gdzie x jest dodatnią liczbą rzeczywistą, jest geometryczny. Oblicz x oraz iloraz tego ciągu geometrycznego. "
            }
        ]
    },
    {
        "id": `${nanoid()}`,
        "tytul": "Próbny Egzamin Maturalny z Matematyki",
        "poziom": "poziom podstawowy",
        "data": "13 marca 2021",
        "zadania": [
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",

                "tresc": "Wyrażenie <img src=\"https://img.zadania.info/zes/0070465/HzesT0x.gif\" alt=\" ( ) ( ) 30 W = 34 40 43 jest równe<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT1x.gif\" alt=\"( )10 34 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT2x.gif\" alt=\"( )70 34 </span>  C) 1 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT3x.gif\" alt=\"(3 )1200 4 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 2 (1 pkt)",

                "tresc": "Liczbę <img src=\"https://img.zadania.info/zes/0070465/HzesT4x.gif\" alt=\"∘ ---- 3√- 11 √-432 można zapisać w postaci <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT5x.gif\" alt=\"614 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT6x.gif\" alt=\" 1 2 6 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT7x.gif\" alt=\"√16- 2 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT8x.gif\" alt=\"√6--- 32 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 3 (1 pkt)",

                "tresc": "Rozwiązaniem równania <img src=\"https://img.zadania.info/zes/0070465/HzesT9x.gif\" alt=\"-x−3- 5 2x+ 6 = − 2 jest liczba<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT10x.gif\" alt=\"− 2 </span>  B) 2 </span>  C) 4 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT11x.gif\" alt=\"− 4 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 4 (1 pkt)",

                "tresc": "Cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT12x.gif\" alt=\"x pewnego towaru dwukrotnie obniżono o 50% i otrzymano cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT13x.gif\" alt=\"y. Aby przywrócić cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT14x.gif\" alt=\"x, nową cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT15x.gif\" alt=\"y należy podnieść o <br class=\"newline\"> A) o 100% </span>  B) o 300% </span>  C) o 75% </span>  D) o 200% </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 5 (1 pkt)",

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0070465/HzesT16x.gif\" alt=\" [ ] log log (log√ -4) 4 16 2 jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT17x.gif\" alt=\"− 12 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT18x.gif\" alt=\"12 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT19x.gif\" alt=\"14 </span>  D) 2 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 6 (1 pkt)",

                "tresc": "Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT20x.gif\" alt=\"a− 1a = 2, to liczba <img src=\"https://img.zadania.info/zes/0070465/HzesT21x.gif\" alt=\"a4 + 14 a jest równa <br class=\"newline\"> A) 36 </span>  B) 34 </span>  C) 6 </span>  D) 16 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 7 (1 pkt)",

                "tresc": "Na rysunkach przedstawione są wykresy funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT22x.gif\" alt=\"f i <img src=\"https://img.zadania.info/zes/0070465/HzesT23x.gif\" alt=\"g. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT24x.gif\" alt=\"PIC\" class=\"graphics\" width=\"482\" height=\"166\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wykres funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT25x.gif\" alt=\"f przekształcono i otrzymano wykres funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT26x.gif\" alt=\"g, zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT27x.gif\" alt=\"g(x ) = f(x − 2) + 3 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT28x.gif\" alt=\"g(x ) = f(x + 2) + 3 </span><br>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT29x.gif\" alt=\"g(x) = f(x − 2)− 3 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT30x.gif\" alt=\"g (x) = f(x + 2) − 3 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 8 (1 pkt)",

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0070465/HzesT31x.gif\" alt=\" 2 f (x) = (m + m)x + 7 jest funkcją stałą. Wynika stąd, że<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT32x.gif\" alt=\"m = − 1 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT33x.gif\" alt=\"m = 0 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT34x.gif\" alt=\"m = 1 lub m = 0 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT35x.gif\" alt=\"m = − 1 lub m = 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 9 (1 pkt)",

                "tresc": "Przedział <img src=\"https://img.zadania.info/zes/0070465/HzesT36x.gif\" alt=\"⟨4,+ ∞ ) jest zbiorem rozwiązań nierówności<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT37x.gif\" alt=\"16 − 4x ≥ 0 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT38x.gif\" alt=\"16 + 4x ≥ 0 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT39x.gif\" alt=\"16 − 4x ≤ 0 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT40x.gif\" alt=\"16 + 4x ≤ 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 10 (1 pkt)",

                "tresc": "Równanie <img src=\"https://img.zadania.info/zes/0070465/HzesT41x.gif\" alt=\" 2 x (2 − x ) = (x − 2) w zbiorze liczb rzeczywistych <br class=\"newline\"> A) nie ma rozwiązań </span><br class=\"newline\"> B) ma dokładnie jedno rozwiązanie: <img src=\"https://img.zadania.info/zes/0070465/HzesT42x.gif\" alt=\"x = 2 </span><br class=\"newline\"> C) ma dokładnie jedno rozwiązanie: <img src=\"https://img.zadania.info/zes/0070465/HzesT43x.gif\" alt=\"x = 0 </span><br class=\"newline\"> D) ma dwa różne rozwiązania: <img src=\"https://img.zadania.info/zes/0070465/HzesT44x.gif\" alt=\"x = 1 i <img src=\"https://img.zadania.info/zes/0070465/HzesT45x.gif\" alt=\"x = 2 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 11 (1 pkt)",

                "tresc": "Rozwiązanie <img src=\"https://img.zadania.info/zes/0070465/HzesT46x.gif\" alt=\"(x ,y) układu równań <img src=\"https://img.zadania.info/zes/0070465/HzesT47x.gif\" alt=\"{ y− x = 4 3y+ x = 10 spełnia warunki <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT48x.gif\" alt=\"x > 0 i <img src=\"https://img.zadania.info/zes/0070465/HzesT49x.gif\" alt=\"y > 0 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT50x.gif\" alt=\"x < 0 i <img src=\"https://img.zadania.info/zes/0070465/HzesT51x.gif\" alt=\"y > 0 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT52x.gif\" alt=\"x < 0 i <img src=\"https://img.zadania.info/zes/0070465/HzesT53x.gif\" alt=\"y < 0 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT54x.gif\" alt=\"x > 0 i <img src=\"https://img.zadania.info/zes/0070465/HzesT55x.gif\" alt=\"y < 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 12 (1 pkt)",

                "tresc": "Na rysunku poniżej przedstawiono fragment wykresu funkcji kwadratowej <img src=\"https://img.zadania.info/zes/0070465/HzesT56x.gif\" alt=\"f określonej wzorem <img src=\"https://img.zadania.info/zes/0070465/HzesT57x.gif\" alt=\" 2 f (x) = −x + bx + c. Wierzchołek paraboli będącej wykresem tej funkcji ma współrzędne <img src=\"https://img.zadania.info/zes/0070465/HzesT58x.gif\" alt=\"(1,− 1). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT59x.gif\" alt=\"PIC\" class=\"graphics\" width=\"187\" height=\"167\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Stąd wynika, że: <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT60x.gif\" alt=\"bc = 0 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT61x.gif\" alt=\"bc > 0 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT62x.gif\" alt=\"bc = − 2 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT63x.gif\" alt=\"bc < − 2 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 13 (1 pkt)",

                "tresc": "Prosta <img src=\"https://img.zadania.info/zes/0070465/HzesT64x.gif\" alt=\"l jest równoległa do prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT65x.gif\" alt=\"y = − 1 x+ 2 3. Na prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT66x.gif\" alt=\"l leży punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT67x.gif\" alt=\"P = (3,− 2). Zatem równanie prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT68x.gif\" alt=\"l ma postać <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT69x.gif\" alt=\" 1 y = − 3x− 2 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT70x.gif\" alt=\"y = 3x − 11 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT71x.gif\" alt=\"y = − 13x− 1 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT72x.gif\" alt=\"y = 3x </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 14 (1 pkt)",

                "tresc": "Ciąg <img src=\"https://img.zadania.info/zes/0070465/HzesT73x.gif\" alt=\"(an) spełnia warunek <img src=\"https://img.zadania.info/zes/0070465/HzesT74x.gif\" alt=\"an+2 = 2n 2 dla <img src=\"https://img.zadania.info/zes/0070465/HzesT75x.gif\" alt=\"n ≥ 1. Różnica <img src=\"https://img.zadania.info/zes/0070465/HzesT76x.gif\" alt=\"a7 − a6 jest równa <br class=\"newline\"> A) 26 </span>  B) 20 </span>  C) 36 </span>  D) 18 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 15 (1 pkt)",

                "tresc": "Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT77x.gif\" alt=\"0∘ < α < 90∘ oraz <img src=\"https://img.zadania.info/zes/0070465/HzesT78x.gif\" alt=\" √- sin α = 33-tg α, to<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT79x.gif\" alt=\"cosα = 1 2 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT80x.gif\" alt=\" √- co sα = -3- 3 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT81x.gif\" alt=\" 2 co sα = 3 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT82x.gif\" alt=\" √ -- cosα = 3 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 16 (1 pkt)",

                "tresc": "Mediana danych <img src=\"https://img.zadania.info/zes/0070465/HzesT83x.gif\" alt=\"13 ,1 ,5,a,3,4 jest równa 4. Wówczas <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT84x.gif\" alt=\"a = 6 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT85x.gif\" alt=\"a = 4 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT86x.gif\" alt=\"a = 2 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT87x.gif\" alt=\"a = 3 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 17 (1 pkt)",

                "tresc": "Dany jest ciąg geometryczny <img src=\"https://img.zadania.info/zes/0070465/HzesT88x.gif\" alt=\"(an), określony dla <img src=\"https://img.zadania.info/zes/0070465/HzesT89x.gif\" alt=\"n ≥ 1, o którym wiemy, że: <img src=\"https://img.zadania.info/zes/0070465/HzesT90x.gif\" alt=\"a1 = 3 i <img src=\"https://img.zadania.info/zes/0070465/HzesT91x.gif\" alt=\"a2 = 1 8. Wtedy <img src=\"https://img.zadania.info/zes/0070465/HzesT92x.gif\" alt=\"an = 23328 dla <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT93x.gif\" alt=\"n = 7 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT94x.gif\" alt=\"n = 6 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT95x.gif\" alt=\"n = 5 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT96x.gif\" alt=\"n = 4 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 18 (1 pkt)",

                "tresc": "Prosta przechodząca przez punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT97x.gif\" alt=\"A = (1 ,6) i <img src=\"https://img.zadania.info/zes/0070465/HzesT98x.gif\" alt=\"B = (− 3,− 2) jest określona równaniem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT99x.gif\" alt=\"y = − 2x − 4 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT100x.gif\" alt=\"y = 2x − 8 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT101x.gif\" alt=\"y = − 2x + 8 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT102x.gif\" alt=\"y = 2x + 4 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 19 (1 pkt)",

                "tresc": "Wszystkie wyrazy rosnącego ciągu arytmetycznego <img src=\"https://img.zadania.info/zes/0070465/HzesT103x.gif\" alt=\"(an), gdzie <img src=\"https://img.zadania.info/zes/0070465/HzesT104x.gif\" alt=\"n ≥ 1 są dodatnimi liczbami całkowitymi. Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT105x.gif\" alt=\"a2 + a6 = 8, to suma dziesięciu początkowych wyrazów ciągu <img src=\"https://img.zadania.info/zes/0070465/HzesT106x.gif\" alt=\"(an) jest równa <br class=\"newline\"> A) 45 </span>  B) 66 </span>  C) 55 </span>  D) 48 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 20 (1 pkt)",

                "tresc": "Metalowa płyta ma kształt trójkąta równoramiennego o wysokości 4 dm, którego ramię jest nachylone do podstawy pod kątem <img src=\"https://img.zadania.info/zes/0070465/HzesT107x.gif\" alt=\"α. Powierzchnia płyty jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT108x.gif\" alt=\"t1g6α dm 2 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT109x.gif\" alt=\"s1in6α-dm 2 </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT110x.gif\" alt=\"-2- 2 tgα dm </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT111x.gif\" alt=\"-2-- 2 cosα dm </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 21 (1 pkt)",

                "tresc": "Na okręgu o środku w punkcie <img src=\"https://img.zadania.info/zes/0070465/HzesT112x.gif\" alt=\"O leżą punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT113x.gif\" alt=\"A ,B i <img src=\"https://img.zadania.info/zes/0070465/HzesT114x.gif\" alt=\"C (zobacz rysunek). Kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT115x.gif\" alt=\"ABC ma miarę <img src=\"https://img.zadania.info/zes/0070465/HzesT116x.gif\" alt=\" ∘ 133, a kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT117x.gif\" alt=\"BOC ma miarę <img src=\"https://img.zadania.info/zes/0070465/HzesT118x.gif\" alt=\"6 2∘. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT119x.gif\" alt=\"PIC\" class=\"graphics\" width=\"157\" height=\"152\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT120x.gif\" alt=\"AOB ma miarę <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT121x.gif\" alt=\"28∘ </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT122x.gif\" alt=\"5 9∘ </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT123x.gif\" alt=\"44∘ </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT124x.gif\" alt=\"32∘ </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 22 (1 pkt)",

                "tresc": "Dane są punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT125x.gif\" alt=\"A = (4,1), <img src=\"https://img.zadania.info/zes/0070465/HzesT126x.gif\" alt=\"B = (1 ,3), <img src=\"https://img.zadania.info/zes/0070465/HzesT127x.gif\" alt=\"C = (4,− 1). Pole trójkąta <img src=\"https://img.zadania.info/zes/0070465/HzesT128x.gif\" alt=\"ABC jest równe <br class=\"newline\"> A) 2 </span>  B) 3 </span>  C) 6 </span>  D) 12 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 23 (1 pkt)",

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT129x.gif\" alt=\"B = (19 ,22) i <img src=\"https://img.zadania.info/zes/0070465/HzesT130x.gif\" alt=\"D = (3,1 0) są przeciwległymi wierzchołkami prostokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT131x.gif\" alt=\"ABCD. Promień okręgu opisanego na tym prostokącie jest równy <br class=\"newline\"> A) 20 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT132x.gif\" alt=\" √ -- 12 2 </span>  C) 10 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT133x.gif\" alt=\" √ -- 6 2 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 24 (1 pkt)",

                "tresc": "Pole równoległoboku <img src=\"https://img.zadania.info/zes/0070465/HzesT134x.gif\" alt=\"ABCD jest równe 120. Na bokach <img src=\"https://img.zadania.info/zes/0070465/HzesT135x.gif\" alt=\"AD i <img src=\"https://img.zadania.info/zes/0070465/HzesT136x.gif\" alt=\"BC wybrano – odpowiednio – punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT137x.gif\" alt=\"P i <img src=\"https://img.zadania.info/zes/0070465/HzesT138x.gif\" alt=\"R, takie, że <img src=\"https://img.zadania.info/zes/0070465/HzesT139x.gif\" alt=\"|A|PPD-|| = 13 i <img src=\"https://img.zadania.info/zes/0070465/HzesT140x.gif\" alt=\"||CRRB|| = 23 (zobacz rysunek) </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT141x.gif\" alt=\"PIC\" class=\"graphics\" width=\"332\" height=\"134\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Pole czworokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT142x.gif\" alt=\"PBRD jest równe <br class=\"newline\"> A) 81 </span>  B) 96 </span>  C) 102 </span>  D) 118 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 25 (1 pkt)",

                "tresc": "Pole powierzchni całkowitej sześcianu jest równe <img src=\"https://img.zadania.info/zes/0070465/HzesT143x.gif\" alt=\"9 6 cm 2. Objętość tego sześcianu jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT144x.gif\" alt=\" 3 48 cm </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT145x.gif\" alt=\" 3 6 4 cm </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT146x.gif\" alt=\"192 cm 3 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT147x.gif\" alt=\"576 cm 3 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 26 (1 pkt)",

                "tresc": "Średnia arytmetyczna wszystkich liczb złożonych należących do przedziału <img src=\"https://img.zadania.info/zes/0070465/HzesT148x.gif\" alt=\"⟨3,28) z dokładnością do 0,1 jest równa<br class=\"newline\"> A) 16,9 </span>  B) 17,4 </span>  C) 16,3 </span>  D) 16,7 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 27 (1 pkt)",

                "tresc": "W pudełku znajduje się 5 kartek, na których zapisano liczby: 0, 2, 4, 6, 8. Wyjmujemy z pudełka kolejno trzy kartki i układając je jedna obok drugiej tworzymy liczby trzycyfrowe. Liczb takich możemy utworzyć maksymalnie<br class=\"newline\"> A) 48 </span>  B) 125 </span>  C) 100 </span>  D) 60 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 28 (1 pkt)",

                "tresc": "Rzucamy dwiema kostkami do gry. Jeśli <img src=\"https://img.zadania.info/zes/0070465/HzesT149x.gif\" alt=\"A oznacza zdarzenie „suma wyrzuconych oczek jest równa 10”, a <img src=\"https://img.zadania.info/zes/0070465/HzesT150x.gif\" alt=\"B oznacza zdarzenie „suma wyrzuconych oczek jest równa 8” to<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT151x.gif\" alt=\"P (A) = P(B ) </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT152x.gif\" alt=\"5P(A ) = 3P (B) </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT153x.gif\" alt=\"P (A) > P (B) </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT154x.gif\" alt=\"P (B) = 2P (A ) </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 29 (2 pkt)",

                "tresc": "Rozwiąż nierówność <img src=\"https://img.zadania.info/zes/0070465/HzesT155x.gif\" alt=\"3(x + 2 )(x− 3) ≤ x + 2. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 30 (2 pkt)",

                "tresc": "Rozwiąż równanie <img src=\"https://img.zadania.info/zes/0070465/HzesT156x.gif\" alt=\"(x3 + 64 )(x 2 − 64) = 0. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 31 (2 pkt)",

                "tresc": "Przekątne czworokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT157x.gif\" alt=\"ABCD wpisanego w okrąg przecinają się w punkcie <img src=\"https://img.zadania.info/zes/0070465/HzesT158x.gif\" alt=\"S, a punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT159x.gif\" alt=\"E jest takim punktem przekątnej <img src=\"https://img.zadania.info/zes/0070465/HzesT160x.gif\" alt=\"BD, że <img src=\"https://img.zadania.info/zes/0070465/HzesT161x.gif\" alt=\"|∡DCS | = |∡BCE | (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT162x.gif\" alt=\"PIC\" class=\"graphics\" width=\"199\" height=\"186\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wykaż, że <img src=\"https://img.zadania.info/zes/0070465/HzesT163x.gif\" alt=\" |CD|⋅|CB| |CE | = --|CA|--. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 32 (2 pkt)",

                "tresc": "Rzucamy trzy razy symetryczną sześcienną kostką do gry, która na każdej ściance ma inną liczbę oczek – od jednego oczka do sześciu oczek. Oblicz prawdopodobieństwo zdarzenia <img src=\"https://img.zadania.info/zes/0070465/HzesT164x.gif\" alt=\"A polegającego na tym, że co najmniej jeden raz wypadnie ścianka z dwoma oczkami. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 33 (2 pkt)",

                "tresc": "Wykaż, że jeżeli liczby rzeczywiste <img src=\"https://img.zadania.info/zes/0070465/HzesT165x.gif\" alt=\"a,b,c spełniają warunek <img src=\"https://img.zadania.info/zes/0070465/HzesT166x.gif\" alt=\"a+ b+ c = 1, to </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0070465/HzesT167x.gif\" alt=\"(a+ b)(b+ c)(c+ a) + abc = ab+ bc+ ca. \" class=\"math-display\"></div> <p class=\"nopar\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 34 (2 pkt)",

                "tresc": "Długości trzech krawędzi prostopadłościanu wychodzących z jednego wierzchołka tworzą ciąg geometryczny, w którym największy wyraz jest o 5 większy od wyrazu najmniejszego. Objętość prostopadłościanu jest równa 216. Oblicz długości krawędzi tego prostopadłościanu. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 35 (5 pkt)",

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT168x.gif\" alt=\"S = (− 1,5) jest środkiem okręgu wpisanego w trójkąt <img src=\"https://img.zadania.info/zes/0070465/HzesT169x.gif\" alt=\"ABC, w którym <img src=\"https://img.zadania.info/zes/0070465/HzesT170x.gif\" alt=\"A = (− 16,− 10 ) i <img src=\"https://img.zadania.info/zes/0070465/HzesT171x.gif\" alt=\"B = (8,− 2). Oblicz pole koła wpisanego w trójkąt <img src=\"https://img.zadania.info/zes/0070465/HzesT172x.gif\" alt=\"ABC. "
            }
        ]
    },
    {
        "id": `${nanoid()}`,
        "tytul": "Próbny Egzamin Maturalny z Matematyki",
        "poziom": "poziom podstawowy",
        "data": "21 kwietnia 2018",
        "zadania": [
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0079031/HzesT0x.gif\" alt=\"274 : 16− 3 jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT1x.gif\" alt=\"( ) 3 12 2 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT2x.gif\" alt=\"612 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT3x.gif\" alt=\"(27)−4 8- </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT4x.gif\" alt=\"67 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 2 (1 pkt)",

                "tresc": "Iloczyn dodatnich liczb <img src=\"https://img.zadania.info/zes/0079031/HzesT5x.gif\" alt=\"a,b i <img src=\"https://img.zadania.info/zes/0079031/HzesT6x.gif\" alt=\"c jest równy 6048. Ponadto 9% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT7x.gif\" alt=\"a jest równe 8% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT8x.gif\" alt=\"b, oraz 70% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT9x.gif\" alt=\"b jest równe 60% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT10x.gif\" alt=\"c. Stąd wynika, że iloczyn <img src=\"https://img.zadania.info/zes/0079031/HzesT11x.gif\" alt=\"ac jest równy <br class=\"newline\"> A) 288 </span>  B) 378 </span>  C) 324 </span>  D) 336 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 3 (1 pkt)",

                "tresc": "Liczba 81 razy mniejsza od <img src=\"https://img.zadania.info/zes/0079031/HzesT12x.gif\" alt=\" 14 9 jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT13x.gif\" alt=\" 22 3 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT14x.gif\" alt=\" 13 9 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT15x.gif\" alt=\" 5 8 1 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT16x.gif\" alt=\"278 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 4 (1 pkt)",

                "tresc": "Która z poniższych nierówności jest prawdziwa?<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT17x.gif\" alt=\"log 27 > 3 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT18x.gif\" alt=\"log4 15 > 2 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT19x.gif\" alt=\"log 523 < 2 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT20x.gif\" alt=\"log 330 < 3 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 5 (1 pkt)",

                "tresc": "Równość <img src=\"https://img.zadania.info/zes/0079031/HzesT21x.gif\" alt=\" √ -- √ --4 √ -- 4 ( 6 − x 2) = 4( 3 + 1) jest <br class=\"newline\"> A) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT22x.gif\" alt=\"x = 1. </span><br class=\"newline\"> B) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT23x.gif\" alt=\"x = − 1. </span><br class=\"newline\"> C) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT24x.gif\" alt=\" √ -- x = − 2. </span><br class=\"newline\"> D) fałszywa dla każdej liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT25x.gif\" alt=\"x. </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 6 (1 pkt)",

                "tresc": "Zbiorem rozwiązań nierówności <img src=\"https://img.zadania.info/zes/0079031/HzesT26x.gif\" alt=\"2 x < − 1 jest zbiór <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT27x.gif\" alt=\"(− ∞ ,− 2)∪ (0 ,+∞ ) </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT28x.gif\" alt=\"(− ∞ ,2) ∪ (0,+ ∞ ) </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT29x.gif\" alt=\"(0,+ ∞ ) </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT30x.gif\" alt=\"(− 2,0) </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 7 (1 pkt)",

                "tresc": "Rozważmy treść następującego zadania: <br class=\"newline\"><span class=\"pplri8t-x-x-120\">Obw</span><span class=\"pplri8t-x-x-120\">ód rombu o przekątnych długo</span><span class=\"pplri8t-x-x-120\">ści</span> <img src=\"https://img.zadania.info/zes/0079031/HzesT31x.gif\" alt=\"a <span class=\"pplri8t-x-x-120\">i</span> <img src=\"https://img.zadania.info/zes/0079031/HzesT32x.gif\" alt=\"b <span class=\"pplri8t-x-x-120\">jest r</span><span class=\"pplri8t-x-x-120\">ówny 48. Pole tego rombu jest</span> <span class=\"pplri8t-x-x-120\">r</span><span class=\"pplri8t-x-x-120\">ówne 16. Oblicz długo</span><span class=\"pplri8t-x-x-120\">ści przekątnych tego rombu.</span><br class=\"newline\">Który układ równań opisuje zależności między długościami przekątnych tego rombu? <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT33x.gif\" alt=\"{ a + b = 24 ab = 16 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT34x.gif\" alt=\"{ √ ------- a2 + b2 = 24 ab = 32 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT35x.gif\" alt=\"{ √ ------- a2 + b2 = 4 8 ab = 16 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT36x.gif\" alt=\"{ a2 + b2 = 96 ab = 32 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 8 (1 pkt)",

                "tresc": "Rysunek przedstawia wykres funkcji <img src=\"https://img.zadania.info/zes/0079031/HzesT37x.gif\" alt=\"y = f(x ). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT38x.gif\" alt=\"PIC\" class=\"graphics\" width=\"193\" height=\"139\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> Wskaż rysunek, na którym przedstawiony jest wykres funkcji <img src=\"https://img.zadania.info/zes/0079031/HzesT39x.gif\" alt=\"y = f(−x ). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT40x.gif\" alt=\"PIC\" class=\"graphics\" width=\"454\" height=\"292\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 9 (1 pkt)",

                "tresc": "Miejscem zerowym funkcji liniowej <img src=\"https://img.zadania.info/zes/0079031/HzesT41x.gif\" alt=\" √ -- f (x) = 3(x − 1 )− 6 jest liczba <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT42x.gif\" alt=\"√ -- 3 − 2 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT43x.gif\" alt=\" √ -- 2 3+ 1 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT44x.gif\" alt=\" -- − 2√ 3 + 1 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT45x.gif\" alt=\" -- − √ 3 + 6 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 10 (1 pkt)",

                "tresc": "Funkcja kwadratowa <img src=\"https://img.zadania.info/zes/0079031/HzesT46x.gif\" alt=\"f jest określona wzorem <img src=\"https://img.zadania.info/zes/0079031/HzesT47x.gif\" alt=\"f(x) = 3x 2 − 1 2x+ 95. Zatem wartość <img src=\"https://img.zadania.info/zes/0079031/HzesT48x.gif\" alt=\"f (11) jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT49x.gif\" alt=\"f(− 13 ) </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT50x.gif\" alt=\"f(− 9) </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT51x.gif\" alt=\"f (− 1 5) </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT52x.gif\" alt=\"f(− 7 ) </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 11 (1 pkt)",

                "tresc": "Dwusieczne kątów utworzonych przez przekątne prostokąta <img src=\"https://img.zadania.info/zes/0079031/HzesT53x.gif\" alt=\"ABCD są zawarte w prostych o równaniach <img src=\"https://img.zadania.info/zes/0079031/HzesT54x.gif\" alt=\"y = -23--x + m 2 − 3 m −1 oraz <img src=\"https://img.zadania.info/zes/0079031/HzesT55x.gif\" alt=\"y = m 3x + --12-- m + 1. Zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT56x.gif\" alt=\"m = 1 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT57x.gif\" alt=\" 3√ -- m = 2 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT58x.gif\" alt=\"m = √133 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT59x.gif\" alt=\"m = − 1 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 12 (1 pkt)",

                "tresc": "Wskaż wzór funkcji, której wykres ma dokładnie jeden punkt wspólny z prostą <img src=\"https://img.zadania.info/zes/0079031/HzesT60x.gif\" alt=\"y = 1.<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT61x.gif\" alt=\"f(x ) = (x + 1)4 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT62x.gif\" alt=\"f(x ) = x4 + 1 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT63x.gif\" alt=\" 2 2 f(x) = (x + 1)(x − 1) </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT64x.gif\" alt=\" 2 f (x) = x − 1 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 13 (1 pkt)",

                "tresc": "Liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT65x.gif\" alt=\"3,x,y ,−1 92 tworzą ciąg geometryczny, wtedy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT66x.gif\" alt=\"x = −1 2, y = − 48 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT67x.gif\" alt=\"x = 48 , y = −9 6 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT68x.gif\" alt=\"x = − 1 2, y = 48 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT69x.gif\" alt=\"x = 12, y = − 96 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 14 (1 pkt)",

                "tresc": "W ciągu arytmetycznym <img src=\"https://img.zadania.info/zes/0079031/HzesT70x.gif\" alt=\"(an), określonym dla <img src=\"https://img.zadania.info/zes/0079031/HzesT71x.gif\" alt=\"n ≥ 1, spełniony jest warunek <img src=\"https://img.zadania.info/zes/0079031/HzesT72x.gif\" alt=\"2a4 = a3 + a2 + 2. Różnica <img src=\"https://img.zadania.info/zes/0079031/HzesT73x.gif\" alt=\"r tego ciągu jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT74x.gif\" alt=\"1 2 </span>  B) 1 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT75x.gif\" alt=\"2 3 </span>  D) 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 15 (1 pkt)",

                "tresc": "Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT76x.gif\" alt=\"α jest ostry i <img src=\"https://img.zadania.info/zes/0079031/HzesT77x.gif\" alt=\"cosα = 3 5. Wtedy wartość wyrażenia <img src=\"https://img.zadania.info/zes/0079031/HzesT78x.gif\" alt=\"sinα − cosα jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT79x.gif\" alt=\" 1 − 25 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT80x.gif\" alt=\"4 5 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT81x.gif\" alt=\"1 5 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT82x.gif\" alt=\"− 75 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 16 (1 pkt)",

                "tresc": "Na okręgu o środku w punkcie <img src=\"https://img.zadania.info/zes/0079031/HzesT83x.gif\" alt=\"O leżą punkty <img src=\"https://img.zadania.info/zes/0079031/HzesT84x.gif\" alt=\"A ,B i <img src=\"https://img.zadania.info/zes/0079031/HzesT85x.gif\" alt=\"C (zobacz rysunek). Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT86x.gif\" alt=\"ABC ma miarę <img src=\"https://img.zadania.info/zes/0079031/HzesT87x.gif\" alt=\"88∘, a kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT88x.gif\" alt=\"BOC ma miarę o <img src=\"https://img.zadania.info/zes/0079031/HzesT89x.gif\" alt=\"2 4∘ mniejszą od miary kąta <img src=\"https://img.zadania.info/zes/0079031/HzesT90x.gif\" alt=\"AOB. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT91x.gif\" alt=\"PIC\" class=\"graphics\" width=\"170\" height=\"172\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT92x.gif\" alt=\"BCO ma miarę <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT93x.gif\" alt=\"59∘ </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT94x.gif\" alt=\"5 0∘ </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT95x.gif\" alt=\"44∘ </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT96x.gif\" alt=\"78∘ </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 17 (1 pkt)",

                "tresc": "Obwód trójkąta <img src=\"https://img.zadania.info/zes/0079031/HzesT97x.gif\" alt=\"ABC, przedstawionego na rysunku, jest równy </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT98x.gif\" alt=\"PIC\" class=\"graphics\" width=\"170\" height=\"109\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT99x.gif\" alt=\"( √ -) 1 + -23 a </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT100x.gif\" alt=\"( √-) 1+ 22- a </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT101x.gif\" alt=\"( √ -) 1+ 2 a </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT102x.gif\" alt=\"( √ -) 1 + 3 a </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 18 (1 pkt)",

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0079031/HzesT103x.gif\" alt=\"K = (− 3,3),L = (− 1,− 3) i <img src=\"https://img.zadania.info/zes/0079031/HzesT104x.gif\" alt=\"M = (2,− 2) są środkami trzech kolejnych boków rombu. Pole tego rombu jest równe <br class=\"newline\"> A) 80 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT105x.gif\" alt=\" √ --- 4 10 </span>  C) 40 </span>  D) 20 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 19 (1 pkt)",

                "tresc": "Wysokość graniastosłupa prawidłowego czworokątnego, którego pole powierzchni całkowitej jest równe <img src=\"https://img.zadania.info/zes/0079031/HzesT106x.gif\" alt=\"P1, zwiększono trzykrotnie. Pole powierzchni całkowitej otrzymanego w ten sposób graniastosłupa jest równe <img src=\"https://img.zadania.info/zes/0079031/HzesT107x.gif\" alt=\"P 2. Zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT108x.gif\" alt=\"P2 = 3 P1 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT109x.gif\" alt=\"P2 = 9 P1 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT110x.gif\" alt=\"PP2 < 3 1 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT111x.gif\" alt=\"PP2 ∈ (3,9) 1 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 20 (1 pkt)",

                "tresc": "Prosta <img src=\"https://img.zadania.info/zes/0079031/HzesT112x.gif\" alt=\"l jest nachylona do osi <img src=\"https://img.zadania.info/zes/0079031/HzesT113x.gif\" alt=\"Ox pod kątem <img src=\"https://img.zadania.info/zes/0079031/HzesT114x.gif\" alt=\"30∘ i przecina oś <img src=\"https://img.zadania.info/zes/0079031/HzesT115x.gif\" alt=\"Oy w punkcie <img src=\"https://img.zadania.info/zes/0079031/HzesT116x.gif\" alt=\" √ -- (0, 3) (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT117x.gif\" alt=\"PIC\" class=\"graphics\" width=\"284\" height=\"178\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Prosta <img src=\"https://img.zadania.info/zes/0079031/HzesT118x.gif\" alt=\"l ma równanie <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT119x.gif\" alt=\" √- √ -- y = -33 x − 3 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT120x.gif\" alt=\" √ - √ -- y = -33x + 3 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT121x.gif\" alt=\" 1 √ -- y = 2 x− 3 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT122x.gif\" alt=\" 1 √ -- y = 2x + 3 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 21 (1 pkt)",

                "tresc": "Liczba przekątnych ośmiokąta foremnego jest równa <br class=\"newline\"> A) 20 </span>  B) 14 </span>  C) 21 </span>  D) 27 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 22 (1 pkt)",

                "tresc": "Ile jest wszystkich czterocyfrowych liczb naturalnych większych niż 2018? <br class=\"newline\"> A) 7979 </span>  B) 7980 </span>  C) 7981 </span>  D) 7982 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 23 (1 pkt)",

                "tresc": "Stosunek pola powierzchni bocznej walca do pola przekroju osiowego tego walca <br class=\"newline\"> A) może być większy od 6 </span><br class=\"newline\"> B) jest zawsze większy od 3 </span><br class=\"newline\"> C) może być równy 3 </span><br class=\"newline\"> D) jest zawsze mniejszy od 3 </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 24 (1 pkt)",

                "tresc": "Ze zbioru trzydziestu kolejnych liczb naturalnych od 1 do 30 losujemy jedną liczbę. Niech <img src=\"https://img.zadania.info/zes/0079031/HzesT123x.gif\" alt=\"A oznacza zdarzenie, że wylosowana liczba będzie dzielnikiem liczby 30. Wtedy prawdopodobieństwo zdarzenia <img src=\"https://img.zadania.info/zes/0079031/HzesT124x.gif\" alt=\"A jest równe <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT125x.gif\" alt=\"-4 15 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT126x.gif\" alt=\"7- 30 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT127x.gif\" alt=\"1 5 </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT128x.gif\" alt=\"-3 10 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 25 (2 pkt)",

                "tresc": "Rozwiąż nierówność <img src=\"https://img.zadania.info/zes/0079031/HzesT129x.gif\" alt=\" √ -- 2 6x − 2x2 − 3 < 0. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 26 (2 pkt)",

                "tresc": "Dany jest kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT130x.gif\" alt=\"α, dla którego spełniona jest równość <img src=\"https://img.zadania.info/zes/0079031/HzesT131x.gif\" alt=\"sin α − cos α = 12. Oblicz wartość wyrażenia <img src=\"https://img.zadania.info/zes/0079031/HzesT132x.gif\" alt=\"(sin α+ cosα )2. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 27 (2 pkt)",

                "tresc": "W ciągu geometrycznym <img src=\"https://img.zadania.info/zes/0079031/HzesT133x.gif\" alt=\"(an), określonym dla <img src=\"https://img.zadania.info/zes/0079031/HzesT134x.gif\" alt=\"n ≥ 1, dane są: wyraz <img src=\"https://img.zadania.info/zes/0079031/HzesT135x.gif\" alt=\"a1 = 2 i suma trzech początkowych wyrazów tego ciągu <img src=\"https://img.zadania.info/zes/0079031/HzesT136x.gif\" alt=\"S 3 = 114. Wiadomo ponadto, że <img src=\"https://img.zadania.info/zes/0079031/HzesT137x.gif\" alt=\"a 10 < 0. Oblicz iloraz </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0079031/HzesT138x.gif\" alt=\"a2021 a2018. \" class=\"math-display\"></div> <p class=\"nopar\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 28 (2 pkt)",

                "tresc": "Rozwiąż równanie <img src=\"https://img.zadania.info/zes/0079031/HzesT139x.gif\" alt=\"(3 − 2u 2)u3(11u − 3u 2 − 1 0) = 0. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 29 (2 pkt)",

                "tresc": "Dany jest trójkąt prostokątny <img src=\"https://img.zadania.info/zes/0079031/HzesT140x.gif\" alt=\"ABC, w którym <img src=\"https://img.zadania.info/zes/0079031/HzesT141x.gif\" alt=\"|∡ACB | = 90∘ i <img src=\"https://img.zadania.info/zes/0079031/HzesT142x.gif\" alt=\" √ -- sin ∡BAC = --10- 5. Niech <img src=\"https://img.zadania.info/zes/0079031/HzesT143x.gif\" alt=\"D oznacza punkt wspólny wysokości poprowadzonej z wierzchołka <img src=\"https://img.zadania.info/zes/0079031/HzesT144x.gif\" alt=\"C kąta prostego i przeciwprostokątnej <img src=\"https://img.zadania.info/zes/0079031/HzesT145x.gif\" alt=\"AB tego trójkąta. Wykaż, że <img src=\"https://img.zadania.info/zes/0079031/HzesT146x.gif\" alt=\"|AD | : |DB | = 3 : 2. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 30 (2 pkt)",

                "tresc": "Dany jest skończony ciąg arytmetyczny o 2018 wyrazach. Wykaż, że średnia arytmetyczna i mediana wszystkich wyrazów tego ciągu są równe. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 31 (4 pkt)",

                "tresc": "Parabola, która jest wykresem funkcji kwadratowej <img src=\"https://img.zadania.info/zes/0079031/HzesT147x.gif\" alt=\"f(x) = ax 2 + bx + c, przechodzi przez punkt <img src=\"https://img.zadania.info/zes/0079031/HzesT148x.gif\" alt=\"(2,− 6) oraz <img src=\"https://img.zadania.info/zes/0079031/HzesT149x.gif\" alt=\"f(− 2) = f(4) = 10. Oblicz odległość wierzchołka tej paraboli od początku układu współrzędnych. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 32 (5 pkt)",

                "tresc": "Podstawą graniastosłupa prostego <img src=\"https://img.zadania.info/zes/0079031/HzesT150x.gif\" alt=\"ABCDA ′B′C ′D ′ jest romb <img src=\"https://img.zadania.info/zes/0079031/HzesT151x.gif\" alt=\"ABCD. Przekątna <img src=\"https://img.zadania.info/zes/0079031/HzesT152x.gif\" alt=\"A ′C tego graniastosłupa ma długość 6 i jest nachylona do płaszczyzny podstawy pod kątem <img src=\"https://img.zadania.info/zes/0079031/HzesT153x.gif\" alt=\"30∘, a objętość graniastosłupa jest równa <img src=\"https://img.zadania.info/zes/0079031/HzesT154x.gif\" alt=\" √- 2723-. Oblicz pole powierzchni całkowitej tego graniastosłupa. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT155x.gif\" alt=\"PIC\" class=\"graphics\" width=\"227\" height=\"174\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 33 (5 pkt)",

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0079031/HzesT156x.gif\" alt=\"B = (7,2) jest wierzchołkiem trójkąta równoramiennego <img src=\"https://img.zadania.info/zes/0079031/HzesT157x.gif\" alt=\"ABC o podstawie <img src=\"https://img.zadania.info/zes/0079031/HzesT158x.gif\" alt=\"BC. Pole tego trójkąta jest równe 20, a wysokość poprowadzona z wierzchołka <img src=\"https://img.zadania.info/zes/0079031/HzesT159x.gif\" alt=\"A tego trójkąta zawiera się w prostej o równaniu <img src=\"https://img.zadania.info/zes/0079031/HzesT160x.gif\" alt=\"y = 3x + 1. Oblicz współrzędne punktów <img src=\"https://img.zadania.info/zes/0079031/HzesT161x.gif\" alt=\"A i <img src=\"https://img.zadania.info/zes/0079031/HzesT162x.gif\" alt=\"C. Rozważ wszystkie przypadki. "
            }
        ]
    },
    {
        "id": `${nanoid()}`,
        "tytul": "Próbny Egzamin Maturalny z Matematyki",
        "poziom": "poziom rozszerzony",
        "data": "27 kwietnia 2019",
        "zadania": [
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0067695/HzesT0x.gif\" alt=\"( ) ( ) √3-- 3 3√ -- 3√ -- 3 2 + 1 ⋅ 4− 2+ 1 jest równa<br class=\"newline\"> A) 1 </span>  B) 8 </span>  C) 27 </span>  D) 64 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 2 (1 pkt)",

                "tresc": "Równanie <img src=\"https://img.zadania.info/zes/0067695/HzesT1x.gif\" alt=\"||x|− 4 | = |x| + 2 <br class=\"newline\"> A) nie ma rozwiązań. </span>  B) ma dokładnie jedno rozwiązanie. </span><br>  C) ma dokładnie dwa rozwiązania. </span>  D) ma dokładnie cztery rozwiązania. </span> </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 3 (1 pkt)",

                "tresc": "Wyrażenie <img src=\"https://img.zadania.info/zes/0067695/HzesT2x.gif\" alt=\"2 sin 4x sin x jest równe<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0067695/HzesT3x.gif\" alt=\"cos3x − sin 5x </span>  B) <img src=\"https://img.zadania.info/zes/0067695/HzesT4x.gif\" alt=\"cos3x − co s5x </span>  C) <img src=\"https://img.zadania.info/zes/0067695/HzesT5x.gif\" alt=\"sin 3x − sin5x </span>  D) <img src=\"https://img.zadania.info/zes/0067695/HzesT6x.gif\" alt=\"sin 3x − cos 5x </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 4 (1 pkt)",

                "tresc": "Na rysunku zaznaczono zbiór punktów płaszczyzny spełniających układ nierówności: <br class=\"newline\"></p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0067695/HzesT7x.gif\" alt=\"PIC\" class=\"graphics\" width=\"241\" height=\"247\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\"> A) <img src=\"https://img.zadania.info/zes/0067695/HzesT8x.gif\" alt=\"{ 2x + y+ 1 ≤ 0 x + 2y − 2 ≤ 0 </span>  B) <img src=\"https://img.zadania.info/zes/0067695/HzesT9x.gif\" alt=\"{ 2x + y + 1 ≤ 0 x+ 2y − 2 ≥ 0 </span><br>  C) <img src=\"https://img.zadania.info/zes/0067695/HzesT10x.gif\" alt=\"{ 2x + y + 1 ≥ 0 x + 2y − 2 ≥ 0 </span>  D) <img src=\"https://img.zadania.info/zes/0067695/HzesT11x.gif\" alt=\"{ 2x + y + 1 ≥ 0 x + 2y − 2 ≤ 0 </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 5 (1 pkt)",

                "tresc": "Granica <img src=\"https://img.zadania.info/zes/0067695/HzesT12x.gif\" alt=\" √ --------- lim √-5−-3x3+-8x2 x→− ∞ 1− 12x3+ 4x <br class=\"newline\"> A) nie istnieje. </span>  B) jest liczbą dodatnią. </span><br>  C) jest liczbą ujemną. </span>  D) jest równa <img src=\"https://img.zadania.info/zes/0067695/HzesT13x.gif\" alt=\"+ ∞. </span> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 6 (2 pkt)",

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT14x.gif\" alt=\"M przyprostokątnej <img src=\"https://img.zadania.info/zes/0067695/HzesT15x.gif\" alt=\"BC trójkąta prostokątnego <img src=\"https://img.zadania.info/zes/0067695/HzesT16x.gif\" alt=\"ABC zrzutowano na przeciwprostokątną <img src=\"https://img.zadania.info/zes/0067695/HzesT17x.gif\" alt=\"AB otrzymując punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT18x.gif\" alt=\"N. Wykaż, że <img src=\"https://img.zadania.info/zes/0067695/HzesT19x.gif\" alt=\"|∡MAN | = |∡MCN |. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 7 (3 pkt)",

                "tresc": "Dany jest nieskończony ciąg okręgów <img src=\"https://img.zadania.info/zes/0067695/HzesT20x.gif\" alt=\"(on) o równaniach <img src=\"https://img.zadania.info/zes/0067695/HzesT21x.gif\" alt=\" 2 2 7−n x + y = 3, <img src=\"https://img.zadania.info/zes/0067695/HzesT22x.gif\" alt=\"n ≥ 1. Niech <img src=\"https://img.zadania.info/zes/0067695/HzesT23x.gif\" alt=\"Pk będzie pierścieniem ograniczonym zewnętrznym okręgiem <img src=\"https://img.zadania.info/zes/0067695/HzesT24x.gif\" alt=\"o2k− 1 i wewnętrznym okręgiem <img src=\"https://img.zadania.info/zes/0067695/HzesT25x.gif\" alt=\"o2k. Oblicz sumę pól wszystkich pierścieni <img src=\"https://img.zadania.info/zes/0067695/HzesT26x.gif\" alt=\"Pk, gdzie <img src=\"https://img.zadania.info/zes/0067695/HzesT27x.gif\" alt=\"k ≥ 1. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 8 (3 pkt)",

                "tresc": "Udowodnij, że jeżeli <img src=\"https://img.zadania.info/zes/0067695/HzesT28x.gif\" alt=\"α + β + γ = π, to </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0067695/HzesT29x.gif\" alt=\"cos2α + co s2β + cos2 γ + 2 cosα cosβ cos γ = 1 . \" class=\"math-display\"></div> <p class=\"nopar\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 9 (3 pkt)",

                "tresc": "Rozpatrujemy wszystkie liczby naturalne dziewięciocyfrowe, w zapisie których mogą występować wyłącznie cyfry 0, 1, 2 przy czym każda z cyfr występuje dokładnie trzy razy. Ile jest takich liczb? "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 10 (3 pkt)",

                "tresc": "Liczby <img src=\"https://img.zadania.info/zes/0067695/HzesT30x.gif\" alt=\"p i <img src=\"https://img.zadania.info/zes/0067695/HzesT31x.gif\" alt=\"q są pierwiastkami równania <img src=\"https://img.zadania.info/zes/0067695/HzesT32x.gif\" alt=\"x2 − 47x + 1 = 0. Wykaż, że wartość wyrażenia <img src=\"https://img.zadania.info/zes/0067695/HzesT33x.gif\" alt=\"√4p--+ √4q -- jest liczbą naturalną. </p><p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 11 (3 pkt)",

                "tresc": "W pudełku znajdują się klocki o różnych kształtach i kolorach. Wiadomo, że prawdopodobieństwo wylosowania klocka, który ma kształt walca lub ma kolor czerwony jest równe 0,6. Prawdopodobieństwo, że losowo wybrany klocek czerwony jest walcem jest równe 0,25. Wiadomo też, że klocki czerwone stanowią 40% wszystkich klocków. Jakie jest prawdopodobieństwo, że losowo wybrany klocek w kształcie walca jest czerwony? "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 12 (3 pkt)",

                "tresc": "W trójkącie <img src=\"https://img.zadania.info/zes/0067695/HzesT34x.gif\" alt=\"ABC długości boków <img src=\"https://img.zadania.info/zes/0067695/HzesT35x.gif\" alt=\"AB i <img src=\"https://img.zadania.info/zes/0067695/HzesT36x.gif\" alt=\"AC są odpowiednio równe 4 i 6. Punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT37x.gif\" alt=\"M jest środkiem odcinka <img src=\"https://img.zadania.info/zes/0067695/HzesT38x.gif\" alt=\"BC, a długość środkowej <img src=\"https://img.zadania.info/zes/0067695/HzesT39x.gif\" alt=\"AN trójkąta <img src=\"https://img.zadania.info/zes/0067695/HzesT40x.gif\" alt=\"AMB jest równa 3. Oblicz długość boku <img src=\"https://img.zadania.info/zes/0067695/HzesT41x.gif\" alt=\"BC. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 13 (4 pkt)",

                "tresc": "Dany jest malejący ciąg geometryczny <img src=\"https://img.zadania.info/zes/0067695/HzesT42x.gif\" alt=\"(a,aq,aq 2), którego wszystkie wyrazy i iloraz są liczbami całkowitymi niepodzielnymi przez 3. Jeśli najmniejszy wyraz ciągu zwiększymy o 18, to otrzymamy ciąg arytmetyczny. Oblicz wyraz <img src=\"https://img.zadania.info/zes/0067695/HzesT43x.gif\" alt=\"aq tego ciągu. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 14 (4 pkt)",

                "tresc": "Przedstawiona na rysunku bryła to stożek ścięty płaszczyzną równoległą do jego płaszczyzny podstawy. Wysokość tej bryły jest równa <img src=\"https://img.zadania.info/zes/0067695/HzesT44x.gif\" alt=\"H, a <img src=\"https://img.zadania.info/zes/0067695/HzesT45x.gif\" alt=\"r i <img src=\"https://img.zadania.info/zes/0067695/HzesT46x.gif\" alt=\"R (<img src=\"https://img.zadania.info/zes/0067695/HzesT47x.gif\" alt=\"r < R) są promieniami podstaw. Oblicz objętość tej bryły. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0067695/HzesT48x.gif\" alt=\"PIC\" class=\"graphics\" width=\"109\" height=\"146\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 15 (5 pkt)",

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0067695/HzesT49x.gif\" alt=\"f jest wielomianem stopnia 3, a jej wykres jest styczny do prostej <img src=\"https://img.zadania.info/zes/0067695/HzesT50x.gif\" alt=\" 9 y = 2 w punkcie o odciętej <img src=\"https://img.zadania.info/zes/0067695/HzesT51x.gif\" alt=\"x = 2 oraz jest styczny do prostej <img src=\"https://img.zadania.info/zes/0067695/HzesT52x.gif\" alt=\"y = − 92 w punkcie o odciętej <img src=\"https://img.zadania.info/zes/0067695/HzesT53x.gif\" alt=\"x = − 1. Wyznacz wzór funkcji <img src=\"https://img.zadania.info/zes/0067695/HzesT54x.gif\" alt=\"f. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 16 (5 pkt)",

                "tresc": "Z punktu <img src=\"https://img.zadania.info/zes/0067695/HzesT55x.gif\" alt=\" ( ) A = − 92, 92 poprowadzono styczne do okręgu <img src=\"https://img.zadania.info/zes/0067695/HzesT56x.gif\" alt=\"(x + 2)2 + (y + 3)2 = 50. Oblicz pole trójkąta <img src=\"https://img.zadania.info/zes/0067695/HzesT57x.gif\" alt=\"ABC, gdzie <img src=\"https://img.zadania.info/zes/0067695/HzesT58x.gif\" alt=\"BC jest odcinkiem łączącym punkty styczności. "
            },
            {

                "id": `${nanoid()}`,
                "canvas": [],
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 17 (7 pkt)",

                "tresc": "Rozpatrujemy wszystkie graniastosłupy prawidłowe czworokątne o polu powierzchni całkowitej <img src=\"https://img.zadania.info/zes/0067695/HzesT59x.gif\" alt=\"P. Wyznacz wysokość i długość krawędzi podstawy tego graniastosłupa, którego objętość jest największa. Oblicz tę największą objętość. "
            }
        ]
    }
]

export default zestawy