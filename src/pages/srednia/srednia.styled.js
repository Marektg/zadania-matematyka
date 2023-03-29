import styled from 'styled-components';


export const MainDiv = styled.div`
    background-color: #ff8c00;
font - family: serif;
color: #000000;
height: 100 %;
`;


export const Basic = styled.div`
     display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
   @media screen and (min-width: 768px) {  
  flex-direction: row;
  align-items: start;
  margin-top:10px;
  };
   @media screen and (min-width: 1200px) {
     display: grid;
  grid-template-columns: 250px auto;
    column-gap: 5px;
   }
  `;


export const TaskList= styled.div`
  display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 95 %;
`
