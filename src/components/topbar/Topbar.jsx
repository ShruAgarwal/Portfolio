import React, { useState } from 'react';

import { BiHomeCircle, BiSolidUser, BiSolidCertification, BiSolidContact} from 'react-icons/bi';
import { FaTools } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdWorkHistory } from "react-icons/md";


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeCircle /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiSolidUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaTools /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoProjectSymlink /></a>
      <a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><MdWorkHistory /></a>
      <a href="#achievements" onClick={()=> setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}><BiSolidCertification /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidContact /></a>
      
    </nav>
  )
}

export default Topbar;