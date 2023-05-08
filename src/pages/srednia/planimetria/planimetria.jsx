import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const PlanimetriaS = () => {
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
                    <Tytul>Planimetria</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Wzajemne położenie prostych na płaszczyźnie</Guz>
                        <Guz id="2" onClick={renderTask}>Twierdzenie Talesa</Guz>
                        <Guz id="3" onClick={renderTask}>Podział trójkątów</Guz>
                        <Guz id="4" onClick={renderTask}>Twierdzenie Pitagorasa</Guz>
                        <Guz id="5" onClick={renderTask}>Przystawanie trójkątów</Guz>
                        <Guz id="6" onClick={renderTask}>Podobieństwo trójkątów</Guz>
                        <Guz id="7" onClick={renderTask}>Okrąg opisany na trójącie</Guz>
                        <Guz id="8" onClick={renderTask}>Okrąg wpisany w trójkąt</Guz>
                        <Guz id="9" onClick={renderTask}>Twierdzenie sinusów</Guz>
                        <Guz id="10" onClick={renderTask}>Twierdzenie cosinusów</Guz>
                        <Guz id="11" onClick={renderTask}>Zastosowanie twierdzeń sinusów i cosinusów do rozwiążywania zadań</Guz>
                        <Guz id="12" onClick={renderTask}>Pole trójkąta, pola trójkątów podobnych</Guz>
                        <Guz id="13" onClick={renderTask}>Wzajemne położenie prostej i okręgu</Guz>
                        <Guz id="14" onClick={renderTask}>Wzajemne położenie dwóch okręgów</Guz>
                        <Guz id="15" onClick={renderTask}>Koła, kąty, pole koła i wycinka koła</Guz>
                        <Guz id="16" onClick={renderTask}>Styczna i sieczna</Guz>
                        <Guz id="17" onClick={renderTask}>Konstrkcje geometryczne</Guz>
                        <Guz id="18" onClick={renderTask}>Pole figury płaskiej</Guz>
                        <Guz id="19" onClick={renderTask}>Pojęcie pola w dowodzeniu twierdzeń</Guz>
                        <Guz id="20" onClick={renderTask}>Podział czworokątów</Guz>
                        <Guz id="21" onClick={renderTask}>Trapezy</Guz>
                        <Guz id="22" onClick={renderTask}>Równoległoboki</Guz>
                        <Guz id="23" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax>Okrąg opisany na czworokącie</Guz>
                        <Guz id="24" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax>Okrąg wpisany w czworokąt</Guz>
                        <Guz id="25" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax>Zadania na dowodzenie - okrąg i czworokąt</Guz>
                        <Guz id="26" onClick={renderTask}>Podobieństwo czworokątów</Guz>
                        <Guz id="27" onClick={renderTask}>Pole prostokąta i kwadratu</Guz>
                        <Guz id="28" onClick={renderTask}>Pole równoległoboku i rombu</Guz>
                        <Guz id="29" onClick={renderTask}>Pole trapezu</Guz>
                        <Guz id="30" onClick={renderTask}>Pole czworokąta</Guz>
                        <Guz id="31" onClick={renderTask}>Pola figur podobnych</Guz>
                        <Guz id="32" onClick={renderTask}>Skala mapy</Guz>
                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="6" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default PlanimetriaS