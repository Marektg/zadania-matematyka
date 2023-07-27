import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from '../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';
import { MathJax } from 'better-react-mathjax';


const DzialaniaNaUlamkach = () => {
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
                    <Tytul>Działania na ułamkach zwykłych i dziesiętnych</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Działania na ułamnach zwykłych</Guz>
                        <Guz id="2" onClick={renderTask}>Działania na ułamnach dziesiętnych</Guz>
                        <Guz id="3" onClick={renderTask}>Ułamki dziesiętne o mianowniku <MathJax inline> {"\\(100\\)"}</MathJax> - procenty</Guz>
                        <Guz id="4" onClick={renderTask}>Działania na ułamnach zwykłych i dziesiętnych</Guz>
                        <Guz id="5" onClick={renderTask}>Liczby wymierne dodatnie i ujemne</Guz>
                        <Guz id="6" onClick={renderTask}>Prędkość - droga - czas</Guz>
                        <Guz id="7" onClick={renderTask}>Kolejność działań</Guz>
                        <Guz id="8" onClick={renderTask}>Cztery działania na liczbach wymiernych</Guz>
                        <Guz id="9" onClick={renderTask}>Ułamki okresowe</Guz>


                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="sp5" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>


    )
}

export default DzialaniaNaUlamkach