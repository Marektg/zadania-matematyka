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
                "podpunkty": ["\\(-4\\)","\\(\\frac{1}{4}\\)","\\(4\\)","\\(-\\frac{1}{4}\\)"],
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
                "podpunkty": ["\\(48\\)","\\(44\\)","\\(46\\)","\\(43\\)"],
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
                "podpunkty": ["\\(4\\)", "\\(4^2\\)", "\\(2^3\\)","\\(2\\)"],
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
                "podpunkty": ["\\(6\\)","\\(9\\)","\\(2\\)","\\(3\\)"],
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
                "podpunkty": ["\\((-\\infty,1>\\)", "\\(<1,+\\infty)\\)", "\\(-\\infty,7>\\)","\\(<7,+\\infty)\\)"],
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
                "canvas": [{"id": "z120227", "width": "400", "height": "240"}],
                "podpunkty": [" A) Liczba <img src=\"https://img.zadania.info/zes/0054643/HzesT21x.gif\" alt=\"f (1)+ g(1) \" class=\"math\"> jest równa 2. </span> <br class=\"newline\"> B) Zbiory wartości funkcji <img src=\"https://img.zadania.info/zes/0054643/HzesT22x.gif\" alt=\"f \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT23x.gif\" alt=\"g \" class=\"math\"> są równe. </span> <br class=\"newline\"> C) Funkcje <img src=\"https://img.zadania.info/zes/0054643/HzesT24x.gif\" alt=\"f \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT25x.gif\" alt=\"g \" class=\"math\"> mają takie same miejsca zerowe. </span> <br class=\"newline\"> D) Punkt <img src=\"https://img.zadania.info/zes/0054643/HzesT26x.gif\" alt=\"P = (−1 ,0) \" class=\"math\"> należy do wykresów funkcji <img src=\"https://img.zadania.info/zes/0054643/HzesT27x.gif\" alt=\"f \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT28x.gif\" alt=\"g \" class=\"math\">. </span> "],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": "Funkcja \\(g\\) jest określona wzorem \\(g(x)=f(x-1)\\) dla \\(x\\in<-5,6>\\).Wskaż zdanie prawdziwe.",
                "ramkapo": null,
                "numer": "Zadanie 7 (1 pkt)",

                "tresc": "Na poniższym rysunku przedstawiono wykres funkcji \\(f\\) określonej w zbiorze \\(⟨− 6,5⟩\\)"
                    
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

                "tresc": "Równanie <img src=\"https://img.zadania.info/zes/0054643/HzesT29x.gif\" alt=\"x3+-9x22= 0 81−x \" class=\"math\"> ma w zbiorze liczb rzeczywistych dokładnie <br class=\"newline\"> A) jedno rozwiązanie. </span>  B) dwa rozwiązania. </span><br>  C) trzy rozwiązania. </span>  D) cztery rozwiązania. </span> </p><p class=\"indent\"> "
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

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0054643/HzesT30x.gif\" alt=\"f \" class=\"math\"> jest określona dla każdej liczby rzeczywistej <img src=\"https://img.zadania.info/zes/0054643/HzesT31x.gif\" alt=\"x \" class=\"math\"> wzorem <img src=\"https://img.zadania.info/zes/0054643/HzesT32x.gif\" alt=\"f(x) = m √ 2(x − 1) + 2x \" class=\"math\">. Ta funkcja jest rosnąca dla każdej liczby <img src=\"https://img.zadania.info/zes/0054643/HzesT33x.gif\" alt=\"m \" class=\"math\"> spełniającej warunek <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT34x.gif\" alt=\"m < − √2- 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT35x.gif\" alt=\" √ -- m < 2 − 1 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT36x.gif\" alt=\" √ -- m > − 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT37x.gif\" alt=\" √2 m > − -2- \" class=\"math\"> </span> "
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

                "tresc": "Funkcja kwadratowa <img src=\"https://img.zadania.info/zes/0054643/HzesT38x.gif\" alt=\"f \" class=\"math\"> jest określona wzorem <img src=\"https://img.zadania.info/zes/0054643/HzesT39x.gif\" alt=\"f(x) = − 2(x + a)(x − 2a ) \" class=\"math\">. Wierzchołek paraboli, która jest wykresem funkcji <img src=\"https://img.zadania.info/zes/0054643/HzesT40x.gif\" alt=\"f \" class=\"math\">, ma współrzędną <img src=\"https://img.zadania.info/zes/0054643/HzesT41x.gif\" alt=\"y \" class=\"math\"> równą 2. Zatem liczba <img src=\"https://img.zadania.info/zes/0054643/HzesT42x.gif\" alt=\"a \" class=\"math\"> może być równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT43x.gif\" alt=\" 2 − 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT44x.gif\" alt=\"3 2 \" class=\"math\"> </span>  C) 4 </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT45x.gif\" alt=\"1 2 \" class=\"math\"> </span> "
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

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0054643/HzesT46x.gif\" alt=\"P \" class=\"math\"> jest punktem wspólnym wykresu funkcji <img src=\"https://img.zadania.info/zes/0054643/HzesT47x.gif\" alt=\"y = 2,89−x \" class=\"math\"> i prostej <img src=\"https://img.zadania.info/zes/0054643/HzesT48x.gif\" alt=\"2x + 1 = 0 \" class=\"math\">. Odległość punktu <img src=\"https://img.zadania.info/zes/0054643/HzesT49x.gif\" alt=\"P \" class=\"math\"> od osi <img src=\"https://img.zadania.info/zes/0054643/HzesT50x.gif\" alt=\"Ox \" class=\"math\"> układu współrzędnych jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT51x.gif\" alt=\"10 17 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT52x.gif\" alt=\"− 2 \" class=\"math\"> </span>  C) 1,7 </span>  D) 1 </span> "
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

                "tresc": "Wartość wyrażenia <img src=\"https://img.zadania.info/zes/0054643/HzesT53x.gif\" alt=\"( ∘) −2 sin1 50∘ + csoisn12300∘- \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT54x.gif\" alt=\" 1 − 4 \" class=\"math\"> </span>  B) 4 </span>  C) 1 </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT55x.gif\" alt=\"14 \" class=\"math\"> </span> "
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

                "tresc": "Dane są ciągi <img src=\"https://img.zadania.info/zes/0054643/HzesT56x.gif\" alt=\"(an) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT57x.gif\" alt=\"(bn) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT58x.gif\" alt=\"(cn) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT59x.gif\" alt=\"(dn ) \" class=\"math\">, określone dla każdej liczby naturalnej <img src=\"https://img.zadania.info/zes/0054643/HzesT60x.gif\" alt=\"n ≥ 1 \" class=\"math\"> wzorami: <img src=\"https://img.zadania.info/zes/0054643/HzesT61x.gif\" alt=\"a = (−n )3 + n n \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT62x.gif\" alt=\"b = 216n1 n \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT63x.gif\" alt=\"c = |n − n3| n \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT64x.gif\" alt=\"d = -n2−9- n 3n+9n2 \" class=\"math\">. Dodatnia liczba całkowita dwucyfrowa jest trzecim wyrazem ciągu <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT65x.gif\" alt=\"(an) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT66x.gif\" alt=\"(bn ) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT67x.gif\" alt=\"(cn) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT68x.gif\" alt=\"(dn) \" class=\"math\"> </span> "
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

                "tresc": "Dany jest odcinek <img src=\"https://img.zadania.info/zes/0054643/HzesT69x.gif\" alt=\"AB \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0054643/HzesT70x.gif\" alt=\"A (7,9) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT71x.gif\" alt=\"B(3,15 ) \" class=\"math\">. Punkt <img src=\"https://img.zadania.info/zes/0054643/HzesT72x.gif\" alt=\"S \" class=\"math\"> jest środkiem odcinka <img src=\"https://img.zadania.info/zes/0054643/HzesT73x.gif\" alt=\"AB \" class=\"math\">. Obrazem punktu <img src=\"https://img.zadania.info/zes/0054643/HzesT74x.gif\" alt=\"S \" class=\"math\"> w symetrii względem osi <img src=\"https://img.zadania.info/zes/0054643/HzesT75x.gif\" alt=\"Oy \" class=\"math\"> jest punkt <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT76x.gif\" alt=\" ′ S (− 5,12) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT77x.gif\" alt=\" ′ S (5,12) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT78x.gif\" alt=\" ′ S (− 5,− 12) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT79x.gif\" alt=\" ′ S (5,− 12) \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Ciąg arytmetyczny <img src=\"https://img.zadania.info/zes/0054643/HzesT80x.gif\" alt=\"(an ) \" class=\"math\"> jest określony dla każdej liczby naturalnej <img src=\"https://img.zadania.info/zes/0054643/HzesT81x.gif\" alt=\"n ≥ 1 \" class=\"math\">. Trzeci i piąty wyraz ciągu spełniają warunek <img src=\"https://img.zadania.info/zes/0054643/HzesT82x.gif\" alt=\"a3 + a5 = 5 6 \" class=\"math\">. Wtedy czwarty wyraz tego ciągu jest równy <br class=\"newline\"> A) 28 </span>  B) 29 </span>  C) 33 </span>  D) 40 </span> "
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

                "tresc": "Trójwyrazowy ciąg <img src=\"https://img.zadania.info/zes/0054643/HzesT83x.gif\" alt=\"(x,− 6,1 5) \" class=\"math\"> jest ciągiem geometrycznym. Wtedy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT84x.gif\" alt=\"x = 9 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT85x.gif\" alt=\"x = − 3 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT86x.gif\" alt=\"x = − 1 ,2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT87x.gif\" alt=\"x = 2,4 \" class=\"math\"> </span> "
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

                "tresc": "Pole pewnego sześciokąta foremnego jest równe <img src=\"https://img.zadania.info/zes/0054643/HzesT88x.gif\" alt=\" √- 8-3- 3 \" class=\"math\">. Obwód tego sześciokąta jest równy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT89x.gif\" alt=\"4 3 \" class=\"math\"> </span>  B) 8 </span>  C) 4 </span>  D) 12 </span> "
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

                "tresc": "Dane są okrąg i prosta styczna do tego okręgu w punkcie <img src=\"https://img.zadania.info/zes/0054643/HzesT90x.gif\" alt=\"A \" class=\"math\">. Punkty <img src=\"https://img.zadania.info/zes/0054643/HzesT91x.gif\" alt=\"B \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT92x.gif\" alt=\"C \" class=\"math\"> są położone na okręgu tak, że <img src=\"https://img.zadania.info/zes/0054643/HzesT93x.gif\" alt=\"BC \" class=\"math\"> jest jego średnicą. Cięciwa <img src=\"https://img.zadania.info/zes/0054643/HzesT94x.gif\" alt=\"AB \" class=\"math\"> tworzy ze styczną kąt o mierze <img src=\"https://img.zadania.info/zes/0054643/HzesT95x.gif\" alt=\"50∘ \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0054643/HzesT96x.gif\" alt=\"PIC\" class=\"graphics\" width=\"284\" height=\"179\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Miara kąta <img src=\"https://img.zadania.info/zes/0054643/HzesT97x.gif\" alt=\"ABC \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT98x.gif\" alt=\"25∘ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT99x.gif\" alt=\"4 0∘ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT100x.gif\" alt=\"45∘ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT101x.gif\" alt=\"50∘ \" class=\"math\"> </span> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0054643/HzesT102x.gif\" alt=\"D \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT103x.gif\" alt=\"E \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT104x.gif\" alt=\"F \" class=\"math\"> są punktami styczności okręgu wpisanego w trójkąt <img src=\"https://img.zadania.info/zes/0054643/HzesT105x.gif\" alt=\"ABC \" class=\"math\"> z jego bokami i <img src=\"https://img.zadania.info/zes/0054643/HzesT106x.gif\" alt=\"|∡EDF | = 7 0∘ \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0054643/HzesT107x.gif\" alt=\"PIC\" class=\"graphics\" width=\"271\" height=\"183\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Miara kąta <img src=\"https://img.zadania.info/zes/0054643/HzesT108x.gif\" alt=\"BAC \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT109x.gif\" alt=\"20∘ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT110x.gif\" alt=\"3 0∘ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT111x.gif\" alt=\"40∘ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT112x.gif\" alt=\"50∘ \" class=\"math\"> </span> "
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

                "tresc": "Jeśli <img src=\"https://img.zadania.info/zes/0054643/HzesT113x.gif\" alt=\"a− b = 10 \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0054643/HzesT114x.gif\" alt=\"ab = 6 \" class=\"math\">, to <img src=\"https://img.zadania.info/zes/0054643/HzesT115x.gif\" alt=\"a2 + b 2 \" class=\"math\"> jest równe <br class=\"newline\"> A) 122 </span>  B) 106 </span>  C) 94 </span>  D) 112 </span> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0054643/HzesT116x.gif\" alt=\"A = (− 12,2) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT117x.gif\" alt=\"B = (1,15) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT118x.gif\" alt=\"C \" class=\"math\"> leżą na jednej prostej. Punkt <img src=\"https://img.zadania.info/zes/0054643/HzesT119x.gif\" alt=\"C \" class=\"math\"> może mieć współrzędne <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT120x.gif\" alt=\"(− 17,− 3) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT121x.gif\" alt=\"(15,28) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT122x.gif\" alt=\"(− 9,7) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT123x.gif\" alt=\"(8,21) \" class=\"math\"> </span> "
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

                "tresc": "W każdym <img src=\"https://img.zadania.info/zes/0054643/HzesT124x.gif\" alt=\"n \" class=\"math\">–kącie wypukłym (<img src=\"https://img.zadania.info/zes/0054643/HzesT125x.gif\" alt=\"n ≥ 3 \" class=\"math\">) liczba przekątnych jest równa <img src=\"https://img.zadania.info/zes/0054643/HzesT126x.gif\" alt=\"n(n−-3) 2 \" class=\"math\">. Wielokątem wypukłym, w którym liczba przekątnych jest o 33 większa od liczby boków, jest <br class=\"newline\"> A) dziewięciokąt. </span>  B) jedenastokąt. </span>  C) dziesięciokąt. </span>  D) piętnastokąt. </span> "
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

                "tresc": "Prosta <img src=\"https://img.zadania.info/zes/0054643/HzesT127x.gif\" alt=\"k \" class=\"math\"> ma równanie <img src=\"https://img.zadania.info/zes/0054643/HzesT128x.gif\" alt=\"x = − 4y + 24 7 \" class=\"math\">. Współczynnik kierunkowy prostej prostopadłej do prostej <img src=\"https://img.zadania.info/zes/0054643/HzesT129x.gif\" alt=\"k \" class=\"math\"> jest równy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT130x.gif\" alt=\"7 4 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT131x.gif\" alt=\"( 7) − 4 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT132x.gif\" alt=\"( ) − 4 7 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT133x.gif\" alt=\"4 7 \" class=\"math\"> </span> "
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

                "tresc": "Okrąg o środku <img src=\"https://img.zadania.info/zes/0054643/HzesT134x.gif\" alt=\"S = (− 6,− 5) \" class=\"math\"> jest styczny do osi <img src=\"https://img.zadania.info/zes/0054643/HzesT135x.gif\" alt=\"Oy \" class=\"math\"> układu współrzędnych w punkcie <img src=\"https://img.zadania.info/zes/0054643/HzesT136x.gif\" alt=\"A \" class=\"math\"> oraz jest styczny do prostej <img src=\"https://img.zadania.info/zes/0054643/HzesT137x.gif\" alt=\"y = 1 \" class=\"math\"> w punkcie <img src=\"https://img.zadania.info/zes/0054643/HzesT138x.gif\" alt=\"B \" class=\"math\">. Promień okręgu o średnicy <img src=\"https://img.zadania.info/zes/0054643/HzesT139x.gif\" alt=\"AB \" class=\"math\"> jest równy <br class=\"newline\"> A) 6 </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT140x.gif\" alt=\"6√ 2- \" class=\"math\"> </span>  C) 12 </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT141x.gif\" alt=\" √ -- 3 2 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Przekątna graniastosłupa prawidłowego czworokątnego, w którym wysokość jest 2 razy dłuższa od krawędzi podstawy, jest równa 6. Wynika stąd, że objętość tego graniastosłupa jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0054643/HzesT142x.gif\" alt=\"24√ 6- \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT143x.gif\" alt=\"36√ 2- \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT144x.gif\" alt=\" √ -- 6 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT145x.gif\" alt=\" √ -- 12 6 \" class=\"math\"> </span> "
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

                "tresc": "W tabeli podano dane dotyczące wyników z pracy klasowej z matematyki uzyskanych w pewnej klasie. </p> <div class=\"center\">  <div class=\"tabular\"> <table class=\"tabular\" cellspacing=\"0\" cellpadding=\"0\"><colgroup><col></colgroup><colgroup><col></colgroup><colgroup><col></colgroup><colgroup><col></colgroup><colgroup><col></colgroup><colgroup><col></colgroup><colgroup><col></colgroup><tbody><tr style=\"vertical-align:baseline;\" class=\"wierszOtbl\"><td>Liczba uczniów</td><td>5</td><td>3</td><td>5</td><td>7</td><td>3</td><td>1</td> </tr><tr style=\"vertical-align:baseline;\" class=\"wierszEtbl\"><td> Ocena </td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td> </tr></tbody></table> </div></div> <p class=\"noindent\">Różnica średniej arytmetycznej ocen i mediany wynosi<br class=\"newline\"> A) 3,125 </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT146x.gif\" alt=\"1 8 \" class=\"math\"> </span>  C) 1,125 </span>  D) <img src=\"https://img.zadania.info/zes/0054643/HzesT147x.gif\" alt=\"7 8 \" class=\"math\"> </span> "
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

                "tresc": "Ile jest liczb naturalnych trzycyfrowych większych od 694, które mają trzy różne cyfry? <br class=\"newline\"> A) 216 </span>  B) 219 </span>  C) 221 </span>  D) 246 </span> </p><p class=\"indent\"> "
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

                "tresc": "W pudełku znajdują się płytki z literami. Na każdej płytce jest wydrukowana jedna litera – spółgłoskowa albo samogłoskowa. Płytek z literami spółgłoskowymi jest o 40% więcej niż płytek z literami samogłoskowymi. Losujemy jedną płytkę. Prawdopodobieństwo wylosowania płytki z literą samogłoskową jest równe <br class=\"newline\"> A) 0,6 </span>  B) <img src=\"https://img.zadania.info/zes/0054643/HzesT148x.gif\" alt=\"-5 12 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0054643/HzesT149x.gif\" alt=\"5 7 \" class=\"math\"> </span>  D) 0,4 </span> </p><p class=\"indent\"> "
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

                "tresc": "Rozwiąż nierówność: <img src=\"https://img.zadania.info/zes/0054643/HzesT150x.gif\" alt=\" 3 2 2 2(x + 2 ) (x − 3) < (x − 4)(x + 2) \" class=\"math\">. "
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

                "tresc": "Rozwiąż równanie <img src=\"https://img.zadania.info/zes/0054643/HzesT151x.gif\" alt=\"x+-12 x−5 = 3x \" class=\"math\">. "
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

                "tresc": "Funkcja liniowa <img src=\"https://img.zadania.info/zes/0054643/HzesT152x.gif\" alt=\"f \" class=\"math\"> przyjmuje wartość 2 dla argumentu <img src=\"https://img.zadania.info/zes/0054643/HzesT153x.gif\" alt=\"− 1 \" class=\"math\">, a ponadto <img src=\"https://img.zadania.info/zes/0054643/HzesT154x.gif\" alt=\"f (−2 )− f (7) = 3 \" class=\"math\">. Wyznacz wzór funkcji <img src=\"https://img.zadania.info/zes/0054643/HzesT155x.gif\" alt=\"f \" class=\"math\">. "
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

                "tresc": "Wykaż, że jeżeli <img src=\"https://img.zadania.info/zes/0054643/HzesT156x.gif\" alt=\"a \" class=\"math\"> jest parzystą liczbą całkowitą dodatnią, to liczba <img src=\"https://img.zadania.info/zes/0054643/HzesT157x.gif\" alt=\"a2 4 + a \" class=\"math\"> nie jest kwadratem liczby całkowitej. "
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

                "tresc": "Na bokach <img src=\"https://img.zadania.info/zes/0054643/HzesT158x.gif\" alt=\"AC \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT159x.gif\" alt=\"BC \" class=\"math\"> trójkąta <img src=\"https://img.zadania.info/zes/0054643/HzesT160x.gif\" alt=\"ABC \" class=\"math\"> wybrano odpowiednio punkty <img src=\"https://img.zadania.info/zes/0054643/HzesT161x.gif\" alt=\"E \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT162x.gif\" alt=\"D \" class=\"math\"> w ten sposób, że <img src=\"https://img.zadania.info/zes/0054643/HzesT163x.gif\" alt=\"|AE | : |EC | = |DB | : |DC | = 1 : 3 \" class=\"math\">. Punkt <img src=\"https://img.zadania.info/zes/0054643/HzesT164x.gif\" alt=\"S \" class=\"math\"> jest punktem wspólnym odcinków <img src=\"https://img.zadania.info/zes/0054643/HzesT165x.gif\" alt=\"AD \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT166x.gif\" alt=\"BE \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0054643/HzesT167x.gif\" alt=\"PIC\" class=\"graphics\" width=\"157\" height=\"162\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Oblicz pole trójkąta <img src=\"https://img.zadania.info/zes/0054643/HzesT168x.gif\" alt=\"ABS \" class=\"math\"> jeżeli pole trójkąta <img src=\"https://img.zadania.info/zes/0054643/HzesT169x.gif\" alt=\"DSE \" class=\"math\"> równe 36. "
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

                "tresc": "Ze zbioru wszystkich liczb naturalnych dwucyfrowych, których cyfra dziesiątek należy do zbioru <img src=\"https://img.zadania.info/zes/0054643/HzesT170x.gif\" alt=\"{1 ,3,4,5,6,7,8} \" class=\"math\">, a cyfra jedności należy do zbioru <img src=\"https://img.zadania.info/zes/0054643/HzesT171x.gif\" alt=\"{0,1,2,3,4 } \" class=\"math\">, losujemy jedną liczbę. Oblicz prawdopodobieństwo zdarzenia polegającego na tym, że wylosujemy liczbę dwucyfrową, która jest podzielna przez 8. "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0054643/HzesT172x.gif\" alt=\"B = (− 8,26 ) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0054643/HzesT173x.gif\" alt=\"C = (6,24) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT174x.gif\" alt=\"D = (− 16 ,2) \" class=\"math\"> są wierzchołkami trapezu równoramiennego <img src=\"https://img.zadania.info/zes/0054643/HzesT175x.gif\" alt=\"ABCD \" class=\"math\"> o podstawach <img src=\"https://img.zadania.info/zes/0054643/HzesT176x.gif\" alt=\"AB \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0054643/HzesT177x.gif\" alt=\"CD \" class=\"math\">. Wyznacz współrzędne wierzchołka <img src=\"https://img.zadania.info/zes/0054643/HzesT178x.gif\" alt=\"A \" class=\"math\"> tego trapezu jeżeli wiadomo, że <img src=\"https://img.zadania.info/zes/0054643/HzesT179x.gif\" alt=\"|AD | = |AB | = |BC | \" class=\"math\">. "
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
                "podpunkty": [],
                "wskazowka": null,
                "ramka": null,
                "extraRamka": null,
                "tresc2": null,
                "ramkapo": null,
                "numer": "Zadanie 1 (1 pkt)",

                "tresc": "Wartość wyrażenia <img src=\"https://img.zadania.info/zes/0066767/HzesT0x.gif\" alt=\" √ -- √3-- √ -- √ -- √ -- √ -- √3-- √ -- √ -- ( 2 − 3) ⋅( 8 − 6) − ( 6 + 2 + 3) ⋅( 6− 2 2) \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT1x.gif\" alt=\" -- -- √ 2 − √ 6 \" class=\"math\"> </span>  B) 2 </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT2x.gif\" alt=\"√ -- √ -- 3 + 2 6 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT3x.gif\" alt=\"√3-- 2 \" class=\"math\"> </span> "
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

                "tresc": "Funkcja wykładnicza określona wzorem <img src=\"https://img.zadania.info/zes/0066767/HzesT4x.gif\" alt=\" √ -- x f(x) = ( 2 ) \" class=\"math\"> przyjmuje wartość 3 dla argumentu <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT5x.gif\" alt=\" √ -- x = log 2 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT6x.gif\" alt=\"x = lo g34 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT7x.gif\" alt=\"x = log 32 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT8x.gif\" alt=\"x = 2 log 23 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0066767/HzesT9x.gif\" alt=\"x \" class=\"math\"> stanowi 125% liczby dodatniej <img src=\"https://img.zadania.info/zes/0066767/HzesT10x.gif\" alt=\"y \" class=\"math\">. Wynika stąd, że liczba <img src=\"https://img.zadania.info/zes/0066767/HzesT11x.gif\" alt=\"y \" class=\"math\"> to <br class=\"newline\"> A) 125% liczby <img src=\"https://img.zadania.info/zes/0066767/HzesT12x.gif\" alt=\"x \" class=\"math\"> </span>  B) 75% liczby <img src=\"https://img.zadania.info/zes/0066767/HzesT13x.gif\" alt=\"x \" class=\"math\"> </span>  C) 25% liczby <img src=\"https://img.zadania.info/zes/0066767/HzesT14x.gif\" alt=\"x \" class=\"math\"> </span>  D) 80% liczby <img src=\"https://img.zadania.info/zes/0066767/HzesT15x.gif\" alt=\"x \" class=\"math\"> </span> "
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

                "tresc": "Suma <img src=\"https://img.zadania.info/zes/0066767/HzesT16x.gif\" alt=\" √3---- 2 3 log 100 + log 100 \" class=\"math\"> jest równa <br class=\"newline\"> A) 6 </span>  B) 3 </span>  C) 4 </span>  D) 5 </span> "
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

                "tresc": "Liczbą niewymierną jest liczba<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT17x.gif\" alt=\" 1 − 2 4 2 ⋅3 ⋅7 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT18x.gif\" alt=\" 1 1 32 ⋅ 42 ⋅ 7 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT19x.gif\" alt=\" 1 1 22 ⋅82 ⋅72 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT20x.gif\" alt=\" 1 1 9 2 ⋅4 −2 ⋅72 \" class=\"math\"> </span> "
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

                "tresc": "Wskaż rysunek, na którym przedstawiony jest zbiór wszystkich liczb rzeczywistych spełniających jednocześnie nierówności <img src=\"https://img.zadania.info/zes/0066767/HzesT21x.gif\" alt=\"0 < 7 + 3x \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0066767/HzesT22x.gif\" alt=\"7− 3x ≤ 5x − 3 \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT23x.gif\" alt=\"PIC\" class=\"graphics\" width=\"452\" height=\"183\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
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

                "tresc": "Gdy przesuniemy wykres funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT24x.gif\" alt=\"y = f(x ) \" class=\"math\"> o 2 jednostki w lewo i o 3 jednostki w dół, to otrzymamy wykres funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT25x.gif\" alt=\"y = 2x + 1 \" class=\"math\">. Zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT26x.gif\" alt=\"f(x ) = 2x − 6 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT27x.gif\" alt=\"f (x) = 2x \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT28x.gif\" alt=\"f(x ) = 2x + 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT29x.gif\" alt=\"f(x) = 2x + 2 \" class=\"math\"> </span> "
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

                "tresc": "Na rysunku przedstawiono fragmenty dwóch prostych na płaszczyźnie oraz zaznaczono kilka punktów o współrzędnych całkowitych, przez które przechodzą te proste. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT30x.gif\" alt=\"PIC\" class=\"graphics\" width=\"217\" height=\"175\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Jeżeli <img src=\"https://img.zadania.info/zes/0066767/HzesT31x.gif\" alt=\"P = (x,y) \" class=\"math\"> jest punktem wspólnym prostych, których fragmenty przedstawiono na rysunku, to <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT32x.gif\" alt=\"x = 1 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT33x.gif\" alt=\"x = 4 7 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT34x.gif\" alt=\" 2 x = 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT35x.gif\" alt=\" 5 x = 8 \" class=\"math\"> </span> "
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

                "tresc": "Na rysunku przedstawiono wykres funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT36x.gif\" alt=\"f \" class=\"math\"> określonej w zbiorze <img src=\"https://img.zadania.info/zes/0066767/HzesT37x.gif\" alt=\"(− 3,9) \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT38x.gif\" alt=\"PIC\" class=\"graphics\" width=\"320\" height=\"167\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wskaż zdanie prawdziwe. <br class=\"newline\"> A) Zbiorem wartości funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT39x.gif\" alt=\"f \" class=\"math\"> jest przedział <img src=\"https://img.zadania.info/zes/0066767/HzesT40x.gif\" alt=\"⟨− 3,3) \" class=\"math\"> </span><br class=\"newline\"> B) Funkcje <img src=\"https://img.zadania.info/zes/0066767/HzesT41x.gif\" alt=\"y = f(x) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT42x.gif\" alt=\"y = f(x) + 1 \" class=\"math\"> mają tyle samo miejsc zerowych </span><br class=\"newline\"> C) Funkcja <img src=\"https://img.zadania.info/zes/0066767/HzesT43x.gif\" alt=\"f \" class=\"math\"> osiąga wartość równą 2 w trzech punktach. </span><br class=\"newline\"> D) Wartość funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT44x.gif\" alt=\"f \" class=\"math\"> dla argumentu <img src=\"https://img.zadania.info/zes/0066767/HzesT45x.gif\" alt=\"x = − 1 \" class=\"math\"> jest liczbą dodatnią. </span> "
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

                "tresc": "Zdanie „kwadrat różnicy dwóch kolejnych liczb naturalnych nieparzystych jest niemniejszy niż 5” można zapisać w postaci nierówności: <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT46x.gif\" alt=\" 2 [(n + 3) − (n + 2)] ≥ 5 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT47x.gif\" alt=\" 2 2 (2n + 3 ) − (2n + 1) ≥ 5 \" class=\"math\"> </span><br>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT48x.gif\" alt=\"(2n + 3)2 − (2n + 1 )2 > 5 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT49x.gif\" alt=\"[(2n + 3) − (2n + 1 )]2 ≥ 5 \" class=\"math\"> </span> "
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

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0066767/HzesT50x.gif\" alt=\"f \" class=\"math\"> jest określona wzorem <img src=\"https://img.zadania.info/zes/0066767/HzesT51x.gif\" alt=\"f(x ) = −x 2 + 4x \" class=\"math\"> dla każdej liczby rzeczywistej <img src=\"https://img.zadania.info/zes/0066767/HzesT52x.gif\" alt=\"x \" class=\"math\">. Zbiorem wartości funkcji <img src=\"https://img.zadania.info/zes/0066767/HzesT53x.gif\" alt=\"f \" class=\"math\"> jest przedział <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT54x.gif\" alt=\"(− ∞ ,− 2⟩ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT55x.gif\" alt=\"⟨2,+ ∞ ) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT56x.gif\" alt=\"⟨− 4,+ ∞ ) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT57x.gif\" alt=\"(− ∞ ,4⟩ \" class=\"math\"> </span> "
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

                "tresc": "Funkcja kwadratowa <img src=\"https://img.zadania.info/zes/0066767/HzesT58x.gif\" alt=\"f \" class=\"math\"> określona wzorem <img src=\"https://img.zadania.info/zes/0066767/HzesT59x.gif\" alt=\" 1 f(x) = 2(x− 1)(x + 3) \" class=\"math\"> jest rosnąca w przedziale <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT60x.gif\" alt=\"⟨− 1,+ ∞ ) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT61x.gif\" alt=\"(− ∞ ,− 1⟩ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT62x.gif\" alt=\"(− ∞ ,− 2⟩ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT63x.gif\" alt=\"⟨− 2,+ ∞ ) \" class=\"math\"> </span> "
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

                "tresc": "Liczba rozwiązań równania <img src=\"https://img.zadania.info/zes/0066767/HzesT64x.gif\" alt=\"x2+-3x+2- x+2 = 0 \" class=\"math\"> jest równa <br class=\"newline\"> A) 0 </span>  B) 1 </span>  C) 2 </span>  D) 3 </span> "
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

                "tresc": "Suma wszystkich trzycyfrowych liczb parzystych jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT65x.gif\" alt=\"100+12000⋅ 449 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT66x.gif\" alt=\"200+2998 ⋅450 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT67x.gif\" alt=\"100+998⋅ 449 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT68x.gif\" alt=\"100+-998-⋅450 2 \" class=\"math\"> </span> "
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

                "tresc": "Ciąg geometryczny <img src=\"https://img.zadania.info/zes/0066767/HzesT69x.gif\" alt=\"(an) \" class=\"math\">, określony dla każdej liczby naturalnej <img src=\"https://img.zadania.info/zes/0066767/HzesT70x.gif\" alt=\"n ≥ 1 \" class=\"math\">, jest rosnący i wszystkie jego wyrazy są dodatnie. Ponadto spełniony jest warunek <img src=\"https://img.zadania.info/zes/0066767/HzesT71x.gif\" alt=\"a5 = a1 ⋅a2 \" class=\"math\"> . Niech <img src=\"https://img.zadania.info/zes/0066767/HzesT72x.gif\" alt=\"q \" class=\"math\"> oznacza iloraz ciągu <img src=\"https://img.zadania.info/zes/0066767/HzesT73x.gif\" alt=\"(an ) \" class=\"math\">. Wtedy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT74x.gif\" alt=\"a1 = 1q \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT75x.gif\" alt=\"a1 = q \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT76x.gif\" alt=\" 2 a1 = q \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT77x.gif\" alt=\" 3 a1 = q \" class=\"math\"> </span> "
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

                "tresc": "Wyrażenie <img src=\"https://img.zadania.info/zes/0066767/HzesT78x.gif\" alt=\"cos2α−sin2α sin2α+-cos2α- 1− sin2α ⋅ sin2α+1 \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0066767/HzesT79x.gif\" alt=\"α \" class=\"math\"> jest kątem ostrym, jest równe<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT80x.gif\" alt=\"sin 22α \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT81x.gif\" alt=\"1− tg 22α \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT82x.gif\" alt=\"--12-- cos 2α \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT83x.gif\" alt=\"cos22α − sin2 2α \" class=\"math\"> </span> "
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

                "tresc": "Dany jest ciąg geometryczny <img src=\"https://img.zadania.info/zes/0066767/HzesT84x.gif\" alt=\"(an) \" class=\"math\"> o wszystkich wyrazach niezerowych i pierwszym wyrazie <img src=\"https://img.zadania.info/zes/0066767/HzesT85x.gif\" alt=\"a = 6 1 \" class=\"math\">. Jeżeli <img src=\"https://img.zadania.info/zes/0066767/HzesT86x.gif\" alt=\"3a + 4a = 0 3 4 \" class=\"math\">, to wzorem ogólnym ciągu <img src=\"https://img.zadania.info/zes/0066767/HzesT87x.gif\" alt=\"(a ) n \" class=\"math\"> jest <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT88x.gif\" alt=\" ( 3)n an = 6⋅ − 4 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT89x.gif\" alt=\" (3 )n−1 an = 6 ⋅ 4 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT90x.gif\" alt=\" ( ) an = − 8 ⋅ − 3 n 4 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT91x.gif\" alt=\" ( 3)n an = 8⋅ 4 \" class=\"math\"> </span> "
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

                "tresc": "Bok rombu ma długość równą <img src=\"https://img.zadania.info/zes/0066767/HzesT92x.gif\" alt=\" √ -- 5 2 \" class=\"math\">. Przekątne tego rombu nie mogą mieć długości <br class=\"newline\"> A) 14 i 2 </span>  B) 10 i 10 </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT93x.gif\" alt=\"8√ 2- \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT94x.gif\" alt=\"6√ 2- \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT95x.gif\" alt=\"6 √ 2- \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT96x.gif\" alt=\"4√ 2- \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0066767/HzesT97x.gif\" alt=\"A,B ,C \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT98x.gif\" alt=\"D \" class=\"math\"> leżą na okręgu o środku w punkcie <img src=\"https://img.zadania.info/zes/0066767/HzesT99x.gif\" alt=\"O \" class=\"math\">. Cięciwy <img src=\"https://img.zadania.info/zes/0066767/HzesT100x.gif\" alt=\"DB \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT101x.gif\" alt=\"AC \" class=\"math\"> przecinają się w punkcie <img src=\"https://img.zadania.info/zes/0066767/HzesT102x.gif\" alt=\"E \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0066767/HzesT103x.gif\" alt=\" ∘ |∡ACB | = 58 \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0066767/HzesT104x.gif\" alt=\" ∘ |∡AEB | = 14 5 \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT105x.gif\" alt=\"PIC\" class=\"graphics\" width=\"211\" height=\"187\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Miara kąta <img src=\"https://img.zadania.info/zes/0066767/HzesT106x.gif\" alt=\"DAC \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT107x.gif\" alt=\"58∘ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT108x.gif\" alt=\"8 7∘ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT109x.gif\" alt=\"32∘ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT110x.gif\" alt=\"85∘ \" class=\"math\"> </span> "
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

                "tresc": "W trójkącie <img src=\"https://img.zadania.info/zes/0066767/HzesT111x.gif\" alt=\"ABC \" class=\"math\"> bok <img src=\"https://img.zadania.info/zes/0066767/HzesT112x.gif\" alt=\"AC \" class=\"math\"> ma długość 10, a wysokość <img src=\"https://img.zadania.info/zes/0066767/HzesT113x.gif\" alt=\"CD \" class=\"math\"> tego trójkąta dzieli bok <img src=\"https://img.zadania.info/zes/0066767/HzesT114x.gif\" alt=\"AB \" class=\"math\"> na odcinki o długościach <img src=\"https://img.zadania.info/zes/0066767/HzesT115x.gif\" alt=\"|AD | = 6 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT116x.gif\" alt=\"|BD | = 24 \" class=\"math\"> (zobacz rysunek obok). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT117x.gif\" alt=\"PIC\" class=\"graphics\" width=\"217\" height=\"94\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Długość boku <img src=\"https://img.zadania.info/zes/0066767/HzesT118x.gif\" alt=\"BC \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT119x.gif\" alt=\"√ --- 10 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT120x.gif\" alt=\" √ --- 4 35 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT121x.gif\" alt=\"8√ 1-0 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT122x.gif\" alt=\"16 √ 2- \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Dany jest odcinek <img src=\"https://img.zadania.info/zes/0066767/HzesT123x.gif\" alt=\"AB \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0066767/HzesT124x.gif\" alt=\"A = (− 4,1 6) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT125x.gif\" alt=\"B = (− 8,10) \" class=\"math\"> oraz prosta <img src=\"https://img.zadania.info/zes/0066767/HzesT126x.gif\" alt=\"k \" class=\"math\"> o równaniu <img src=\"https://img.zadania.info/zes/0066767/HzesT127x.gif\" alt=\"y = − 3x + b \" class=\"math\">. Jeżeli prosta <img src=\"https://img.zadania.info/zes/0066767/HzesT128x.gif\" alt=\"k \" class=\"math\"> przecina odcinek <img src=\"https://img.zadania.info/zes/0066767/HzesT129x.gif\" alt=\"AB \" class=\"math\"> w takim punkcie <img src=\"https://img.zadania.info/zes/0066767/HzesT130x.gif\" alt=\"S \" class=\"math\">, że <img src=\"https://img.zadania.info/zes/0066767/HzesT131x.gif\" alt=\"|AS | = |SB | \" class=\"math\">, to liczba <img src=\"https://img.zadania.info/zes/0066767/HzesT132x.gif\" alt=\"b \" class=\"math\"> jest równa <br class=\"newline\"> A) 31 </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT133x.gif\" alt=\"− 5 \" class=\"math\"> </span>  C) 4 </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT134x.gif\" alt=\"− 14 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Proste o równaniach <img src=\"https://img.zadania.info/zes/0066767/HzesT135x.gif\" alt=\"y = − -1--x− 1 m+ 2 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT136x.gif\" alt=\"y = 1 x+ 1 3 \" class=\"math\"> są równoległe. Wynika stąd, że <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT137x.gif\" alt=\" 5 m = 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT138x.gif\" alt=\"m = 1 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT139x.gif\" alt=\"m = 73 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT140x.gif\" alt=\"m = − 5 \" class=\"math\"> </span> "
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

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0066767/HzesT141x.gif\" alt=\"A = (3 ,− 5 ) \" class=\"math\"> jest wierzchołkiem sześciokąta foremnego <img src=\"https://img.zadania.info/zes/0066767/HzesT142x.gif\" alt=\"ABCDEF \" class=\"math\"> wpisanego w okrąg o środku <img src=\"https://img.zadania.info/zes/0066767/HzesT143x.gif\" alt=\"S = (1,1) \" class=\"math\">. Pole tego sześciokąta jest równe <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT144x.gif\" alt=\" √ -- 60 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT145x.gif\" alt=\" √ -- 10 3 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT146x.gif\" alt=\" √ -- 27 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT147x.gif\" alt=\" √ --- 30 1 0 \" class=\"math\"> </span> "
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

                "tresc": "Na rysunku przedstawiono trzy ﬁgury. Figura <img src=\"https://img.zadania.info/zes/0066767/HzesT148x.gif\" alt=\"F1 \" class=\"math\"> powstała z koła o promieniu <img src=\"https://img.zadania.info/zes/0066767/HzesT149x.gif\" alt=\"4r \" class=\"math\">, z którego wycięto wnętrza czterech kół o promieniu <img src=\"https://img.zadania.info/zes/0066767/HzesT150x.gif\" alt=\"r \" class=\"math\">. Figura <img src=\"https://img.zadania.info/zes/0066767/HzesT151x.gif\" alt=\"F2 \" class=\"math\"> składa się z dwóch stycznych zewnętrznie kół o promieniach <img src=\"https://img.zadania.info/zes/0066767/HzesT152x.gif\" alt=\"3r \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT153x.gif\" alt=\"2r \" class=\"math\">. Figura <img src=\"https://img.zadania.info/zes/0066767/HzesT154x.gif\" alt=\"F3 \" class=\"math\"> powstała z koła o promieniu <img src=\"https://img.zadania.info/zes/0066767/HzesT155x.gif\" alt=\"4r \" class=\"math\">, z którego wycięto wnętrza dwóch kół o promieniu <img src=\"https://img.zadania.info/zes/0066767/HzesT156x.gif\" alt=\"2r \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT157x.gif\" alt=\"PIC\" class=\"graphics\" width=\"573\" height=\"159\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Jeżeli <img src=\"https://img.zadania.info/zes/0066767/HzesT158x.gif\" alt=\"P 1 \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0066767/HzesT159x.gif\" alt=\"P2 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT160x.gif\" alt=\"P3 \" class=\"math\"> oznaczają pola ﬁgur odpowiednio <img src=\"https://img.zadania.info/zes/0066767/HzesT161x.gif\" alt=\"F1 \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0066767/HzesT162x.gif\" alt=\"F2 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT163x.gif\" alt=\"F3 \" class=\"math\">, to <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT164x.gif\" alt=\"P = P 1 2 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT165x.gif\" alt=\"P ⁄= P 1 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT166x.gif\" alt=\"P = P = P 1 2 3 \" class=\"math\"> </span><br>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT167x.gif\" alt=\"P1 = P 3 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT168x.gif\" alt=\"P 1 ⁄= P2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT169x.gif\" alt=\"P2 > P1 \" class=\"math\"> </span> "
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

                "tresc": "W pudełku znajdują się tylko kule białe i kule czerwone. Stosunek liczby kul białych do liczby kul czerwonych jest równy 4:5. Wylosowanie każdej kuli z tego pudełka jest jednakowo prawdopodobne. Losujemy jedną kulę. Niech <img src=\"https://img.zadania.info/zes/0066767/HzesT170x.gif\" alt=\"A \" class=\"math\"> oznacza zdarzenie polegające na tym, że wylosowana z pudełka kula będzie biała. Prawdopodobieństwo zdarzenia <img src=\"https://img.zadania.info/zes/0066767/HzesT171x.gif\" alt=\"A \" class=\"math\"> jest równe <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT172x.gif\" alt=\"1 4 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT173x.gif\" alt=\"1 5 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT174x.gif\" alt=\"4 9 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT175x.gif\" alt=\"5 9 \" class=\"math\"> </span> "
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

                "tresc": "Sześciowyrazowy ciąg liczbowy <img src=\"https://img.zadania.info/zes/0066767/HzesT176x.gif\" alt=\"(1,3,x + 3,2x ,7,9) \" class=\"math\"> jest niemalejący. Mediana wyrazów tego ciągu jest równa 6. Wynika stąd, że <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0066767/HzesT177x.gif\" alt=\"x = 3,5 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0066767/HzesT178x.gif\" alt=\"x = 83 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0066767/HzesT179x.gif\" alt=\" 10 x = 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0066767/HzesT180x.gif\" alt=\"x = 3 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Rozwiąż równanie: <img src=\"https://img.zadania.info/zes/0066767/HzesT181x.gif\" alt=\" 2 3(2x + 4)(x− 1)+ 5(x− 1) = 4(x + 2)(x − 1 ) \" class=\"math\">. "
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

                "tresc": "W graniastosłupie prawidłowym trójkątnym powierzchnia boczna po rozwinięciu jest kwadratem o polu <img src=\"https://img.zadania.info/zes/0066767/HzesT182x.gif\" alt=\" 2 32 4 cm \" class=\"math\">. Oblicz objętość tej bryły . "
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

                "tresc": "Wykaż, że dla dowolnej liczby całkowitej <img src=\"https://img.zadania.info/zes/0066767/HzesT183x.gif\" alt=\"k \" class=\"math\"> prawdziwa jest nierówność <img src=\"https://img.zadania.info/zes/0066767/HzesT184x.gif\" alt=\"1 6k2 + 16k+ 3 > 0 \" class=\"math\">. "
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

                "tresc": "Rozwiąż równanie </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0066767/HzesT185x.gif\" alt=\"5x−--3- 3x-−--1 7x− 1 = 4x + 2. \" class=\"math-display\"></div> <p class=\"nopar\"> "
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

                "tresc": "Na bokach <img src=\"https://img.zadania.info/zes/0066767/HzesT186x.gif\" alt=\"AB \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT187x.gif\" alt=\"AD \" class=\"math\"> rombu <img src=\"https://img.zadania.info/zes/0066767/HzesT188x.gif\" alt=\"ABCD \" class=\"math\"> wybrano odpowiednio punkty <img src=\"https://img.zadania.info/zes/0066767/HzesT189x.gif\" alt=\"E \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT190x.gif\" alt=\"F \" class=\"math\"> tak, że <img src=\"https://img.zadania.info/zes/0066767/HzesT191x.gif\" alt=\"|AE | = |AF | \" class=\"math\">. Pole pięciokąta <img src=\"https://img.zadania.info/zes/0066767/HzesT192x.gif\" alt=\"BCDF E \" class=\"math\"> jest 17 razy większe niż pole trójkąta <img src=\"https://img.zadania.info/zes/0066767/HzesT193x.gif\" alt=\"AEF \" class=\"math\">. Punkt <img src=\"https://img.zadania.info/zes/0066767/HzesT194x.gif\" alt=\"G \" class=\"math\"> jest punktem wspólnym odcinka <img src=\"https://img.zadania.info/zes/0066767/HzesT195x.gif\" alt=\"EF \" class=\"math\"> i przekątnej <img src=\"https://img.zadania.info/zes/0066767/HzesT196x.gif\" alt=\"AC \" class=\"math\">. Oblicz Oblicz <img src=\"https://img.zadania.info/zes/0066767/HzesT197x.gif\" alt=\"|AG| |AC| \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0066767/HzesT198x.gif\" alt=\"PIC\" class=\"graphics\" width=\"199\" height=\"139\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0066767/HzesT199x.gif\" alt=\"A = (2,− 4) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0066767/HzesT200x.gif\" alt=\"B = (2,4) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0066767/HzesT201x.gif\" alt=\"C = (− 5,− 4) \" class=\"math\"> są wierzchołkami trójkąta <img src=\"https://img.zadania.info/zes/0066767/HzesT202x.gif\" alt=\"ABC \" class=\"math\">. Napisz równanie prostej zawierającej tą średnicę okręgu opisanego na trójkącie <img src=\"https://img.zadania.info/zes/0066767/HzesT203x.gif\" alt=\"ABC \" class=\"math\">, której końcem jest punkt <img src=\"https://img.zadania.info/zes/0066767/HzesT204x.gif\" alt=\"A \" class=\"math\">. </p><p class=\"indent\"> "
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

                "tresc": "Dany jest ciąg <img src=\"https://img.zadania.info/zes/0066767/HzesT205x.gif\" alt=\"(an ) \" class=\"math\"> określony wzorem <img src=\"https://img.zadania.info/zes/0066767/HzesT206x.gif\" alt=\"an = 66−-8n 9 \" class=\"math\"> dla każdej liczby naturalnej <img src=\"https://img.zadania.info/zes/0066767/HzesT207x.gif\" alt=\"n ≥ 1 \" class=\"math\">. Trójwyrazowy ciąg <img src=\"https://img.zadania.info/zes/0066767/HzesT208x.gif\" alt=\" 2 (a15,1− x ,a9) \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0066767/HzesT209x.gif\" alt=\"x \" class=\"math\"> jest dodatnią liczbą rzeczywistą, jest geometryczny. Oblicz <img src=\"https://img.zadania.info/zes/0066767/HzesT210x.gif\" alt=\"x \" class=\"math\"> oraz iloraz tego ciągu geometrycznego. "
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

                "tresc": "Wyrażenie <img src=\"https://img.zadania.info/zes/0070465/HzesT0x.gif\" alt=\" ( ) ( ) 30 W = 34 40 43 \" class=\"math\"> jest równe<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT1x.gif\" alt=\"( )10 34 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT2x.gif\" alt=\"( )70 34 \" class=\"math\"> </span>  C) 1 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT3x.gif\" alt=\"(3 )1200 4 \" class=\"math\"> </span> "
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

                "tresc": "Liczbę <img src=\"https://img.zadania.info/zes/0070465/HzesT4x.gif\" alt=\"∘ ---- 3√- 11 √-432 \" class=\"math\"> można zapisać w postaci <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT5x.gif\" alt=\"614 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT6x.gif\" alt=\" 1 2 6 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT7x.gif\" alt=\"√16- 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT8x.gif\" alt=\"√6--- 32 \" class=\"math\"> </span> "
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

                "tresc": "Rozwiązaniem równania <img src=\"https://img.zadania.info/zes/0070465/HzesT9x.gif\" alt=\"-x−3- 5 2x+ 6 = − 2 \" class=\"math\"> jest liczba<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT10x.gif\" alt=\"− 2 \" class=\"math\"> </span>  B) 2 </span>  C) 4 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT11x.gif\" alt=\"− 4 \" class=\"math\"> </span> "
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

                "tresc": "Cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT12x.gif\" alt=\"x \" class=\"math\"> pewnego towaru dwukrotnie obniżono o 50% i otrzymano cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT13x.gif\" alt=\"y \" class=\"math\">. Aby przywrócić cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT14x.gif\" alt=\"x \" class=\"math\">, nową cenę <img src=\"https://img.zadania.info/zes/0070465/HzesT15x.gif\" alt=\"y \" class=\"math\"> należy podnieść o <br class=\"newline\"> A) o 100% </span>  B) o 300% </span>  C) o 75% </span>  D) o 200% </span> "
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

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0070465/HzesT16x.gif\" alt=\" [ ] log log (log√ -4) 4 16 2 \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT17x.gif\" alt=\"− 12 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT18x.gif\" alt=\"12 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT19x.gif\" alt=\"14 \" class=\"math\"> </span>  D) 2 </span> "
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

                "tresc": "Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT20x.gif\" alt=\"a− 1a = 2 \" class=\"math\">, to liczba <img src=\"https://img.zadania.info/zes/0070465/HzesT21x.gif\" alt=\"a4 + 14 a \" class=\"math\"> jest równa <br class=\"newline\"> A) 36 </span>  B) 34 </span>  C) 6 </span>  D) 16 </span> "
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

                "tresc": "Na rysunkach przedstawione są wykresy funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT22x.gif\" alt=\"f \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT23x.gif\" alt=\"g \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT24x.gif\" alt=\"PIC\" class=\"graphics\" width=\"482\" height=\"166\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wykres funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT25x.gif\" alt=\"f \" class=\"math\"> przekształcono i otrzymano wykres funkcji <img src=\"https://img.zadania.info/zes/0070465/HzesT26x.gif\" alt=\"g \" class=\"math\">, zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT27x.gif\" alt=\"g(x ) = f(x − 2) + 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT28x.gif\" alt=\"g(x ) = f(x + 2) + 3 \" class=\"math\"> </span><br>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT29x.gif\" alt=\"g(x) = f(x − 2)− 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT30x.gif\" alt=\"g (x) = f(x + 2) − 3 \" class=\"math\"> </span> "
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

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0070465/HzesT31x.gif\" alt=\" 2 f (x) = (m + m)x + 7 \" class=\"math\"> jest funkcją stałą. Wynika stąd, że<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT32x.gif\" alt=\"m = − 1 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT33x.gif\" alt=\"m = 0 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT34x.gif\" alt=\"m = 1 lub m = 0 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT35x.gif\" alt=\"m = − 1 lub m = 0 \" class=\"math\"> </span> "
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

                "tresc": "Przedział <img src=\"https://img.zadania.info/zes/0070465/HzesT36x.gif\" alt=\"⟨4,+ ∞ ) \" class=\"math\"> jest zbiorem rozwiązań nierówności<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT37x.gif\" alt=\"16 − 4x ≥ 0 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT38x.gif\" alt=\"16 + 4x ≥ 0 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT39x.gif\" alt=\"16 − 4x ≤ 0 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT40x.gif\" alt=\"16 + 4x ≤ 0 \" class=\"math\"> </span> "
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

                "tresc": "Równanie <img src=\"https://img.zadania.info/zes/0070465/HzesT41x.gif\" alt=\" 2 x (2 − x ) = (x − 2) \" class=\"math\"> w zbiorze liczb rzeczywistych <br class=\"newline\"> A) nie ma rozwiązań </span><br class=\"newline\"> B) ma dokładnie jedno rozwiązanie: <img src=\"https://img.zadania.info/zes/0070465/HzesT42x.gif\" alt=\"x = 2 \" class=\"math\"> </span><br class=\"newline\"> C) ma dokładnie jedno rozwiązanie: <img src=\"https://img.zadania.info/zes/0070465/HzesT43x.gif\" alt=\"x = 0 \" class=\"math\"> </span><br class=\"newline\"> D) ma dwa różne rozwiązania: <img src=\"https://img.zadania.info/zes/0070465/HzesT44x.gif\" alt=\"x = 1 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT45x.gif\" alt=\"x = 2 \" class=\"math\"> </span> "
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

                "tresc": "Rozwiązanie <img src=\"https://img.zadania.info/zes/0070465/HzesT46x.gif\" alt=\"(x ,y) \" class=\"math\"> układu równań <img src=\"https://img.zadania.info/zes/0070465/HzesT47x.gif\" alt=\"{ y− x = 4 3y+ x = 10 \" class=\"math\"> spełnia warunki <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT48x.gif\" alt=\"x > 0 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT49x.gif\" alt=\"y > 0 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT50x.gif\" alt=\"x < 0 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT51x.gif\" alt=\"y > 0 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT52x.gif\" alt=\"x < 0 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT53x.gif\" alt=\"y < 0 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT54x.gif\" alt=\"x > 0 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT55x.gif\" alt=\"y < 0 \" class=\"math\"> </span> "
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

                "tresc": "Na rysunku poniżej przedstawiono fragment wykresu funkcji kwadratowej <img src=\"https://img.zadania.info/zes/0070465/HzesT56x.gif\" alt=\"f \" class=\"math\"> określonej wzorem <img src=\"https://img.zadania.info/zes/0070465/HzesT57x.gif\" alt=\" 2 f (x) = −x + bx + c \" class=\"math\">. Wierzchołek paraboli będącej wykresem tej funkcji ma współrzędne <img src=\"https://img.zadania.info/zes/0070465/HzesT58x.gif\" alt=\"(1,− 1) \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT59x.gif\" alt=\"PIC\" class=\"graphics\" width=\"187\" height=\"167\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Stąd wynika, że: <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT60x.gif\" alt=\"bc = 0 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT61x.gif\" alt=\"bc > 0 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT62x.gif\" alt=\"bc = − 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT63x.gif\" alt=\"bc < − 2 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Prosta <img src=\"https://img.zadania.info/zes/0070465/HzesT64x.gif\" alt=\"l \" class=\"math\"> jest równoległa do prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT65x.gif\" alt=\"y = − 1 x+ 2 3 \" class=\"math\">. Na prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT66x.gif\" alt=\"l \" class=\"math\"> leży punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT67x.gif\" alt=\"P = (3,− 2) \" class=\"math\">. Zatem równanie prostej <img src=\"https://img.zadania.info/zes/0070465/HzesT68x.gif\" alt=\"l \" class=\"math\"> ma postać <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT69x.gif\" alt=\" 1 y = − 3x− 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT70x.gif\" alt=\"y = 3x − 11 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT71x.gif\" alt=\"y = − 13x− 1 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT72x.gif\" alt=\"y = 3x \" class=\"math\"> </span> "
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

                "tresc": "Ciąg <img src=\"https://img.zadania.info/zes/0070465/HzesT73x.gif\" alt=\"(an) \" class=\"math\"> spełnia warunek <img src=\"https://img.zadania.info/zes/0070465/HzesT74x.gif\" alt=\"an+2 = 2n 2 \" class=\"math\"> dla <img src=\"https://img.zadania.info/zes/0070465/HzesT75x.gif\" alt=\"n ≥ 1 \" class=\"math\">. Różnica <img src=\"https://img.zadania.info/zes/0070465/HzesT76x.gif\" alt=\"a7 − a6 \" class=\"math\"> jest równa <br class=\"newline\"> A) 26 </span>  B) 20 </span>  C) 36 </span>  D) 18 </span> "
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

                "tresc": "Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT77x.gif\" alt=\"0∘ < α < 90∘ \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0070465/HzesT78x.gif\" alt=\" √- sin α = 33-tg α \" class=\"math\">, to<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT79x.gif\" alt=\"cosα = 1 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT80x.gif\" alt=\" √- co sα = -3- 3 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT81x.gif\" alt=\" 2 co sα = 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT82x.gif\" alt=\" √ -- cosα = 3 \" class=\"math\"> </span> "
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

                "tresc": "Mediana danych <img src=\"https://img.zadania.info/zes/0070465/HzesT83x.gif\" alt=\"13 ,1 ,5,a,3,4 \" class=\"math\"> jest równa 4. Wówczas <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT84x.gif\" alt=\"a = 6 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT85x.gif\" alt=\"a = 4 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT86x.gif\" alt=\"a = 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT87x.gif\" alt=\"a = 3 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Dany jest ciąg geometryczny <img src=\"https://img.zadania.info/zes/0070465/HzesT88x.gif\" alt=\"(an) \" class=\"math\">, określony dla <img src=\"https://img.zadania.info/zes/0070465/HzesT89x.gif\" alt=\"n ≥ 1 \" class=\"math\">, o którym wiemy, że: <img src=\"https://img.zadania.info/zes/0070465/HzesT90x.gif\" alt=\"a1 = 3 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT91x.gif\" alt=\"a2 = 1 8 \" class=\"math\">. Wtedy <img src=\"https://img.zadania.info/zes/0070465/HzesT92x.gif\" alt=\"an = 23328 \" class=\"math\"> dla <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT93x.gif\" alt=\"n = 7 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT94x.gif\" alt=\"n = 6 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT95x.gif\" alt=\"n = 5 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT96x.gif\" alt=\"n = 4 \" class=\"math\"> </span> "
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

                "tresc": "Prosta przechodząca przez punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT97x.gif\" alt=\"A = (1 ,6) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT98x.gif\" alt=\"B = (− 3,− 2) \" class=\"math\"> jest określona równaniem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT99x.gif\" alt=\"y = − 2x − 4 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT100x.gif\" alt=\"y = 2x − 8 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT101x.gif\" alt=\"y = − 2x + 8 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT102x.gif\" alt=\"y = 2x + 4 \" class=\"math\"> </span> "
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

                "tresc": "Wszystkie wyrazy rosnącego ciągu arytmetycznego <img src=\"https://img.zadania.info/zes/0070465/HzesT103x.gif\" alt=\"(an) \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0070465/HzesT104x.gif\" alt=\"n ≥ 1 \" class=\"math\"> są dodatnimi liczbami całkowitymi. Jeżeli <img src=\"https://img.zadania.info/zes/0070465/HzesT105x.gif\" alt=\"a2 + a6 = 8 \" class=\"math\">, to suma dziesięciu początkowych wyrazów ciągu <img src=\"https://img.zadania.info/zes/0070465/HzesT106x.gif\" alt=\"(an) \" class=\"math\"> jest równa <br class=\"newline\"> A) 45 </span>  B) 66 </span>  C) 55 </span>  D) 48 </span> "
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

                "tresc": "Metalowa płyta ma kształt trójkąta równoramiennego o wysokości 4 dm, którego ramię jest nachylone do podstawy pod kątem <img src=\"https://img.zadania.info/zes/0070465/HzesT107x.gif\" alt=\"α \" class=\"math\">. Powierzchnia płyty jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT108x.gif\" alt=\"t1g6α dm 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT109x.gif\" alt=\"s1in6α-dm 2 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT110x.gif\" alt=\"-2- 2 tgα dm \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT111x.gif\" alt=\"-2-- 2 cosα dm \" class=\"math\"> </span> "
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

                "tresc": "Na okręgu o środku w punkcie <img src=\"https://img.zadania.info/zes/0070465/HzesT112x.gif\" alt=\"O \" class=\"math\"> leżą punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT113x.gif\" alt=\"A ,B \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT114x.gif\" alt=\"C \" class=\"math\"> (zobacz rysunek). Kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT115x.gif\" alt=\"ABC \" class=\"math\"> ma miarę <img src=\"https://img.zadania.info/zes/0070465/HzesT116x.gif\" alt=\" ∘ 133 \" class=\"math\">, a kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT117x.gif\" alt=\"BOC \" class=\"math\"> ma miarę <img src=\"https://img.zadania.info/zes/0070465/HzesT118x.gif\" alt=\"6 2∘ \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT119x.gif\" alt=\"PIC\" class=\"graphics\" width=\"157\" height=\"152\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Kąt <img src=\"https://img.zadania.info/zes/0070465/HzesT120x.gif\" alt=\"AOB \" class=\"math\"> ma miarę <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT121x.gif\" alt=\"28∘ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT122x.gif\" alt=\"5 9∘ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT123x.gif\" alt=\"44∘ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT124x.gif\" alt=\"32∘ \" class=\"math\"> </span> "
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

                "tresc": "Dane są punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT125x.gif\" alt=\"A = (4,1) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0070465/HzesT126x.gif\" alt=\"B = (1 ,3) \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0070465/HzesT127x.gif\" alt=\"C = (4,− 1) \" class=\"math\">. Pole trójkąta <img src=\"https://img.zadania.info/zes/0070465/HzesT128x.gif\" alt=\"ABC \" class=\"math\"> jest równe <br class=\"newline\"> A) 2 </span>  B) 3 </span>  C) 6 </span>  D) 12 </span> </p><p class=\"indent\"> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT129x.gif\" alt=\"B = (19 ,22) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT130x.gif\" alt=\"D = (3,1 0) \" class=\"math\"> są przeciwległymi wierzchołkami prostokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT131x.gif\" alt=\"ABCD \" class=\"math\">. Promień okręgu opisanego na tym prostokącie jest równy <br class=\"newline\"> A) 20 </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT132x.gif\" alt=\" √ -- 12 2 \" class=\"math\"> </span>  C) 10 </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT133x.gif\" alt=\" √ -- 6 2 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Pole równoległoboku <img src=\"https://img.zadania.info/zes/0070465/HzesT134x.gif\" alt=\"ABCD \" class=\"math\"> jest równe 120. Na bokach <img src=\"https://img.zadania.info/zes/0070465/HzesT135x.gif\" alt=\"AD \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT136x.gif\" alt=\"BC \" class=\"math\"> wybrano – odpowiednio – punkty <img src=\"https://img.zadania.info/zes/0070465/HzesT137x.gif\" alt=\"P \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT138x.gif\" alt=\"R \" class=\"math\">, takie, że <img src=\"https://img.zadania.info/zes/0070465/HzesT139x.gif\" alt=\"|A|PPD-|| = 13 \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT140x.gif\" alt=\"||CRRB|| = 23 \" class=\"math\"> (zobacz rysunek) </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT141x.gif\" alt=\"PIC\" class=\"graphics\" width=\"332\" height=\"134\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Pole czworokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT142x.gif\" alt=\"PBRD \" class=\"math\"> jest równe <br class=\"newline\"> A) 81 </span>  B) 96 </span>  C) 102 </span>  D) 118 </span> </p><p class=\"indent\"> "
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

                "tresc": "Pole powierzchni całkowitej sześcianu jest równe <img src=\"https://img.zadania.info/zes/0070465/HzesT143x.gif\" alt=\"9 6 cm 2 \" class=\"math\">. Objętość tego sześcianu jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT144x.gif\" alt=\" 3 48 cm \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT145x.gif\" alt=\" 3 6 4 cm \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT146x.gif\" alt=\"192 cm 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT147x.gif\" alt=\"576 cm 3 \" class=\"math\"> </span> "
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

                "tresc": "Średnia arytmetyczna wszystkich liczb złożonych należących do przedziału <img src=\"https://img.zadania.info/zes/0070465/HzesT148x.gif\" alt=\"⟨3,28) \" class=\"math\"> z dokładnością do 0,1 jest równa<br class=\"newline\"> A) 16,9 </span>  B) 17,4 </span>  C) 16,3 </span>  D) 16,7 </span> "
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

                "tresc": "Rzucamy dwiema kostkami do gry. Jeśli <img src=\"https://img.zadania.info/zes/0070465/HzesT149x.gif\" alt=\"A \" class=\"math\"> oznacza zdarzenie „suma wyrzuconych oczek jest równa 10”, a <img src=\"https://img.zadania.info/zes/0070465/HzesT150x.gif\" alt=\"B \" class=\"math\"> oznacza zdarzenie „suma wyrzuconych oczek jest równa 8” to<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0070465/HzesT151x.gif\" alt=\"P (A) = P(B ) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0070465/HzesT152x.gif\" alt=\"5P(A ) = 3P (B) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0070465/HzesT153x.gif\" alt=\"P (A) > P (B) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0070465/HzesT154x.gif\" alt=\"P (B) = 2P (A ) \" class=\"math\"> </span> "
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

                "tresc": "Rozwiąż nierówność <img src=\"https://img.zadania.info/zes/0070465/HzesT155x.gif\" alt=\"3(x + 2 )(x− 3) ≤ x + 2 \" class=\"math\">. "
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

                "tresc": "Rozwiąż równanie <img src=\"https://img.zadania.info/zes/0070465/HzesT156x.gif\" alt=\"(x3 + 64 )(x 2 − 64) = 0 \" class=\"math\">. "
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

                "tresc": "Przekątne czworokąta <img src=\"https://img.zadania.info/zes/0070465/HzesT157x.gif\" alt=\"ABCD \" class=\"math\"> wpisanego w okrąg przecinają się w punkcie <img src=\"https://img.zadania.info/zes/0070465/HzesT158x.gif\" alt=\"S \" class=\"math\">, a punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT159x.gif\" alt=\"E \" class=\"math\"> jest takim punktem przekątnej <img src=\"https://img.zadania.info/zes/0070465/HzesT160x.gif\" alt=\"BD \" class=\"math\">, że <img src=\"https://img.zadania.info/zes/0070465/HzesT161x.gif\" alt=\"|∡DCS | = |∡BCE | \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0070465/HzesT162x.gif\" alt=\"PIC\" class=\"graphics\" width=\"199\" height=\"186\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Wykaż, że <img src=\"https://img.zadania.info/zes/0070465/HzesT163x.gif\" alt=\" |CD|⋅|CB| |CE | = --|CA|-- \" class=\"math\">. "
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

                "tresc": "Rzucamy trzy razy symetryczną sześcienną kostką do gry, która na każdej ściance ma inną liczbę oczek – od jednego oczka do sześciu oczek. Oblicz prawdopodobieństwo zdarzenia <img src=\"https://img.zadania.info/zes/0070465/HzesT164x.gif\" alt=\"A \" class=\"math\"> polegającego na tym, że co najmniej jeden raz wypadnie ścianka z dwoma oczkami. "
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

                "tresc": "Wykaż, że jeżeli liczby rzeczywiste <img src=\"https://img.zadania.info/zes/0070465/HzesT165x.gif\" alt=\"a,b,c \" class=\"math\"> spełniają warunek <img src=\"https://img.zadania.info/zes/0070465/HzesT166x.gif\" alt=\"a+ b+ c = 1 \" class=\"math\">, to </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0070465/HzesT167x.gif\" alt=\"(a+ b)(b+ c)(c+ a) + abc = ab+ bc+ ca. \" class=\"math-display\"></div> <p class=\"nopar\"> "
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

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0070465/HzesT168x.gif\" alt=\"S = (− 1,5) \" class=\"math\"> jest środkiem okręgu wpisanego w trójkąt <img src=\"https://img.zadania.info/zes/0070465/HzesT169x.gif\" alt=\"ABC \" class=\"math\">, w którym <img src=\"https://img.zadania.info/zes/0070465/HzesT170x.gif\" alt=\"A = (− 16,− 10 ) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0070465/HzesT171x.gif\" alt=\"B = (8,− 2) \" class=\"math\">. Oblicz pole koła wpisanego w trójkąt <img src=\"https://img.zadania.info/zes/0070465/HzesT172x.gif\" alt=\"ABC \" class=\"math\">. "
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

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0079031/HzesT0x.gif\" alt=\"274 : 16− 3 \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT1x.gif\" alt=\"( ) 3 12 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT2x.gif\" alt=\"612 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT3x.gif\" alt=\"(27)−4 8- \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT4x.gif\" alt=\"67 \" class=\"math\"> </span> "
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

                "tresc": "Iloczyn dodatnich liczb <img src=\"https://img.zadania.info/zes/0079031/HzesT5x.gif\" alt=\"a,b \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0079031/HzesT6x.gif\" alt=\"c \" class=\"math\"> jest równy 6048. Ponadto 9% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT7x.gif\" alt=\"a \" class=\"math\"> jest równe 8% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT8x.gif\" alt=\"b \" class=\"math\">, oraz 70% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT9x.gif\" alt=\"b \" class=\"math\"> jest równe 60% liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT10x.gif\" alt=\"c \" class=\"math\">. Stąd wynika, że iloczyn <img src=\"https://img.zadania.info/zes/0079031/HzesT11x.gif\" alt=\"ac \" class=\"math\"> jest równy <br class=\"newline\"> A) 288 </span>  B) 378 </span>  C) 324 </span>  D) 336 </span> "
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

                "tresc": "Liczba 81 razy mniejsza od <img src=\"https://img.zadania.info/zes/0079031/HzesT12x.gif\" alt=\" 14 9 \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT13x.gif\" alt=\" 22 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT14x.gif\" alt=\" 13 9 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT15x.gif\" alt=\" 5 8 1 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT16x.gif\" alt=\"278 \" class=\"math\"> </span> "
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

                "tresc": "Która z poniższych nierówności jest prawdziwa?<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT17x.gif\" alt=\"log 27 > 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT18x.gif\" alt=\"log4 15 > 2 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT19x.gif\" alt=\"log 523 < 2 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT20x.gif\" alt=\"log 330 < 3 \" class=\"math\"> </span> "
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

                "tresc": "Równość <img src=\"https://img.zadania.info/zes/0079031/HzesT21x.gif\" alt=\" √ -- √ --4 √ -- 4 ( 6 − x 2) = 4( 3 + 1) \" class=\"math\"> jest <br class=\"newline\"> A) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT22x.gif\" alt=\"x = 1 \" class=\"math\">. </span><br class=\"newline\"> B) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT23x.gif\" alt=\"x = − 1 \" class=\"math\">. </span><br class=\"newline\"> C) prawdziwa dla <img src=\"https://img.zadania.info/zes/0079031/HzesT24x.gif\" alt=\" √ -- x = − 2 \" class=\"math\">. </span><br class=\"newline\"> D) fałszywa dla każdej liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT25x.gif\" alt=\"x \" class=\"math\">. </span> "
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

                "tresc": "Zbiorem rozwiązań nierówności <img src=\"https://img.zadania.info/zes/0079031/HzesT26x.gif\" alt=\"2 x < − 1 \" class=\"math\"> jest zbiór <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT27x.gif\" alt=\"(− ∞ ,− 2)∪ (0 ,+∞ ) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT28x.gif\" alt=\"(− ∞ ,2) ∪ (0,+ ∞ ) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT29x.gif\" alt=\"(0,+ ∞ ) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT30x.gif\" alt=\"(− 2,0) \" class=\"math\"> </span> "
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

                "tresc": "Rozważmy treść następującego zadania: <br class=\"newline\"><span class=\"pplri8t-x-x-120\">Obw</span><span class=\"pplri8t-x-x-120\">ód rombu o przekątnych długo</span><span class=\"pplri8t-x-x-120\">ści</span> <img src=\"https://img.zadania.info/zes/0079031/HzesT31x.gif\" alt=\"a \" class=\"math\"> <span class=\"pplri8t-x-x-120\">i</span> <img src=\"https://img.zadania.info/zes/0079031/HzesT32x.gif\" alt=\"b \" class=\"math\"> <span class=\"pplri8t-x-x-120\">jest r</span><span class=\"pplri8t-x-x-120\">ówny 48. Pole tego rombu jest</span> <span class=\"pplri8t-x-x-120\">r</span><span class=\"pplri8t-x-x-120\">ówne 16. Oblicz długo</span><span class=\"pplri8t-x-x-120\">ści przekątnych tego rombu.</span><br class=\"newline\">Który układ równań opisuje zależności między długościami przekątnych tego rombu? <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT33x.gif\" alt=\"{ a + b = 24 ab = 16 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT34x.gif\" alt=\"{ √ ------- a2 + b2 = 24 ab = 32 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT35x.gif\" alt=\"{ √ ------- a2 + b2 = 4 8 ab = 16 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT36x.gif\" alt=\"{ a2 + b2 = 96 ab = 32 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Rysunek przedstawia wykres funkcji <img src=\"https://img.zadania.info/zes/0079031/HzesT37x.gif\" alt=\"y = f(x ) \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT38x.gif\" alt=\"PIC\" class=\"graphics\" width=\"193\" height=\"139\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> Wskaż rysunek, na którym przedstawiony jest wykres funkcji <img src=\"https://img.zadania.info/zes/0079031/HzesT39x.gif\" alt=\"y = f(−x ) \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT40x.gif\" alt=\"PIC\" class=\"graphics\" width=\"454\" height=\"292\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
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

                "tresc": "Miejscem zerowym funkcji liniowej <img src=\"https://img.zadania.info/zes/0079031/HzesT41x.gif\" alt=\" √ -- f (x) = 3(x − 1 )− 6 \" class=\"math\"> jest liczba <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT42x.gif\" alt=\"√ -- 3 − 2 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT43x.gif\" alt=\" √ -- 2 3+ 1 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT44x.gif\" alt=\" -- − 2√ 3 + 1 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT45x.gif\" alt=\" -- − √ 3 + 6 \" class=\"math\"> </span> "
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

                "tresc": "Funkcja kwadratowa <img src=\"https://img.zadania.info/zes/0079031/HzesT46x.gif\" alt=\"f \" class=\"math\"> jest określona wzorem <img src=\"https://img.zadania.info/zes/0079031/HzesT47x.gif\" alt=\"f(x) = 3x 2 − 1 2x+ 95 \" class=\"math\">. Zatem wartość <img src=\"https://img.zadania.info/zes/0079031/HzesT48x.gif\" alt=\"f (11) \" class=\"math\"> jest równa <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT49x.gif\" alt=\"f(− 13 ) \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT50x.gif\" alt=\"f(− 9) \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT51x.gif\" alt=\"f (− 1 5) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT52x.gif\" alt=\"f(− 7 ) \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Dwusieczne kątów utworzonych przez przekątne prostokąta <img src=\"https://img.zadania.info/zes/0079031/HzesT53x.gif\" alt=\"ABCD \" class=\"math\"> są zawarte w prostych o równaniach <img src=\"https://img.zadania.info/zes/0079031/HzesT54x.gif\" alt=\"y = -23--x + m 2 − 3 m −1 \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0079031/HzesT55x.gif\" alt=\"y = m 3x + --12-- m + 1 \" class=\"math\">. Zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT56x.gif\" alt=\"m = 1 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT57x.gif\" alt=\" 3√ -- m = 2 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT58x.gif\" alt=\"m = √133 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT59x.gif\" alt=\"m = − 1 \" class=\"math\"> </span> "
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

                "tresc": "Wskaż wzór funkcji, której wykres ma dokładnie jeden punkt wspólny z prostą <img src=\"https://img.zadania.info/zes/0079031/HzesT60x.gif\" alt=\"y = 1 \" class=\"math\">.<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT61x.gif\" alt=\"f(x ) = (x + 1)4 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT62x.gif\" alt=\"f(x ) = x4 + 1 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT63x.gif\" alt=\" 2 2 f(x) = (x + 1)(x − 1) \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT64x.gif\" alt=\" 2 f (x) = x − 1 \" class=\"math\"> </span> "
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

                "tresc": "Liczby <img src=\"https://img.zadania.info/zes/0079031/HzesT65x.gif\" alt=\"3,x,y ,−1 92 \" class=\"math\"> tworzą ciąg geometryczny, wtedy <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT66x.gif\" alt=\"x = −1 2, y = − 48 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT67x.gif\" alt=\"x = 48 , y = −9 6 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT68x.gif\" alt=\"x = − 1 2, y = 48 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT69x.gif\" alt=\"x = 12, y = − 96 \" class=\"math\"> </span> "
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

                "tresc": "W ciągu arytmetycznym <img src=\"https://img.zadania.info/zes/0079031/HzesT70x.gif\" alt=\"(an) \" class=\"math\">, określonym dla <img src=\"https://img.zadania.info/zes/0079031/HzesT71x.gif\" alt=\"n ≥ 1 \" class=\"math\">, spełniony jest warunek <img src=\"https://img.zadania.info/zes/0079031/HzesT72x.gif\" alt=\"2a4 = a3 + a2 + 2 \" class=\"math\">. Różnica <img src=\"https://img.zadania.info/zes/0079031/HzesT73x.gif\" alt=\"r \" class=\"math\"> tego ciągu jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT74x.gif\" alt=\"1 2 \" class=\"math\"> </span>  B) 1 </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT75x.gif\" alt=\"2 3 \" class=\"math\"> </span>  D) 0 </span> "
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

                "tresc": "Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT76x.gif\" alt=\"α \" class=\"math\"> jest ostry i <img src=\"https://img.zadania.info/zes/0079031/HzesT77x.gif\" alt=\"cosα = 3 5 \" class=\"math\">. Wtedy wartość wyrażenia <img src=\"https://img.zadania.info/zes/0079031/HzesT78x.gif\" alt=\"sinα − cosα \" class=\"math\"> jest równa<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT79x.gif\" alt=\" 1 − 25 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT80x.gif\" alt=\"4 5 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT81x.gif\" alt=\"1 5 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT82x.gif\" alt=\"− 75 \" class=\"math\"> </span> "
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

                "tresc": "Na okręgu o środku w punkcie <img src=\"https://img.zadania.info/zes/0079031/HzesT83x.gif\" alt=\"O \" class=\"math\"> leżą punkty <img src=\"https://img.zadania.info/zes/0079031/HzesT84x.gif\" alt=\"A ,B \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0079031/HzesT85x.gif\" alt=\"C \" class=\"math\"> (zobacz rysunek). Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT86x.gif\" alt=\"ABC \" class=\"math\"> ma miarę <img src=\"https://img.zadania.info/zes/0079031/HzesT87x.gif\" alt=\"88∘ \" class=\"math\">, a kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT88x.gif\" alt=\"BOC \" class=\"math\"> ma miarę o <img src=\"https://img.zadania.info/zes/0079031/HzesT89x.gif\" alt=\"2 4∘ \" class=\"math\"> mniejszą od miary kąta <img src=\"https://img.zadania.info/zes/0079031/HzesT90x.gif\" alt=\"AOB \" class=\"math\">. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT91x.gif\" alt=\"PIC\" class=\"graphics\" width=\"170\" height=\"172\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT92x.gif\" alt=\"BCO \" class=\"math\"> ma miarę <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT93x.gif\" alt=\"59∘ \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT94x.gif\" alt=\"5 0∘ \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT95x.gif\" alt=\"44∘ \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT96x.gif\" alt=\"78∘ \" class=\"math\"> </span> "
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

                "tresc": "Obwód trójkąta <img src=\"https://img.zadania.info/zes/0079031/HzesT97x.gif\" alt=\"ABC \" class=\"math\">, przedstawionego na rysunku, jest równy </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT98x.gif\" alt=\"PIC\" class=\"graphics\" width=\"170\" height=\"109\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT99x.gif\" alt=\"( √ -) 1 + -23 a \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT100x.gif\" alt=\"( √-) 1+ 22- a \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT101x.gif\" alt=\"( √ -) 1+ 2 a \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT102x.gif\" alt=\"( √ -) 1 + 3 a \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Punkty <img src=\"https://img.zadania.info/zes/0079031/HzesT103x.gif\" alt=\"K = (− 3,3),L = (− 1,− 3) \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0079031/HzesT104x.gif\" alt=\"M = (2,− 2) \" class=\"math\"> są środkami trzech kolejnych boków rombu. Pole tego rombu jest równe <br class=\"newline\"> A) 80 </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT105x.gif\" alt=\" √ --- 4 10 \" class=\"math\"> </span>  C) 40 </span>  D) 20 </span> "
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

                "tresc": "Wysokość graniastosłupa prawidłowego czworokątnego, którego pole powierzchni całkowitej jest równe <img src=\"https://img.zadania.info/zes/0079031/HzesT106x.gif\" alt=\"P1 \" class=\"math\">, zwiększono trzykrotnie. Pole powierzchni całkowitej otrzymanego w ten sposób graniastosłupa jest równe <img src=\"https://img.zadania.info/zes/0079031/HzesT107x.gif\" alt=\"P 2 \" class=\"math\">. Zatem <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT108x.gif\" alt=\"P2 = 3 P1 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT109x.gif\" alt=\"P2 = 9 P1 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT110x.gif\" alt=\"PP2 < 3 1 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT111x.gif\" alt=\"PP2 ∈ (3,9) 1 \" class=\"math\"> </span> "
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

                "tresc": "Prosta <img src=\"https://img.zadania.info/zes/0079031/HzesT112x.gif\" alt=\"l \" class=\"math\"> jest nachylona do osi <img src=\"https://img.zadania.info/zes/0079031/HzesT113x.gif\" alt=\"Ox \" class=\"math\"> pod kątem <img src=\"https://img.zadania.info/zes/0079031/HzesT114x.gif\" alt=\"30∘ \" class=\"math\"> i przecina oś <img src=\"https://img.zadania.info/zes/0079031/HzesT115x.gif\" alt=\"Oy \" class=\"math\"> w punkcie <img src=\"https://img.zadania.info/zes/0079031/HzesT116x.gif\" alt=\" √ -- (0, 3) \" class=\"math\"> (zobacz rysunek). </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT117x.gif\" alt=\"PIC\" class=\"graphics\" width=\"284\" height=\"178\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\">Prosta <img src=\"https://img.zadania.info/zes/0079031/HzesT118x.gif\" alt=\"l \" class=\"math\"> ma równanie <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT119x.gif\" alt=\" √- √ -- y = -33 x − 3 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT120x.gif\" alt=\" √ - √ -- y = -33x + 3 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT121x.gif\" alt=\" 1 √ -- y = 2 x− 3 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT122x.gif\" alt=\" 1 √ -- y = 2x + 3 \" class=\"math\"> </span> </p><p class=\"indent\"> "
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

                "tresc": "Ze zbioru trzydziestu kolejnych liczb naturalnych od 1 do 30 losujemy jedną liczbę. Niech <img src=\"https://img.zadania.info/zes/0079031/HzesT123x.gif\" alt=\"A \" class=\"math\"> oznacza zdarzenie, że wylosowana liczba będzie dzielnikiem liczby 30. Wtedy prawdopodobieństwo zdarzenia <img src=\"https://img.zadania.info/zes/0079031/HzesT124x.gif\" alt=\"A \" class=\"math\"> jest równe <br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0079031/HzesT125x.gif\" alt=\"-4 15 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0079031/HzesT126x.gif\" alt=\"7- 30 \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0079031/HzesT127x.gif\" alt=\"1 5 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0079031/HzesT128x.gif\" alt=\"-3 10 \" class=\"math\"> </span> "
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

                "tresc": "Rozwiąż nierówność <img src=\"https://img.zadania.info/zes/0079031/HzesT129x.gif\" alt=\" √ -- 2 6x − 2x2 − 3 < 0 \" class=\"math\">. "
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

                "tresc": "Dany jest kąt <img src=\"https://img.zadania.info/zes/0079031/HzesT130x.gif\" alt=\"α \" class=\"math\">, dla którego spełniona jest równość <img src=\"https://img.zadania.info/zes/0079031/HzesT131x.gif\" alt=\"sin α − cos α = 12 \" class=\"math\">. Oblicz wartość wyrażenia <img src=\"https://img.zadania.info/zes/0079031/HzesT132x.gif\" alt=\"(sin α+ cosα )2 \" class=\"math\">. "
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

                "tresc": "W ciągu geometrycznym <img src=\"https://img.zadania.info/zes/0079031/HzesT133x.gif\" alt=\"(an) \" class=\"math\">, określonym dla <img src=\"https://img.zadania.info/zes/0079031/HzesT134x.gif\" alt=\"n ≥ 1 \" class=\"math\">, dane są: wyraz <img src=\"https://img.zadania.info/zes/0079031/HzesT135x.gif\" alt=\"a1 = 2 \" class=\"math\"> i suma trzech początkowych wyrazów tego ciągu <img src=\"https://img.zadania.info/zes/0079031/HzesT136x.gif\" alt=\"S 3 = 114 \" class=\"math\">. Wiadomo ponadto, że <img src=\"https://img.zadania.info/zes/0079031/HzesT137x.gif\" alt=\"a 10 < 0 \" class=\"math\">. Oblicz iloraz </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0079031/HzesT138x.gif\" alt=\"a2021 a2018. \" class=\"math-display\"></div> <p class=\"nopar\"> "
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

                "tresc": "Rozwiąż równanie <img src=\"https://img.zadania.info/zes/0079031/HzesT139x.gif\" alt=\"(3 − 2u 2)u3(11u − 3u 2 − 1 0) = 0 \" class=\"math\">. "
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

                "tresc": "Dany jest trójkąt prostokątny <img src=\"https://img.zadania.info/zes/0079031/HzesT140x.gif\" alt=\"ABC \" class=\"math\">, w którym <img src=\"https://img.zadania.info/zes/0079031/HzesT141x.gif\" alt=\"|∡ACB | = 90∘ \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0079031/HzesT142x.gif\" alt=\" √ -- sin ∡BAC = --10- 5 \" class=\"math\">. Niech <img src=\"https://img.zadania.info/zes/0079031/HzesT143x.gif\" alt=\"D \" class=\"math\"> oznacza punkt wspólny wysokości poprowadzonej z wierzchołka <img src=\"https://img.zadania.info/zes/0079031/HzesT144x.gif\" alt=\"C \" class=\"math\"> kąta prostego i przeciwprostokątnej <img src=\"https://img.zadania.info/zes/0079031/HzesT145x.gif\" alt=\"AB \" class=\"math\"> tego trójkąta. Wykaż, że <img src=\"https://img.zadania.info/zes/0079031/HzesT146x.gif\" alt=\"|AD | : |DB | = 3 : 2 \" class=\"math\">. "
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

                "tresc": "Parabola, która jest wykresem funkcji kwadratowej <img src=\"https://img.zadania.info/zes/0079031/HzesT147x.gif\" alt=\"f(x) = ax 2 + bx + c \" class=\"math\">, przechodzi przez punkt <img src=\"https://img.zadania.info/zes/0079031/HzesT148x.gif\" alt=\"(2,− 6) \" class=\"math\"> oraz <img src=\"https://img.zadania.info/zes/0079031/HzesT149x.gif\" alt=\"f(− 2) = f(4) = 10 \" class=\"math\">. Oblicz odległość wierzchołka tej paraboli od początku układu współrzędnych. "
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

                "tresc": "Podstawą graniastosłupa prostego <img src=\"https://img.zadania.info/zes/0079031/HzesT150x.gif\" alt=\"ABCDA ′B′C ′D ′ \" class=\"math\"> jest romb <img src=\"https://img.zadania.info/zes/0079031/HzesT151x.gif\" alt=\"ABCD \" class=\"math\">. Przekątna <img src=\"https://img.zadania.info/zes/0079031/HzesT152x.gif\" alt=\"A ′C \" class=\"math\"> tego graniastosłupa ma długość 6 i jest nachylona do płaszczyzny podstawy pod kątem <img src=\"https://img.zadania.info/zes/0079031/HzesT153x.gif\" alt=\"30∘ \" class=\"math\">, a objętość graniastosłupa jest równa <img src=\"https://img.zadania.info/zes/0079031/HzesT154x.gif\" alt=\" √- 2723- \" class=\"math\">. Oblicz pole powierzchni całkowitej tego graniastosłupa. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0079031/HzesT155x.gif\" alt=\"PIC\" class=\"graphics\" width=\"227\" height=\"174\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
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

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0079031/HzesT156x.gif\" alt=\"B = (7,2) \" class=\"math\"> jest wierzchołkiem trójkąta równoramiennego <img src=\"https://img.zadania.info/zes/0079031/HzesT157x.gif\" alt=\"ABC \" class=\"math\"> o podstawie <img src=\"https://img.zadania.info/zes/0079031/HzesT158x.gif\" alt=\"BC \" class=\"math\">. Pole tego trójkąta jest równe 20, a wysokość poprowadzona z wierzchołka <img src=\"https://img.zadania.info/zes/0079031/HzesT159x.gif\" alt=\"A \" class=\"math\"> tego trójkąta zawiera się w prostej o równaniu <img src=\"https://img.zadania.info/zes/0079031/HzesT160x.gif\" alt=\"y = 3x + 1 \" class=\"math\">. Oblicz współrzędne punktów <img src=\"https://img.zadania.info/zes/0079031/HzesT161x.gif\" alt=\"A \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0079031/HzesT162x.gif\" alt=\"C \" class=\"math\">. Rozważ wszystkie przypadki. "
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

                "tresc": "Liczba <img src=\"https://img.zadania.info/zes/0067695/HzesT0x.gif\" alt=\"( ) ( ) √3-- 3 3√ -- 3√ -- 3 2 + 1 ⋅ 4− 2+ 1 \" class=\"math\"> jest równa<br class=\"newline\"> A) 1 </span>  B) 8 </span>  C) 27 </span>  D) 64 </span> "
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

                "tresc": "Równanie <img src=\"https://img.zadania.info/zes/0067695/HzesT1x.gif\" alt=\"||x|− 4 | = |x| + 2 \" class=\"math\"> <br class=\"newline\"> A) nie ma rozwiązań. </span>  B) ma dokładnie jedno rozwiązanie. </span><br>  C) ma dokładnie dwa rozwiązania. </span>  D) ma dokładnie cztery rozwiązania. </span> </p><p class=\"indent\"> "
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

                "tresc": "Wyrażenie <img src=\"https://img.zadania.info/zes/0067695/HzesT2x.gif\" alt=\"2 sin 4x sin x \" class=\"math\"> jest równe<br class=\"newline\"> A) <img src=\"https://img.zadania.info/zes/0067695/HzesT3x.gif\" alt=\"cos3x − sin 5x \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0067695/HzesT4x.gif\" alt=\"cos3x − co s5x \" class=\"math\"> </span>  C) <img src=\"https://img.zadania.info/zes/0067695/HzesT5x.gif\" alt=\"sin 3x − sin5x \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0067695/HzesT6x.gif\" alt=\"sin 3x − cos 5x \" class=\"math\"> </span> "
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

                "tresc": "Na rysunku zaznaczono zbiór punktów płaszczyzny spełniających układ nierówności: <br class=\"newline\"></p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0067695/HzesT7x.gif\" alt=\"PIC\" class=\"graphics\" width=\"241\" height=\"247\"> </p> </div><hr class=\"endfigure\"> <p class=\"noindent\"> A) <img src=\"https://img.zadania.info/zes/0067695/HzesT8x.gif\" alt=\"{ 2x + y+ 1 ≤ 0 x + 2y − 2 ≤ 0 \" class=\"math\"> </span>  B) <img src=\"https://img.zadania.info/zes/0067695/HzesT9x.gif\" alt=\"{ 2x + y + 1 ≤ 0 x+ 2y − 2 ≥ 0 \" class=\"math\"> </span><br>  C) <img src=\"https://img.zadania.info/zes/0067695/HzesT10x.gif\" alt=\"{ 2x + y + 1 ≥ 0 x + 2y − 2 ≥ 0 \" class=\"math\"> </span>  D) <img src=\"https://img.zadania.info/zes/0067695/HzesT11x.gif\" alt=\"{ 2x + y + 1 ≥ 0 x + 2y − 2 ≤ 0 \" class=\"math\"> </span> "
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

                "tresc": "Granica <img src=\"https://img.zadania.info/zes/0067695/HzesT12x.gif\" alt=\" √ --------- lim √-5−-3x3+-8x2 x→− ∞ 1− 12x3+ 4x \" class=\"math\"> <br class=\"newline\"> A) nie istnieje. </span>  B) jest liczbą dodatnią. </span><br>  C) jest liczbą ujemną. </span>  D) jest równa <img src=\"https://img.zadania.info/zes/0067695/HzesT13x.gif\" alt=\"+ ∞ \" class=\"math\">. </span> "
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

                "tresc": "Punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT14x.gif\" alt=\"M \" class=\"math\"> przyprostokątnej <img src=\"https://img.zadania.info/zes/0067695/HzesT15x.gif\" alt=\"BC \" class=\"math\"> trójkąta prostokątnego <img src=\"https://img.zadania.info/zes/0067695/HzesT16x.gif\" alt=\"ABC \" class=\"math\"> zrzutowano na przeciwprostokątną <img src=\"https://img.zadania.info/zes/0067695/HzesT17x.gif\" alt=\"AB \" class=\"math\"> otrzymując punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT18x.gif\" alt=\"N \" class=\"math\">. Wykaż, że <img src=\"https://img.zadania.info/zes/0067695/HzesT19x.gif\" alt=\"|∡MAN | = |∡MCN | \" class=\"math\">. "
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

                "tresc": "Dany jest nieskończony ciąg okręgów <img src=\"https://img.zadania.info/zes/0067695/HzesT20x.gif\" alt=\"(on) \" class=\"math\"> o równaniach <img src=\"https://img.zadania.info/zes/0067695/HzesT21x.gif\" alt=\" 2 2 7−n x + y = 3 \" class=\"math\">, <img src=\"https://img.zadania.info/zes/0067695/HzesT22x.gif\" alt=\"n ≥ 1 \" class=\"math\">. Niech <img src=\"https://img.zadania.info/zes/0067695/HzesT23x.gif\" alt=\"Pk \" class=\"math\"> będzie pierścieniem ograniczonym zewnętrznym okręgiem <img src=\"https://img.zadania.info/zes/0067695/HzesT24x.gif\" alt=\"o2k− 1 \" class=\"math\"> i wewnętrznym okręgiem <img src=\"https://img.zadania.info/zes/0067695/HzesT25x.gif\" alt=\"o2k \" class=\"math\">. Oblicz sumę pól wszystkich pierścieni <img src=\"https://img.zadania.info/zes/0067695/HzesT26x.gif\" alt=\"Pk \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0067695/HzesT27x.gif\" alt=\"k ≥ 1 \" class=\"math\">. "
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

                "tresc": "Udowodnij, że jeżeli <img src=\"https://img.zadania.info/zes/0067695/HzesT28x.gif\" alt=\"α + β + γ = π \" class=\"math\">, to </p> <div class=\"math-display\"> <img src=\"https://img.zadania.info/zes/0067695/HzesT29x.gif\" alt=\"cos2α + co s2β + cos2 γ + 2 cosα cosβ cos γ = 1 . \" class=\"math-display\"></div> <p class=\"nopar\"> "
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

                "tresc": "Liczby <img src=\"https://img.zadania.info/zes/0067695/HzesT30x.gif\" alt=\"p \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0067695/HzesT31x.gif\" alt=\"q \" class=\"math\"> są pierwiastkami równania <img src=\"https://img.zadania.info/zes/0067695/HzesT32x.gif\" alt=\"x2 − 47x + 1 = 0 \" class=\"math\">. Wykaż, że wartość wyrażenia <img src=\"https://img.zadania.info/zes/0067695/HzesT33x.gif\" alt=\"√4p--+ √4q -- \" class=\"math\"> jest liczbą naturalną. </p><p class=\"indent\"> "
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

                "tresc": "W trójkącie <img src=\"https://img.zadania.info/zes/0067695/HzesT34x.gif\" alt=\"ABC \" class=\"math\"> długości boków <img src=\"https://img.zadania.info/zes/0067695/HzesT35x.gif\" alt=\"AB \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0067695/HzesT36x.gif\" alt=\"AC \" class=\"math\"> są odpowiednio równe 4 i 6. Punkt <img src=\"https://img.zadania.info/zes/0067695/HzesT37x.gif\" alt=\"M \" class=\"math\"> jest środkiem odcinka <img src=\"https://img.zadania.info/zes/0067695/HzesT38x.gif\" alt=\"BC \" class=\"math\">, a długość środkowej <img src=\"https://img.zadania.info/zes/0067695/HzesT39x.gif\" alt=\"AN \" class=\"math\"> trójkąta <img src=\"https://img.zadania.info/zes/0067695/HzesT40x.gif\" alt=\"AMB \" class=\"math\"> jest równa 3. Oblicz długość boku <img src=\"https://img.zadania.info/zes/0067695/HzesT41x.gif\" alt=\"BC \" class=\"math\">. "
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

                "tresc": "Dany jest malejący ciąg geometryczny <img src=\"https://img.zadania.info/zes/0067695/HzesT42x.gif\" alt=\"(a,aq,aq 2) \" class=\"math\">, którego wszystkie wyrazy i iloraz są liczbami całkowitymi niepodzielnymi przez 3. Jeśli najmniejszy wyraz ciągu zwiększymy o 18, to otrzymamy ciąg arytmetyczny. Oblicz wyraz <img src=\"https://img.zadania.info/zes/0067695/HzesT43x.gif\" alt=\"aq \" class=\"math\"> tego ciągu. "
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

                "tresc": "Przedstawiona na rysunku bryła to stożek ścięty płaszczyzną równoległą do jego płaszczyzny podstawy. Wysokość tej bryły jest równa <img src=\"https://img.zadania.info/zes/0067695/HzesT44x.gif\" alt=\"H \" class=\"math\">, a <img src=\"https://img.zadania.info/zes/0067695/HzesT45x.gif\" alt=\"r \" class=\"math\"> i <img src=\"https://img.zadania.info/zes/0067695/HzesT46x.gif\" alt=\"R \" class=\"math\"> (<img src=\"https://img.zadania.info/zes/0067695/HzesT47x.gif\" alt=\"r < R \" class=\"math\">) są promieniami podstaw. Oblicz objętość tej bryły. </p><hr class=\"figure\"><div class=\"figure\"> <p class=\"noindent\"><img src=\"https://img.zadania.info/zes/0067695/HzesT48x.gif\" alt=\"PIC\" class=\"graphics\" width=\"109\" height=\"146\"> </p> </div><hr class=\"endfigure\"> <p class=\"indent\"> "
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

                "tresc": "Funkcja <img src=\"https://img.zadania.info/zes/0067695/HzesT49x.gif\" alt=\"f \" class=\"math\"> jest wielomianem stopnia 3, a jej wykres jest styczny do prostej <img src=\"https://img.zadania.info/zes/0067695/HzesT50x.gif\" alt=\" 9 y = 2 \" class=\"math\"> w punkcie o odciętej <img src=\"https://img.zadania.info/zes/0067695/HzesT51x.gif\" alt=\"x = 2 \" class=\"math\"> oraz jest styczny do prostej <img src=\"https://img.zadania.info/zes/0067695/HzesT52x.gif\" alt=\"y = − 92 \" class=\"math\"> w punkcie o odciętej <img src=\"https://img.zadania.info/zes/0067695/HzesT53x.gif\" alt=\"x = − 1 \" class=\"math\">. Wyznacz wzór funkcji <img src=\"https://img.zadania.info/zes/0067695/HzesT54x.gif\" alt=\"f \" class=\"math\">. "
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

                "tresc": "Z punktu <img src=\"https://img.zadania.info/zes/0067695/HzesT55x.gif\" alt=\" ( ) A = − 92, 92 \" class=\"math\"> poprowadzono styczne do okręgu <img src=\"https://img.zadania.info/zes/0067695/HzesT56x.gif\" alt=\"(x + 2)2 + (y + 3)2 = 50 \" class=\"math\">. Oblicz pole trójkąta <img src=\"https://img.zadania.info/zes/0067695/HzesT57x.gif\" alt=\"ABC \" class=\"math\">, gdzie <img src=\"https://img.zadania.info/zes/0067695/HzesT58x.gif\" alt=\"BC \" class=\"math\"> jest odcinkiem łączącym punkty styczności. "
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

                "tresc": "Rozpatrujemy wszystkie graniastosłupy prawidłowe czworokątne o polu powierzchni całkowitej <img src=\"https://img.zadania.info/zes/0067695/HzesT59x.gif\" alt=\"P \" class=\"math\">. Wyznacz wysokość i długość krawędzi podstawy tego graniastosłupa, którego objętość jest największa. Oblicz tę największą objętość. "
            }
        ]
    }
]

export default zestawy