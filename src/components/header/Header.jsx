import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Avish Shah</h1>
        <p>I graduated with B.Tech in Computer Science and Technology, and I am currently employed as a Jr. Frontend Engineer at a startup. 
          With year of experience, I have been involved in developing and optimizing user interfaces to deliver quality software products.</p>
        <CTA/>
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header