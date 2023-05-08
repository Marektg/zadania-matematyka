import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const TrygonometriaS = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);






    const renderTask = (event) => {
        setTitle(event.target.innerText);

        setCurrentTask(event.target.id);
        let targets = event.target.parentElement.childNodes
        for (let i = 0; i < targets.length; i++) {
            if (event.target.id === targets[i].id) {
                targets[i].style.backgroundColor = "green";
            } else { targets[i].style.backgroundColor = "#e9e9ed" }
        }

    }
    // console.log(currentTask);


    return (
        <MainDiv>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="b" />
                <TaskList>
                    <Tytul>Trygonometria</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Określenie funkcji trygonometrycznych w trójkącie prostokątnym</Guz>
                        <Guz id="2" onClick={renderTask}>Funkcje trygonometryczne <MathJax inline>{"\\(30^{\\circ},45^{\\circ},60^{\\circ}\\)"}</MathJax></Guz>
                        <Guz id="3" onClick={renderTask}>Zależności między funkcjami trygonometrycznymi tego samego kąta ostrego</Guz>
                        <Guz id="4" onClick={renderTask}>Fukcje trygonometryczne kąta płaskiego</Guz>
                        <Guz id="5" onClick={renderTask}>Podstawowe tożsamości trygonometryczne</Guz>
                        <Guz id="6" onClick={renderTask}>Wybrane wzory redukcyjne</Guz>
                        <Guz id="7" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Kąt skierowany, miara łukowa kąta</Guz>
                        <Guz id="8" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne zmiennej rzeczywistej</Guz>
                        <Guz id="9" onClick={renderTask}>Wykresy funkcji trygonometrycznych</Guz>
                        <Guz id="10" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Przekształcenia fykresów funkcji trygonometrycznych</Guz>
                        <Guz id="11" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne sumy i różnicy kątów</Guz>
                        <Guz id="12" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Funkcje trygonometryczne wielokrotności kąta</Guz>
                        <Guz id="13" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Suma i różnica funkcji trygonometrycznych</Guz>
                        <Guz id="14" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Równania trygonometryczne</Guz>
                        <Guz id="15" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Nierówności trygonometryczne</Guz>
                        <Guz id="16" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Pochodne funkcji trygonometrycznych</Guz>
                        
                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="7" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default TrygonometriaS