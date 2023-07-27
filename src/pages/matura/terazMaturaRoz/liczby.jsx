import React from 'react'
import { MainDiv, Basic, TaskList, Tytul } from '../../srednia/srednia.styled.js';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';

const LiczbyTMR = () => {


    return (
        <MainDiv>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="cp" />
                <TaskList>
                    <Tytul>Teraz matura. Liczby rzeczywiste i wyrażenia algebraiczne.</Tytul>

                    <TaskList>

                        <WorksList dzial="cktmr" typ="1" />
                    </TaskList>

                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default LiczbyTMR