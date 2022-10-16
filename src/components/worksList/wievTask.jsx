import React, { useEffect, useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import styles from './wievTask.module.scss';
import Canvas from 'data/funkcjeCanvas';

const WievTask = ({ data, model }) => {
    const [tasks, settasks] = useState([]);

    const { powt, tresc, odp, well, podpowiedz, canvasWrapper, wellpo, trescpo } = styles;
    console.log(data.length);
    console.log(model);
    let numberOfPage = Math.ceil(data.length / 25);
    // console.log(numberOfPage);
    let pages = [];

    for (let i = 1; i <= numberOfPage; i++) {
        pages.push({ id: `${i}`, val: `${i * 25}` });
    };

    
    useEffect(() => { settasks([]); }, [model]);
   

    const changePage = (e) => {
        let range = Number(e.target.attributes[0].nodeValue);
        let newTask = [];
        for (let i = range - 25; i < data.length && i < range; i++) {
            newTask.push(data[i])
            
        };
        console.log(newTask);
        settasks(newTask);
        console.log(newTask[0].canvas);
        for (let i = 0; i < newTask.length; i++) {
            if (newTask[i].canvas.length !== 0) {
                console.log(newTask[i].canvas.length)

            }
        }
    }
    
    
    // console.log(tasks[0].canvas);
    
    return (<>
        {pages.map(page => (<button onClick={changePage} data-val={page.val}>{page.id}</button>))}

        <ol className={powt}>
            {tasks.map(work => (
                <li key={work.id}><MathJax inline>{
                    <p className={tresc}><a href='#top'>⇑</a>{work.tresc}</p>}</MathJax>
                    {work.ramka ? (<div className={well}><MathJax inline>{work.ramka}</MathJax></div>) : (<div></div>)}
                    {work.tresc2 !== 0 ? (<MathJax inline><p className={tresc}>{work.tresc2}</p></MathJax>):(<div></div>)}
                    <div className={odp}>
                        {work.podpunkty.length !== 0 ? (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        ) : (
                            <div></div>
                        )}
                        
                        
                    </div>
                    <div className={canvasWrapper}>
                    {work.canvas.length !== 0 ? (
                        work.canvas.map(canva => (
                            <Canvas id={canva.id} width={canva.width} height={canva.height} inline/>
                        ))
                        ) : (<div></div>)}
                    </div>
                 
        
                    {work.ramkapo ? (<div className={wellpo} ><MathJax inline>{work.ramkapo}</MathJax></div>) : (<div></div>)}
            {work.wskazowka ? (<div className={podpowiedz}>Wskazówka: <MathJax inline>{work.wskazowka}</MathJax></div>) : (<div></div>)}
                    {work.tresc3 !== 0 ? (<MathJax inline><p className={trescpo}>{work.tresc3}</p></MathJax>):(<div></div>)}
                </li>
            ))}
        </ol>
        {tasks.length !==0 ? (pages.map(page => (<button onClick={changePage} data-val={page.val}>{page.id}</button>))): (<div></div>)}
    </>
    )

};


export default WievTask