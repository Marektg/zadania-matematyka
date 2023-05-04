import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const FunkcjeWlasnosci = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    




    const renderTask = (event) => {
        setTitle(event.target.innerText);
        console.log(event.target.id)
        setCurrentTask(event.target.id);
        
    }
    // console.log(currentTask);
    
    
    return (
        <MainDiv>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="b"/>
                <TaskList>
                    <Tytul>Funkcje i ich własności</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Pojęcie funkcji</Guz>
                        <Guz id="2" onClick={renderTask}>Wykes funkcji</Guz>
                        <Guz id="3" onClick={renderTask}>Dziedzina funkcji</Guz>
                        <Guz id="4" onClick={renderTask}>Zbiór wartości fnkcji></Guz>
                        <Guz id="5" onClick={renderTask}>Miejsce zerowe funkcji</Guz>
                        <Guz id="6" onClick={renderTask}>Monotoniczność</Guz>
                        <Guz id="7" onClick={renderTask}>Różnowartościowość oraz parzystość funkcji</Guz>
                        <Guz id="8" onClick={renderTask}>Odczytywanie własności funkcji na podstawie jej wykresu</Guz>
                      </MainGuz>
                    
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="3" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default FunkcjeWlasnosci