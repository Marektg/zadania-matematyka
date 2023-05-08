import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const Wyrazenia = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    




    const renderTask = (event) => {
        setTitle(event.target.innerText);
        // console.log(event.target.id)
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
                <LeftNavi model="b"/>
                <TaskList>
                    <Tytul>Wyrażenia algebraiczne</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Potęgi</Guz>
                        <Guz id="2" onClick={renderTask}>Pierwiastki arytmetyczne</Guz>
                        <Guz id="3" onClick={renderTask}>Działania na wyrażeniach algebraicznych</Guz>
                        <Guz id="4" onClick={renderTask}>Wzory skróconego mnożenia stopnia <MathJax inline>{"\\(2\\)"}</MathJax></Guz>
                        <Guz id="5" onClick={renderTask}>Określenie i własności logarytmu</Guz>
                        <Guz id="6" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Zdania</Guz>
                        <Guz id="7" onClick={renderTask}>Twierdzenie i dowodzenie twierdzenia</Guz>
                        <Guz id="8" onClick={renderTask}>Średnie</Guz>
                        <Guz id="9" onClick={renderTask}>Zadania na dowodzenie z wykorzystaniem średnich</Guz>
                       </MainGuz>
                    
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="2" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Wyrazenia