import React from 'react'
import { MathJax } from 'better-react-mathjax'
import styles from './wievTask.module.scss';

const WievTask = ({ data }) => {
    const { powt, tresc, odp } = styles;
    console.log(data.length);
    if (data.length < 25) {
        return (
            <ol className={powt}>
                {data.map(work => (
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
        )
    } else {
        let numberOfPage = Math.ceil(data.length / 25);
        console.log(numberOfPage);
        return (
            <ol className={powt}>
                {for (let i=0;i<25;i++) {
                    <li key={data[i].id}><MathJax inline>{
                        <p className={tresc}><a href='#top'>⇑</a>{data[i].tresc}</p>}</MathJax>
                        <div className={odp}>
                            {data[i].podpunkty.length !== 0 ? (data[i].podpunkty.map(podpunkt => (

                                <div><MathJax inline>{podpunkt}</MathJax></div>

                            )

                            ) : (
                                <div></div>
                            )}
                        </div>
                    </li>
                }}
            </ol>
        );
    }
};

export default WievTask