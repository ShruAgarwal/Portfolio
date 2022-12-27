import React from 'react';
import { FaSuitcase, FaHandshake } from 'react-icons/fa';
import ME from '../../assets/shru.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaSuitcase className="about__icon" />
              <h5>Looking</h5>
              <small>for Job opportunities</small>
            </article>
            <article className="about__card">
              <FaHandshake className="about__icon" />
              <h5>Let's Collaborate</h5>
              <small>Got a new idea, or have an exciting project, just DM me on Twitter or LinkedIn</small>
            </article>
          </div>
          <p>I'm a passionate, curious & quick learner. I love to self-learn when 
            it comes to learning the basics of a new language, building projects, and 
            contributing to open-source projects. I've got a keen interest in Machine Learning 🤖
            which I'd like to use in future projects. Also, I love to share my and other peoples' 
            best apps/projects through writing articles on Hashnode.<br/><br/>
            
            ⭐ My motive is to create impactful contributions with my skills that have the potential to improve the lives of millions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro