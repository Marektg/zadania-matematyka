import React from 'react'
import { MainDiv, Basic, TaskList, Tytul } from '../../srednia/srednia.styled.js';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';

const FunkcjaLogarytmiczna = () => {
   









    return (
        <MainDiv>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="cp" />
                <TaskList>
                    <Tytul>Powtórki maturalne - Funkcja logarytmiczna.</Tytul>

                    <TaskList>
                        <WorksList  dzial="cpkk1" typ="9" />
                    </TaskList>

                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default FunkcjaLogarytmiczna