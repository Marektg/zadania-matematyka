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
                ctx.moveTo(y - 10, 33);
                ctx.lineTo(y + 5, 33);
                ctx.lineTo(y - 10, 33);
                ctx.fillText("12", y - 3, 48);
                ctx.fillText("x", 4 * y - 4, 30);
                ctx.fillText("5", 7 * y - 4, 30);
                ctx.moveTo(7 * y - 10, 33);
                ctx.lineTo(7 * y + 5, 33);
                ctx.lineTo(7 * y - 10, 33);
                ctx.fillText("6", 7 * y - 4, 48);
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
                ctx.moveTo(y - 5, 33);
                ctx.lineTo(y + 5, 33);
                ctx.lineTo(y - 5, 33);
                ctx.fillText("5", y, 48);
                ctx.fillText("y", 7 * y, 30);
                ctx.fillText("19", 9 * y, 30);
                ctx.moveTo(9 * y - 9, 33);
                ctx.lineTo(9 * y + 9, 33);
                ctx.lineTo(9 * y - 9, 33);
                ctx.fillText("30", 9 * y, 48);
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
                ctx.moveTo(y - 9, 33);
                ctx.lineTo(y + 9, 33);
                ctx.lineTo(y - 9, 33);
                ctx.fillText("20", y, 48);
                ctx.fillText("z", 3 * y - 4, 30);
                ctx.fillText("3", 7 * y - 4, 30);
                ctx.moveTo(7 * y - 10, 33);
                ctx.lineTo(7 * y + 5, 33);
                ctx.lineTo(7 * y - 10, 33);
                ctx.fillText("4", 7 * y - 4, 48);
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
                    ctx.fill();
                    ctx.stroke();
                } else if (lg1 === 2) {
                    ctx.fillText("1", y - 8, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                    ctx.strokeStyle = "#000000";
                    ctx.moveTo(y - 9, 33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
                    ctx.lineTo(y + 9, 33);
                    ctx.lineTo(y - 9, 33);
                    ctx.fill();
                    ctx.stroke();
                } else {
                    ctx.fillText("1", y - 12, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                    ctx.strokeStyle = "#000000";
                    ctx.moveTo(y - 13, 33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
                    ctx.lineTo(y + 13, 33);
                    ctx.lineTo(y - 13, 33);
                    ctx.fill();
                    ctx.stroke();
                }
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
                ctx.fillText("b", 10 * y - 4, 30);
                ctx.fillText("c", 11 * y - 4, 30);
                ctx.fillText("1", 16 * y - 4, 35);
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
                ctx.fillText("1", s / 4 + 3, (h / 2) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.strokeStyle = "#000000";
                ctx.moveTo((s / 4) - 3, (h / 2) - 2);
                ctx.lineTo((s / 4) + 9, (h / 2) - 2);
                ctx.lineTo((s / 4) - 3, (h / 2) - 2);
                ctx.fillText("2", s / 4 + 3, (h / 2) + 12);
                ctx.fillText("1", 3 * s / 4 + 3, (h / 4) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((3 * s / 4) - 3, (h / 4) - 2);
                ctx.lineTo((3 * s / 4) + 9, (h / 4) - 2);
                ctx.lineTo((3 * s / 4) - 3, (h / 4) - 2);
                ctx.fillText("4", 3 * s / 4 + 3, (h / 4) + 12);
                ctx.fillText("1", 5 * s / 8 + 3, (3 * h / 4) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((5 * s / 8) - 3, (3 * h / 4) - 2);
                ctx.lineTo((5 * s / 8) + 9, (3 * h / 4) - 2);
                ctx.lineTo((5 * s / 8) - 3, (3 * h / 4) - 2);
                ctx.fillText("8", 5 * s / 8 + 3, (3 * h / 4) + 12);
                ctx.fillText("1", 7 * s / 8, (5 * h / 8) - 5);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
                ctx.moveTo((7 * s / 8) - 6, (5 * h / 8) - 2);
                ctx.lineTo((7 * s / 8) + 9, (5 * h / 8) - 2);
                ctx.lineTo((7 * s / 8) - 6, (5 * h / 8) - 2);
                ctx.fillText("16", (7 * s / 8), (5 * h / 8) + 12);
                ctx.stroke();
            }
        ); break;
        case "l3rys1": (
            draw = ctx => {
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.moveTo(20, 180);
                ctx.lineTo(180, 180);
                ctx.lineTo(100, 41);
                ctx.lineTo(20, 180);
                ctx.moveTo(100, 41);
                ctx.lineTo(100, 180);
                ctx.moveTo(20, 180);
                ctx.lineTo(140, 111);
                ctx.moveTo(180, 180);
                ctx.lineTo(60, 110);
                ctx.moveTo(100, 180);
                ctx.arc(100, 180, 10, - Math.PI * 0.5, 0)
                ctx.moveTo(60, 110);
                ctx.arc(60, 110, 10, - Math.PI / 3, Math.PI / 6);
                ctx.moveTo(140, 111);
                ctx.arc(140, 111, 10, (-Math.PI * 7) / 6, (-Math.PI * 2) / 3)
                ctx.fill();
                ctx.stroke();
                ctx.beginPath()
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("A", 20, 195);
                ctx.fillText("B", 180, 195);
                ctx.fillText("C", 100, 35);
                ctx.fillText("D", 148, 111);
                ctx.fillText("E", 52, 111);
                ctx.fillText("F", 100, 195);
                ctx.font = "10px Tahoma";
                ctx.fillText("G", 108, 150);


                ctx.fill();
                ctx.stroke();

            }
        ); break;
        case "l3rys2": (
            draw = ctx => {
                ctx.beginPath();

                ctx.moveTo(40, 220);
                ctx.lineTo(140, 220);
                ctx.lineTo(160, 140);
                ctx.lineTo(60, 140);
                ctx.lineTo(40, 220);
                ctx.lineTo(40, 120);
                ctx.lineTo(60, 40);
                ctx.lineTo(160, 40);
                ctx.lineTo(140, 120);
                ctx.lineTo(40, 120);
                ctx.moveTo(140, 220);
                ctx.lineTo(140, 120);
                ctx.moveTo(60, 140);
                ctx.lineTo(60, 40);
                ctx.moveTo(160, 140);
                ctx.lineTo(160, 40);
                ctx.stroke();
                ctx.beginPath();
                ctx.fillStyle = "#ffffff48";
                ctx.moveTo(140, 220);
                ctx.lineTo(50, 180);
                ctx.lineTo(110, 40);
                ctx.lineTo(140, 220);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath()
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("A", 40, 240);
                ctx.fillText("B", 140, 240);
                ctx.fillText("C", 170, 145);
                ctx.fillText("D", 50, 145);
                ctx.fillText("E", 30, 125);
                ctx.fillText("F", 150, 125);
                ctx.fillText("G", 170, 45);
                ctx.fillText("H", 50, 45);
                ctx.fillText("Q", 60, 180);
                ctx.fillText("P", 110, 35);
                ctx.fill();
                ctx.stroke();

            }); break;
        case "l5rys1": (
            draw = ctx => {
                ctx.beginPath();
                ctx.moveTo(50, 50);
                ctx.lineTo(250, 50);
                ctx.lineTo(250, 250);
                ctx.lineTo(50, 250);
                ctx.lineTo(150, 50);
                ctx.lineTo(250, 150);
                ctx.lineTo(150, 250);
                ctx.lineTo(50, 150);
                ctx.lineTo(150, 50);
                ctx.moveTo(50, 50);
                ctx.lineTo(50, 250);
                ctx.stroke();
                ctx.beginPath()
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("A", 50, 265);
                ctx.fillText("B", 250, 265);
                ctx.fillText("C", 250, 45);
                ctx.fillText("D", 50, 45);
                ctx.fillText("E", 150, 265);
                ctx.fillText("F", 260, 150);
                ctx.fillText("G", 150, 45);
                ctx.fillText("H", 40, 150);
               ctx.fill();
                ctx.stroke();
            }); break;
        case "ps16a": (
            draw = ctx => {
                ctx.beginPath();
                ctx.moveTo(40, 160);
                ctx.lineTo(180, 160);
                ctx.lineTo(40, 60);
                ctx.lineTo(40, 160);
                ctx.moveTo(3, 110);
                ctx.lineTo(6, 105);
                ctx.lineTo(9, 120);
                ctx.lineTo(11, 95);
                ctx.lineTo(38, 95);
                ctx.moveTo(20, 108);
                ctx.lineTo(35, 108);
                ctx.moveTo(113, 93);
                ctx.lineTo(116, 88);
                ctx.lineTo(120, 113);
                ctx.lineTo(122, 78);
                ctx.lineTo(200, 78);
                ctx.moveTo(188, 99);
                ctx.lineTo(197, 99);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(163, 98, 1, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.fillStyle = "#000000";
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("x", 100, 175);
                ctx.font = "8px Tahoma";
                ctx.fillText("3", 6, 102);
                ctx.fillText("3", 36, 102);
                ctx.fillText("3", 115, 85);
                ctx.font = "20px Tahoma";
                ctx.fillText("(", 13, 115);
                ctx.fillText(")", 32, 115);
                ctx.fillText("125", 142, 105);
                ctx.fillText("15", 176, 105);
                ctx.font = "10px Tahoma";
                ctx.fillText("15", 22, 105);
                ctx.fillText("2", 22, 118);
                ctx.fillText("5", 192, 97);
                ctx.fillText("8", 192, 107);
            }
        ); break;
        case "ps16b": (
            draw = ctx => {
                ctx.beginPath();
                ctx.moveTo(40, 160);
                ctx.lineTo(180, 160);
                ctx.lineTo(40, 60);
                ctx.lineTo(40, 160);
                ctx.moveTo(85, 182);
                ctx.lineTo(88, 180);
                ctx.lineTo(91, 195);
                ctx.lineTo(94, 170);
                ctx.lineTo(110, 170);
                ctx.moveTo(112, 92);
                ctx.lineTo(115, 90);
                ctx.lineTo(118, 105);
                ctx.lineTo(121, 80);
                ctx.lineTo(180, 80);

                ctx.stroke();
                ctx.fillStyle = "#000000";
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("y", 30, 110);
                ctx.fillText("8", 100, 190);
                ctx.fillText("10000", 150, 100);
                ctx.font = "8px Tahoma";
                ctx.fillText("4", 88, 180);
                ctx.fillText("4", 108, 180);
                ctx.fillText("4", 115, 85);
                ctx.font = "10px Tahoma";
            }
        ); break;
        case "ps16c": (
            
            draw = ctx => {
                ctx.beginPath();
                ctx.moveTo(40, 160);
                ctx.lineTo(180, 160);
                ctx.lineTo(40, 60);
                ctx.lineTo(40, 160);
                ctx.moveTo(0, 119);
                ctx.lineTo(3, 114);
                ctx.lineTo(6, 127);
                ctx.lineTo(9, 105);
                ctx.lineTo(36, 105);
                ctx.moveTo(24, 117);
                ctx.lineTo(34, 117);
                ctx.moveTo(85, 180);
                ctx.lineTo(88, 178);
                ctx.lineTo(91, 188);
                ctx.lineTo(94, 165);
                ctx.lineTo(120, 165);

                ctx.stroke();
                ctx.fillStyle = "#000000";
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.fillText("z", 115, 105);
                ctx.fillText("32", 105, 185);
                ctx.fillText("7", 15, 125);

                ctx.font = "8px Tahoma";
                ctx.fillText("5", 88, 175);
                ctx.fillText("5", 2, 112);
                ctx.font = "10px Tahoma";
                ctx.fillText("19", 28, 115);
                ctx.fillText("32", 28, 126);
            
            }); break;
        default: break;

    }
    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = height;

        //Our draw come here
        draw(context)
    }, [draw, height])

    return <canvas ref={canvasRef} {...{ id, width, height }} />
}

export default Canvas



