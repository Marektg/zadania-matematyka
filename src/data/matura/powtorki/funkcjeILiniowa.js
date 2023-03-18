import { nanoid } from "@reduxjs/toolkit"


const pfunkcjeILiniowa= [
    {
        "id": `${nanoid()}`,
        "tresc": "Odczytaj z wykresu funkcji \\(f\\)",
        "canvas": [{ "id": "funkcjerys1", "width": "300", "height": "300" }, { "id": "funkcjerys2", "width": "300", "height": "300" }],
        "podpunkty": [""],
        "wskazowka": null,
        "ramka": null,
        "extraRamka": null,
        "tresc2": "- jej dziedzinę, zbiór wartości oraz przedziały monotoniczności",
        "tresc4": "- argumenty, da których przyjmuje ona wartości nieujemne",
        "ramkapo": null,
        "typ": "powtorka"
    },
]

export default pfunkcjeILiniowa;