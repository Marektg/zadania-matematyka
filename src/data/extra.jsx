import { MathJax } from 'better-react-mathjax'
import React from 'react'
import styles from './extra.module.scss';

export const Extra = ({ id }) => {
    let content;
    const { mainFrame, firstRow, mainPart, lastRow, wrapFlex } = styles;
    switch (id) {
        case "rozdzie1": (

            content = <div className={mainFrame}>



                <div className={firstRow}>Jak znaleźć rozwinięcie dziesiętne liczby <MathJax inline>{"\\(\\frac{6}{19}\\)"}</MathJax></div>

                <div className={mainPart}>
                    
                        <div>6 : 19 = 0,31578947</div>
                        <div>Dzielimy na kalkulatorze 6 przez 19</div>
                   
                        <div><span>0,3157894</span></div>
                        <div>Zapisujemy wynik, pomijając ostatnią cyfrę. Jeżeli bezpośrednio przed pomijaną cyfrą są zera, je również pomijamy</div>
                   
                        <div>0,3157894 x 19 = 5,9999986</div>
                        <div>Zapisaną liczbę mnożymy przez 19</div>
                   
                        <div>6-5,9999986=0,0000014<br></br>
                            14 : 19= 0,73684211
                        </div>
                        <div>Obliczamy ile brakuje do 6, pomijamy zera
                            i otrzymaną liczbę naturalną (czyli 14)
                            dzielimy przez 19</div>
                    
                    <div>0,3157894<span>7368421</span> </div>
                    <div>Cyfry po przecinku ( z pominięciem ostatniej)
                        dopisujemy na końcu wcześniej otrzymanego
                        rozwinięcia dziesiętnego</div>

                    <div>0,7368421 x 19=13,9999999</div>
                    <div>Liczbę 0,7368421 mnożymy przez 19</div>

                    <div>14-13,9999999=0,000001
                        1 : 19=0,05263158
                        0,31578947368421<span>0526315</span>
                        0,0526315 x 19=0,9999985
                        1-0,9999985=0,0000015
                        15 : 19=0,78947368
                        0,315789473684210526315<span>7894736</span>
                    </div>
                    <div>
                        Powtarzamy powyższe kroki tak długo,
                        aż otrzymamy okres ułamka</div>
                </div>
                <div className={lastRow}>Odpowiedź:<MathJax inline>{"\\(\\frac{6}{19} \\)=0,(315789473684210526)"}</MathJax></div>


            </div>


        ); break;
        case "rozdziere1": (
            content = <div className={wrapFlex}>
                <div><p>Sposób na przedstawienie ułamka okresowego w postaci ułamka zwykłego</p>
                <MathJax inline>{"\\(0,23(5)=\\frac{p}{q}=\\frac{235 - 23}{900}=\\frac{212}{900}=\\frac{53}{225}\\)"}</MathJax></div>
                <div>
                <MathJax inline>{"\\(\\bullet\\)"}</MathJax> Aby obliczyć <MathJax inline>{"\\(p \\)"}</MathJax>, od liczby utworzonej z cyfr po przecinku odejmujemy liczbę utworzoną z cyfr stojących między przecinkiem a okresem</div>
                <div> <MathJax inline>{"\\(\\bullet\\)"}</MathJax> Aby otrzymać <MathJax inline>{"\\(q \\)"}</MathJax>, zapisujemy tyle dziewiątek, ile jest cyfr w okresie, i tyle zer, ile jest cyfr między przecinkiem a okresem.
                </div>
            </div>
        ); break;
        default: break;

    }
    return content
}

export default Extra