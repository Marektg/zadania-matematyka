import { nanoid } from "@reduxjs/toolkit"


// {
//     "id": `${nanoid()}`,
//     "tresc":"",
// "canvas": [],
// "podpunkty":[],
// "wskazowka": null,
// "ramka": null,
// "extraRamka":null,
// "tresc2": null,
// "ramkapo": null,
// }


const pierwiastki = [
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz:",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{16}, \\sqrt{0,16}, \\sqrt{11\\frac{1}{9}} \\)", "\\(\\sqrt{16+9}, \\sqrt{16}+\\sqrt{9}, \\sqrt{16}\\cdot \\sqrt{9} \\)", "\\(\\sqrt{\\sqrt{81}}, \\sqrt{16\\sqrt{8\\sqrt{4}}} \\)", "\\(\\sqrt{2+\\sqrt{2+\\sqrt{4}}}, \\sqrt{2-\\sqrt{9-\\sqrt{25}}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Włącz czynnik pod pierwiastek",
        "canvas": [],
        "podpunkty": ["\\(4\\sqrt{1,5} \\)", "\\(0,2\\sqrt{20} \\)", "\\(\\frac{1}{3}\\sqrt{18} \\)", "\\(0,75\\sqrt{8} \\)", "\\(1,2\\sqrt{10} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyłącz czynnik przed pierwiastek",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{63} \\)", "\\(\\sqrt{80} \\)", "\\(\\sqrt{132} \\)", "\\(\\sqrt{98} \\)", "\\(\\sqrt{279} \\)", "\\(\\sqrt{605} \\)", "\\(\\sqrt{405} \\)", "\\(\\sqrt{847} \\)", "\\(\\sqrt{1014} \\)", "\\(\\sqrt{1152} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz, korzystając z własności pierwiastków.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{36\\cdot 121}, \\sqrt{0,36\\cdot 196}, \\sqrt{4\\cdot \\frac{4}{9}\\cdot 0,0016} \\)", "\\(\\sqrt{27\\cdot 12}, \\sqrt{45\\cdot 20}, \\sqrt{21\\cdot 33\\cdot 77} \\)", "\\(\\sqrt{2}\\cdot \\sqrt{5}\\cdot \\sqrt{10}, \\frac{\\sqrt{162}}{\\sqrt{6}\\cdot \\sqrt{27}}, \\frac{\\sqrt{20} \\cdot \\sqrt{6}}{\\sqrt{40}\\cdot \\sqrt{27}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "",
        "canvas": [],
        "podpunkty": ["Ile trzeba dodać do \\(\\sqrt{25} \\), aby otrzymać \\(\\sqrt{225} \\)?", "Ile trzeba odjąć od \\(\\sqrt{196} \\), aby otrzymać \\(\\sqrt{169} \\)?", "Przez ile trzeba pomnożyć \\(\\sqrt{12} \\), aby otrzymać \\(\\sqrt{48} \\)?", "Przez ile trzeba podzielić \\(\\sqrt{200} \\), aby otrzymać \\(\\sqrt{20} \\)?",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz wyrażenie w postaci\\(a\\sqrt{b}\\).",
        "canvas": [],
        "podpunkty": ["\\((\\sqrt{48}-\\sqrt{27}+\\sqrt{75})\\cdot \\sqrt{2} \\)", "\\((\\sqrt{240}+3\\sqrt{60}-\\sqrt{135})\\cdot 2\\sqrt{3} \\)", "\\((11\\sqrt{6}+\\sqrt{96}-\\sqrt{150}):3\\sqrt{2} \\)", "\\((20\\sqrt{0,1}-\\sqrt{90}+\\sqrt{360}):5\\sqrt{5} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Sprawdź, czy równość jest prawdziwa.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{72}:\\sqrt{2}=\\sqrt{18}\\cdot \\sqrt{2} \\)", "\\(\\sqrt{1000}\\cdot \\sqrt{0,1}=(\\sqrt{100})^2 \\)", "\\(\\sqrt{\\frac{4}{9}}\\cdot \\sqrt{2\\frac{1}{4}}=\\sqrt{1\\frac{7}{9}}\\cdot \\sqrt{\\frac{9}{16}} \\)", "\\(\\frac{\\sqrt{6}\\cdot \\sqrt{7}}{\\sqrt{8}}=\\sqrt{1,5}\\cdot \\sqrt{3,5} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Uporządkuj liczby rosnąco. Niekorzystajz kalkulatora.",
        "tresc2": "\\(\\sqrt{2,5},\\ \\sqrt{\\frac{2}{5}}, \\ 2\\sqrt{5},\\ 5\\sqrt{2}, \\ \\sqrt{0,25}, \\ \\sqrt{25} \\)",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Boki \\(AB \\) i \\(AC \\) trójkąta \\(ABC\\)są odpowiednio równe \\(4\\sqrt{5} \\) i \\(5\\sqrt{2} \\). Wysokość opuszczona na bok \\(AB \\)madługość \\(3\\sqrt{5} \\). Oblicz wysokość opuszczoną na bok \\(AC \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wykonaj działania.",
        "canvas": [],
        "podpunkty": ["\\((4-2\\sqrt{5})\\cdot (\\sqrt{5}+3) \\)","\\((2\\sqrt{6}+6)\\cdot (2\\sqrt{3}-3\\sqrt{2}) \\)","\\((9-2\\sqrt{15})\\cdot (3\\sqrt{3}+2\\sqrt{5}) \\)","\\((2\\sqrt{5}-\\sqrt{2})\\cdot (\\sqrt{10}+3) \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Uprość ułamek.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{\\sqrt{12}+\\sqrt{75}}{\\sqrt{3}} \\)","\\(\\frac{4\\sqrt{45}-2\\sqrt{20}}{\\sqrt{5}} \\)","\\(\\frac{2\\sqrt{2}+\\sqrt{32}}{\\sqrt{2}} \\)","\\(\\frac{\\sqrt{12}+\\sqrt{27}+\\sqrt{147}}{\\sqrt{3}} \\)","\\(\\frac{\\sqrt{28}+\\sqrt{112}}{2\\sqrt{7}} \\)","\\(\\frac{\\sqrt{80}+2\\sqrt{125}-\\sqrt{500}}{4\\sqrt{5}} \\)",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz podaną liczbę w najprostszej postaci.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{\\sqrt{27}+\\sqrt{192}-\\sqrt{108}}{\\sqrt{75}} \\)","\\(\\frac{4\\sqrt{99}-\\sqrt{176}}{\\sqrt{275}} \\)","\\(\\frac{3\\sqrt{45}+6\\sqrt{20}}{3\\sqrt{5}} \\)","\\(\\frac{\\sqrt{15}-\\sqrt{12}}{\\sqrt{5}-2} \\)","\\(\\frac{\\sqrt{28}+\\sqrt{175}}{\\sqrt{700}-\\sqrt{63}} \\)","\\(\\frac{(5\\sqrt{3}+\\sqrt{50})(5-\\sqrt{24})}{\\sqrt{75}-5\\sqrt{2}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz liczbę \\(\\frac{1}{a} \\) w postaci ułamka, którego mianownik jest liczbą całkowitą.",
        "canvas": [],
        "podpunkty": ["\\(a=\\sqrt{3} \\)","\\(a=3\\sqrt{6} \\)","\\(a=\\frac{\\sqrt{2}}{3} \\)","\\(a=\\sqrt{\\frac{2}{3}} \\)","\\(a=\\frac{3\\sqrt{2}}{4} \\)","\\(a=\\frac{2\\sqrt{10}}{5} \\)",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz pierwiastek kwadratowy z podanej liczby.",
        "canvas": [],
        "podpunkty": ["\\((\\sqrt{50}-7)^2 \\)","\\((\\sqrt{20}-5)^2 \\)","\\((-\\sqrt{9})^2 \\)","\\((\\sqrt{6}-\\sqrt{2}-\\sqrt{3})^2 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Udowodnij, że zachodzi podana równość.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{8}+\\sqrt{32}=\\sqrt{2}+\\sqrt{50} \\)","\\(\\sqrt{5}+\\sqrt{405}=\\sqrt{45}+\\sqrt{245} \\)","\\(\\sqrt{12}+\\sqrt{27}+\\sqrt{48}=\\sqrt{3}+\\sqrt{192} \\)","\\(\\sqrt{68}+\\sqrt{153}=\\sqrt{17}+\\sqrt{272} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że podane liczby są przeciwne.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{18}-5\\sqrt{2}\\ i\\ \\sqrt{50}-3\\sqrt{2} \\)","\\(\\sqrt{3}-\\sqrt{27}\\ i\\ \\sqrt{147}-5\\sqrt{3} \\)","\\(\\frac{2-2\\sqrt{2}}{\\sqrt{2}}\\ i\\ \\sqrt{2}(\\sqrt{2}-1) \\)","\\(\\frac{1-\\sqrt{3}}{\\sqrt{3}}\\ i\\ -\\frac{1}{3}\\sqrt{3}+1 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że liczba \\(x \\)jest odwrotnością liczby \\(y \\).",
        "canvas": [],
        "podpunkty": ["\\(x=\\frac{\\sqrt{6}}{3},\\ y=\\frac{\\sqrt{6}}{2} \\)","\\(x=2\\sqrt{18},\\ y=\\frac{\\sqrt{3}}{3\\sqrt{24}} \\)","\\(x=2\\sqrt{3}+\\sqrt{12}+\\frac{\\sqrt{48}}{2},\\ y=\\frac{\\sqrt{3}}{18} \\)","\\(x=\\sqrt{(1+\\frac{1}{4})(1+\\frac{1}{3})(1+\\frac{1}{2})},\\ y=\\sqrt{(1-\\frac{1}{5})(1-\\frac{1}{4})(1-\\frac{1}{3})} \\)",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wśród liczb: \\(\\sqrt{3}-2,\\2+\\sqrt{3},\\2-\\sqrt{3},\\ -\\sqrt{3}-2 \\) wskaż:",
        "canvas": [],
        "podpunkty": ["pary liczb przeciwnych","pary liczb odwrotnych",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Punkty \\(E, F, G, H \\) są środkami boków kwadratu \\(ABCD \\) (patrz rysunek). Czworokąt \\(EFGH \\) ma pole równe \\(10 \\). Oblicz długość odcinka \\(AG \\).",
        "canvas": [{ "id": "l5rys1", "width": "300", "height": "300" } ],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Sprawdź, czy istnieje trójkąt obokach:",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{2}, 1, \\sqrt{3} \\)","\\(\\sqrt{3},4,\\sqrt{5} \\)",],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Porównaj liczby.",
        "canvas": [],
        "podpunkty": ["\\(2\\ i\\ \\sqrt{3} \\)","\\(3\\sqrt{2}\\ i\\ 2\\sqrt{3} \\)","\\(2\\sqrt{3} \\ i\\ \\sqrt{13} \\)","\\(5\\sqrt{3}\\ i\\ 3\\sqrt{5} \\)","\\(\\sqrt{4\\sqrt{3}}\\ i\\ \\sqrt{5\\sqrt{2}} \\)","\\(\\sqrt{5\\sqrt{3}}\\ i\\ \\sqrt{6\\sqrt{2}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Usuń niewymierność z mianownika.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{5\\sqrt{2}}{\\sqrt{8}} \\)","\\(\\frac{8+\\sqrt{18}}{\\sqrt{2}} \\)","\\(\\frac{\\sqrt{27}+\\sqrt{48}}{\\sqrt{3}} \\)","\\(\\frac{10}{\\sqrt{2}+\\sqrt{8}} \\)","\\(\\frac{\\sqrt{5}}{\\sqrt{20}+\\sqrt{45}} \\)","\\(\\frac{\\sqrt{2}+\\sqrt{3}}{\\sqrt{24}+\\sqrt{54}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{19+8\\sqrt{3}}=4+\\sqrt{3} \\)","\\(\\sqrt{4-2\\sqrt{3}}=\\sqrt{3}-1 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": ["\\(2-\\sqrt{(\\sqrt{3}-2)^2} \\)","\\(\\sqrt{(\\sqrt{3}+2)^2}+\\sqrt{(2-\\sqrt{3})^2} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Rozwiąż równanie.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{6}\\cdot \\sqrt{x}=\\sqrt{90} \\)","\\(\\sqrt{50}\\cdot 2\\sqrt{x}=\\sqrt{200} \\)","\\(\\sqrt{18}\\cdot \\sqrt{x}=\\sqrt{2} \\)","\\(\\sqrt{40}\\cdot \\sqrt{x}=\\sqrt{72} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Rozwiąż równania.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{x}=0,\\ \\sqrt{x^2}=0 \\)","\\(\\sqrt{x-1}=0,\\ \\sqrt{1-x}=0 \\)","\\(\\sqrt{x^2-1}=0,\\ \\sqrt{1-x^2}=0 \\)","\\(\\sqrt{x-2}=\\sqrt{2-x},\\ \\sqrt{x+3}=\\sqrt{-x+3} \\)","\\(\\sqrt{x^2-4}=\\sqrt{4-x^2},\\ \\sqrt{x^2-5}=\\sqrt{5-x^2} \\)","\\(\\sqrt{(x+2)^2-9}=\\sqrt{9-(x+2)^2},\\ \\sqrt{(x-3)^2-5}=\\sqrt{5-(x-3)^2} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz liczbę \\(a \\) spełniającą podany warunek.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{a}=2 \\)","\\(\\sqrt{a+1}=3 \\)","\\(\\sqrt{2a-1}=4 \\)","\\(\\sqrt{3-a}=5 \\)","\\(\\sqrt{a}=1-\\sqrt{3} \\)","\\(\\sqrt{a}=a \\)","\\(\\sqrt{a}=-a \\)","\\(\\sqrt{a-1}=1-a \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz wyrażenie w najprostszej postaci.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{(a-4)^2} \\) dla \\(a\\geq4 \\)","\\(\\sqrt{(a-3)^2} \\) dla \\(a<3 \\)","\\(\\sqrt{(a-1)^2}+\\sqrt{(a-5)^2} \\) dla \\(1\\leq a \\leq 5 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Udowodnij, że podana liczba jest wymierna.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{16\\sqrt{8}\\cdot 8\\sqrt{4}\\cdot 4\\sqrt{2}} \\)","\\(\\sqrt{\\sqrt{\\sqrt{\\sqrt{\\frac{1}{2}-\\frac{1}{4}}-\\frac{1}{4}}-\\frac{1}{4}}-\\frac{1}{4}} \\)","\\(\\frac{\\sqrt{3}}{1+\\frac{1}{1+\\frac{1}{1+\\sqrt{3}}}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wypisano wszystkie dzielniki naturalne liczby \\(36 \\) i z każdego z nich obliczono pierwiastek kwadratowy. Udowodnij, że suma tych pierwiastków jest mniejsza niż \\(36 \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że liczba \\((\\sqrt{3}-\\sqrt{2})^2 + 2\\sqrt{6} \\) jest naturalna.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Rozwiąż równanie \\(\\sqrt{\\sqrt{\\sqrt{\\sqrt{x}+1}+2}+3}=\\sqrt{1+2+3} \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że \\(\\sqrt{10+\\sqrt{24}+\\sqrt{40}+\\sqrt{60}}=\\sqrt{2}+\\sqrt{3}+\\sqrt{5} \\).",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
   {
        "id": `${nanoid()}`,
        "tresc": "Oblicz:",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{216}, \\ \\sqrt[3]{0,125}, \\ \\sqrt[3]{-125} \\)", "\\(\\sqrt[3]{-2\\frac{10}{27}}, \\ \\sqrt[3]{4\\frac{17}{27}}, \\ \\sqrt[3]{-3,375} \\)", "\\(\\sqrt[3]{\\sqrt{64}}, \\ \\frac{\\sqrt{\\sqrt[3]{64}}}{\\sqrt[3]{27}}, \\ \\sqrt[3]{9\\sqrt[3]{9\\sqrt{9}}} \\)", "\\(\\sqrt{\\sqrt[3]{216}+\\sqrt[3]{8}+1}, \\ \\sqrt[3]{\\sqrt[3]{343}-\\sqrt[3]{64}-3} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz, korzystając z własności pierwiastków.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{64\\cdot 0,027}, \\ \\sqrt[3]{3,375\\cdot \\frac{64}{125}} \\)", "\\(\\sqrt[3]{\\frac{1}{8}}\\cdot \\sqrt[3]{\\frac{8}{27}}\\cdot \\sqrt[3]{\\frac{27}{64}}, \\ \\sqrt[3]{\\frac{125}{729}}\\cdot \\sqrt[3]{\\frac{729}{1000}} \\)", "\\(\\sqrt[3]{\\frac{0,008}{125}}, \\ \\frac{\\sqrt[3]{80}}{\\sqrt[3]{10}}, \\ \\frac{\\sqrt[3]{98}\\cdot \\sqrt[3]{112}}{\\sqrt[3]{500}} \\)", "\\((\\sqrt[3]{625}-5\\sqrt[3]{5}):\\sqrt[3]{5}, \\ (6\\sqrt[3]{-56}+\\sqrt[3]{448}-\\sqrt[3]{875}):2\\sqrt[3]{-7} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Przedstaw liczbę w postaci pierwiastka trzeciego stopnia z liczby wymiernej",
        "canvas": [],
        "podpunkty": ["\\(5 \\)", "\\(-4 \\)", "\\(-1 \\)", "\\(\\frac{2}{3} \\)", "\\(0,1 \\)", "\\(-1\\frac{2}{5} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[4]{1} \\)", "\\(\\sqrt[4]{10000} \\)", "\\(\\sqrt[4]{81} \\)", "\\(\\sqrt[4]{0,0016} \\)", "\\(\\sqrt[5]{0} \\)", "\\(\\sqrt[5]{-0,00001} \\)", "\\(\\sqrt[5]{\\frac{1}{32}} \\)", "\\(\\sqrt[5]{-32} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Włącz czynnik pod pierwiastek.",
        "canvas": [],
        "podpunkty": ["\\(2\\sqrt[3]{7} \\)", "\\(-5\\sqrt[3]{2} \\)", "\\(8\\sqrt[3]{0,125} \\)", "\\(5\\sqrt[4]{8} \\)", "\\(0,5\\sqrt[5]{64} \\)", "\\(10\\sqrt[7]{0,0001} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyłącz czynnik przed pierwiastek.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{54} \\)", "\\(\\sqrt[3]{-5000} \\)", "\\(\\sqrt[3]{250} \\)", "\\(\\sqrt[4]{81\\cdot 82} \\)", "\\(\\sqrt[5]{32\\cdot \\frac{1}{33}} \\)", "\\(\\sqrt[6]{6000000} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Uporządkuj liczby malejąco. Nie korzystaj z kalkulatora.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": "\\(\\sqrt[3]{27} \\), \\(\\frac{7}{2}\\sqrt[3]{\\frac{2}{7}} \\), \\(7\\sqrt[3]{2} \\), \\(\\sqrt[3]{0,027} \\), \\(\\sqrt[3]{\\frac{27}{100}} \\), \\(2\\sqrt[3]{7} \\)",
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz, korzystając z własności pierwiastków.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{19^3} \\)", "\\(\\sqrt[3]{(-8)^3} \\)", "\\((\\sqrt[3]{21})^3 \\)", "\\((\\sqrt[3]{\\frac{3}{4}})^3 \\)", "\\((\\sqrt[3]{5^3})^3 \\)", "\\(\\left ( \\sqrt[3]{(-\\frac{1}{3})^3} \\right )^3 \\)", "\\(\\sqrt[3]{(\\sqrt[3]{(-3)^3})^3} \\)", "\\(\\left (\\sqrt[3]{(\\sqrt[3]{3^3})^3}\\right )^3 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Objętość kuli o promieniu \\(R \\) wyraża się wzorem \\(V=\\frac{4}{3}\\pi R^3 \\). Oblicz promień kuli o podanej objętości.",
        "canvas": [],
        "podpunkty": ["\\(V=36\\pi \\)", "\\(V=\\frac{\\pi}{6} \\)", "\\(V=\\frac{9}{16}\\pi \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Które iloczyny są większe od \\(10 \\)?",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{225}\\cdot \\sqrt[3]{\\frac{64}{125}} \\)", "\\(\\sqrt[4]{625}\\cdot \\frac{1}{\\sqrt[3]{0,125}} \\)", "\\(\\sqrt[6]{64}\\cdot \\sqrt[3]{64} \\)", "\\(\\sqrt[5]{32}\\cdot \\sqrt[3]{216} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "",
        "canvas": [],
        "podpunkty": ["Ile razy liczba \\(\\sqrt{256} \\) jest większa od liczby \\(\\sqrt[4]{256} \\)?", "O ile liczba \\(\\sqrt[5]{\\frac{1}{32}} \\) jest większa od liczby \\(\\sqrt[5]{-32} \\)?", "Który iloraz jest większy: \\(\\sqrt{729}:\\sqrt[3]{729} \\) czy \\(\\sqrt[3]{729}:\\sqrt[6]{729} \\)?"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wykonaj działania. Wynik zapisz w postaci pierwiastka sześciennego z liczby całkowitej.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{2}+2\\sqrt[3]{2} \\)", "\\(2\\sqrt[3]{3}+3\\sqrt[3]{3} \\)", "\\(\\sqrt[3]{4}+\\sqrt[3]{32} \\)", "\\(\\sqrt[3]{800}+\\sqrt[3]{4}\\cdot \\sqrt[3]{25} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz. Wynik przedstaw w postaci ułamka zwykłego nieskracalnego.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{\\sqrt[3]{108}+\\sqrt[3]{32}}{\\sqrt[3]{4000}} \\)", "\\(\\frac{\\sqrt[3]{54}}{\\sqrt[3]{16}+\\sqrt[3]{54}+\\sqrt[3]{128}} \\)", "\\(\\frac{\\sqrt[3]{16}+\\sqrt[3]{54}}{\\sqrt[3]{128}} \\)", "\\(\\frac{\\sqrt[3]{192}-\\sqrt[3]{24}+\\sqrt[3]{3}}{\\sqrt[3]{81}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[7]{32\\cdot \\sqrt[3]{-64}}+\\sqrt[5]{81\\cdot \\sqrt[3]{-27}} \\)", " \\(\\left (2\\sqrt[3]{1\\frac{4}{5}}+\\sqrt[3]{-8\\frac{1}{3}}\\right )\\cdot \\sqrt[3]{-0,12} \\) ", " \\(\\frac{\\sqrt[5]{54}\\cdot \\sqrt[5]{-9}}{\\sqrt[5]{-2}}+\\frac{\\sqrt[5]{6}\\cdot \\sqrt[5]{-16}}{\\sqrt[5]{3}} \\) ", " \\(\\left ( 2\\sqrt[4]{1250}-3\\sqrt[4]{162} \\right ):3\\sqrt[4]{32} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Kostkę sześcienną wykonano z materiału o gęstości \\(750\\ kg/m^3 \\). Kostka waży \\(3,072\\ kg \\). Ile centymetrów na jej krawędź?",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz długość odcinków \\(x,\\ y,\\ z \\).",
        "canvas": [{
            "id": "ps16a",
            "width": "200",
            "height": "200",
        }, {
            "id": "ps16b",
            "width": "200",
            "height": "200",
        }, {
            "id": "ps16c",
            "width": "200",
            "height": "200",
        }],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zanjdź liczbę odwrotną do podanej. Zapisz ją w postaci ułamka o mianowniku całkowitym.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{2} \\)", "\\(\\sqrt[3]{2} \\)", "\\(\\sqrt[4]{2} \\)", "\\(\\sqrt[5]{2} \\)", "\\(2\\sqrt{3} \\)", "\\(2\\sqrt[3]{3} \\)", "\\(2\\sqrt[4]{3} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Zapisz ułamek w postaci \\(a\\sqrt[n]{b} \\), gdzie \\(a \\), \\(b \\) i \\(n \\) są liczbami naturalnymi.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{12}{\\sqrt[3]{4}} \\)", "\\(\\frac{3\\sqrt[3]{2}}{\\sqrt[3]{3}} \\)", "\\(\\frac{9}{\\sqrt[4]{27}} \\)", "\\(\\frac{2}{\\sqrt[5]{8}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Wykaż, że podana liczba jest wymierna.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{\\sqrt{25}}\\cdot \\sqrt[3]{25} \\)", "\\(\\sqrt{\\sqrt[4]{10000}-\\sqrt[4]{1}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz bez pomocu kalkulatora dwie kolejne liczby całkowite, między którymi znajduje się podana liczba.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{23} \\)", "\\(\\sqrt[3]{-19} \\)", "\\(\\sqrt[4]{53} \\)", "\\(\\sqrt[5]{-34} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Ile liczb naturalnych \\(n \\) spełnia warunek \\(101 < \\sqrt[3]{n} < 102 \\)?",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": "\\(\\frac{(\\sqrt[4]{5,0625}+\\sqrt[5]{5,0625})-(\\sqrt[5]{5,0625}+\\sqrt[6]{5,0625})+(\\sqrt[6]{5,0625}+\\sqrt[4]{5,0625})}{2} \\)",
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt{0,(4)} \\)", "\\(\\sqrt[3]{0,(296)} \\)", "\\(\\sqrt[4]{3\\cdot 5,(3)} \\)", "\\(\\sqrt[5]{15\\cdot 2,1(3)} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Uprość wyrażenie.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{-2a^2}(\\sqrt[3]{-4a^4}-\\sqrt[3]{32a}) \\)", "\\(\\sqrt[3]{(-a)^3b}\\cdot \\sqrt[3]{-b^2} \\)", "\\(\\sqrt[5]{(-a)^4(-b)}\\cdot \\sqrt[5]{-ab^4} \\)", "\\(\\left (\\sqrt[3]{(-a)b^4}+\\sqrt[3]{(-a)^4b}\\right ):\\sqrt[3]{a(-b)} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Średnia geometryczna trzech liczb dodatnich \\(a \\), \\(b \\), \\(c \\) jest równa \\(\\sqrt[3]{abc} \\), a średnia geometryczna dwóch liczb dodatnich \\(a \\) i \\(b \\) wyraża się wzorem \\(\\sqrt{ab} \\).",
        "canvas": [],
        "podpunkty": ["Sprawdź, czy średnia geometryczna liczb \\(\\sqrt[3]{2} \\), \\(4\\sqrt[3]{2} \\), \\(8\\sqrt[3]{2} \\) jest liczbą wymierną.", "Podaj przykład dwóch różnych liczb niewymiernych, których średnia geometryczna jest liczbą wymierną."],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Wyznacz liczbę \\(a \\) spełniającą podany warunek.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{a}=-2 \\)", "\\(\\sqrt[3]{-a}=3 \\)", "\\(\\sqrt[3]{a}=2\\sqrt[3]{4} \\)", "\\(\\sqrt[4]{a-1}=2 \\)", "\\(\\sqrt[4]{a}=-2 \\)", "\\(\\sqrt[4]{-a}=3 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Rozwiąż równanie",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[3]{x-2}=4 \\)", "\\(\\sqrt[3]{x+6}=-3 \\)", "\\(\\sqrt[5]{x}=2 \\)", "\\(\\sqrt[4]{x+8}=2 \\)", "\\(\\sqrt[4]{3-x}=-2 \\)", "\\(\\sqrt[6]{250x}=10 \\)", "\\(\\sqrt[7]{1-x^2}=-1 \\)", "\\(\\sqrt[8]{x^2-80}=1 \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Podaj liczbę \\(n \\), dla której:",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[n]{125}=5 \\)", "\\(\\sqrt[n]{-\\frac{1}{8}}=-\\frac{1}{2} \\) ", "\\(\\sqrt[n]{256}=4 \\)", "\\(\\sqrt[n]{256}=16 \\)", "\\(\\sqrt[n]{256}=2 \\)", "\\(\\sqrt[n]{0,000001}=0,1 \\)", "\\(\\sqrt[n]{0,0016}=0,2 \\)", "\\(\\sqrt[n]{-\\frac{1}{32}}=-\\frac{1}{2} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz. Wynik przedstaw w postaci ułamka, którego mianownik jest liczbą naturalną.",
        "canvas": [],
        "podpunkty": ["\\(\\frac{3}{2\\sqrt[3]{4}}+\\frac{6}{5\\sqrt[3]{4}} \\)", "\\(\\frac{7}{\\sqrt[3]{2}}+\\frac{3}{\\sqrt[3]{4}} \\)", "\\(\\frac{0,5\\sqrt[3]{2}}{\\sqrt[3]{4}}+\\frac{2,5}{\\sqrt[3]{2}} \\)", "\\(6\\sqrt[3]{2}+\\frac{3}{\\sqrt[3]{4}} \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "Oblicz.",
        "canvas": [],
        "podpunkty": ["\\(\\sqrt[19]{-1}-\\sqrt[17]{-1}+\\sqrt[15]{-1}-\\sqrt[13]{-1}+_{\\cdots} +\\sqrt[5]{-1}-(-1) \\)", "\\(99\\sqrt[99]{-1}-97\\sqrt[97]{-1}+95\\sqrt[95]{-1}-93\\sqrt[93]{-1}+_{\\cdots} -5\\sqrt[5]{-1}+3\\sqrt[3]{-1}-(-1) \\)"],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": null,
        "ramkapo": null,
    },
    {
        "id": `${nanoid()}`,
        "tresc": "\\(ⅅ\\) Udowodnij, że:",
        "canvas": [],
        "podpunkty": [],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": "\\(\\sqrt{100}+\\sqrt[3]{100}+\\sqrt[4]{100}+\\sqrt[5]{100}+\\sqrt[6]{100}+\\sqrt[7]{100}+\\sqrt[8]{100}+\\sqrt[9]{100}+\\sqrt[10]{100}<33 \\)",
        "ramkapo": null,
    }
]

export default pierwiastki