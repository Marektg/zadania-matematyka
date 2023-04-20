import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

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
        </div>
    );
};