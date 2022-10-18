import React, { useState } from 'react'
import styles from './lrzeczywiste.module.scss';
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';
import WorksList from 'components/worksList/worksList';
// import { current } from '@reduxjs/toolkit';

const Lrzeczywiste = () => {
    const [title, setTitle] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);

    const { mainDiv, basic, tasksList, tytul, podmenu, tasks, rodzajzad } = styles;




    const renderTask = (event) => {
        setTitle(event.target.innerText);
        // console.log(event.target.parentElement.id)
        setCurrentTask(event.target.parentElement.id);
        
    }
    // console.log(currentTask);
    
    
    return (
        <div className={mainDiv}>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="b" />
                <div className={tasksList}>
                    <h2 className={tytul}>Liczby rzeczywiste </h2>
                    <ul className={podmenu}>
                        <li id="1" key="1"><button onClick={renderTask}>Liczby naturalne</button></li>
                        <li id="2" key="2"><button onClick={renderTask}>Liczby całkowite. Liczby wymierne</button></li>
                        <li id="3" key="3"><button onClick={renderTask}>Liczby niewymierne</button></li>
                        <li id="4" key="4"><button onClick={renderTask}>Rozwinięcie dziesiętne liczby rzeczywistej</button></li>
                        <li id="5" key="5"><button onClick={renderTask}>Pierwiasteki</button></li>
                        <li id="6" key="6"><button onClick={renderTask}>Potęgi</button></li>
                        <li id="7" key="7"><button onClick={renderTask}>Notacja wykładnicza</button></li>
                        <li id="8" key="8"><button onClick={renderTask}>Logarytm i jego własności</button></li>
                        <li id="9" key="9"><button onClick={renderTask}>Procenty</button></li>
                        <li id="10" key="10"><button onClick={renderTask}>Powtórzenie</button></li>
                        <li id="11" key="11"><button onClick={renderTask}>Zadania testowe</button></li>
                        <li id="12" key="12"><button onClick={renderTask}>To było na maturze</button></li>
                    </ul>
                    <div className={tasks}>
                        <h3 className={rodzajzad}>{title}</h3>
                        <WorksList model={currentTask} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Lrzeczywiste