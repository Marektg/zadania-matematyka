import React from 'react'
import styled from 'styled-components';
import styles from './podstawowka.module.scss'
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';



const Podstawowka = () => {
    const {mainDiv} = styles
  return (
      <div className={mainDiv}>
          <TopNavi model = "a"/> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
          <div >
              <LeftNavi model = "a" />
              <div>

                  <button>Liczby naturalne</button>
                  <button>Liczby całkowite</button>
                  <button>Ułamki zwykłe i dziesiętne</button>
                  <button>Liczby niewymierne</button>
                  <button>Liczby rzeczywiste</button>
                  <button>Procenty</button>
                  <button>Potęgi</button>
                  <button>Wyrażenia algebraiczne</button>
                  <button>Równania i nierówności</button>
                  <button>Układy równań</button>
                  <button>Proste i odcinki</button>
                  <button>Kąty</button>
                  <button>Wielokąty, koła i okręgi</button>
                  <button>Układ współrzędnych</button>
                  <button>Bryły</button>
                  <button>Kombinatoryka i rachunek prawdopodobieństwa</button>
                  <button>Statystyka opisowa</button>

              </div>
          </div>
      </div>
  )
}

export default Podstawowka