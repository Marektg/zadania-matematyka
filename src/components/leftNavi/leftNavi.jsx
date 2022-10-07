import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './leftNavi.module.scss';


const StyledLink = styled(NavLink)`
    width: 100%;
    
   
   
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


const LeftNavi = props => {
    const { leftNavi, navListGroup } = styles;
  return (
      <nav className={leftNavi}>
          <h3>Szkoła podstawowa</h3>
          <ul className={navListGroup}>
              <li><StyledLink to="/podstawowka/lnaturalne">Liczby naturalne</StyledLink></li>
              <li><StyledLink to="/podstawowka/lcalkowite">Liczby całkowite</StyledLink></li>
              <li><StyledLink to="/podstawowka/ulamki">Ułamki zwykłe i dziesiętne</StyledLink></li>
              <li><StyledLink to="/podstawowka/lniewymierne">Liczby niewymierne</StyledLink></li>
              <li><StyledLink to="/podstawowka/lrzeczywiste">Liczby rzeczywiste</StyledLink></li>
              <li><StyledLink to="/podstawowka/procenty">Procenty</StyledLink></li>
              <li><StyledLink to="/podstawowka/potegi">Potęgi</StyledLink></li>
              <li><StyledLink to="/podstawowka/wyrazenia">Wyrażenia algebraiczne</StyledLink></li>
              <li><StyledLink to="/podstawowka/rownania">Równania i nierówności</StyledLink></li>
              <li><StyledLink to="/podstawowka/uklady">Układy równań</StyledLink></li>
              <li><StyledLink to="/podstawowka/proste">Proste i odcinki</StyledLink></li>
              <li><StyledLink to="/podstawowka/katy">Kąty</StyledLink></li>
              <li><StyledLink to="/podstawowka/wielokaty">Wielokąty, koła i okręgi</StyledLink></li>
              <li><StyledLink to="/podstawowka/uklwspol">Układ współrzędnych</StyledLink></li>
              <li><StyledLink to="/podstawowka/bryly">Bryły</StyledLink></li>
              <li><StyledLink to="/podstawowka/kombinatoryka">Kombinatoryka i rachunek prawdopodobieństwa</StyledLink></li>
              <li><StyledLink to="/podstawowka/statystyka">Statystyka opisowa</StyledLink></li>
          </ul>
      </nav>
  )
}

LeftNavi.propTypes = {}

export default LeftNavi