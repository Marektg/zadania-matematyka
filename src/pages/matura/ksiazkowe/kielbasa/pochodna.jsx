import React, { useState } from 'react'
import styles from '../../matura.module.scss';
import TopNavi from '../../../../components/topNavi/topNavi';
import LeftNavi from '../../../../components/leftNavi/leftNavi';
import WorksList from '../../../../components/worksList/worksList';

const Pochodna = () => {
 
    const { mainDiv, basic, tasksList, tytul, tasks, rodzajzad } = styles;


    return (
        <div className={mainDiv}>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="cp" />
                <div className={tasksList}>
                    <h2 className={tytul}>Powtórki maturalne - Pochodna.</h2>

                    <div className={tasks}>
                        <h3 className={rodzajzad}>{title}</h3>
                        <WorksList model={currentTask} dzial="cpkk1" typ="15" />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Pochodna