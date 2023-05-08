import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const Stereometria = () => {
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
                    <Tytul>Stereometria</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Płaszczyzny i proste w przestrzeni</Guz>
                        <Guz id="2" onClick={renderTask}>Prostopadłość prostych i płaszczyzn w przestrzeni</Guz>
                        <Guz id="3" onClick={renderTask}>Rzut równoległy na płaszczyznę</Guz>
                        <Guz id="4" onClick={renderTask}>Twierdzenie o trzech prostych prostopadłych</Guz>
                        <Guz id="5" onClick={renderTask}>Kąt między prostą a płaszczyzną, kąt dwuścienny</Guz>
                        <Guz id="6" onClick={renderTask}>Graniastosłupy</Guz>
                        <Guz id="7" onClick={renderTask}>Ostrosłupy</Guz>
                        <Guz id="8" onClick={renderTask}>Siatka wielościanu, pole powierzchni</Guz>
                        <Guz id="9" onClick={renderTask}>Objętość wielościanów</Guz>
                        <Guz id="10" onClick={renderTask}>Przekroje wielościanów</Guz>
                        <Guz id="11" onClick={renderTask}>Walec</Guz>
                        <Guz id="12" onClick={renderTask}>Stożek</Guz>
                        <Guz id="13" onClick={renderTask}>Kula i sfera</Guz>
                        <Guz id="14" onClick={renderTask}>Bryły obrotowe - zadania różne</Guz>
                        <Guz id="15" onClick={renderTask}>Podobieństwo figur w przestrzeni</Guz>
                        <Guz id="16" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Zastosowanie analizy matematycznej w rozwiązywani zadań z geometrii przestrzennej</Guz>

                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="20" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Stereometria