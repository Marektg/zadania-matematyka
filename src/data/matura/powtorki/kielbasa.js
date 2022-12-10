import { nanoid } from "@reduxjs/toolkit"

const kielbasa = [
    {
        "id": `${nanoid()}`,
        "dzial": "Wyrażenia algebraiczne. Równania i nierówności algebraiczne.",
        "numer": "1.1",
        "tresc": "Sporwdź do najprostszej postaci wyrażenie:",
        "podpunkty": ["\\(3x^2+2x^2\\)", "\\((3x)^2+(2x)^2\\)", "\\(x^4+3x^3+x^2-x-(x^3-2x^2-x)\\)", "\\((x+2)(x+3)-5(x-2)\\)", "\\((x^2+3x+2)(x^2-3x+2)\\)"],
        "canvas": [],
        "trescpocanvie": null,
        "tresc2": null,
        "koniec": null,
        "answer": ["\\(3x^2+2x^2=5x^2\\)", "\\((3x)^2+(2x)^2=9x^2+4x^2=13x^2\\)", "\\(x^4+3x^3+x^2-x-(x^3-2x^2-x)=x^4+3x^3+x^2-x-x^3+2x^2+x=x^4\\)", "\\((x+2)(x+3)-5(x-2)=x^2+3x+2x+6-5x+10=x^2+16\\)", "\\((x^2+3x+2)(x^2-3x+2)=x^4-(3x+2)^2=x^4-9x^2-12x-4\\)"],
    },
    {
        "id": `${nanoid()}`,
        "dzial": "Wyrażenia algebraiczne. Równania i nierówności algebraiczne:",
        "numer": "1.2",
        "tresc": "Wykonaj potęgowanie",
        "podpunkty": ["\\((2x+3y)^2\\)", "\\((5a-2b)^2\\)", "\\((-7x-4y)^2\\)", "\\((\\sqrt{6}p+\\sqrt{15}q)^2\\)", "\\((m+1)^3\\)", "\\((a+b+1)^2\\)"],
        "canvas": [],
        "trescpocanvie": null,
        "tresc2": null,
        "koniec": null,
        "answer": ["\\((2x+3y)^2=4x^2+12xy+9y^2\\)", "\\((5a-2b)^2=25a^2-20ab+4b^2\\)", "\\((-7x-4y)^2=(-1)^2\\cdot (7x+4y)^2=49x^2+56xy+16y^2\\)", "\\((\\sqrt{6}p+\\sqrt{15}q)^2= 6p^+2\\sqrt{90}pq+15q^2=6p^+6\\sqrt{10}pq+15q^2 \\)", "\\((m+1)^3= m^3+3m^2+3m+1\\)", "\\((a+b+1)^2=a^2+b^2+1+2ab+2a+2b\\)"],
    },
    {
        "id": `${nanoid()}`,
        "dzial": "Wyrażenia algebraiczne. Równania i nierówności algebraiczne.",
        "numer": "1.3",
        "tresc": "Sporwdź do najprostszej postaci wyrażenie:",
        "podpunkty": [],
        "canvas": [],
        "trescpocanvie": null,
        "tresc2": null,
        "koniec": null,
        "answer": [],
    },
    {
        "id": `${nanoid()}`,
        "dzial": "Wyrażenia algebraiczne. Równania i nierówności algebraiczne.",
        "numer": "",
        "tresc": "",
        "podpunkty": [],
        "canvas": [],
        "trescpocanvie": null,
        "tresc2": null,
        "koniec": null,
        "answer": [],
    },


]

export default kielbasa


// {
//     "id": `${nanoid()}`,
//         "dzial": "Wyrażenia algebraiczne. Równania i nierówności algebraiczne.",
//             "numer": "",
//                 "tresc": "",
//                     "podpunkty": [],
//                         "canvas": [],
//                             "trescpocanvie": null,
//                                 "tresc2": null,
//                                     "koniec": null,
//                                         "answer": [],
//     },