import React from 'react';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { SiGithub, SiHashnode } from "react-icons/si";
import IMG from '../../assets/footer_bg.gif';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <h2 className="footer__logo">Feel free to connect on social media.</h2>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shruti-agarwal-bb7889237" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/ShruAgarwal" target="_blank" rel="noreferrer" ><SiGithub /></a>
        <a href="https://twitter.com/Shru_explores" target="_blank" rel="noreferrer"><BsTwitterX/></a>
        <a href="https://shru.hashnode.dev/" target="_blank" rel="noreferrer" ><SiHashnode/></a>
        </div>

        <div className="footer_bg">
          <img src={IMG} alt="bg-img" />
        </div>

        <div className="footer__copyright">
          <small>&copy; Shruti Agarwal 2024.</small><br/>
          <small>Revised with 🧡 by me</small>
        </div>
    </footer>
  )
}

export default Footer