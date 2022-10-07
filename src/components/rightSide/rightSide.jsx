import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './rightSide.module.scss';


const Link = styled(NavLink)`

    height: 30px;
    
   
   
    color: #000;
    font-size: 0.8em;
    
   
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;

      &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;



const RightSide = props => {
    const {guz, mainGuz} = styles
  return (
      <div className={mainGuz}>
          <button className={guz}><Link to="/podstawowka/lnaturalne">Liczby naturalne</Link></button>
          <button className={guz}><Link to="/podstawowka/lcalkowite">Liczby całkowite</Link></button>
          <button className={guz}><Link to="/podstawowka/ulamki">Ułamki zwykłe i dziesiętne</Link></button>
          <button className={guz}><Link to="/podstawowka/lniewymierne">Liczby niewymierne</Link></button>
          <button className={guz}><Link to="/podstawowka/lrzeczywiste">Liczby rzeczywiste</Link></button>
          <button className={guz}><Link to="/podstawowka/procenty">Procenty</Link></button>
          <button className={guz}><Link to="/podstawowka/potegi">Potęgi</Link></button>
          <button className={guz}><Link to="/podstawowka/wyrazenia">Wyrażenia algebraiczne</Link></button>
          <button className={guz}><Link to="/podstawowka/rownania">Równania i nierówności</Link></button>
          <button className={guz}><Link to="/podstawowka/uklady">Układy równań</Link></button>
          <button className={guz}><Link to="/podstawowka/proste">Proste i odcinki</Link></button>
          <button className={guz}><Link to="/podstawowka/katy">Kąty</Link></button>
          <button className={guz}><Link to="/podstawowka/wielokaty">Wielokąty, koła i okręgi</Link></button>
          <button className={guz}><Link to="/podstawowka/uklwspol">Układ współrzędnych</Link></button>
          <button className={guz}><Link to="/podstawowka/bryly">Bryły</Link></button>
          <button className={guz}><Link to="/podstawowka/kombinatoryka">Kombinatoryka i rachunek prawdopodobieństwa</Link></button>
          <button className={guz}><Link to="/podstawowka/statystyka">Statystyka opisowa</Link></button>
      </div>
  )
}

RightSide.propTypes = {}

export default RightSide