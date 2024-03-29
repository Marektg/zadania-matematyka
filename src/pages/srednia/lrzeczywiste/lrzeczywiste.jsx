import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const Lrzeczywiste = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);






    const renderTask = (event) => {
        setTitle(event.target.innerText);
        let targets = event.target.parentElement.childNodes
       
        for (let i = 0; i < targets.length; i++) {
            if (event.target.id === targets[i].id) {
                targets[i].style.backgroundColor = "green";
            }
            else { targets[i].style.backgroundColor = "#e9e9ed" }
        }
    
    setCurrentTask(event.target.id);

};
    // console.log(currentTask);


    return (
        <MainDiv>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="b" />
                <TaskList>
                    <Tytul>Liczby rzeczywiste </Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Zbiory i działania na zbiorach</Guz>
                        <Guz id="2" onClick={renderTask}>Liczby rzeczywiste</Guz>
                        <Guz id="3" onClick={renderTask}>Przedziały</Guz>
                        <Guz id="4" onClick={renderTask}>Równania i ich rozwiązywanie metodą równań równoważnych</Guz>
                        <Guz id="5" onClick={renderTask}>Nierówności</Guz>
                        <Guz id="6" onClick={renderTask}>Procenty i punkty procentowe</Guz>
                        <Guz id="7" onClick={renderTask}>Przybliżenia i błędy</Guz>

                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="1" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Lrzeczywiste