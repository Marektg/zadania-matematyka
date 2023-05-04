import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(NavLink)`
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

export const Left = styled.div`
    display: flex;
flex-direction: column;
text-align: center;
margin-left: 5px;
margin-top: 10px;
background-color: burlywood;
padding-left: 5px;
padding-right: 5px;
font - size: 20px;
   @media screen and (min-width: 768px) {  
    margin-top:-5px;
   
  }
`;

export const NaviListGroup=styled.ul `
    background-color: white;
   text-align: center;
margin: 0;
list-style: none;
padding-top: 5px;
  li {
    border-bottom: solid 1px burlywood;
};

`