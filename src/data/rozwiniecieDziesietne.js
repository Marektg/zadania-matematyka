import { nanoid } from "@reduxjs/toolkit"

const rozDzies = [
    {
        "id": `${nanoid()}`,
        "tresc": "Rozszerz ułamek tak, aby jego mianownikiem była potęga liczby \\(10 \\), a następnie zapisz go w postaci dziesiętnej.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{7}{8} \\)", "\\(\\frac{24}{25} \\)", "\\(\\frac{111}{250} \\)", "\\(\\frac{13}{40} \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Porównaj liczby i wpisz jeden z symboli: \\(>, <, = \\).",
        "canvas": [],
        "podpunkty": ["\\(1\\frac{4}{5} \\ ? \\ 1,7(9) \\)", "\\(\\frac{7}{8} \\ ? \\ 0,(875) \\)", "\\(4\\frac{2}{3} \\ ? \\ 4,(65) \\)", "\\(3\\frac{2}{11} \\ ? \\ 3,(18) \\)", "\\(-\\frac{1}{25} \\ ? \\ -0,0(4) \\)", "\\(-\\frac{1}{6} \\ ? \\ -0,(16) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Znajdź rozwinięcie dziesiętne podanej liczby.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{17}{20} \\)","\\(-\\frac{7}{8} \\)","\\(\\frac{5}{18} \\)","\\(\\frac{1}{6} \\)","\\(2\\frac{14}{45} \\)","\\(\\frac{123}{99} \\)"],
        "wskazowka": null,
            "ramka": null,
            "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz długość okresu rozwinięcia dziesiętnego podanej liczby.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{5}{9} \\)","\\(\\frac{5432}{9999} \\)","\\(\\frac{5}{22} \\)","\\(\\frac{3}{260} \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zaokrąglij podaną liczbę do części setnych.",
        "canvas": [],
        "podpunkty": ["\\(2,335 \\)","\\(7,71(234) \\)","\\(10,9(96) \\)","\\(3,(7) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Znajdź przybliżenie ułamka:",
        "canvas": [],
        "podpunkty": ["\\(\\frac{3}{7} \\) z dokładnością do \\(0,1 \\)","\\(\\frac{3}{13} \\) z dokładnością do \\(0,001 \\)","\\(\\frac{25}{21} \\) z dokładnością do \\(0,0001 \\)","\\(\\frac{86}{33} \\) z dokładnością do \\(0,01 \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Podaj przybliżoną wartość liczby \\(\\frac{62}{21} \\) z dokładnością do \\(n \\) miejsc po przecinku. Oceń, czy jest to przypliżenie z nadmiarem czy z niedomiarem.",
        "canvas": [],
        "podpunkty": ["\\(n=5 \\)","\\(n=4 \\)","\\(n=3 \\)","\\(n=2 \\)","\\(n=1 \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zaokrąglij liczbę \\(\\sqrt{7} \\) z podaną dokładnością. Czy jest to przybliżenie z niedomiarem czy z nadmiarem?",
        "canvas": [],
        "podpunkty": ["do jedności","do części dziesiątych","do części setnych","do części tysięcznych"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Liczba \\(a \\) jest przybliżeniem \\(\\frac{1}{8} \\) z dokładnością do dwóch miejsc po przecinku, a liczba \\(b \\) - przybliżeniem \\(a \\) z dokładnością do jednego miejsca po przecinku. Oblicz \\(b \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz cyfry, które znajdują się na \\(13. \\) i \\(100. \\) miejscu po przecinku w rozwinięciu dziesiętnym podanej liczby.",
        "canvas": [],
        "podpunkty": ["\\(0,(4567) \\)","\\(3,5(1234) \\)","\\(7,937(739) \\)","\\(5,01(2345678) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz cyfrę, która znajduje się na \\(2020. \\) miejscu po przecinku w rozwinięciu dziesiętnym podanej liczby.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{5}{6} \\)","\\(\\frac{6}{13} \\)","\\(\\frac{19}{27} \\)","\\(\\frac{1}{2^{2020}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz z pomocą kalkulatora rozwinięcia dziesiętne ułamków i sformułuj spostrzeżenia.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{1}{9}, \\frac{3}{9}, \\frac{8}{9} \\)","\\(\\frac{1}{99}, \\frac{31}{99}, \\frac{54}{99} \\)","\\(\\frac{1}{999}, \\frac{112}{999}, \\frac{605}{999} \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Przedstaw podane liczby w postaci nieskracalnych ułamków zwykłych.",
        "canvas": [],
        "podpunkty": ["\\(0,6; 0,45; 0,06; 0,4375 \\)","\\(0,(1); 0,(2); 0,(3); 0,(4); 0,(5) \\)","\\(2,(3); 3,(71); -5,(24); 6,00(4) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Ile różnych liczb zapisano?",
        "canvas": [],
        "podpunkty": ["\\(1,(321); 1,3(213); 1,321; \\frac{440}{333}; 1,32(132) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Porównaj liczby.",
        "canvas": [],
        "podpunkty": ["\\(12,(32) \\ i \\ 12,(323) \\)","\\(3,431 \\ i \\ 3,(431) \\)","\\(2\\frac{1}{9} \\ i \\ 2,(1) \\)","\\(-\\frac{5}{11} \\ i \\ -0,(46) \\)","\\(1\\frac{3}{4} \\ i \\ \\sqrt{3} \\)","\\(-1\\frac{1}{3} \\ i \\ -\\sqrt{2} \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Przeczytaj podaną w ramce informację i rozwiąż zadanie.",
        "canvas": [],
        "podpunkty": ["\\(0,(81) \\)","\\(0,32(005) \\)","\\(2,1(301) \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": "rozdziere1",
        "ramkapo": null,
        "tresc2": "Przedstaw liczbę w postaci ułamka zwykłego.",
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz. Wynik zapisz w postaci dziesiętnej.",
        "canvas": [],
        "podpunkty": ["\\(0,(2)+0,(98) \\)","\\(0,(9)+0,(1) \\)","\\(3,(13)-1,(46) \\)","\\(0,(2)+0,2(7) \\)","\\(6\\cdot 1,3)+0,(3) \\)","\\(5\\cdot 0,1(5)-0,4(5) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Znajdź rozwinięcie dziesiętne liczby \\(\\frac{7}{23} \\). Możesz skorzystać z poniższej metody.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
        "extra": "rozdzie1"
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz liczby: \\(3\\cdot x, 4\\cdot x, 5\\cdot x\\ i\\ 6\\cdot x \\) w postaci dziesiętnej oraz w postaci ułamka zwykłego, jeżeli:",
        "canvas": [],
        "podpunkty": ["\\(x=0,(2) \\)","\\(x=0,(05) \\)","\\(x=0,(25) \\)","\\(x=0,(24) \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Udowodnij, że jeśli \\(a \\) jest liczbą naturalną, to ułamek okresowy \\(a,(9) \\) jest równy \\(a+1 \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Znajdź najmniejszą i największą liczbę naturalną, która:",
        "canvas": [],
        "podpunkty": ["po zaokrągleniu do setek jest równa \\(3100 \\)","po zaokrągleniu do tysięcy jest równa \\(54000 \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Dane są dwie liczby: \\(a=47,8645 \\) i \\(b=19,3345 \\). Obliczono przybliżoną wartość sumy tych liczb na dwa sposoby:",
        
        "canvas": [],
        "podpunkty": ["I. Zaokrąglono każdą do części dziesiątych, wynik dodano, a następnie zaokrąglono do jedności.", "II. Zaokrąglono każdą z nich do jedności i dodano wyniki."],
        "tresc3": "Oblicz błędy tych przybliżeń.",
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz liczbę, której przybliżeniem jest liczba \\(32,2 \\), a błąd przybliżenia jest równy",
        "canvas": [],
        "podpunkty": ["\\(0,03 \\)","\\(-0,03 \\)","\\(-0,015 \\)","\\(0,0096 \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz sumę pierwszych tysiąca cyfr po przecinku rozwinięcia dziesiętnego ułamka \\(\\frac{3}{7} \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Ustal, jaka cyfra znajduje się na \\(2019 \\). miejscu po przecinku liczby, której zapis dziesiętny składa się z kolejnych liczb naturalnych.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Na którym miejscu po przecinku w rozwinięciach dziesiętnych liczb \\(0,01(5821) \\) i \\(1,203(36748) \\) występuje ta sama cyfra?",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz wszystkie ułamki właściwe postaci \\(\\frac{3n}{110} \\), gdzie \\(n \\) jest dodatnią liczbą naturalną, które mają skończone rozwinięcie dziesiętne.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz wszystkie pary cyfr \\(a\\neq0 \\) i \\(b\\neq0 \\), dla któreych \\(\\sqrt{0,(a)}=0,(b) \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Podaj trzy różne ułamki zwykłe mające rozwinięcie dziesiętne nieskończone i spełniające nierówność \\(\\frac{1}{5}<x<\\frac{1}{4} \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wynik pierwiastkowania liczby naturalnej \\(n \\) zaokrąglono do części dziesiątych. Czy można jednoznacznie ustalić wartość liczby \\(n \\)?",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{n}\\approx 2,2 \\)","\\(\\sqrt{n}\\approx7,7 \\)","\\(\\sqrt[3]{n}\\approx2,2 \\)","\\(\\sqrt[3]{n}\\approx3,3 \\)"],
        "wskazowka": null,
        "ramka": null,
        "ramkapo": null,
    }
]





export default rozDzies