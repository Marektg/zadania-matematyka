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
                let range = w/18;
             
                let rangex = w / range;
                let rangey = h / range;
                let color = "green";
                function grid() {
                    ctx.strokeStyle = "black";
                    for (let i = 1; i <= Math.floor(rangex * 2); i++) {
                        ctx.lineWidth = 1 / 6;
                        ctx.beginPath();
                        ctx.moveTo((range / 2) * i, 0);
                        ctx.lineTo((range / 2) * i, h);
                        ctx.closePath();
                        ctx.stroke();
                    }
                    for (let i = 1; i <= Math.floor(rangey * 2); i++) {
                        ctx.lineWidth = 1 / 6;
                        ctx.beginPath();
                        ctx.moveTo(0, (range / 2) * i);
                        ctx.lineTo(w, (range / 2) * i);
                        ctx.closePath();
                        ctx.stroke();
                    }
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(0, h / 2);
                    ctx.lineTo(w, h / 2);
                    ctx.closePath();
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(w / 2, 0);
                    ctx.lineTo(w / 2, h);
                    ctx.closePath();
                    ctx.stroke();
                    for (let i = -(rangex / 2); i <= (rangex / 2); i++) {
                        ctx.fillText(i, ((i + (rangex / 2)) * range)-5, (h / 2) + 15);
                        ctx.moveTo(i * range, (h/2)-5);
                        ctx.lineTo(i * range, (h / 2) + 5);
                        ctx.moveTo(i * range*(-1), (h / 2) - 5);
                        ctx.lineTo(i * range*(-1), (h / 2) + 5);
                    }
                    ctx.save();
                }
                grid();
                ctx.closePath();
                ctx.stroke();
                function start_settings() {
                    ctx.translate(w / 2, h / 2);
                    // ctx.scale(range, range);
                }
                start_settings();
                ctx.beginPath();
                ctx.lineWidth = 2/range;
                ctx.strokeStyle = color;
                ctx.moveTo(-6,-3);
                ctx.lineTo(-4, -3);
                ctx.lineTo(-1, 0);
                ctx.lineTo(2, -3);
                ctx.moveTo(2, -1);
                ctx.lineTo(5, -1);
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
    }, [draw, height])

    return <canvas ref={canvasRef} {...{ id, width, height }} />
}

export default Canvas



