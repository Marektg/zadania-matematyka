import React, { useState } from 'react'
import styles from '../matura.module.scss';
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';
import WorksList from 'components/worksList/worksList';

const PLiczby = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
    const { mainDiv, basic, tasksList, tytul, podmenu, tasks, rodzajzad } = styles;

    const renderTask = (event) => {
        setTitle(event.target.innerText);
        // console.log(event.target.parentElement.id)
        setCurrentTask(event.target.parentElement.id);

    }







    return (
        <div className={mainDiv}>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="c" />
                <div className={tasksList}>
                    <h2 className={tytul}>Powtórki maturalne - Liczby, zbiory i wartość bezwzględna</h2>
                    <ul className={podmenu} data-poddzialy>
                        <li id="1" key="1"><button onClick={renderTask}>Zadania powtórzeniowe</button></li>
                        <li id="2" key="2"><button onClick={renderTask}>Zadania zamknięte</button></li>
                        <li id="3" key="3"><button onClick={renderTask}>Zadania krótkiej odpowiedzi</button></li>
                        <li id="4" key="4"><button onClick={renderTask}>Zadania rozszerzonej odpowiedzi</button></li>
                    </ul>
                    <div className={tasks}>
                        <h3 className={rodzajzad}>{title}</h3>
                        <WorksList model={currentTask} dzial="cp" />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default PLiczby