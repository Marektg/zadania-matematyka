import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Link = styled(NavLink)`
    height: 60px;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px 20px 10px 20px;
    border-radius: 30px;
    border: none;
    margin-left: 20px;
    margin-top:20px;
    text-align: center;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6fa;
    text-decoration: none;
    &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;

export const Lacze = styled.a`
 height: 60px;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px 20px 10px 20px;
    border-radius: 30px;
    border: none;
    margin-left: 20px;
    margin-top:20px;
    text-align: center;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6fa;
    text-decoration: none;
    &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`; 
  export const Guz=styled.button`
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px;
    border-radius: 30px;
    border: none;
    &:hover {
        color: bisque;
    }
`
export const MainGuz=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;


`