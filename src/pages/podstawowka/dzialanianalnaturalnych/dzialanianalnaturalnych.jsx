import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from '../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';
import { MathJax } from 'better-react-mathjax';


const Dzialania = () => {
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
        console.log(event.target.id);
        setCurrentTask(event.target.id);

    };
    // console.log(currentTask);


    return (
        <MainDiv>
            <TopNavi model="a" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="a" />
                <TaskList>
                    <Tytul>Działnia na liczbach naturalnych </Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Obliczenia pamięciowe na liczbach naturalnych</Guz>
                        <Guz id="2" onClick={renderTask}>Porównywanie różnicowe i ilorazowe</Guz>
                        <Guz id="3" onClick={renderTask}>Potęga liczby naturalnej</Guz>
                        <Guz id="4" onClick={renderTask}>Kolejność wykonywania działań</Guz>
                        <Guz id="5" onClick={renderTask}>Szacowanie wyników</Guz>
                        <Guz id="6" onClick={renderTask}>Podzielność liczb naturalnych przez <MathJax inline> {"\\(2,\\ 3,\\ 4,\\ 5,\\ 9,\\ 10,\\ 100\\)"}</MathJax></Guz>
                        <Guz id="7" onClick={renderTask}>Miary czasu</Guz>
                        <Guz id="8" onClick={renderTask}>Prędkość - droga - czas</Guz>
                        <Guz id="9" onClick={renderTask}>Działania pisemne na liczbach naturalnych</Guz>
                        <Guz id="10" onClick={renderTask}>Zaokrąglanie liczb</Guz>


                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="sp2" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>


    )
}

export default Dzialania