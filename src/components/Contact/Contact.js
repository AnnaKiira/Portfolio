import React, {useRef} from 'react'
import './Contact.css'
import Github from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_blucjc3', 'template_gi0nh14', form.current, {publicKey: '8IE8YWLIVWI1-3wK0',})
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Fill out form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Name' name='from_name' />
                <input type='email' className='email' placeholder='Email' name='from_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={LinkedIn} alt='LinkedIn' className='link' />
                    <img src={Github} alt='Github' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact