import React from 'react'
import TopNavi from '../../components/topNavi/topNavi';
import LeftNavi from '../../components/leftNavi/leftNavi';
import RightSide from '../../components/rightSide/rightSide';
import {MainDiv, Basic} from './srednia.styled';

const Srednia = () => {
    return (
        <MainDiv>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="b" />
                <RightSide model= "b" />
            </Basic>
        </MainDiv>
    )
}

export default Srednia