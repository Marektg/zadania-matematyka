import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, MainGuz, Guz, Rodzajzad } from '../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';
// import { MathJax } from 'better-react-mathjax';


const Lcalkowite = () => {
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
                    <Tytul>Liczby całkowite </Tytul>
                    <MainGuz data-poddzialy>
                        <Guz id="1" onClick={renderTask}>Liczby ujemne</Guz>
                        <Guz id="2" onClick={renderTask}>Dodawanie i odejmowanie liczb całkowitych</Guz>
                        <Guz id="3" onClick={renderTask}>Liczby całkowite</Guz>
                       

                    </MainGuz>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="sp3" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>


    )
}

export default Lcalkowite