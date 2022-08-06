import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avish Shah</h1>
        <p>I'm a final year undergraduate pursuing Bachelor of Technology at Vellore Institute of Technology, Bhopal.
          As a developer I like to learn, involve and develop things which head the way for betterment of the people.</p>
        <CTA/>
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header