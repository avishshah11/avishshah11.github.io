import React from 'react'
import {FaInstagram, FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Avish Shah</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#certification'>Certificates</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/shahaavish/'><FaInstagram/></a>
        <a href='https://twitter.com/AvishShah12'><FaTwitter/></a>
      </div>

      <div className='footer__copyright'>
        Made by Avish Shah
      </div>
    </footer>
  )
}

export default Footer