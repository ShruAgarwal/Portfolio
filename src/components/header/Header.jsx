import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello 👋, I'm</h4>
        <h1>Shruti Agarwal</h1>
        <h4 className="text-light">I love building things with Python.</h4>
        <CTA />
        <a href="#contact" className="scroll__down">
          <h3>📧 Contact me</h3>
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
