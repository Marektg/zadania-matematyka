import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
// import { MathJax } from 'better-react-mathjax';


const Kombinatoryka = () => {
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
                    <Tytul>Kombinatoryka</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Reguła mnożenia i reguła dodawania</Guz>
                        <Guz id="2" onClick={renderTask}>Wariacje</Guz>
                        <Guz id="3" onClick={renderTask}>Permutacje</Guz>
                        <Guz id="4" onClick={renderTask}>Kombinacje</Guz>
                        <Guz id="5" onClick={renderTask}>Kombinatoryka - zadania różne</Guz>
                        <Guz id="6" onClick={renderTask}>Symbol Newtona, wzór Newtona, trójkąt Pascala</Guz>
                       

                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="15" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Kombinatoryka