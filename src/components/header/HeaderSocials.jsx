import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/avish-shah-ba77581a0/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/avishshah11' target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials