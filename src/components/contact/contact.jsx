import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
    height: 60px;
    width: 100px;
    cursor: pointer;
    font-size: 1.2em;
    padding: 10px 20px 10px 20px;
    border-radius: 30px;
    border: none;
    margin-left: 20px;
    margin-top:20px;
    text-align: center;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #e6e6fa;
    text-decoration: none;
    &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uiall6m', 'template_ovdue6a', form.current, 'SQfE3MmaCh9OAHR6p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
    
            
<div>
    <h1>matematyka</h1>
    <h2>profesjonalne korepetycje</h2>
    <p>Oferuję:</p>
    <ul>
        <li>pomoc w materiale bieżącym</li>
        <li>przygodowanie do kartkówek/sprawdzianów</li>
        <li>przygotowanie do egzaminu ósmoklasisty</li>
        <li>przygotowanie do matury poziom podstawowy i rozszerzony</li>
    </ul>
    <p>Zajęcia prowadzone są na platformie Meet 
    </p>
    <p>Nagrane lekcje są udostępniane przez Google Drive</p>
   
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>


            <Link to="/">Strona główna</Link>
        </div>
    );
};