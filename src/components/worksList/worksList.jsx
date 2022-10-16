import niewymierne from 'data/liczbyNiewymierne';
import React from 'react'
import naturalne from "../../data/liczby naturalne";
import calkowiteIWymierne from '../../data/liczbyCalkowiteIWymierna';
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

        default: return (<div></div>);
        
    };
}
    export default WorksList;