import React, { useState } from 'react'
import styles from '../../matura.module.scss';
import TopNavi from '../../../../components/topNavi/topNavi';
import LeftNavi from '../../../../components/leftNavi/leftNavi';
import WorksList from '../../../../components/worksList/worksList';

const Algebra = () => {
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
                <LeftNavi model="cp" />
                <div className={tasksList}>
                    <h2 className={tytul}>Powtórki maturalne - Wyrażenia algebraiczne. Równania i nierówności algebraiczne.</h2>
                    
                    <div className={tasks}>
                        <h3 className={rodzajzad}>{title}</h3>
                        <WorksList model={currentTask} dzial="cpkk1" />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Algebra