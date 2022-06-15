import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
      <h5>Where I've studied</h5>
      <h2>Education</h2>
      <div className='container education__container'>
        <div className='education__school'>
          <h2>Gujarat Public School, Vadodara</h2>
          <h3>Secondary(X)</h3>
          <h4>April 2016 - May 2017</h4>
          <h3 className='marks'>CGPA: 7.4</h3>
        </div>
        <div className='education__school'>
          <h2>Gujarat Public School, Vadodara</h2>
          <h3>Higher Secondary (XII)</h3>
          <h4>April 2018 - May 2019</h4>
          <h3 className='marks'>PERCENTAGE: 70.2</h3>
        </div>
        <div className='education__school'>
          <h2>Vellore Institue of Technology, Bhopal</h2>
          <h3>Bachelor of Technology in Computer Science and Enginnering</h3>
          <h4>July 2019 - May 2023</h4>
          <h3 className='marks'>CGPA: 7.95</h3>
        </div>
      </div>
    </section>
  )
}

export default Education