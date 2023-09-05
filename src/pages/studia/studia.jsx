import React from 'react'
import TopNavi from '../../components/topNavi/topNavi';
import LeftNavi from '../../components/leftNavi/leftNavi';
import RightSide from '../../components/rightSide/rightSide';
import {MainDiv, Basic} from './studia.styled';

const Studia = () => {
    return (
        <MainDiv>
            <TopNavi model="d" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="d" />
                <RightSide model= "d" />
            </Basic>
        </MainDiv>
    )
}

export default Studia