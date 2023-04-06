import React from 'react'
import { MainDiv, Basic, TaskList, Tytul } from '../../srednia/srednia.styled.js';
import TopNavi from '../../../components/topNavi/topNavi';
import LeftNavi from '../../../components/leftNavi/leftNavi';
import WorksList from '../../../components/worksList/worksList';

const Planimetria = () => {
  


    return (
        <MainDiv>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="cp" />
                <TaskList>
                    <Tytul>Powtórki maturalne - Planimetria.</Tytul>

                    <TaskList>
                        
                        <WorksList  dzial="cpkk1" typ="12" />
                    </TaskList>

                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Planimetria