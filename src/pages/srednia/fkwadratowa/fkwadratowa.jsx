import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Podmenu, Rodzajzad } from '../srednia.styled';
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
                    <Podmenu data-poddzialy>
                        <li id="1" key="1"><button onClick={renderTask}>Przypomnienie wiadomoci z klasy 1</button></li>
                        <li id="2" key="2"><button onClick={renderTask}>Postać ogólna i kanoniczna funkcji kwadratowej</button></li>
                        <li id="3" key="3"><button onClick={renderTask}>Miejsce zerowe funkcji kwadratowej</button></li>
                        <li id="4" key="4"><button onClick={renderTask}>Wzór funkcji w postaci iloczynowej</button></li>
                        <li id="5" key="5"><button onClick={renderTask}>Szkicowanie wykresów i odczytywanie własności funkcji na podstawie wykresu</button></li>
                        <li id="6" key="6"><button onClick={renderTask}>Wyznaczanie wzou funkcji na podstawie jej własności</button></li>
                        <li id="7" key="7"><button onClick={renderTask}>Najmniejsza i największa wartość funkcji w przedziale domkniętym</button></li>
                        <li id="8" key="8"><button onClick={renderTask}>Zadania optymalizacyjne</button></li>
                        <li id="9" key="9"><button onClick={renderTask}>Równania kwadratowe</button></li>
                        <li id="10" key="10"><button onClick={renderTask}>Równania prowadzące do równań kwadratowych</button></li>
                        <li id="11" key="11"><button onClick={renderTask}>Nierówności kwadratowe</button></li>
                        <li id="12" key="12"><button onClick={renderTask}>Zadania tekstowe</button></li>
                        <li id="13" key="13"><button onClick={renderTask}>Równania i nierówności, w których występuje pierwiastek kwadratowy</button></li>
                        <li id="14" key="14"><button onClick={renderTask}>Wykres funkcji kwadratowej z wartością bezwzględną</button></li>
                        <li id="15" key="15"><button onClick={renderTask}>Równania i nierówności z wartością bezwzględną</button></li>
                        <li id="16" key="16"><button onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax>Wzory Viete`a</button></li>
                        <li id="17" key="17"><button onClick={renderTask}></button>Równania i nierówności kwadratowe z parametrem</li>
                    </Podmenu>
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