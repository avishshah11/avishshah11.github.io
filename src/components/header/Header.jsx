import React from 'react'
import CTA from './CTA'
import avish from "../../assets/avish.jpg"
import HeaderSocials from './HeaderSocials'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avish Shah</h1>
        <h5 className="text-light"></h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={avish} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header