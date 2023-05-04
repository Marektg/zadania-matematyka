import React from 'react'
import { Navi, StyledLink } from './topNavi.styled';




const TopNavi = ({ model }) => {

    // console.log(model);
    switch (model) {
        case "a": return (
            <Navi>
                <StyledLink to="/">Strona główna</StyledLink>
                <StyledLink to="/srednia">Średnia</StyledLink>
                <StyledLink to="/matura">Matura</StyledLink>
                <StyledLink to="/studia">Studia</StyledLink>
                <StyledLink to="/contact">Kontakt</StyledLink>
            </Navi>);
        case "b": return (
            <Navi>
                <StyledLink to="/">Strona główna</StyledLink>
                <StyledLink to="/podstawowka">Podstawówka</StyledLink>
                <StyledLink to="/matura">Matura</StyledLink>
                <StyledLink to="/studia">Studia</StyledLink>
                <StyledLink to="/contact">Kontakt</StyledLink>
            </Navi>);
        case "c": return (
            <Navi>
                <StyledLink to="/">Strona główna</StyledLink>
                <StyledLink to="/podstawowka">Podstawówka</StyledLink>
                <StyledLink to="/srednia">Średnia</StyledLink>
                <StyledLink to="/studia">Studia</StyledLink>
                <StyledLink to="/contact">Kontakt</StyledLink>
            </Navi>);
        case "d": return (
            <Navi>
                <StyledLink to="/">Strona główna</StyledLink>
                <StyledLink to="/podstawowka">Podstawówka</StyledLink>
                <StyledLink to="/srednia">Średnia</StyledLink>
                <StyledLink to="/matura">Matura</StyledLink>
                <StyledLink to="/contact">Kontakt</StyledLink>
            </Navi>);
        default: return (
            <Navi>
                <StyledLink to="/">Strona główna</StyledLink>
                <StyledLink to="/podstawowka">Podstawówka</StyledLink>
                <StyledLink to="/srednia">Średnia</StyledLink>
                <StyledLink to="/matura">Matura</StyledLink>
                <StyledLink to="/studia">Studia</StyledLink>
                <StyledLink to="/contact">Kontakt</StyledLink>
            </Navi>);
    }


}

TopNavi.propTypes = {
    model: String,
}

export default TopNavi