import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const CiagiS = () => {
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
                    <Tytul>Ciągi</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Określenie i sposoby opis ciągu</Guz>
                        <Guz id="2" onClick={renderTask}>Monotoniczność ciągu</Guz>
                        <Guz id="3" onClick={renderTask}>Ciąg arytmetyczny</Guz>
                        <Guz id="4" onClick={renderTask}>Ciąg geometryczny</Guz>
                        <Guz id="5" onClick={renderTask}>Zadania różne</Guz>
                        <Guz id="6" onClick={renderTask}>Lokaty pieniężne i kredyty bankowe</Guz>
                        <Guz id="7" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Granica ciągu liczbowego</Guz>
                        <Guz id="8" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Obliczanie granic ciągów zbieżnych i ich własności</Guz>
                        <Guz id="9" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Ciągi rozbieżne</Guz>
                        <Guz id="10" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Szereg geometryczny</Guz>

                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="14" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default CiagiS