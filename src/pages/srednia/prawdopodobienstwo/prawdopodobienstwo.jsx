import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
// import { MathJax } from 'better-react-mathjax';


const Prawdopodobienstwo = () => {
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
                    <Tytul>Rachunek prawdopodobieństwa</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Kombinatoryka</Guz>
                        <Guz id="2" onClick={renderTask}>Zdarzenia i działania na zdarzeniach</Guz>
                        <Guz id="3" onClick={renderTask}>Prawdopodobieństwo klasyczne</Guz>
                        <Guz id="4" onClick={renderTask}>Doświadczenia wieloetapowe</Guz>
                        <Guz id="5" onClick={renderTask}>Prawdopodobieństwo warunkowe</Guz>
                        <Guz id="6" onClick={renderTask}>Prawdopodobieństwo całkowite, wzór Bayesa</Guz>
                        <Guz id="7" onClick={renderTask}>Niezależność zdarzeń</Guz>
                        <Guz id="8" onClick={renderTask}>Schemat Bernoulliego</Guz>
                        <Guz id="9" onClick={renderTask}>Zmienna losowa i jej wartość oczekiwana</Guz>

                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="19" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Prawdopodobienstwo