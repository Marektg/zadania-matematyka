import React from 'react'
import liczby from "../../data/srednia/liczby";
import pierwiastki from '../../data/srednia/pierwiastki';
import potegi from '../../data/srednia/potegi';
import notacja from '../../data/srednia/notacjaWykładnicza';
import logarytmy from '../../data/srednia/logarytm'
import WievTask from './wievTask';
import zbiory from '../../data/srednia/zbiory';

const WorksList = ({ model, dzial }) => {
    console.log(model);
    let data;
    switch (dzial) {
        case "1": 
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
        case "2":
            switch (model) {
                case "1":
                    data = zbiory;
                    return (<WievTask data={data} model={model} />);
                // case "2":
                //     data = pierwiastki;
                //     return (<WievTask data={data} model={model} />);
                // case "3":
                //     data = potegi;
                //     return (<WievTask data={data} model={model} />);
                // case "4":
                //     data = notacja;
                //     return (<WievTask data={data} model={model} />);
                // case "5":
                //     data = logarytmy;
                //     return (<WievTask data={data} model={model} />);


                default: return (<div></div>);

            };
    
            ;

        default: return (<div></div>);   }
}
    export default WorksList;