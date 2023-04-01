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
  
  
  export const Podmenu = styled.ul`
  text-align: center;
display: flex;
flex-direction: column;
align-items: center;
color: black;
border: none;
font-weight: bold;
font-size: 1.5em;
margin-left: 10px;
margin-right: 10px;
width: 90%;
list-style: none;

li {
  display: block;
  color: black;
   border: none;
   width: 90%;
    :nth-child(odd) {
       background-color: lightsalmon;
    }
    :nth-child(even) {
       background-color: khaki;
    }
  }
  button {
    cursor: pointer;
    width: 100 %;
    height: 100 %;
    background-color: transparent;
    border: none;
    font-weight: bold;
    padding: 10px;
        :hover {
      background-color: rgb(122, 238, 147);
    }
  }
  }
  `


export const Rodzajzad = styled.p`
  text-align: center;
border: solid 1px green;
font-size: 2em;
margin-top: 5px;
background-color: rgb(186, 243, 238);
`

