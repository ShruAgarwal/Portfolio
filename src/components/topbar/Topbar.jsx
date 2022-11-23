import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiFillStar } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#achievements" onClick={()=> setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}><AiFillStar /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      
    </nav>
  )
}

export default Topbar;