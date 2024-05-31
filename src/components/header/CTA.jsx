import React from 'react';
import CV from '../../assets/01-Shruti_CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="mailto:shruagarwal01@gmail.com" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;