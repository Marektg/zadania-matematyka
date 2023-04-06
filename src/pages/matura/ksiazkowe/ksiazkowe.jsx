import React from 'react'
import { MainDiv, Basic } from '../../srednia/srednia.styled';
import TopNavi from '../../../components/topNavi/topNavi'
import LeftNavi from '../../../components/leftNavi/leftNavi'
import RightSide from '../../../components/rightSide/rightSide'
const Ksiazkowe = props => {
    return (
          <MainDiv>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <Basic>
                <LeftNavi model="cp" />
                <RightSide model="ck" />
                
                </Basic>
        </MainDiv>
       
    )
}

Ksiazkowe.propTypes = {}

export default Ksiazkowe