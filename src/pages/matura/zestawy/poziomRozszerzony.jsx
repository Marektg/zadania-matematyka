import React, { useState } from 'react'
import styles from '../matura.module.scss';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';

const PoziomRozszerzony = () => {
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
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="c" />
                <div className={tasksList}>
                    <h2 className={tytul}>Zestawy maturalne - poziom rozszerzony </h2>
                    <ul className={podmenu} data-poddzialy>
                        <li id="1" key="1"><button onClick={renderTask}>2022</button></li>
                        <li id="2" key="2"><button onClick={renderTask}>2021</button></li>
                        <li id="3" key="3"><button onClick={renderTask}>2020</button></li>
                        <li id="4" key="4"><button onClick={renderTask}>2019</button></li>
                        <li id="5" key="5"><button onClick={renderTask}>2018</button></li>
                        <li id="6" key="6"><button onClick={renderTask}>Starsze</button></li>

                    </ul>
                    <div className={tasks}>
                        <h3 className={rodzajzad}>{title}</h3>
                        <WorksList model={currentTask} dzial="czr" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default PoziomRozszerzony