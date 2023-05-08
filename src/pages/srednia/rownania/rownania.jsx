import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const Rownania = () => {
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
                    <Tytul>Równania i nierówności z wartością bezwzględną i z parametrem</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Wartość bezwzględna</Guz>
                        <Guz id="2" onClick={renderTask}>Geometryczna interpretacja wartości bezwzględnej</Guz>
                        <Guz id="3" onClick={renderTask}>Własności wartości bezwzględnej</Guz>
                        <Guz id="4" onClick={renderTask}>Równania liniowe z wartością bezwzględną</Guz>
                        <Guz id="5" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Nierówności liniowe z wartością bezwzględną</Guz>
                        <Guz id="6" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Równania liniowe z parametrem</Guz>
                        <Guz id="7" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Nierówności liniowe z parametrem</Guz>
                        <Guz id="8" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Układy równań liniowych z parametrem</Guz>
                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="9" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Rownania