import React from 'react';
import IMG1 from '../../assets/template.png';
import IMG2 from '../../assets/pypi.gif';
import IMG3 from '../../assets/magic_art.png';
import IMG4 from '../../assets/zodiac.gif';
import IMG5 from '../../assets/bot.gif';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Streamlit Beginner Template',
      img: IMG1,
      description:
        'A template app that helps you to learn and build Streamlit apps on Replit platform as well as explore about Streamlit library.',
      technologies: '🧰Stack: Python, Streamlit, Replit',
      link: 'https://shruagarwal-streamlit-template-streamlit-app-c2x1s5.streamlitapp.com/',
      github: 'https://github.com/ShruAgarwal/streamlit_template',
    },
    {
      id: 2,
      title: 'Streamlit Custom Toggle',
      img: IMG2,
      description: 'A custom component to load heart-shaped Toggle Switch widget in Streamlit.',
      technologies: '🧰Stack: Python, Typescript, HTML, Shell script, Pypi package',
      link: 'https://pypi.org/project/streamlit-custom-toggle/',
      github: 'https://github.com/ShruAgarwal/streamlit-custom-toggle',
    },
    {
      id: 3,
      title: 'Magical Image Art',
      img: IMG3,
      description: 'A Streamlit App that can convert and apply three different styling effects to an Image.',
      technologies: '🧰Stack: OpenCV, Numpy, Pillow, Streamlit',
      link: 'https://magical-image-art.streamlitapp.com/',
      github: 'https://github.com/ShruAgarwal/Magical_Image_Art',
    },
    {
      id: 4,
      title: 'Daily Horoscope App',
      img: IMG4,
      description: 'Predicts your zodiac sign based on your birth date & provides real-time horoscope.',
      technologies: '🧰Stack: Aztro API, Python, Streamlit',
      link: 'https://shruagarwal-streamlit-horoscope-horoscope-app-gws5c9.streamlitapp.com/',
      github: 'https://github.com/ShruAgarwal/streamlit-horoscope',
    },
    {
      id: 5,
      title: 'Pencil Sketch Bot',
      img: IMG5,
      description:'Tweeting an image along with the hashtag #PicSketch, triggers the bot to respond with a pencil sketch image.',
      technologies: '🧰Stack: Python, Numpy, OpenCV, Pillow, Tweepy, Heroku',
      link: 'https://twitter.com/i/flow/login',
      github: 'https://github.com/ShruAgarwal/Twitter-bot',
    },
  ];

  return (
    <section id="portfolio">
      <h5>All of my projects at a glance.</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit App/Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
