import React from 'react'
import './about.css'
import profile from '../../assets/profile_new.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={profile} alt='About Me'/>
          </div>
        </div>
        <div className='about__content'>
        <p>
          Hello! My name is Avish. A creative and aspiring software developer, 
          fascinated with strong uphold in technology and committed to utilize 
          my skills to help others. A competent software professional with required skills and 
          attitude to make difference to improve quality of life of the people.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About