import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './topNavi.module.scss';


const StyledLink = styled(NavLink)`
    width: 200px;
    height: 80px;
    background-color: #1a1717;
    border: #1a1717 1px solid;
    border-radius: 15px;
    color: #fff;
    font-size: 1.2em;
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

const TopNavi = ({model}) => {
    const { topNavi } = styles;
    console.log(model);
    
        if(model === "a") { return (
            <main className={topNavi}>
            <StyledLink to="/">Strona główna</StyledLink>
            <StyledLink to="/srednia">Średnia</StyledLink>
            <StyledLink to="/matura">Matura</StyledLink>
            <StyledLink to="/studia">Studia</StyledLink>
        </main>)
    } else if (model === "b") { return (
        <main className={topNavi}>
        <StyledLink to="/">Strona główna</StyledLink>
        <StyledLink to="/podstawowka">Podstawówka</StyledLink>
        <StyledLink to="/matura">Matura</StyledLink>
        <StyledLink to="/studia">Studia</StyledLink>
    </main>)
    } else if (model === "c") { return (
        <main className={topNavi}>
            <StyledLink to="/">Strona główna</StyledLink>
            <StyledLink to="/podstawowka">Podstawówka</StyledLink>
            <StyledLink to="/srednia">Średnia</StyledLink>
            <StyledLink to="/studia">Studia</StyledLink>
        </main>)
    } else { return (
        <main className={topNavi}>
            <StyledLink to="/">Strona główna</StyledLink>
            <StyledLink to="/podstawowka">Podstawówka</StyledLink>
            <StyledLink to="/srednia">Średnia</StyledLink>
            <StyledLink to="/matura">Matura</StyledLink>
        </main>)
}
        
    
}

TopNavi.propTypes = {
    model: String,
}

export default TopNavi