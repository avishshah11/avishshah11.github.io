import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      <div className='container education__container'>
        <div className='education__school'>
          <h3>Gujarat Public School, Vadodara</h3>
          <h4>Secondary(X)</h4>
          <h5>April 2016 - May 2017</h5>
        </div>
        <div className='education__school'>
          <h3>Gujarat Public School, Vadodara</h3>
          <h4>Higher Secondary (XII)</h4>
          <h5>April 2018 - May 2019</h5>
        </div>
        <div className='education__school'>
          <h3>Vellore Institue of Technology, Bhopal</h3>
          <h4>Bachelor of Technology in Computer Science and Enginnering</h4>
          <h5>July 2019 - May 2023</h5>
        </div>
      </div>
    </section>
  )
}

export default Education