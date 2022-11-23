import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaBlog } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Shruti</a>
      <div className="footer__socials">
      <a href="https://twitter.com/Shru_explores" target="_blank" rel="noreferrer"><BsTwitter/></a>
      <a href="https://github.com/ShruAgarwal" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.linkedin.com/in/shruti-agarwal-bb7889237" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://shru.hashnode.dev/" target="_blank" rel="noreferrer" ><FaBlog/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shruti Agarwal 2022.</small>
        <p>Revised with 🧡 by me</p>
      </div>
    </footer>
  )
}

export default Footer