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
          <h4 className='board'>Secondary(X)</h4>
          <h5>April 2016 - May 2017</h5>
          <h4 className='marks'>CGPA: 7.4</h4>
        </div>
        <div className='education__school'>
          <h2>Gujarat Public School, Vadodara</h2>
          <h4 className='board'>Higher Secondary (XII)</h4>
          <h5>April 2018 - May 2019</h5>
          <h4 className='marks'>PERCENTAGE: 70.2</h4>
        </div>
        <div className='education__school'>
          <h2>Vellore Institue of Technology, Bhopal</h2>
          <h4 className='board'>Bachelor of Technology in Computer Science and Enginnering</h4>
          <h5>July 2019 - May 2023</h5>
          <h4 className='marks'>CGPA: 8.17</h4>
        </div>
      </div>
    </section>
  )
}

export default Education