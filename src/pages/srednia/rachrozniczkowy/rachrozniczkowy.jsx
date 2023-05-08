import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const AnalizaMatematyczna = () => {
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
                    <Tytul> <MathJax inline>{"\\(\\star\\)"}</MathJax> Analiza matematyczna <MathJax inline>{"\\(\\star\\)"}</MathJax></Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Granica funkcji w punkcie</Guz>
                        <Guz id="2" onClick={renderTask}>Granice jednostronne</Guz>
                        <Guz id="3" onClick={renderTask}>Granica funkcji w nieskończoności</Guz>
                        <Guz id="4" onClick={renderTask}>Granica niewłaściwa funkcji</Guz>
                        <Guz id="5" onClick={renderTask}>Ciągłość funkcji</Guz>
                        <Guz id="6" onClick={renderTask}>Asymptoty wykresu funkcji</Guz>
                        <Guz id="7" onClick={renderTask}>Pochodna funkcji w punkcie</Guz>
                        <Guz id="8" onClick={renderTask}>Funkcja złożona i jej pochodna</Guz>
                        <Guz id="9" onClick={renderTask}>Styczna do wykresu funkcji</Guz>
                        <Guz id="10" onClick={renderTask}>Pochodna funkcji a jej monotoniczność</Guz>
                        <Guz id="11" onClick={renderTask}>Ekstrema lokalne funkcji</Guz>
                        <Guz id="12" onClick={renderTask}>Największa i najniejsza wartość funkcji w przedziale domkniętym</Guz>
                        <Guz id="13" onClick={renderTask}>Zadania optymalizacyjne</Guz>


                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="16" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default AnalizaMatematyczna