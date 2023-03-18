import React, { useEffect, useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import styles from './wievTask.module.scss';
import Canvas from '../../data/funkcjeCanvas';
import Extra from '../../data/extra';

const WievArkusz = ({ data, model }) => {
    const [tasks, settasks] = useState([]);
    const [atytul, setTytul] = useState(null);
    const { title, powto, tresc, odp, well, podpowiedz, canvasWrapper, wellpo, trescpo, buttonWrapper, numerZad } = styles;
    const numberOfTask = 1;
    console.log(data.length);
    console.log(model);
    let numberOfPage = Math.ceil(data.length / numberOfTask);
    // console.log(numberOfPage);
    let pages = [];

    for (let i = 1; i <= numberOfPage; i++) {
        pages.push({ id: `${i}`, val: `${i * numberOfTask}` });
    };
    const podmenu = document.querySelector('[data-poddzialy]')
    // console.log(podmenu.childNodes[0].id);
    for (let i = 0; i < podmenu.childNodes.length; i++) {
        if (Number(model) === Number(podmenu.childNodes[i].id)) {
            podmenu.childNodes[i].style.backgroundColor = "green";

        } else {
            if (i % 2 === 1) {
                podmenu.childNodes[i].style.backgroundColor = '#f0e68c';
            } else { podmenu.childNodes[i].style.backgroundColor = '#ffa07a'; }

        }
    }

    useEffect(() => { settasks([]); }, [model]);


    const changePage = (e) => {
        const wraper1 = document.querySelector('[data-buttons]');
        let range = Number(e.target.attributes[0].nodeValue);
        if (e === null) {
            for (let i = 0; i < wraper1.childNodes.length; i++) {
                wraper1.childNodes[i].style.backgroundColor = "rgb(210, 240, 241)";
                wraper1.childNodes[i].style.color = "black";
            }
        };

        for (let i = 0; i < wraper1.childNodes.length; i++) {
            if (Number(range / numberOfTask) === Number(wraper1.childNodes[i].textContent)) {
                wraper1.childNodes[i].style.backgroundColor = "green";
                wraper1.childNodes[i].style.color = "orange";
            } else {
                wraper1.childNodes[i].style.backgroundColor = "rgb(210, 240, 241)";
                wraper1.childNodes[i].style.color = "black";
            }
        }

        // e.target.style.backgroundColor = "green";
        let newTask = [];
        let tytul = [];
        for (let i = range - numberOfTask; i < data.length && i < range; i++) {
            let zadaniaMaturalne = data[i].zadania;
            console.log(zadaniaMaturalne);
zadaniaMaturalne.forEach(zad => {newTask.push(zad)
    
});
            tytul.push(data[i].tytul);



        };

        let actual = tytul[0];
        setTytul(actual);
        settasks(newTask);
        // console.log(newTask[0].canvas);
        for (let i = 0; i < newTask.length; i++) {
            if (newTask[i].canvas.length !== 0) {
                // console.log(newTask[i].canvas.length)

            }
        }
        
    }
    console.log(atytul);

    // console.log(tasks[0].canvas);

    return (<>
        <div className={buttonWrapper} data-buttons>
            {pages.map(page => (<button onClick={changePage} data-val={page.val}>{page.id}</button>))}
        </div>
        <h2 className={title}>{atytul}</h2>
        <ol className={powto}>
            {tasks.map(work => (
                <li key={work.id}><MathJax inline>{<><p className={numerZad}>{work.numer}</p>
                    <p className={tresc}><a href='#top'>⇑</a>{work.tresc}</p></>}</MathJax>
                    {work.ramka && (<div className={well}><MathJax inline>{work.ramka}</MathJax></div>)}
                    {work.extra && (<MathJax inline><Extra id={work.extra} /></MathJax>)}
                    {work.extraRamka && (<div className={well}><MathJax inline><Extra id={work.extraRamka} /></MathJax></div>)}

                    {work.tresc2 !== 0 && (<MathJax inline><p className={tresc}>{work.tresc2}</p></MathJax>)}
                    <div className={odp}>
                        {work.podpunkty.length !== 0 && !work.koniec && (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        )}


                    </div>
                    <div className={canvasWrapper}>
                        {work.canvas.length === 0 ? (<div></div>) : (
                            work.canvas.length === 4 ? (<div className={odp}>
                             { work.canvas.map(canva => (
                                <Canvas id={canva.id} width={canva.width} height={canva.height} inline />
                            )) } 
                            </div>):
                            (work.canvas.map(canva => (
                                <Canvas id={canva.id} width={canva.width} height={canva.height} inline />
                            )))
                        )}
                    </div>
                    {work.trescpocanvie !== 0 && (<MathJax inline><p className={tresc}>{work.trescpocanvie}</p></MathJax>)}
                    <div className={odp}>
                        {work.koniec && (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        )}


                    </div>


                    {work.ramkapo && (<div className={wellpo} ><MathJax inline>{work.ramkapo}</MathJax></div>)}
                    {work.wskazowka && (<div className={podpowiedz}>Wskazówka: <MathJax inline>{work.wskazowka}</MathJax></div>)}
                    {work.tresc3 !== 0 && (<MathJax inline><p className={trescpo}>{work.tresc3}</p></MathJax>)}

                </li>
            ))}
        </ol>

    </>
    )

};


export default WievArkusz