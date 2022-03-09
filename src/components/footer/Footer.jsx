import React from 'react'
import {FaInstagram, FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Avish</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://instagram.com'><FaInstagram/></a>
        <a href='https://twitter.com'><FaTwitter/></a>
      </div>

      <div className='footer__copyright'>
        Made by Avish Shah
      </div>
    </footer>
  )
}

export default Footer