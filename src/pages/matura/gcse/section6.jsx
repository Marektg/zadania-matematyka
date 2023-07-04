import React from 'react'
import { MainDiv, Basic, TaskList, Tytul } from '../../srednia/srednia.styled.js';
import TopNavi from '../../../components/topNavi/topNavi.jsx';
import LeftNavi from '../../../components/leftNavi/leftNavi.jsx';
import WorksList from '../../../components/worksList/worksList.jsx';

const Section6 = () => {


    return (
        <MainDiv>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="c" />
                <TaskList>
                    <Tytul>Expressions</Tytul>

                    <TaskList>

                        <WorksList dzial="cgcse" typ="6" />
                    </TaskList>

                </TaskList>

            </Basic>
        </MainDiv>

    )
}

export default Section6