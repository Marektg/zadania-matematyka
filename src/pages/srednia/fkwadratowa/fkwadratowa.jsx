import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const Fkwadratowa = () => {
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
                    <Tytul>Funkcja kwadratowa</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Podstawowe własności</Guz>
                        <Guz id="2" onClick={renderTask}>Postać ogólna i kanoniczna funkcji kwadratowej</Guz>
                        <Guz id="3" onClick={renderTask}>Miejsce zerowe funkcji kwadratowej i jej postać iloczynowa</Guz>
                        <Guz id="4" onClick={renderTask}>Szkicowanie wykresów i odczytywanie własności funkcji na podstawie wykresu</Guz>
                        <Guz id="5" onClick={renderTask}>Wyznaczanie wzou funkcji na podstawie jej własności</Guz>
                        <Guz id="6" onClick={renderTask}>Najmniejsza i największa wartość funkcji w przedziale domkniętym</Guz>
                        <Guz id="7" onClick={renderTask}>Równania kwadratowe</Guz>
                        <Guz id="8" onClick={renderTask}>Nierówności kwadratowe</Guz>
                        <Guz id="9" onClick={renderTask}>Równania i nierówności dwukwadratowe</Guz>
                        <Guz id="10" onClick={renderTask}>Równania i nierówności, w których niewiadoma jest pod znakiem pierwiastka kwadratowego</Guz>
                        <Guz id="11" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wykres funkcji kwadratowej z wartością bezwzględną</Guz>
                        <Guz id="12" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wzory Viete`a</Guz>
                       
                        <Guz id="13" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax>Równania i nierówności kwadratowe z parametrem</Guz>
                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="10" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Fkwadratowa