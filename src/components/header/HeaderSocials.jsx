import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaBlog } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://twitter.com/Shru_explores" target="_blank" rel="noreferrer"><BsTwitter/></a>
      <a href="https://github.com/ShruAgarwal" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.linkedin.com/in/shruti-agarwal-bb7889237" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://shru.hashnode.dev/" target="_blank" rel="noreferrer" ><FaBlog/></a>
    </div>
  )
}

export default HeaderSocials