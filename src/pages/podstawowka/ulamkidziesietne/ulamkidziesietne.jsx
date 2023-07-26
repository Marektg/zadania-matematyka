import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from '../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';
import { MathJax } from 'better-react-mathjax';


const UlamkiDziesietne = () => {
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
                    <Tytul>Ułamki dziesiętne</Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Przedstawianie wyrażeń dwumianowanych za pomocą ułamków dziesiętnych</Guz>
                        <Guz id="2" onClick={renderTask}>Przedstawianie ułamków dziesiętnych na osi liczbowej</Guz>
                        <Guz id="3" onClick={renderTask}>Porównywanie ułamków dziesiętnych</Guz>
                        <Guz id="4" onClick={renderTask}>Dodawanie ułamków dziesiętnych</Guz>
                        <Guz id="5" onClick={renderTask}>Odejmowanie ułamków dziesiętnych</Guz>
                        <Guz id="6" onClick={renderTask}>Dodawanie i odejmowanie ułamków dziesiętnych</Guz>
                        <Guz id="7" onClick={renderTask}>Mnożenie i dzielenie ułamków dziesiętnych przez<MathJax inline> {"\\(10,\\ 100,\\ 1000\\)"}</MathJax></Guz>
                        

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

export default UlamkiDziesietne