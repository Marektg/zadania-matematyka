import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Rodzajzad, MainGuz, Guz } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';
import { MathJax } from 'better-react-mathjax';


const FWykladnicza = () => {
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
                    <Tytul>  Funkcja wykładnicza i logarytmiczna</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Funkcja wykładnicza i jej własności</Guz>
                        <Guz id="2" onClick={renderTask}>Przekształcenia wykresów funkcji wykładniczej</Guz>
                        <Guz id="3" onClick={renderTask}>Równania wykładnicze</Guz>
                        <Guz id="4" onClick={renderTask}>Nierówności wykładnicze</Guz>
                        <Guz id="5" onClick={renderTask}>Funkcja logarytmiczna i jej własności</Guz>
                        <Guz id="6" onClick={renderTask}>Przeksztalcenia wykresów funkcji logarytmicznych</Guz>
                        <Guz id="7" onClick={renderTask}>Równania logarytmiczne</Guz>
                        <Guz id="8" onClick={renderTask}><MathJax inline>{"\\(\\star\\)"}</MathJax> Nierówności logarytmiczne</Guz>
                        <Guz id="9" onClick={renderTask}>Funkcje wykładnicza i logarytmiczna w zadaniach</Guz>
                       


                    </MainGuz>

                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="17" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default FWykladnicza