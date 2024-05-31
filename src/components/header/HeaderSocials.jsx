import React from 'react';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { SiGithub, SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/shruti-agarwal-bb7889237" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ShruAgarwal" target="_blank" rel="noreferrer" ><SiGithub /></a>
      <a href="https://twitter.com/Shru_explores" target="_blank" rel="noreferrer"><BsTwitterX/></a>
      <a href="https://shru.hashnode.dev/" target="_blank" rel="noreferrer" ><SiHashnode/></a>
    </div>
  )
}

export default HeaderSocials