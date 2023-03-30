import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z4b80mx', 'template_h38rnpj', form.current, 'iTZ7MG41oIx-4VUhD')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>alphaplusgamma29@gmail.com</h5>
            <a href="mailto:alphaplusgamma29@gmail.com" target="_blank">Send A mesaage</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>alpha</h5>
            <a href="https://facebook.com/profile_username" target="_blank">Send A mesaage</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className=''/>
            <h4>Whatsapp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=8930918195" target="_blank">Send A mesaage</a>
          </article>
        </div>
      
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
