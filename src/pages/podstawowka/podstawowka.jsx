import React from 'react'
import styled from 'styled-components';
import styles from './podstawowka.module.scss'
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';
import RightSide from 'components/rightSide/rightSide';



const Podstawowka = () => {
    const {mainDiv, basic} = styles
  return (
      <div className={mainDiv}>
          <TopNavi model = "a"/> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
          <div className={basic} >
              <LeftNavi model = "a" />
              <RightSide model = "a" />
          </div>
      </div>
  )
}

export default Podstawowka