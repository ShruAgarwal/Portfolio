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
        <h4 className="text-light">Aspiring Developer and Machine Learning Enthusiast.</h4>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
