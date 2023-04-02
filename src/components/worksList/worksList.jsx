import React from 'react'
import WievTask from './wievTask';
import srednia from '../../data/srednia/srednia';
import zestawy from '../../data/matura/zestawy';
import WievArkusz from './wievArkusz';
import pliczby from '../../data/matura/powtorki/liczby';
import WievTaskPowt from './wievTaskPowt';

import pciagi from '../../data/matura/powtorki/ciagi';
import pfunkcjeILiniowa from '../../data/matura/powtorki/funkcjeILiniowa';
import kielbasa from '../../data/matura/powtorki/kielbasa';
import WievTaskKsiazki from './wievTaskKsiazki';

const WorksList = ({ model, dzial, typ }) => {
    // console.log(model);
    let data = srednia;
    let d = data.length;
    let zadania = [];
    switch (dzial) {
        case "1":
            switch (model) {
                case "1":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
                case "2":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
                case "3":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
                case "4":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
                case "5":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);



                default: return (<div></div>);

            };
        case "2":
            switch (model) {
                case "1":
                    for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
               


                default: return (<div></div>);

            };
        case "10":
            switch (model) {
                case "1":
                   for (let i = 0; i < d; i++) {
                        if (data[i].dzial === dzial && data[i].poddzial === model) {
                            zadania.push(data[i])
                        }
                    }
                    data = zadania;
                    return (<WievTask data={data} model={model} />);
               


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
        case "cp1":
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
        case "cp8":
            switch (model) {
                case "1":
                    let d = pciagi.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (pciagi[i].typ.includes("powtorka")) {
                            zadania.push(pciagi[i])
                        }
                    }

                    data = zadania;
                    return (<WievTaskPowt data={data} model={model} />);
                case "2":
                    let d2 = pciagi.length;
                    let zadania2 = [];
                    for (let i = 0; i < d2; i++) {
                        if (pciagi[i].typ.includes("zamkniete")) {
                            zadania2.push(pciagi[i])
                        }
                    }

                    data = zadania2;
                    return (<WievTaskPowt data={data} model={model} />);
                case "3":
                    let d3 = pciagi.length;
                    let zadania3 = [];
                    for (let i = 0; i < d3; i++) {
                        if (pciagi[i].typ.includes("krotkie")) {
                            zadania3.push(pciagi[i])
                        }
                    }

                    data = zadania3;
                    return (<WievTaskPowt data={data} model={model} />);
                case "4":
                    let d4 = pciagi.length;
                    let zadania4 = [];
                    for (let i = 0; i < d4; i++) {
                        if (pciagi[i].typ.includes("dlugie")) {
                            zadania4.push(pciagi[i])
                        }
                    }

                    data = zadania4;
                    return (<WievTaskPowt data={data} model={model} />);
                default: return (<div></div>);
            };
        case "cp2":
            switch (model) {
                case "1":
                    let d = pfunkcjeILiniowa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (pfunkcjeILiniowa[i].typ.includes("powtorka")) {
                            zadania.push(pfunkcjeILiniowa[i])
                        }
                    }

                    data = zadania;
                    return (<WievTaskPowt data={data} model={model} />);
                case "2":
                    let d2 = pfunkcjeILiniowa.length;
                    let zadania2 = [];
                    for (let i = 0; i < d2; i++) {
                        if (pfunkcjeILiniowa[i].typ.includes("zamkniete")) {
                            zadania2.push(pfunkcjeILiniowa[i])
                        }
                    }

                    data = zadania2;
                    return (<WievTaskPowt data={data} model={model} />);
                case "3":
                    let d3 = pfunkcjeILiniowa.length;
                    let zadania3 = [];
                    for (let i = 0; i < d3; i++) {
                        if (pfunkcjeILiniowa[i].typ.includes("krotkie")) {
                            zadania3.push(pfunkcjeILiniowa[i])
                        }
                    }

                    data = zadania3;
                    return (<WievTaskPowt data={data} model={model} />);
                case "4":
                    let d4 = pfunkcjeILiniowa.length;
                    let zadania4 = [];
                    for (let i = 0; i < d4; i++) {
                        if (pciagi[i].typ.includes("dlugie")) {
                            zadania4.push(pfunkcjeILiniowa[i])
                        }
                    }

                    data = zadania4;
                    return (<WievTaskPowt data={data} model={model} />);
                default: return (<div></div>);
            };
        case "cpkk1":
            switch (typ) {
                case "1": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Wyrażenia algebraiczne."))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "2": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Liczby"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "3": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcje."))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "4": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcja liniowa"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "5": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcja kwadratowa"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "6": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Wielomiany"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "7": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcje wymierne"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "8": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcja wykładnicza"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "9": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Funkcja logarytmiczna"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "10": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Trygonometria"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "11": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Ciągi"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "12": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Planimetria"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "13": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Geometria"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "14": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Stereometria"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                case "15": {
                    let d = kielbasa.length;
                    let zadania = [];
                    for (let i = 0; i < d; i++) {
                        if (kielbasa[i].dzial.includes("Pochodna"))
                            zadania.push(kielbasa[i])
                    };


                    data = zadania;
                    return (<WievTaskKsiazki data={data} model={model} />);
        
                };
                    
                    
                default: return (<div></div>);
            }
        default: return (<div></div>);

    }
}
    export default WorksList;