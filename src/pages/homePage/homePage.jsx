import React from 'react'

import { Main, StyledLink } from './homePage.styled';


const HomePage = props => {

  return (
      <Main>
          <StyledLink to="/podstawowka">Podstawówka </StyledLink>
          <StyledLink to="/srednia">Średnia </StyledLink>
          <StyledLink to="/matura">Matura</StyledLink>
          <StyledLink to="/studia">Studia</StyledLink>
          <StyledLink to="/contact">Kontakt</StyledLink>
      </Main>
  )
}


export default HomePage




