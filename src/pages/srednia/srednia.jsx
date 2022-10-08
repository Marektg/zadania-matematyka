import React from 'react'
import styles from './srednia.module.scss';
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';
import RightSide from 'components/rightSide/rightSide';

const Srednia = () => {
    const { mainDiv, basic } = styles
    return (
        <div className={mainDiv}>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="b" />
                <RightSide model= "b" />
            </div>
        </div>
    )
}

export default Srednia