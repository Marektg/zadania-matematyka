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
        case "zil1_5a": (
            draw = ctx => {
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(50, 30);
                ctx.lineTo(150, 30);
                ctx.lineTo(150, 130);
                ctx.lineTo(50, 130);
                ctx.closePath();
                ctx.fillStyle = "#b3b3b3";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(100, 88);
                ctx.lineTo(192, 165);
                ctx.lineTo(8, 165);
                ctx.lineTo(100, 88);
                ctx.fillStyle = "#2cf3a0c5";
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 130, 50);
                ctx.fillText("A", 130, 50);
                ctx.fillText("B", 130, 160);
                ctx.fillText("B", 130, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_5b": (
            draw = ctx => {
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(100, 105, 45, 0, 2 * Math.PI);
                ctx.fillStyle = "#fc50df";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(100, 26);
                ctx.lineTo(192, 105);
                ctx.lineTo(8, 105);
                ctx.lineTo(100, 26);
                ctx.fillStyle = "#2cf3a0c9";
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(100, 105, 45, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("C", 100, 130);
                ctx.fillText("C", 100, 130);
                ctx.fillText("B", 150, 90);
                ctx.fillText("B", 150, 90);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_5c": (
            draw = ctx => {
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(30, 100);
                ctx.lineTo(120, 100);
                ctx.lineTo(120, 190);
                ctx.lineTo(30, 190);
                ctx.closePath();
                ctx.fillStyle = "#b3b3b3";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(10, 83);
                ctx.lineTo(100, 83);
                ctx.lineTo(10, 173);
                ctx.lineTo(10, 83);
                ctx.fillStyle = "#2cf3a0c9";
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.arc(120, 82, 75, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 180);
                ctx.fillText("A", 40, 180);
                ctx.fillText("B", 15, 110);
                ctx.fillText("B", 15, 110);
                ctx.fillText("D", 150, 40);
                ctx.fillText("D", 150, 40);
                ctx.stroke();
                ctx.fill();
            }
        ); break;

        case "zil1_14_0": (
            draw = ctx => {
                ctx.beginPath();
                ctx.rect(0, 10, 200, 160);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(60, 90, 50, 0, 2 * Math.PI);
                ctx.stroke(); ctx.beginPath();
                ctx.arc(120, 80, 50, 0, 2 * Math.PI);
                ctx.stroke(); ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 40);
                ctx.fillText("A", 40, 40);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("U", 180, 30);
                ctx.fillText("U", 180, 30);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr12_1": (
            draw = ctx => {
                ctx.beginPath();
                ctx.arc(100, 100, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.fillStyle = "#b3b3b3b3";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(10, 20);
                ctx.lineTo(190, 160);
                ctx.lineTo(10, 20);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 60, 130);
                ctx.fillText("A", 60, 130);
                ctx.fillText("C", 160, 130);
                ctx.fillText("C", 160, 130);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr12_2": (
            draw = ctx => {
                ctx.beginPath();
                ctx.arc(100, 100, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'blue';
                ctx.fillStyle = "#b3b3b3b3";
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(10, 160);
                ctx.lineTo(190, 20);
                ctx.lineTo(10, 160);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("B", 160, 130);
                ctx.fillText("B", 160, 130);
                ctx.fillText("C", 160, 30);
                ctx.fillText("C", 160, 30);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr12_3": (
            draw = ctx => {
                ctx.beginPath();
                ctx.arc(80, 120, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.fillStyle = "#b3b3b3b3";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 80, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 160);
                ctx.fillText("A", 40, 160);
                ctx.fillText("B", 170, 130);
                ctx.fillText("B", 170, 130);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr12_4": (
            draw = ctx => {
                ctx.beginPath();
                ctx.arc(100, 100, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.fillStyle = "#b3b3b3b3";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(60, 100);
                ctx.lineTo(180, 140);
                ctx.lineTo(200, 20);
                ctx.lineTo(60, 100);
                ctx.fillStyle = "#bcd3ff";
                ctx.strokeStyle = 'blue';
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.arc(100, 100, 60, 0, 10 * Math.PI);
                ctx.strokeStyle = 'black';
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 60, 130);
                ctx.fillText("A", 60, 130);
                ctx.fillText("D", 160, 30);
                ctx.fillText("D", 160, 30);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_1": (
            draw = ctx => {
                // 3 * empty circle
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                //   obszar zaznaczenia 
                ctx.beginPath();
                ctx.arc(60, 60, 50, 53 / 180 * Math.PI, 111 / 180 * Math.PI);
                ctx.arc(90, 120, 50, 196 / 180 * Math.PI, 249 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.stroke();
                // przerywana linia  
                ctx.beginPath();
                ctx.setLineDash([3, 3]);
                ctx.arc(120, 60, 50, 127 / 180 * Math.PI, 164 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#f0e68c";
                ctx.fill();
                ctx.stroke();
                // puste kółka  
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(71, 73, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(90, 100, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                // Literki 
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_2": (
            draw = ctx => {
                // 3 * empty circle 
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                //   obszar zaznaczenia  
                ctx.beginPath();
                ctx.arc(60, 60, 50, 16 / 180 * Math.PI, 53 / 180 * Math.PI);
                ctx.arc(120, 60, 50, 127 / 180 * Math.PI, 164 / 180 * Math.PI);
                ctx.arc(90, 120, 50, 249 / 180 * Math.PI, 291 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.stroke();
                // Literki   
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_3": (
            draw = ctx => {
                // 3 * empty circle
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                //   obszar zaznaczenia    
                ctx.beginPath();
                ctx.arc(90, 120, 50, 291 / 180 * Math.PI, 344 / 180 * Math.PI);
                ctx.arc(120, 60, 50, 69 / 180 * Math.PI, 127 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.stroke();
                // przeywana linia  
                ctx.beginPath();
                ctx.arc(60, 60, 50, 16 / 180 * Math.PI, 53 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.stroke();
                // Literki   
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_4": (
            draw = ctx => {
                // 3 * empty circle 
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 0, 2 * Math.PI);
                ctx.fillStyle = "#f0e68c";
                ctx.fill();



                // przeywana linia 
                ctx.beginPath();
                ctx.setLineDash([3, 3]);
                ctx.arc(90, 120, 50, 196 / 180 * Math.PI, 344 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#f0e68c";
                ctx.fill();
                ctx.stroke();
                ctx.setLineDash([0, 0]);
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 344 / 180 * Math.PI, 196 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                // puste kółka 
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(43, 107, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(138, 106, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                // Literki   
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_5": (
            draw = ctx => {
                // 3 * empty circle
                ctx.beginPath();
                ctx.arc(60, 60, 50, 0, 2 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 0, 2 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                // przeywana linia 
                ctx.beginPath();
                ctx.setLineDash([3, 3]);
                ctx.arc(60, 60, 50, 307 / 180 * Math.PI, 53 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#f0e68c";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 127 / 180 * Math.PI, 233 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#f0e68c";
                ctx.fill();
                ctx.stroke();
                ctx.setLineDash([0, 0]);
                ctx.beginPath();
                ctx.arc(60, 60, 50, 53 / 180 * Math.PI, 307 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 233 / 180 * Math.PI, 127 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                // puste kółka  
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(90, 100, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(90, 20, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                // Literki  
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil1_zr13_6": (
            draw = ctx => {
                // błekitny 
                ctx.beginPath();
                ctx.arc(120, 60, 50, 164 / 180 * Math.PI, 233 / 180 * Math.PI);
                ctx.arc(60, 60, 50, 307 / 180 * Math.PI, 16 / 180 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(60, 60, 50, 53 / 180 * Math.PI, 111 / 180 * Math.PI);
                ctx.arc(90, 120, 50, 194 / 180 * Math.PI, 249 / 180 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 294 / 180 * Math.PI, 344 / 180 * Math.PI);
                ctx.arc(120, 60, 50, 69 / 180 * Math.PI, 127 / 180 * Math.PI);
                ctx.arc(60, 60, 50, 16 / 180 * Math.PI, 53 / 180 * Math.PI);
                ctx.fillStyle = "#bcd3ff";
                ctx.fill();
                // przeywana linia 
                ctx.setLineDash([3, 3]);
                ctx.beginPath();
                ctx.arc(60, 60, 50, 16 / 180 * Math.PI, 53 / 180 * Math.PI);
                ctx.arc(120, 60, 50, 127 / 180 * Math.PI, 164 / 180 * Math.PI);
                ctx.arc(90, 120, 50, 249 / 180 * Math.PI, 291 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#f0e68c";
                ctx.fill();
                ctx.stroke();
                ctx.setLineDash([0, 0]);
                ctx.beginPath();
                ctx.arc(60, 60, 50, 53 / 180 * Math.PI, 16 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(120, 60, 50, 164 / 180 * Math.PI, 127 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(90, 120, 50, 294 / 180 * Math.PI, 249 / 180 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.stroke();
                // puste kółka   
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(90, 100, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(70, 74, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.setLineDash([0, 0]);
                ctx.arc(108, 74, 3, 0, 2 * Math.PI);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
                // Literki    
                ctx.beginPath();
                ctx.font = "15 Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 30);
                ctx.fillText("A", 40, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("C", 80, 160);
                ctx.fillText("C", 80, 160);
                ctx.stroke();
                ctx.fill(); 
            }
        ); break;
        case "zil1_zr15_0": (
            draw = ctx => {
                ctx.beginPath();
                ctx.rect(0, 10, 200, 160);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(60, 90, 50, 0, 2 * Math.PI);
                ctx.stroke()
                ctx.beginPath();
                ctx.arc(120, 80, 50, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 40, 40);
                ctx.fillText("A", 40, 40);
                ctx.fillText("B", 130, 30);
                ctx.fillText("B", 130, 30);
                ctx.fillText("U", 180, 30);
                ctx.fillText("U", 180, 30);
                ctx.stroke();
                ctx.fill();
            }
        ); break;
        case "zil2_zp10a": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 23;/* ile kresek wpisać o 1 więcej niż ma być*/
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                    ctx.moveTo(x, 5);
                    ctx.lineTo(x, 15);
                    ctx.lineTo(x, 5);}
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
                    ctx.fillText("0", 10 * y - 4, 30);
                    ctx.font = "13px Tahoma";
                    ctx.fillText("2", 14 * y , 30);
                    ctx.moveTo(14 * y - 12,23);
                    ctx.lineTo(14 * y -7, 30); 
                    ctx.lineTo(14* y-5, 18);
                    ctx.lineTo(14 * y + 5, 18); 
                    ctx.font = "15px Tahoma";
                    ctx.fillText("x", 23 * y - 8, 30);
                    ctx.stroke(); 
            }
        ); break;
        case "zil2_zp10b": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 10);
                ctx.lineTo(s - 20, 10);
                ctx.lineTo(10, 10);
                ctx.stroke();
                let k = 27;/* ile kresek wpisać o 1 więcej niż ma być*/ 
                let y = (s - 20) / k;
                for (let x = y + 0.5; x < s - 40; x += y) {
                ctx.moveTo(x, 5);
                ctx.lineTo(x, 15);
                ctx.lineTo(x, 5);        } 
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
                ctx.fillText("0", 13 * y - 4, 30); 
                ctx.fillText("-2", y - 10, 30);
                //początek PI  
                ctx.moveTo(y + 5, 18);
                ctx.lineTo(y + 20, 18);
                ctx.lineTo(y + 15, 18);
                ctx.lineTo(y + 15, 30);
                ctx.lineTo(y + 15, 18);
                ctx.lineTo(y + 10, 18); 
                ctx.lineTo(y + 10, 30); 
                ctx.lineTo(y + 10, 18);
                ctx.lineTo(y + 5, 18);
                //koniec PI 
                //początek PI 
                ctx.moveTo(19 * y - 5, 18); 
                ctx.lineTo(19 * y + 10, 18);  
                ctx.lineTo(19 * y + 5, 18) 
                ctx.lineTo(19 * y + 5, 30);
                ctx.lineTo(19 * y + 5, 18);
                ctx.lineTo(19 * y, 18);
                ctx.lineTo(19 * y, 30); 
                ctx.lineTo(19 * y, 18);
                ctx.lineTo(19 * y - 5, 18);
                //koniec PI 
                ctx.font = "15px Tahoma"; 
                ctx.fillText("x", 27 * y - 8, 30);
                ctx.stroke();
            }
        ); break;
        case "z120227": (
            draw = ctx => {
                let w = width;
                let h = height;
                let hp = h / 2 - 10;
                let wp = w / 2 ;
                let k =17;
                let y = (w - 20) / k
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(10, hp + 1.5);
                ctx.lineTo(w - 20, hp + 1.5);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 0.5, h - 5);
                ctx.stroke();

                for (let x = y + 0.5; x < w - 40; x += y) {

                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x, hp - 4);
                    ctx.lineTo(x, hp + 6);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(wp - 4.5, x - 0.5);
                    ctx.lineTo(wp + 5.5, x - 0.5);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.lineWidth = 1 / 10;
                    ctx.beginPath();
                    ctx.moveTo(x, 10);
                    ctx.lineTo(x, h - 10)
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(10, x);
                    ctx.lineTo(w - 40, x);
                    ctx.closePath();
                    ctx.stroke();

                }
                for (let i = -8, n = 1; i < 8; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    ctx.fillText(`${i}`, n * y - 2, hp + 16);
                    ctx.stroke();
                };
                for (let i = -5, n = 1; i < 5 ; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    if (i !== 0) {
                        ctx.fillText(`${i}`, wp - 10, h - (n * y) + 10);
                    }
                    ctx.stroke();
                }
                ctx.stroke();
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(w - 20, hp + 1.5);
                ctx.lineTo(w - 30, hp - 3.5);
                ctx.lineTo(w - 30, hp + 6.5);
                ctx.fillStyle = "#000000";
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 5.5, 15);
                ctx.lineTo(wp - 4.5, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.translate(wp, hp+0.5);
                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.fillStyle = "blue";
                ctx.moveTo(-6*y, -3*y);
                ctx.lineTo(-4 * y, -3 * y);
                ctx.lineTo(-1 * y, 0);
                ctx.lineTo(2 * y, -3 * y);
                ctx.moveTo(2 * y, -y);
                ctx.lineTo(5 * y, -y);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(-6 * y, -3 * y);
                ctx.arc(-6 * y, -3 * y, 3, 0, 2 * Math.PI);
                ctx.moveTo(2 * y, -3 * y);
                ctx.arc(2 * y, -3 * y, 3, 0, 2 * Math.PI);
                ctx.moveTo(5 * y, -y);
                ctx.arc(5 * y, -y, 3, 0, 2 * Math.PI);
                ctx.fill()
                ctx.moveTo(2 * y, -y);
                ctx.arc(2 * y, -y, 3, 0, 2 * Math.PI);
                ctx.stroke(); 
             
                
            }
        ); break;
        
        case "z1202218": (
            draw = ctx => {
                ctx.beginPath();
                ctx.fillStyle="white";
                ctx.moveTo(250, 150);
                ctx.arc(250, 150, 100, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(250, 250);
                ctx.arc(250,250,30,-Math.PI,-13/18*Math.PI)
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = "#000000";
                ctx.moveTo(0, 250);
                ctx.lineTo(400, 250);
               
                ctx.moveTo(250,250);
                ctx.lineTo(152, 132);
                ctx.lineTo(348, 168);
                ctx.stroke();
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma"; 
                ctx.fillText("A", 250, 270);
                ctx.fillText("B", 135, 135);
                ctx.fillText("C", 355, 175);
                ctx.font = "10px Tahoma"; 
                ctx.fillText("50", 225, 245);
                ctx.font = "6px Tahoma";
                ctx.fillText("o", 235, 238);
             }
        ); break;
        case "z1202219": (
            draw = ctx => {
               
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.moveTo(350, 250);
                ctx.arc(350, 250, 100, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(442, 211);
                ctx.arc(442, 211, 30, -1.3 * Math.PI, -83 / 90 * Math.PI)
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = "#000000";
                ctx.moveTo(76, 350);
                ctx.lineTo(500, 350);
                ctx.lineTo(390, 85);
                ctx.lineTo(76, 350);
                ctx.moveTo(350, 350);
                ctx.lineTo(442, 211);
                ctx.lineTo(285, 173);
                ctx.stroke();
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.fillText("A", 65, 355);
                ctx.fillText("B", 505, 355);
                ctx.fillText("C", 390, 80);
                ctx.fillText("D", 444, 210);
                ctx.fillText("E", 275, 170);
                ctx.fillText("F", 350, 370);
                ctx.font = "10px Tahoma";
                ctx.fillText("70", 420, 225);
                ctx.font = "6px Tahoma";
                ctx.fillText("o", 431, 220);
             }
        ); break; case "z1202233": (
            draw = ctx => {
              
                ctx.beginPath();
                ctx.strokeStyle = "#000000";
                ctx.moveTo(150, 350);
                ctx.lineTo(450, 350);
                ctx.lineTo(350, 50);
                ctx.lineTo(150, 350);
                ctx.lineTo(425, 275);
                ctx.lineTo(200, 275);
                ctx.lineTo(450, 350);
                ctx.stroke();
                ctx.fillStyle = "#000000";
                ctx.font = "15px Tahoma";
                ctx.fillText("A", 145, 365);
                ctx.fillText("B", 445, 365);
                ctx.fillText("C", 345, 45);
                ctx.fillText("D", 430, 275);
                ctx.fillText("E", 190, 275);
                ctx.fillText("S", 300, 325);
            }
        ); break;
        case "pliczbyrys1": (
            draw = ctx => {
                ctx.beginPath();
                ctx.fillStyle = "#4472c4";
                ctx.strokeStyle = "#000000";
                ctx.moveTo(150, 150);
                ctx.arc(150, 150, 150, -Math.PI / 2, 0.26 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.fillStyle = "#ed7d31";
                ctx.strokeStyle = "#000000";
                ctx.arc(150, 150, 150, 0.26 * Math.PI, 0.54*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.fillStyle = "#a5a5a5";
                ctx.strokeStyle = "#000000";
                ctx.arc(150, 150, 150, 0.54 * Math.PI, 0.98*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.fillStyle = "#ffc000";
                ctx.strokeStyle = "#000000";
                ctx.arc(150, 150, 150, 0.98*Math.PI, 1.22*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.fillStyle = "#5b9bd5";
                ctx.strokeStyle = "#000000";
                ctx.arc(150, 150, 150,  1.22*Math.PI, 1.38*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.fillStyle = "#70ad47";
                ctx.strokeStyle = "#000000";
                ctx.arc(150, 150, 150, 1.38*Math.PI, 1.5*Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.save();
                ctx.beginPath();
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#000000";
                ctx.font = "12px Tahoma";
                ctx.translate(150, 150);
                ctx.rotate(0.5);
                ctx.fillText("przygodowe", 30, -50);
                ctx.fillText("33%", 50, -30);
                ctx.rotate(0.5);
                ctx.fillText("fantastyczne", 35, 10);
                ctx.fillText("14%", 50, 25);
                ctx.rotate(-1.5);
                ctx.fillText("kryminały", -80, 10);
                ctx.fillText("22%", -70, 25);
                ctx.rotate(0.5);
                ctx.fillText("historyczne", -100, -20);
                ctx.fillText("12%", -80, -5);
                ctx.rotate(0.7);
                ctx.fillText("biografie", -100, -20);
                ctx.fillText("8%", -80, -5);
                ctx.rotate(0.3);
                ctx.fillText("dramaty", -100, -30);
                
            }); break;
        case "funkcjerys1":  (
            draw = ctx => {
                let w = width;
                let h = height;
                let hp = h / 2 - 10;
                let wp = w / 2;
                let k = 17;
                let y = (w - 20) / k
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(10, hp + 1.5);
                ctx.lineTo(w - 20, hp + 1.5);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 0.5, h - 5);
                ctx.stroke();

                for (let x = y + 0.5; x < w - 40; x += y) {

                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x, hp - 4);
                    ctx.lineTo(x, hp + 6);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(wp - 4.5, x - 0.5);
                    ctx.lineTo(wp + 5.5, x - 0.5);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.lineWidth = 1 / 10;
                    ctx.beginPath();
                    ctx.moveTo(x, 10);
                    ctx.lineTo(x, h - 10)
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(10, x);
                    ctx.lineTo(w - 40, x);
                    ctx.closePath();
                    ctx.stroke();

                }
                for (let i = -8, n = 1; i < 8; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    ctx.fillText(`${i}`, n * y - 2, hp + 16);
                    ctx.stroke();
                };
                for (let i = -5, n = 1; i < 5; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    if (i !== 0) {
                        ctx.fillText(`${i}`, wp - 10, h - (n * y) + 10);
                    }
                    ctx.stroke();
                }
                ctx.stroke();
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(w - 20, hp + 1.5);
                ctx.lineTo(w - 30, hp - 3.5);
                ctx.lineTo(w - 30, hp + 6.5);
                ctx.fillStyle = "#000000";
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 5.5, 15);
                ctx.lineTo(wp - 4.5, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.translate(wp, hp + 0.5);
                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.fillStyle = "blue";
                ctx.moveTo(-3 * y, -y);
                ctx.lineTo(-y, y);
                ctx.lineTo(y, -4*y);
                ctx.lineTo(2 * y, -y);
                
                ctx.lineTo(3 * y, -y);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(-3 * y, -y);
                ctx.arc(-3 * y, -y, 3, 0, 2 * Math.PI);
                ctx.moveTo(3 * y, -y);
                ctx.arc(3 * y, -y, 3, 0, 2 * Math.PI);
                ctx.moveTo(5 * y, -y);
                ctx.stroke();


    }
); break;
        case "funkcjerys2": (
            draw = ctx => {
                let w = width;
                let h = height;
                let hp = h / 2 - 10;
                let wp = w / 2;
                let k = 17;
                let y = (w - 20) / k
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(10, hp + 1.5);
                ctx.lineTo(w - 20, hp + 1.5);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 0.5, h - 5);
                ctx.stroke();

                for (let x = y + 0.5; x < w - 40; x += y) {

                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x, hp - 4);
                    ctx.lineTo(x, hp + 6);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(wp - 4.5, x - 0.5);
                    ctx.lineTo(wp + 5.5, x - 0.5);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.lineWidth = 1 / 10;
                    ctx.beginPath();
                    ctx.moveTo(x, 10);
                    ctx.lineTo(x, h - 10)
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(10, x);
                    ctx.lineTo(w - 40, x);
                    ctx.closePath();
                    ctx.stroke();

                }
                for (let i = -8, n = 1; i < 8; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    ctx.fillText(`${i}`, n * y - 2, hp + 16);
                    ctx.stroke();
                };
                for (let i = -5, n = 1; i < 5; i++, n++) {
                    ctx.lineWidth = 1;
                    ctx.fillStyle = "#000000";
                    ctx.textAlign = "center";
                    ctx.font = "10px Tahoma";
                    if (i !== 0) {
                        ctx.fillText(`${i}`, wp - 10, h - (n * y) + 10);
                    }
                    ctx.stroke();
                }
                ctx.stroke();
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(w - 20, hp + 1.5);
                ctx.lineTo(w - 30, hp - 3.5);
                ctx.lineTo(w - 30, hp + 6.5);
                ctx.fillStyle = "#000000";
                ctx.moveTo(wp + 0.5, 5);
                ctx.lineTo(wp + 5.5, 15);
                ctx.lineTo(wp - 4.5, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.translate(wp, hp + 0.5);
                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.fillStyle = "blue";
                ctx.moveTo(-3 * y, -y);
                ctx.lineTo(-y, y);
                ctx.lineTo(y, -4 * y);
                ctx.lineTo(2 * y, -y);

                ctx.lineTo(3 * y, -y);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(-3 * y, -y);
                ctx.arc(-3 * y, -y, 3, 0, 2 * Math.PI);
                ctx.moveTo(3 * y, -y);
                ctx.arc(3 * y, -y, 3, 0, 2 * Math.PI);
                ctx.moveTo(5 * y, -y);
                ctx.stroke();


            }
        ); break;
        case "z220226a": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 15);
                ctx.lineTo(s - 20, 15);
                ctx.lineTo(10, 15);
                ctx.stroke();
                ctx.stroke();
                ctx.moveTo(s - 20, 15);
                ctx.lineTo(s - 30, 10);
                ctx.lineTo(s - 30, 20);
                ctx.lineTo(s - 20, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.strokeStyle = "#c43a3c"
                ctx.moveTo(150, 15);
                ctx.lineTo(150, 2);
                ctx.lineTo(10, 2);
                ctx.moveTo(400, 15);
                ctx.lineTo(400, 2);
                ctx.lineTo(s - 20, 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "white";
                ctx.moveTo(150, 15);
                ctx.arc(150, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "#c43a3c";
                ctx.moveTo(400, 15);
                ctx.arc(400, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("7", 150, 35);
                ctx.moveTo(143, 40);
                ctx.lineTo(155, 40);
                ctx.lineTo(143, 40);
                ctx.fillText("3", 150, 55);
                ctx.font = "25px Tahoma";
                ctx.fillText("-", 135, 48);
                ctx.font = "15px Tahoma";
                ctx.fillText("5", 400, 35);
                ctx.moveTo(397, 40);
                ctx.lineTo(405, 40);
                ctx.lineTo(397, 40);
                ctx.fillText("4", 400, 55);
                ctx.stroke();


            }
        ); break;
        case "z220226b": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 15);
                ctx.lineTo(s - 20, 15);
                ctx.lineTo(10, 15);
                ctx.stroke();
                ctx.stroke();
                ctx.moveTo(s - 20, 15);
                ctx.lineTo(s - 30, 10);
                ctx.lineTo(s - 30, 20);
                ctx.lineTo(s - 20, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.strokeStyle = "#c43a3c"
                ctx.moveTo(150, 15);
                ctx.lineTo(150, 2);
                ctx.lineTo(400, 2);
                ctx.lineTo(400, 15);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "white";
                ctx.moveTo(150, 15);
                ctx.arc(150, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "#c43a3c";
                ctx.moveTo(400, 15);
                ctx.arc(400, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("7", 150, 35);
                ctx.moveTo(143, 40);
                ctx.lineTo(155, 40);
                ctx.lineTo(143, 40);
                ctx.fillText("3", 150, 55);
                ctx.font = "25px Tahoma";
                ctx.fillText("-", 135, 48);
                ctx.font = "15px Tahoma";
                ctx.fillText("5", 400, 35);
                ctx.moveTo(397, 40);
                ctx.lineTo(405, 40);
                ctx.lineTo(397, 40);
                ctx.fillText("4", 400, 55);
                ctx.stroke();


            }
        ); break;
        case "z220226c": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 15);
                ctx.lineTo(s - 20, 15);
                ctx.lineTo(10, 15);
                ctx.stroke();
                ctx.stroke();
                ctx.moveTo(s - 20, 15);
                ctx.lineTo(s - 30, 10);
                ctx.lineTo(s - 30, 20);
                ctx.lineTo(s - 20, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.strokeStyle = "#c43a3c"
              
                ctx.moveTo(400, 15);
                ctx.lineTo(400, 2);
                ctx.lineTo(s - 20, 2);
                ctx.stroke();
               
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "#c43a3c";
                ctx.moveTo(400, 15);
                ctx.arc(400, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
               
                ctx.font = "15px Tahoma";
                ctx.fillText("5", 400, 35);
                ctx.moveTo(397, 40);
                ctx.lineTo(405, 40);
                ctx.lineTo(397, 40);
                ctx.fillText("4", 400, 55);
                ctx.stroke();


            }
        ); break;
        case "z220226d": (
            draw = ctx => {
                const s = width;
                ctx.beginPath();
                ctx.moveTo(10, 15);
                ctx.lineTo(s - 20, 15);
                ctx.lineTo(10, 15);
                ctx.stroke();
                ctx.stroke();
                ctx.moveTo(s - 20, 15);
                ctx.lineTo(s - 30, 10);
                ctx.lineTo(s - 30, 20);
                ctx.lineTo(s - 20, 15);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
                ctx.strokeStyle = "#c43a3c"
                ctx.moveTo(150, 15);
                ctx.lineTo(150, 2);
                ctx.lineTo(s - 20, 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = "#c43a3c";
                ctx.fillStyle = "white";
                ctx.moveTo(150, 15);
                ctx.arc(150, 15, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("7", 150, 35);
                ctx.moveTo(143, 40);
                ctx.lineTo(155, 40);
                ctx.lineTo(143, 40);
                ctx.fillText("3", 150, 55);
                ctx.font = "25px Tahoma";
                ctx.fillText("-", 135, 48);
                
                ctx.stroke();


            }
        ); break;
        case "z220228": (
            draw = ctx => {
                let w = width;
                let h = height;
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.moveTo(10, 250);
                ctx.lineTo(w - 10, 250);
                ctx.lineTo(w - 20, 250 - 5);
                ctx.lineTo(w - 20, 250 + 5);
                ctx.lineTo(w - 10, 250);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                
               
                    // ctx.strokeStyle = "#abadab";
                    ctx.lineWidth = 1 / 2;
                    ctx.moveTo(10, 50);
                ctx.lineTo(w - 20, 50);
                ctx.moveTo(10, 150);
                ctx.lineTo(w - 20, 150);
                ctx.moveTo(10, 250);
                ctx.lineTo(w - 20, 250);
                ctx.moveTo(10, 350);
                ctx.lineTo(w - 20, 350);
                ctx.moveTo(10, 100);
                ctx.lineTo(w - 20, 100);
                ctx.moveTo(10, 200);
                ctx.lineTo(w - 20, 200);
                ctx.moveTo(10, 300);
                ctx.lineTo(w - 20, 300);
                    ctx.stroke();
                    ctx.fill();
                
                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.moveTo(200, h-10);
                ctx.lineTo(200, 5);
                ctx.lineTo(200-5, 15);
                ctx.lineTo(200+5, 15);
                ctx.lineTo(200, 5);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                
                    // ctx.strokeStyle = "#abadab";
                    ctx.lineWidth = 1/2;
                    ctx.moveTo(50,10);
                ctx.lineTo(50, h - 10);
                ctx.moveTo(150, 10);
                ctx.lineTo(150, h - 10);
                ctx.moveTo(250, 10);
                ctx.lineTo(250, h - 10);
                ctx.moveTo(350, 10);
                ctx.lineTo(350, h - 10);
                ctx.moveTo(100, 10);
                ctx.lineTo(100, h - 10);
                ctx.moveTo(300, 10);
                ctx.lineTo(300, h - 10);
                    ctx.stroke();
                    ctx.fill();
                
                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = "red";
                ctx.moveTo(10, 10);
                ctx.lineTo(210, 210);
                ctx.moveTo(275, 275);
                ctx.lineTo(375, 375);
                ctx.moveTo(210, 275);
                ctx.lineTo(160,275+5*25);
                ctx.moveTo(290, 75);
                ctx.lineTo(320, 0);
                ctx.stroke();
                ctx.fill();

                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.moveTo(50, 50);
                ctx.arc(50, 50, 3, 0, 2 * Math.PI);
                ctx.moveTo(300, 50);
                ctx.arc(300, 50, 3, 0, 2 * Math.PI);
                ctx.moveTo(200, 200);
                ctx.arc(200, 200, 3, 0, 2 * Math.PI);
                ctx.moveTo(200, 300);
                ctx.arc(200, 300, 3, 0, 2 * Math.PI);
                ctx.moveTo(300, 300);
                ctx.arc(300, 300, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("0", 190, 270);
                ctx.fillText("1", 240, 270);
                ctx.fillText("1", 190, 220);
                ctx.fillText("x", w - 20, 270);
                ctx.fillText("y", 190, 10);

            }
                
        ); break;
        case "z220229": (
            draw = ctx => {
                let w = width;
                let h = height;
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.moveTo(10, 250);
                ctx.lineTo(w - 10, 250);
                ctx.lineTo(w - 20, 250 - 5);
                ctx.lineTo(w - 20, 250 + 5);
                ctx.lineTo(w - 10, 250);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();


                // ctx.strokeStyle = "#abadab";
                ctx.lineWidth = 1 / 2;
                ctx.moveTo(10, 50);
                ctx.lineTo(w - 20, 50);
                ctx.moveTo(10, 150);
                ctx.lineTo(w - 20, 150);
                ctx.moveTo(10, 250);
                ctx.lineTo(w - 20, 250);
                ctx.moveTo(10, 350);
                ctx.lineTo(w - 20, 350);
                ctx.moveTo(10, 100);
                ctx.lineTo(w - 20, 100);
                ctx.moveTo(10, 200);
                ctx.lineTo(w - 20, 200);
                ctx.moveTo(10, 300);
                ctx.lineTo(w - 20, 300);
                ctx.stroke();
                ctx.fill();

                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.moveTo(250, h - 10);
                ctx.lineTo(250, 5);
                ctx.lineTo(250 - 5, 15);
                ctx.lineTo(250 + 5, 15);
                ctx.lineTo(250, 5);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();

                // ctx.strokeStyle = "#abadab";
                ctx.lineWidth = 1 / 2;
                ctx.moveTo(50, 10);
                ctx.lineTo(50, h - 10);
                ctx.moveTo(150, 10);
                ctx.lineTo(150, h - 10);
                ctx.moveTo(250, 10);
                ctx.lineTo(250, h - 10);
                ctx.moveTo(350, 10);
                ctx.lineTo(350, h - 10);
                ctx.moveTo(450, 10);
                ctx.lineTo(450, h - 10);
                ctx.moveTo(550, 10);
                ctx.lineTo(550, h - 10);
                ctx.moveTo(650, 10);
                ctx.lineTo(650, h - 10);
                ctx.moveTo(750, 10);
                ctx.lineTo(750, h - 10);
                ctx.moveTo(100, 10);
                ctx.lineTo(100, h - 10);
                ctx.moveTo(200, 10);
                ctx.lineTo(200, h - 10);
                ctx.moveTo(300, 10);
                ctx.lineTo(300, h - 10);
                ctx.moveTo(400, 10);
                ctx.lineTo(400, h - 10);
                ctx.moveTo(500, 10);
                ctx.lineTo(500, h - 10);
                ctx.moveTo(600, 10);
                ctx.lineTo(600, h - 10);
                ctx.moveTo(700, 10);
                ctx.lineTo(700, h - 10);
                ctx.stroke();
                ctx.fill();

                ctx.closePath();
                ctx.beginPath();
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = "blue";
                ctx.moveTo(100, 50);
                ctx.lineTo(200, 250);
                ctx.moveTo(200, 100);
                ctx.lineTo(350, 350);
                ctx.lineTo(450, 350);
                ctx.lineTo(500, 100);              
                ctx.moveTo(500, 300);
                ctx.lineTo(650, 50);
                ctx.lineTo(700, 200);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.fillStyle = "blue";
                ctx.moveTo(200, 250);
                ctx.arc(200, 250, 3, 0, 2 * Math.PI);
                ctx.moveTo(500, 100);
                ctx.arc(500, 100, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.fillStyle = "white";
                ctx.moveTo(100, 50);
                ctx.arc(100, 50, 3, 0, 2 * Math.PI);
                ctx.moveTo(200, 100);
                ctx.arc(200, 100, 3, 0, 2 * Math.PI);
                ctx.moveTo(500, 300);
                ctx.arc(500, 300, 3, 0, 2 * Math.PI);
                ctx.moveTo(700, 200);
                ctx.arc(700, 200, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("0", 240, 270);
                ctx.fillText("1", 290, 270);
                ctx.fillText("1", 240, 220);
                ctx.fillText("x", w - 20, 270);
                ctx.fillText("y", 240, 10);

            }

        ); break;
        case "z2202219": (
            draw = ctx => {
                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.moveTo(200, 200);
                ctx.arc(200, 200, 180, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = "black";
                ctx.moveTo(200, 200);
                ctx.arc(200, 200, 3, 0, 2 * Math.PI);
                ctx.moveTo(320, 66);
                ctx.arc(320, 66, 3, 0, 2 * Math.PI);
                ctx.moveTo(365,129);
                ctx.arc(365, 129, 3, 0, 2 * Math.PI);
                ctx.moveTo(242, 168);
                ctx.arc(242, 168, 3, 0, 2 * Math.PI);
                ctx.moveTo(24,236);
                ctx.arc(24, 236, 3, 0, 2 * Math.PI);
                ctx.moveTo(101,350);
                ctx.arc(101,350, 3, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(101, 350);
                ctx.lineTo(320, 66);
                ctx.lineTo(365, 129);
                ctx.lineTo(24, 236);
                ctx.lineTo(101, 350);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.moveTo(242, 168);
                ctx.arc(242, 168, 60, -17 / 180 * Math.PI, 127 / 180 * Math.PI);
                ctx.moveTo(320, 66);
                ctx.arc(320, 66, 60, 54/180 * Math.PI, 128/180 * Math.PI);
                ctx.stroke();
                // ctx.fill();
                ctx.closePath();
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("O", 185, 210);
                ctx.fillText("E", 240, 160);
                ctx.fillText("A", 90, 370);
                ctx.fillText("D", 10, 250);
                ctx.fillText("C", 330, 60);
                ctx.fillText("B", 380, 130);
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fillText("145", 258, 200);
                ctx.fillText("58", 315, 105);
                ctx.font = "10px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fillText("o", 273, 193);
                ctx.fillText("o", 327, 99);

                



            }

        ); break;
        case "z2202220": (
            draw = ctx => {
                ctx.beginPath();
                ctx.moveTo(150, 50);
                ctx.lineTo(100, 150);
                ctx.lineTo(350, 150);
                ctx.lineTo(150, 50);
                ctx.lineTo(150, 150);
                ctx.stroke();
                ctx.closePath();
                ctx.font = "20px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";
                ctx.fillText("A", 100, 170);
                ctx.fillText("B", 350, 170);
                ctx.fillText("C", 150, 45);
                ctx.fillText("D", 150, 170);
                ctx.font = "15px Tahoma";
                ctx.textAlign = "center";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "black";

                ctx.fillText("10", 110, 100);
                ctx.fillText("6", 125, 170);
                ctx.fillText("24", 230, 170);

                ctx.beginPath();
                ctx.moveTo(150, 150);
                ctx.arc(150, 150, 20, 3 / 2 * Math.PI, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.moveTo(158, 142);
                ctx.arc(158, 142, 1, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();


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
    }, [draw, height])

    return <canvas ref={canvasRef} {...{ id, width, height }} />
}

export default Canvas



