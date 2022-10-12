import React from 'react'
import naturalne from "../../data/liczby naturalne"
import { MathJax } from 'better-react-mathjax';

const WorskList = (model) => {

    let data = naturalne;
    console.log(naturalne[0].podpunkty[1]);
  return (
      <ol>
          {data.map(work => (
              <li key={work.id}>
                  <p><a href='#top'><MathJax inline>{"\\(⇑\\)"}</MathJax></a>{work.tresc}</p>
                  
                      {work.podpunkty.length !== 0 ? (work.podpunkty.map(podpunkt => (
                          <div>
                              <div>{podpunkt}</div>
                          </div>
                      ))
                          
                  ) : (
                          <div></div>
                  )}
                  
              </li>
          ))}
      </ol>
  )
}



export default WorskList