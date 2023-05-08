import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const WielomianyS = () => {
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
                    <Tytul>Wielomiany</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>WIelomiany jednej zmiennej rzeczywistej</Guz>
                        <Guz id="2" onClick={renderTask}><MathJax inline>{"\\(+,-,\\cdot\\)"}</MathJax> wielomianów</Guz>
                        <Guz id="3" onClick={renderTask}>Równość wielomianów</Guz>
                        <Guz id="4" onClick={renderTask}>Wzory skróconego mnożenia stopnia <MathJax inline>{"\\(3\\)"}</MathJax>, <MathJax inline>{"\\(a^n-b^n\\)"}</MathJax>  </Guz>
                        <Guz id="5" onClick={renderTask}>Podzielność wielomianów</Guz>
                        <Guz id="6" onClick={renderTask}>Dzielenie wielomianów - schemat Homera</Guz>
                        <Guz id="7" onClick={renderTask}>Dzielenie wielomianów przez dowolny wielomian</Guz>
                        <Guz id="8" onClick={renderTask}>Pierwiastek wielomianu, twierdzenie Bézouta</Guz>
                        <Guz id="9" onClick={renderTask}>Pierwiastki wymierne wielomianu</Guz>
                        <Guz id="10" onClick={renderTask}>Pierwiastek wielokrotny</Guz>
                        <Guz id="11" onClick={renderTask}>Rozkład wielomianu na czynniki</Guz>
                        <Guz id="12" onClick={renderTask}>Równania wielomianowe</Guz>
                       <Guz id="13" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Równania wielomianowe z parametrem</Guz>
                        <Guz id="14" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Funkcje wielomianowe</Guz>
                        <Guz id="15" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Nierówności wielomianowe</Guz>
                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="12" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default WielomianyS