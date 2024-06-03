import React from 'react';
import { FaSuitcase } from 'react-icons/fa';
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { DiOpensource } from "react-icons/di";
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
              <small>for opportunities in<br/>
              Backend Python Development &<br/>
              Machine Learning Engineering roles</small>
            </article>
            <article className="about__card">
              <MdAutoAwesomeMosaic className="about__icon" />
              <h5>Fun Fact</h5>
              <small>The term “open source” was coined in 1998, the same year that the Open Source Initiative <DiOpensource className="about__icon-container" size={18}/> was founded.</small>
            </article>
          </div>
          <p>Hi! My name is Shruti and I relish the challenge of transforming data into actionable insights,
            seeking innovative solutions that yield tangible impacts. In 2018, a TEDx video introduced me
            to the potential of Machine Learning & AI in detecting medical conditions like breast cancer
            and diabetes at an early stage. This ignited a spark that fueled my curiosity to leverage coding
            and ML to solve diverse challenges across life and software development with practical solutions.<br/><br/>
            
            As a passionate tech explorer, I'm captivated by the realms of backend and frontend development,
            with a growing prowess in Machine Learning. My open-source contributions have honed my ability
            to craft clean, readable, and maintainable code that fostered effective teamwork and progress.<br/><br/>

            Fast-forward to today, I've had the privilege to complete a recent internship working on a
            Computer vision project which further sharpened my ML skills. This invaluable experience helps me
            as I currently search for opportunities in the roles mentioned above. I am eager to contribute
            meaningfully within dynamic teams while growing my skill set.<br/><br/>
            
            Apart from coding, I enjoy sharing knowledge through writing articles over Hashnode. When I step away
            from the screen, I find balance in reading Non-Fiction & Indian Mythology books and practicing yoga.
            This blend of continuous learning, sharing knowledge, and mindfulness forms the core of my approach
            to my work in tech! 📚✨

          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro