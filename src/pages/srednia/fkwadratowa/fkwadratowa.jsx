import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const Fkwadratowa = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);






    const renderTask = (event) => {
        setTitle(event.target.innerText);
        // console.log(event.target.parentElement.id)
        setCurrentTask(event.target.parentElement.id);

    }
    // console.log(currentTask);


    return (
        <MainDiv>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="b" />
                <TaskList>
                    <Tytul>Funkcja kwadratowa</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Przypomnienie wiadomoci z klasy 1</Guz>
                        <Guz id="2" onClick={renderTask}>Postać ogólna i kanoniczna funkcji kwadratowej</Guz>
                        <Guz id="3" onClick={renderTask}>Miejsce zerowe funkcji kwadratowej</Guz>
                        <Guz id="4" onClick={renderTask}>Wzór funkcji w postaci iloczynowej</Guz>
                        <Guz id="5" onClick={renderTask}>Szkicowanie wykresów i odczytywanie własności funkcji na podstawie wykresu</Guz>
                        <Guz id="6" onClick={renderTask}>Wyznaczanie wzou funkcji na podstawie jej własności</Guz>
                        <Guz id="7" onClick={renderTask}>Najmniejsza i największa wartość funkcji w przedziale domkniętym</Guz>
                        <Guz id="8" onClick={renderTask}>Zadania optymalizacyjne</Guz>
                        <Guz id="9" onClick={renderTask}>Równania kwadratowe</Guz>
                        <Guz id="10" onClick={renderTask}>Równania prowadzące do równań kwadratowych</Guz>
                        <Guz id="11" onClick={renderTask}>Nierówności kwadratowe</Guz>
                        <Guz id="12" onClick={renderTask}>Zadania tekstowe</Guz>
                        <Guz id="13" onClick={renderTask}>Równania i nierówności, w których występuje pierwiastek kwadratowy</Guz>
                        <Guz id="14" onClick={renderTask}>Wykres funkcji kwadratowej z wartością bezwzględną</Guz>
                        <Guz id="15" onClick={renderTask}>Równania i nierówności z wartością bezwzględną</Guz>
                        <Guz id="16" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Wzory Viete`a</Guz>
                        <Guz id="17" onClick={renderTask}>Równania i nierówności kwadratowe z parametrem</Guz>
                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="10" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Fkwadratowa