import React, { useState } from 'react'
import { MathJax } from 'better-react-mathjax'
import styles from './wievTask.module.scss';

const WievTask = ({ data }) => {
    const [tasks, settasks] = useState([]);

    const { powt, tresc, odp } = styles;

    console.log(data.length);
    let numberOfPage = Math.ceil(data.length / 25);
    console.log(numberOfPage);
    let pages = [];

    for (let i = 1; i <= numberOfPage; i++) {
        pages.push({ id: `${i}`, val: `${i * 25}` });
    };
    console.log(pages);

    const changePage = (e) => {
        let range = Number(e.target.attributes[0].nodeValue);
        let newTask = [];
        for (let i = range - 25; i < data.length && i < range; i++) {
            newTask.push(data[i])
        };
        console.log(newTask);
        settasks(newTask);

    }
    return (<>
        {pages.map(page => (<button onClick={changePage} data-val={page.val}>{page.id}</button>))}

        <ol className={powt}>
            {tasks.map(work => (
                <li key={work.id}><MathJax inline>{
                    <p className={tresc}><a href='#top'>⇑</a>{work.tresc}</p>}</MathJax>
                    <div className={odp}>
                        {work.podpunkty.length !== 0 ? (work.podpunkty.map(podpunkt => (

                            <div><MathJax inline>{podpunkt}</MathJax></div>

                        ))

                        ) : (
                            <div></div>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    </>
    )

};


export default WievTask