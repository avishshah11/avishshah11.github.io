import React from 'react'
import './nav.css';
import {AiFillHome, AiOutlineUser, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdOutlineWork} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {IoMdSchool} from 'react-icons/io'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setactiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><IoMdSchool/></a>
      <a href='#projects' onClick={() => setactiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href='#experience' onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWork/></a>
      <a href='#contact' onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav