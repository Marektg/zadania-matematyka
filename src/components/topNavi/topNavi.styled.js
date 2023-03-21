import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
 width: 250px;
    height: 50px;
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
margin: 5px;

  &:hover {
    color: green;
    box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
  }
  
  @media screen and (min-width: 768px) {
    width: 250px;

  };
  @media screen and (min-width: 1200px) {
    width: 250px;
  }
  
  `;


export const Navi = styled.div`
    margin: 3px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns:auto auto;
    
  };
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
  }
`;