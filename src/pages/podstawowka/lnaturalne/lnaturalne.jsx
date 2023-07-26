import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from './../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';

const LnaturalneSP = () => {
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
                    <Tytul>Liczby naturalne </Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Dodawanie liczb naturalnych</Guz>
                        <Guz id="2" onClick={renderTask}>Odejmowanie liczb naturalnych</Guz>
                        <Guz id="3" onClick={renderTask}>Dodawanie i odejmowanie liczb naturalnych</Guz>
                        <Guz id="4" onClick={renderTask}>Mnożenie  liczb naturalnych</Guz>
                        <Guz id="5" onClick={renderTask}>Dzielenie liczb naturalnych</Guz>
                        <Guz id="6" onClick={renderTask}>Mnożenie i dzielenie liczb naturalnych</Guz>
                        <Guz id="7" onClick={renderTask}>Obliczanie wartości wyrażeń arytmetycznych</Guz>
                        <Guz id="8" onClick={renderTask}>Zapisywanie liczb naturalnych w dziesiątkowym systemie pozycyjnym</Guz>
                        <Guz id="9" onClick={renderTask}>Pisanie liczb słowami. Czytanie liczb</Guz>
                        <Guz id="10" onClick={renderTask}>Liczby naturalne na osi liczbowej</Guz>
                        <Guz id="11" onClick={renderTask}>Liczby rzymskie</Guz>
                        <Guz id="12" onClick={renderTask}>Dodawanie i odejmowanie liczb naturalnych sposobem pisemnym</Guz>
                        <Guz id="13" onClick={renderTask}>Mnożenie i dzielenie liczb naturalnych sposobem pisemnym</Guz>
                        <Guz id="14" onClick={renderTask}>Działania w zbiorze liczb naturalnych</Guz>
                        <Guz id="15" onClick={renderTask}>Obliczanie potęg o wykładniku naturalnym</Guz>

                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="sp1" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>


    )
}

export default LnaturalneSP