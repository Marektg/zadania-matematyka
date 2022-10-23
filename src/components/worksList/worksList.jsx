import React from 'react'
import liczby from "../../data/liczby";
import pierwiastki from '../../data/pierwiastki';
import potegi from '../../data/potegi';
import notacja from 'data/notacjaWykładnicza';
import logarytmy from '../../data/logarytm'
import WievTask from './wievTask';

const WorksList = ({ model }) => {
    console.log(model);
    let data;
    switch (model) {
        case "1":
            data = liczby;
            return (<WievTask data={data} model={model } />);
        case "2":
            data = pierwiastki;
            return (<WievTask data={data} model={model} />);
        case "3":
            data = potegi;
            return (<WievTask data={data} model={model} />);
        case "4":
            data = notacja;
            return (<WievTask data={data} model={model} />);
        case "5":
            data = logarytmy;
            return (<WievTask data={data} model={model} />);
        
        
        default: return (<div></div>);
        
    };
}
    export default WorksList;