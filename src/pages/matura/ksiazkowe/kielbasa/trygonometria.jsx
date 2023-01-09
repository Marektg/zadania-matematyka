import React from 'react'
import styles from '../../matura.module.scss';
import TopNavi from '../../../../components/topNavi/topNavi';
import LeftNavi from '../../../../components/leftNavi/leftNavi';
import WorksList from '../../../../components/worksList/worksList';

const Trygonometria = () => {
   
    const { mainDiv, basic, tasksList, tytul, tasks } = styles;

   







    return (
        <div className={mainDiv}>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="cp" />
                <div className={tasksList}>
                    <h2 className={tytul}>Powtórki maturalne - Trygonometria.</h2>

                    <div className={tasks}>
                       
                        <WorksList  dzial="cpkk1" typ="10" />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Trygonometria