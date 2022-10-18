import niewymierne from 'data/liczbyNiewymierne';
import React from 'react'
import naturalne from "../../data/liczby naturalne";
import calkowiteIWymierne from '../../data/liczbyCalkowiteIWymierna';
import rozDzies from '../../data/rozwiniecieDziesietne';
import pierwiastki from '../../data/pierwiastki';
import potegi from '../../data/potegi'
import WievTask from './wievTask';

const WorksList = ({ model }) => {
    console.log(model);
    let data;
    switch (model) {
        case "1":
            data = naturalne;
            return (<WievTask data={data} model={model } />);
        case "2":
            data = calkowiteIWymierne;
            return (<WievTask data={data} model={model} />);
        case "3":
            data = niewymierne;
            return (<WievTask data={data} model={model} />);
        case "4":
            data = rozDzies;
            return (<WievTask data={data} model={model} />);
        case "5":
            data = pierwiastki;
            return (<WievTask data={data} model={model} />);
        case "6":
            data = potegi;
            return (<WievTask data={data} model={model} />);
        
        default: return (<div></div>);
        
    };
}
    export default WorksList;