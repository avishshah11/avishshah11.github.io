import React from 'react'
import {FiGithub} from 'react-icons/fi'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>What I've made</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
        <div className='project__image-classifer'>
          <a href='https://github.com/avishshah11/Image-classifier'><FiGithub/></a>
          <h2>Image Classifier</h2>
          <p>
            An project made using Deep Learning library PyTorch which classifies 
            images based on their respective labels with approximate accuracy of 98%. 
          </p>
        </div>
        <div className='project__county-clothing'>
        <a href='https://github.com/avishshah11/County-Clothing'><FiGithub/></a>
          <h2>County Clothing</h2>
          <p>
            An ecommerce clothing website made using ReactJS library having 
            firebase authentication and integrated with stripe payments.   
          </p>
        </div>
        <div className='project__facemask'>
        <a href='https://github.com/avishshah11/FaceMask-Detection'><FiGithub/></a>
          <h2>Facemask Detection</h2>
          <p>
          Face Mask detection built with PyTorch library using CNN having an accuracy of 97%.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects