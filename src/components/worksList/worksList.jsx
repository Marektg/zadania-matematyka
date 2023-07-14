import React from 'react'
import WievTask from './wievTask';
import srednia2 from '../../data/srednia/srednia2';
import zestawy from '../../data/matura/zestawy';
import WievArkusz from './wievArkusz';
import WievTaskPowt from './wievTaskPowt';

// import pciagi from '../../data/matura/powtorki/ciagi';
// import pfunkcjeILiniowa from '../../data/matura/powtorki/funkcjeILiniowa';
import kielbasa from '../../data/matura/kielbasa';
import WievTaskKsiazki from './wievTaskKsiazki';
import powtorka from '../../data/matura/powtorka';
import gcsedata from '../../data/matura/gcse';
import terazMaturaRoz from '../../data/matura/terazMaturaRoz'

const WorksList = ({ model, dzial, typ }) => {
    // console.log(model);
    let data = srednia2;
    let d = data.length;
    let zadania = [];

    const selectTask = (dzial, model) => {
        for (let i = 0; i < d; i++) {
            if (data[i].dzial === dzial && data[i].poddzial === model) {
                zadania.push(data[i])
            }
        }
        data = zadania;
              return (<WievTask data={data} model={model} />);
    };
    let dp = powtorka.length

    const selectTaskPowt = (dzial, model) => {
        for (let i = 0; i < dp; i++) {
            if (powtorka[i].typ.includes("powtorka") && powtorka[i].dzial === dzial && powtorka[i].poddzial === model) {
                zadania.push(powtorka[i])
            }
        }
        data = zadania;
        return (<WievTaskPowt data={data} model={model} />);
    };

    let dk = kielbasa.length;
    const selectTaskKielbasa = (typ, model) => {
        for (let i = 0; i < dk; i++) {
            if (kielbasa[i].dzial === typ)
                zadania.push(kielbasa[i])
        };
        data = zadania;
        return (<WievTaskKsiazki data={data} model={model} />);
    };
    let dtmr = terazMaturaRoz.length;
    const selectTaskTMR = (typ, model) => {
        for (let i = 0; i < dtmr; i++) {
            if (terazMaturaRoz[i].dzial === typ)
                zadania.push(terazMaturaRoz[i])
        };
        data = zadania;
        return (<WievTaskKsiazki data={data} model={model} />);
    };
    let gc = gcsedata.length;
    const selectTaskGCSE = (typ, model) => {
        for (let i = 0; i < gc; i++) {
            if (gcsedata[i].dzial === typ)
                zadania.push(gcsedata[i])
        };
        data = zadania;
        return (<WievTaskKsiazki data={data} model={model} />);
    
    }
    switch (dzial) {
        case "1":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);



                default: return (<div></div>);

            };
        case "2":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "3":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                


                default: return (<div></div>);

            };
        case "4":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                


                default: return (<div></div>);

            };
        case "5":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                
                default: return (<div></div>);

            };
        case "6":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                case "14":
                    return selectTask(dzial, model);
                case "15":
                    return selectTask(dzial, model);
                case "16":
                    return selectTask(dzial, model);
                case "17":
                    return selectTask(dzial, model);
                case "18":
                    return selectTask(dzial, model);
                case "19":
                    return selectTask(dzial, model);
                case "20":
                    return selectTask(dzial, model);
                case "21":
                    return selectTask(dzial, model);
                case "22":
                    return selectTask(dzial, model);
                case "23":
                    return selectTask(dzial, model);
                case "24":
                    return selectTask(dzial, model);
                case "25":
                    return selectTask(dzial, model);
                case "26":
                    return selectTask(dzial, model);
                case "27":
                    return selectTask(dzial, model);
                case "28":
                    return selectTask(dzial, model);
                case "29":
                    return selectTask(dzial, model);
                case "30":
                    return selectTask(dzial, model);
                case "31":
                    return selectTask(dzial, model);
                case "32":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "7":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                case "14":
                    return selectTask(dzial, model);
                case "15":
                    return selectTask(dzial, model);
                case "16":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "8":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                


                default: return (<div></div>);

            };
        case "9":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                

                default: return (<div></div>);

            };
        case "10":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                


                default: return (<div></div>);

            };
        case "11":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                case "14":
                    return selectTask(dzial, model);
                case "15":
                    return selectTask(dzial, model);

                default: return (<div></div>);

            };
        case "12":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                case "14":
                    return selectTask(dzial, model);
                case "15":
                    return selectTask(dzial, model);

                default: return (<div></div>);

            };
        case "13":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                
                default: return (<div></div>);

            };
        case "14":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "15":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                


                default: return (<div></div>);

            };
        case "16":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);

                default: return (<div></div>);

            };
        case "17":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "18":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                

                default: return (<div></div>);

            };
        case "19":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);


                default: return (<div></div>);

            };
        case "20":
            switch (model) {
                case "1":
                    return selectTask(dzial, model);
                case "2":
                    return selectTask(dzial, model);
                case "3":
                    return selectTask(dzial, model);
                case "4":
                    return selectTask(dzial, model);
                case "5":
                    return selectTask(dzial, model);
                case "6":
                    return selectTask(dzial, model);
                case "7":
                    return selectTask(dzial, model);
                case "8":
                    return selectTask(dzial, model);
                case "9":
                    return selectTask(dzial, model);
                case "10":
                    return selectTask(dzial, model);
                case "11":
                    return selectTask(dzial, model);
                case "12":
                    return selectTask(dzial, model);
                case "13":
                    return selectTask(dzial, model);
                case "14":
                    return selectTask(dzial, model);
                case "15":
                    return selectTask(dzial, model);
                case "16":
                    return selectTask(dzial, model);


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
                        if (zestawy[i].poziom.includes("podstawowy") && zestawy[i].data.includes("2023")) {
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
        case "cp1":
        
            switch (model) {
                case "1":
                   return selectTaskPowt(dzial, model);
                case "2":
                    return selectTaskPowt(dzial, model);

                case "3":
                    return selectTaskPowt(dzial, model);

                case "4":
                    return selectTaskPowt(dzial, model);

                default: return (<div></div>);






            };
        case "cp8":
            switch (model) {
                case "1":
                    return selectTaskPowt(dzial, model);

                case "2":
                    return selectTaskPowt(dzial, model);

                case "3":
                    return selectTaskPowt(dzial, model);

                case "4":
                    return selectTaskPowt(dzial, model);

                  
                default: return (<div></div>);
            };
        case "cp2":
            switch (model) {
                case "1":
                    return selectTaskPowt(dzial, model);

                case "2":
                    return selectTaskPowt(dzial, model);

                case "3":
                    return selectTaskPowt(dzial, model);

                case "4":
                    return selectTaskPowt(dzial, model);

                default: return (<div></div>);
            };
        case "cpkk1":
            switch (typ) {
                case "1": return selectTaskKielbasa(typ, model);
                case "2": return selectTaskKielbasa(typ, model);
                case "3": return selectTaskKielbasa(typ, model);
                case "4": return selectTaskKielbasa(typ, model);
                case "5": return selectTaskKielbasa(typ, model);
                case "6": return selectTaskKielbasa(typ, model);
                case "7": return selectTaskKielbasa(typ, model);
                case "8": return selectTaskKielbasa(typ, model);
                case "9": return selectTaskKielbasa(typ, model);
                case "10": return selectTaskKielbasa(typ, model);
                case "11": return selectTaskKielbasa(typ, model);
                case "12": return selectTaskKielbasa(typ, model);
                case "13": return selectTaskKielbasa(typ, model);
                case "14": return selectTaskKielbasa(typ, model);
                case "15": return selectTaskKielbasa(typ, model);


                default: return (<div></div>);
            };
        
        case "cktmr":
            switch (typ) {
                case "1": return selectTaskTMR(typ, model);
                case "2": return selectTaskTMR(typ, model);
                case "3": return selectTaskTMR(typ, model);
                case "4": return selectTaskTMR(typ, model);
                case "5": return selectTaskTMR(typ, model);
                case "6": return selectTaskTMR(typ, model);
                case "7": return selectTaskTMR(typ, model);
                case "8": return selectTaskTMR(typ, model);
                case "9": return selectTaskTMR(typ, model);
                case "10": return selectTaskTMR(typ, model);
                case "11": return selectTaskTMR(typ, model);
                case "12": return selectTaskTMR(typ, model);
                
                default: return (<div></div>)
            };

        case "cgcse":
            switch (typ) {
                case "1": return selectTaskGCSE(typ, model);
                case "2": return selectTaskGCSE(typ, model);
                case "3": return selectTaskGCSE(typ, model);
                case "4": return selectTaskGCSE(typ, model);
                case "5": return selectTaskGCSE(typ, model);
                case "6": return selectTaskGCSE(typ, model);
                case "7": return selectTaskGCSE(typ, model);
                case "8": return selectTaskGCSE(typ, model);
                case "9": return selectTaskGCSE(typ, model);
                case "10": return selectTaskGCSE(typ, model);
                case "11": return selectTaskGCSE(typ, model);
                case "12": return selectTaskGCSE(typ, model);
                case "13": return selectTaskGCSE(typ, model);
                case "14": return selectTaskGCSE(typ, model);
                case "15": return selectTaskGCSE(typ, model);
                case "16": return selectTaskGCSE(typ, model);
                case "17": return selectTaskGCSE(typ, model);
                case "18": return selectTaskGCSE(typ, model);
                case "19": return selectTaskGCSE(typ, model);
                case "20": return selectTaskGCSE(typ, model);
                case "21": return selectTaskGCSE(typ, model);
                case "22": return selectTaskGCSE(typ, model);
                case "23": return selectTaskGCSE(typ, model);
                case "24": return selectTaskGCSE(typ, model);
                case "25": return selectTaskGCSE(typ, model);
                case "26": return selectTaskGCSE(typ, model);
                case "27": return selectTaskGCSE(typ, model);
                case "28": return selectTaskGCSE(typ, model);
                case "29": return selectTaskGCSE(typ, model);
                case "30": return selectTaskGCSE(typ, model);
                case "31": return selectTaskGCSE(typ, model);
                case "32": return selectTaskGCSE(typ, model);
                case "33": return selectTaskGCSE(typ, model);
                case "34": return selectTaskGCSE(typ, model);
                case "35": return selectTaskGCSE(typ, model);
                case "36": return selectTaskGCSE(typ, model);


                default: return (<div></div>);
            }
        default: return (<div></div>);

    }
}
export default WorksList;