import React from 'react'
import styled from 'styled-components';
import styles from './homePage.module.scss';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
 width: 250px;
    height: 100px;
    background-color: #1a1717;
    border: #1a1717 1px solid;
    border-radius: 15px;
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 3px;
display: flex;
align-items: center;
justify-content: space-around;
text-decoration: none;

  &:hover {
    color: green;
    box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
  }`;

const HomePage = props => {
    const { main } = styles;
  return (
      <div className={main}>
          <StyledLink to="/podstawowka">Podstawówka </StyledLink>
          <StyledLink to="/srednia">Średnia </StyledLink>
          <StyledLink to="/matura">Matura</StyledLink>
          <StyledLink to="/studia">Studia</StyledLink>
      </div>
  )
}


export default HomePage




