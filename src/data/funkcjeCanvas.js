import React, { useRef, useEffect } from 'react'

const Canvas = ({ id, width, height }) => {

    const canvasRef = useRef(null)
    let draw;
    switch (id) {
        case "r1": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 9;/* ile kresek wpisać o 1 więcej niż ma być*/
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                    ctx.moveTo(x, 5);
                    ctx.lineTo(x, 15);
                    ctx.lineTo(x, 5);
                }
                ctx.stroke();
                ctx.moveTo(s - 20, 10);
                ctx.lineTo(s - 30, 5);
                ctx.lineTo(s - 30, 15);
                ctx.lineTo(s - 20, 10);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";

                ctx.fillText("5", y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.moveTo(y - 10, 33);
                ctx.lineTo(y + 5, 33);
                ctx.lineTo(y - 10, 33);
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";

                ctx.fillText("12", y - 3, 48);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";

                ctx.fillText("x", 4 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";

                ctx.fillText("5", 7 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.moveTo(7 * y - 10, 33);
                ctx.lineTo(7 * y + 5, 33);
                ctx.lineTo(7 * y - 10, 33);
                ctx.font = "15px Tahoma";

                ctx.fillText("6", 7 * y - 4, 48);
                ctx.strokeStyle = "#000000";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(4 * y, 10, 3, 0, 10 * Math.PI);
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.stroke();
            }
            
        ); break;
        case "r2": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 11;/* ile kresek wpisać o 1 więcej niż ma być*/
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                    ctx.moveTo(x, 5);
                    ctx.lineTo(x, 15);
                    ctx.lineTo(x, 5);
                }
                ctx.stroke();
                ctx.moveTo(s - 20, 10);
                ctx.lineTo(s - 30, 5);
                ctx.lineTo(s - 30, 15);
                ctx.lineTo(s - 20, 10);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                
                ctx.fillText("2", y, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.strokeStyle = "#000000";
                ctx.moveTo(y - 5, 33);
                ctx.lineTo(y + 5, 33);
                ctx.lineTo(y - 5, 33);
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                
                ctx.fillText("5", y, 48);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                
                ctx.fillText("y", 7 * y, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                
                ctx.fillText("19", 9 * y, 30);
                ctx.strokeStyle = "#000000";
                ctx.moveTo(9 * y - 9, 33);
                ctx.lineTo(9 * y + 9, 33);
                ctx.lineTo(9 * y - 9, 33);
                ctx.font = "15px Tahoma";
                
                ctx.fillText("30", 9 * y, 48);
                ctx.strokeStyle = "#000000";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(7 * y, 10, 3, 0, 10 * Math.PI);
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.stroke();
            }); break;
        case "r3": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 9;/* ile kresek wpisać o 1 więcej niż ma być*/
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                    ctx.moveTo(x, 5);
                    ctx.lineTo(x, 15);
                    ctx.lineTo(x, 5);
                }
                ctx.stroke();
                ctx.moveTo(s - 20, 10);
                ctx.lineTo(s - 30, 5);
                ctx.lineTo(s - 30, 15);
                ctx.lineTo(s - 20, 10);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("9", y, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.strokeStyle = "#000000";
                ctx.moveTo(y - 9, 33);
                ctx.lineTo(y + 9, 33);
                ctx.lineTo(y - 9, 33);
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("20", y, 48);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("z", 3 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.fillText("3", 7 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.moveTo(7 * y - 10, 33);
                ctx.lineTo(7 * y + 5, 33);
                ctx.lineTo(7 * y - 10, 33);
                ctx.font = "15px Tahoma";
                ctx.fillText("4", 7 * y - 4, 48);
                ctx.strokeStyle = "#000000";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(3 * y, 10, 3, 0, 10 * Math.PI);
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.stroke();
            }); break;
        case "r4": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 18;/* ile kresek wpisać o 1 więcej niż ma być*/
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                    ctx.moveTo(x, 5);
                    ctx.lineTo(x, 15);
                    ctx.lineTo(x, 5);
                }
                ctx.stroke();
                ctx.moveTo(s - 20, 10);
                ctx.lineTo(s - 30, 5);
                ctx.lineTo(s - 30, 15);
                ctx.lineTo(s - 20, 10);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                let lg1 = 1;
                if (lg1 === 1) {
                    ctx.fillText("1", y, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                    ctx.strokeStyle = "#000000";
                    ctx.moveTo(y - 5, 33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
                    ctx.lineTo(y + 5, 33);
                    ctx.lineTo(y - 5, 33);
                    ctx.fillStyle = "#000000";
                    ctx.fill();
                    ctx.stroke();
                } else if (lg1 === 2) {
                    ctx.fillText("1", y - 8, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                    ctx.strokeStyle = "#000000";
                    ctx.moveTo(y - 9, 33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
                    ctx.lineTo(y + 9, 33);
                    ctx.lineTo(y - 9, 33);
                    ctx.fillStyle = "#000000";
                    ctx.fill();
                    ctx.stroke();
                } else {
                    ctx.fillText("1", y - 12, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                    ctx.strokeStyle = "#000000";
                    ctx.moveTo(y - 13, 33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
                    ctx.lineTo(y + 13, 33);
                    ctx.lineTo(y - 13, 33);
                    ctx.fillStyle = "#000000";
                    ctx.fill();
                    ctx.stroke();
                }
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                let ld1 = 1;
                if (ld1 === 1) {
                    ctx.fillText("2", y, 48);
                } else if (ld1 === 2) {
                    ctx.fillText("2", y - 8, 48);
                } else {
                    ctx.fillText("2", y - 12, 48);
                }
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("a", 2 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("b", 10 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("c", 11 * y - 4, 30);
                ctx.strokeStyle = "#000000";
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("1", 16 * y - 4, 35);
                ctx.strokeStyle = "#000000";
                ctx.beginPath();
                ctx.arc(2 * y, 10, 3, 0, 10 * Math.PI);
                ctx.moveTo(10 * y, 10);
                ctx.arc(10 * y, 10, 3, 0, 10 * Math.PI);
                ctx.moveTo(11 * y, 10);
                ctx.arc(11 * y, 10, 3, 0, 10 * Math.PI);
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.stroke();
            }
        ); break;
        case "r5": (
            draw = ctx => {
                const s = width;
                const h = height;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 10, 10);
                ctx.lineTo(s - 10, h - 10);
                ctx.lineTo(10, h - 10);
                ctx.lineTo(10, 10);
                ctx.lineTo((s - 10) / 2, 10);
                ctx.lineTo((s - 10) / 2, h - 10);
                ctx.lineTo((s - 10) / 2, 10);
                ctx.lineTo((s - 10) / 2, (h - 10) / 2);
                ctx.lineTo(s - 10, (h - 10) / 2);
                ctx.lineTo((s - 10) / 2, (h - 10) / 2);
                ctx.lineTo((3 * s - 30) / 4, (h - 10) / 2);
                ctx.lineTo((3 * s - 30) / 4, h - 10);
                ctx.lineTo((3 * s - 30) / 4, (h - 10) / 2);
                ctx.lineTo((3 * s - 30) / 4, (3 * h - 30) / 4);
                ctx.lineTo(s - 10, (3 * h - 30) / 4);
                ctx.lineTo((3 * s - 30) / 4, (3 * h - 30) / 4);
                ctx.stroke();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("1", s / 4+3, (h / 2) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.strokeStyle = "#000000";
                ctx.moveTo((s / 4) - 3, (h / 2) - 2);
                ctx.lineTo((s / 4) + 9, (h / 2) - 2);
                ctx.lineTo((s / 4) - 3, (h / 2) - 2);
                ctx.fillText("2", s / 4+3, (h / 2) + 12);
                ctx.fillText("1", 3 * s / 4+3, (h / 4) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((3 * s / 4) - 3, (h / 4) - 2);
                ctx.lineTo((3 * s / 4) + 9, (h / 4) - 2);
                ctx.lineTo((3 * s / 4) - 3, (h / 4) - 2);
                ctx.fillText("4", 3 * s / 4+3, (h / 4) + 12);
                ctx.fillText("1", 5 * s / 8+3, (3 * h / 4) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((5 * s / 8) - 3, (3 * h / 4) - 2);
                ctx.lineTo((5 * s / 8) + 9, (3 * h / 4) - 2);
                ctx.lineTo((5 * s / 8) - 3, (3 * h / 4) - 2);
                ctx.fillText("8", 5 * s / 8+3, (3 * h / 4) + 12);
                ctx.fillText("1", 7 * s / 8, (5 * h / 8) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((7 * s / 8) - 6, (5 * h / 8) - 2);
                ctx.lineTo((7 * s / 8) + 9, (5 * h / 8) - 2);
                ctx.lineTo((7 * s / 8) - 6, (5 * h / 8) - 2);
                ctx.fillText("16", (7 * s / 8), (5 * h / 8) + 12);
                 ctx.stroke();
            }
        ); break;
        default: break;
        
    }
            useEffect(() => {

                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                canvas.height = height;

                //Our draw come here
                draw(context)
            }, [draw])

            return <canvas ref={canvasRef} {...{ id, width }} />
    }

    export default Canvas



