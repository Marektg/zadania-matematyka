import React, { useState } from 'react'
import { MainDiv, Basic, TaskList, Tytul, Podmenu, Rodzajzad } from '../srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';
import { MathJax } from 'better-react-mathjax';
// import { current } from '@reduxjs/toolkit';

const Lrzeczywiste = () => {
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
                <LeftNavi model="b"/>
                <TaskList>
                    <Tytul>Liczby rzeczywiste </Tytul>
                    <Podmenu data-poddzialy>
                        <li id="1" key="1"><button onClick={renderTask}>Liczby</button></li>
                        <li id="2" key="2"><button onClick={renderTask}>Pierwiastki</button></li>
                        <li id="3" key="3"><button onClick={renderTask}>Potęgi</button></li>
                        <li id="4" key="4"><button onClick={renderTask}><MathJax inline>{"\\(\\star\\)"} Notacja wykładnicza</MathJax></button></li>
                        <li id="5" key="5"><button onClick={renderTask}>Logarytm i jego własności</button></li>
                        <li id="6" key="6"><button onClick={renderTask}>Procenty</button></li>
                        <li id="7" key="7"><button onClick={renderTask}>Powtórzenie</button></li>
                        <li id="8" key="8"><button onClick={renderTask}>Zadania testowe</button></li>
                        <li id="9" key="9"><button onClick={renderTask}>To było na maturze</button></li>
                    </Podmenu>
                    <TaskList>
                        <Rodzajzad>{title}</Rodzajzad>
                        <WorksList model={currentTask} dzial="1" />
                    </TaskList>
                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Lrzeczywiste