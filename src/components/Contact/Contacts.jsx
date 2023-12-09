import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_aif4l07', 'template_c8xzs8n', form.current, 'template_c8xzs8n')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            console.log("message send");
        });
    };
  return ( <div>
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
  )
}

export default Contact