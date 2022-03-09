import React from 'react'
import './about.css'
import avish from '../../assets/avish.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={avish} alt='About Me'/>
          </div>
        </div>
        <div className='about__content'>
        <p>
          Hello! My name is Avish. A passionate and aspiring software developer, 
          fascinated with strong uphold in technology and committed to utilize 
          my skills to help others, while working towards the mission to make
          a better world for everyone. A strong leader who works well under 
          pressure, and exudes positivity.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About