import React from 'react'
import liczby from "../../data/srednia/rzeczywiste/liczby";
import pierwiastki from '../../data/srednia/rzeczywiste/pierwiastki';
import potegi from '../../data/srednia/rzeczywiste/potegi';
import notacja from '../../data/srednia/rzeczywiste/notacjaWykładnicza';
import logarytmy from '../../data/srednia/rzeczywiste/logarytm'
import WievTask from './wievTask';
import zbiory from '../../data/srednia/jezyk/zbiory';
import zestawy from 'data/matura/zestawy';
import WievArkusz from './wievArkusz';
import pliczby from 'data/matura/powtorki/liczby';
import WievTaskPowt from './wievTaskPowt';

const WorksList = ({ model, dzial }) => {
    // console.log(model);
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
        case "czp":
            switch (model) {
                case "1":
                    let d = zestawy.length;
                    let arkusze = [];
                    console.log(d);
                    console.log(zestawy[0].data);
                    for (let i = 0; i < d; i++) {
                        if (zestawy[i].poziom.includes("podstawowy") && zestawy[i].data.includes("2022")) {
                            arkusze.push(zestawy[i])
                        }
                    }
                    data = arkusze;
                        return (<WievArkusz data={data} model={model} />);
            


                default: return (<div></div>);

            };
        case "czr":
            switch (model) {
                case "1":
                    let d = zestawy.length;
                    let arkusze = [];
                    console.log(d);
                    console.log(zestawy[0].data);
                    for (let i = 0; i < d; i++) {
                        if (zestawy[i].poziom.includes("rozszerzony") && zestawy[i].data.includes("2022")) {
                            arkusze.push(zestawy[i])
                        }
                    }
                    data = arkusze;
                    return (<WievArkusz data={data} model={model} />);



                default: return (<div></div>);

            };
        case "cp":
            switch (model) {
                case "1":
                    let d = pliczby.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (pliczby[i].typ.includes("powtorka")) {
                            zadania.push(pliczby[i])
                        }
                    }

                    data = zadania;
                    return (<WievTaskPowt data={data} model={model} />);
                case "2":
                    let d2 = pliczby.length;
                    let zadania2 = [];
                    for (let i = 0; i < d2; i++) {
                        if (pliczby[i].typ.includes("zamkniete")) {
                            zadania2.push(pliczby[i])
                        }
                    }

                    data = zadania2;
                    return (<WievTaskPowt data={data} model={model} />);
                case "3":
                    let d3 = pliczby.length;
                    let zadania3 = [];
                    for (let i = 0; i < d3; i++) {
                        if (pliczby[i].typ.includes("krotkie")) {
                            zadania3.push(pliczby[i])
                        }
                    }

                    data = zadania3;
                    return (<WievTaskPowt data={data} model={model} />);
                case "4":
                    let d4 = pliczby.length;
                    let zadania4 = [];
                    for (let i = 0; i < d4; i++) {
                        if (pliczby[i].typ.includes("dlugie")) {
                            zadania4.push(pliczby[i])
                        }
                    }

                    data = zadania4;
                    return (<WievTaskPowt data={data} model={model} />);
                default: return (<div></div>);
                




            };

        default: return (<div></div>);   }
}
    export default WorksList;