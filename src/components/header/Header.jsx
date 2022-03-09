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
        <p>I'm a 3rd year undergraduate student studying bachelor of technology at vellore institue of technology, bhopal.
          As a developer I like to create new things which make a valuable impact in the society.</p>
        <CTA/>
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header