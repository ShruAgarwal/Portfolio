import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import IMG1 from '../../assets/project_1.png';
import IMG2 from '../../assets/project_2.gif';
import IMG3 from '../../assets/project_3.gif';
import IMG4 from '../../assets/project_4.gif';
import IMG5 from '../../assets/project_5.png';

import './portfolio.css';
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Chat with EduChain Bot',
      img: IMG1,
      description:"An educational chatbot web app that can answer your questions related to the 'LangChain & Vector Databases in Production' course by Activeloop.",
      technologies: 'STACK USED : Python, Apify, Cohere, Activeloop, OpenAI, LangChain, Streamlit',
      link: 'https://educhain-bot.streamlit.app/',
      github: 'https://github.com/ShruAgarwal/Activeloop-LangChain-CourseBot',
    },
    {
      id: 2,
      title: 'The Air We Breathe',
      img: IMG2,
      description:'A Streamlit app that visualizes global air pollution levels through interactive maps and charts, showcasing AQI values of various pollutants across cities.',
      technologies: 'STACK USED : Python, Pandas, Matplotlib, Seaborn, Plotly, Streamlit',
      link: 'https://air-we-breathe.streamlit.app/',
      github: 'https://github.com/ShruAgarwal/Air-we-breathe',
    },
    {
      id: 3,
      title: 'Streamlit Custom Toggle',
      img: IMG3,
      description: 'A custom component to load heart-shaped Toggle Switch widget in Streamlit.',
      technologies: 'STACK USED : Python, Typescript, React, HTML, Shell script, PyPI package',
      link: 'https://shru-examples.streamlit.app/Heart_Toggle_Switch',
      github: 'https://github.com/ShruAgarwal/streamlit-custom-toggle',
    },
    {
      id: 4,
      title: 'Magical Image Art',
      img: IMG4,
      description: 'A Streamlit App that can convert and apply three different styling effects to an Image.',
      technologies: 'STACK USED : OpenCV, Numpy, Pillow, Streamlit',
      link: 'https://magical-image-art.streamlitapp.com/',
      github: 'https://github.com/ShruAgarwal/Magical_Image_Art',
    },
    {
      id: 5,
      title: 'Streamlit Beginner Template',
      img: IMG5,
      description:'A template app that helps you to learn and build Streamlit apps on Replit platform as well as explore about Streamlit library.',
      technologies: 'STACK USED : Python, Streamlit, Replit',
      link: 'https://shruagarwal-streamlit-template-streamlit-app-c2x1s5.streamlitapp.com/',
      github: 'https://github.com/ShruAgarwal/streamlit_template',
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
              <p><FaTools className="portfolio__item-icon" size={15}/>  {pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer">
                GitHub Repo  <FiArrowUpRight className="portfolio__item-cta-icon" size={16}/>
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer">
                App Demo  <FiArrowUpRight className="portfolio__item-cta-icon" size={16}/>
              </a>
            </div>
          </article>
        ))}
      </div><br/><br/>
      <div className="portfolio__item-cta-1">
        <a
        href="https://github.com/ShruAgarwal?tab=repositories"
        target="_blank"
        className="btn"
        rel="noreferrer">
          Check out my open-source contributions & other projects 👉
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
