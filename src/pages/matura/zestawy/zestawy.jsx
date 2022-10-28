import React from 'react'
import styles from '../matura.module.scss'
import TopNavi from 'components/topNavi/topNavi'
import LeftNavi from 'components/leftNavi/leftNavi'
import RightSide from 'components/rightSide/rightSide'
const Zestawy = props => {
    const { mainDiv, basic } = styles
    return (
        <div className={mainDiv}>
            <TopNavi model="c" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="c" />
                <RightSide model="cz" />
            </div>
        </div>
    )
}

Zestawy.propTypes = {}

export default Zestawy