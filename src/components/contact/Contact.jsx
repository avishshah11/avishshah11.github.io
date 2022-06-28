import React from 'react'
import {MdMailOutline} from 'react-icons/md'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
      <div className='contact__paragraph'>
          <p>My inbox is always open if you have any question or just wanna say hi. 
            I'll try my best to get back to you.</p>
        </div>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>avishshah1108@gmail.com</h5>
            <a href='mailto:avishshah1108@gmail.com' target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact