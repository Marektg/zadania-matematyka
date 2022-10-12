import React from 'react'
import naturalne from "../../data/liczby naturalne"
import WievTask from './wievTask';

const WorksList = ({ model }) => {
    console.log(model);
    let data;
    switch (model) {
        case "1":
            data = naturalne;
            return (<WievTask data={data} />);
        

        default: return (<div></div>);
    };
}
    export default WorksList;