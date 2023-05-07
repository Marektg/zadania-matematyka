import styled from 'styled-components';


export const MainDiv = styled.div`
    background-color: #69B937;
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
  column-gap: 5px;
  };
   @media screen and (min-width: 1200px) {
     display: flex;

    column-gap: 5px;
   }
  `;


export const TaskList = styled.div`
  display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 95%;
 align-items: center;
 @media screen and (min-width: 1200px) {
  width:100%
}

`

export const Tytul = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-top: 10px;
  margin-bottom: 10px;`
  
  

export const Rodzajzad = styled.p`
  text-align: center;
border: solid 1px green;
font-size: 2em;
margin-top: 5px;
background-color: rgb(186, 243, 238);
`

export const Guz=styled.button`
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 600;
    padding: 15px;
    border-radius: 30px;
    border: none;
    margin: 5px;
    &:hover {
        background-color: blue;
        color: white;
    }
`
export const MainGuz=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 15px;`