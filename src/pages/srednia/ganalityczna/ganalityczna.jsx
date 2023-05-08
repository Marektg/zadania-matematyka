import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const Analityczna = () => {
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
                    <Tytul>Geometria analityczna</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Odcinek w układzie współrzędnych</Guz>
                        <Guz id="2" onClick={renderTask}>Równanie kierunkowe prostej</Guz>
                        <Guz id="3" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Równanie prostej w postaci ogólnej</Guz>
                        <Guz id="4" onClick={renderTask}>Równanie okręgu</Guz>
                        <Guz id="5" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wyznaczanie punktów wspólnych prostych, okręgów i parabol</Guz>
                        <Guz id="6" onClick={renderTask}>Zastosowanie układów równań do rozwiązywania zadań z geometrii analitycznej</Guz>
                        <Guz id="7" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wektor w układzie współrzędnych, podział odcinka</Guz>
                        <Guz id="8" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Kąt między wektorami</Guz>
                        <Guz id="9" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Odległość punktu od prostej, odległość między prostymi równoległymi</Guz>
                        <Guz id="10" onClick={renderTask}>Pole trójkąta, pole wielokątów</Guz>
                        <Guz id="11" onClick={renderTask}>Wzajemne położenie prostej i okręgu</Guz>
                        <Guz id="12" onClick={renderTask}>Wzajemne położenie dwóch okręgów</Guz>
                        <Guz id="13" onClick={renderTask}>Zadania różne</Guz>
                        <Guz id="14" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wybrane przekształcenia geometryczne w układzie współrzędnych</Guz>
                        <Guz id="15" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Zastosowanie analizy matematycznej w rozwiązywaniu zadań z geometrii analitycznej</Guz>
                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="11" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Analityczna