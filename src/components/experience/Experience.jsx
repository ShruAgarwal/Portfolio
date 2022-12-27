import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Languages & Tools I've tried, tested, and built things with it.</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Familiar</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/color/344/python--v2.png" alt="python"/>
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <img className="st_img" src="https://streamlit.io/images/brand/streamlit-mark-color.png" alt="streamlit"/>
              <h4>Streamlit</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://pandas.pydata.org/static/img/pandas_mark.svg" alt="pandas"/>
              <h4>Pandas</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/color/344/numpy.png" alt="numpy"/>
              <h4>Numpy</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/fluency/344/opencv.png" alt="opencv"/>
              <h4>OpenCV</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://raw.githubusercontent.com/python-pillow/pillow-logo/main/pillow-logo-248x250.png" alt="pillow"/>
              <h4>Pillow</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn"/>
              <h4>Seaborn (basics)</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"/>
              <h4>HTML5</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css"/>
              <h4>CSS3</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://react-simple-portfolio-codewithvk.netlify.app/images/icons/react-original.svg" alt="react"/>
              <h4>React (basics)</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
              <h4>NodeJS</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" alt="ci/cd"/>
              <h4>GitHub Actions</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://img.icons8.com/nolan/344/heroku.png" alt="heroku"/>
              <h4>Heroku</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify" />
              <h4>Netlify</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>APIs</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Learning in Progress</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img className="img" src="https://react-simple-portfolio-codewithvk.netlify.app/images/icons/linux-icon.svg" alt="linux" />
              <h4>Linux</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" alt="fastapi"/>
              <h4>FastAPI</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://cdn.iconscout.com/icon/free/png-256/docker-3628734-3029959.png" alt="docker"/>
              <h4>Docker</h4>
            </article>
            <article className="experience__details">
              <img className="img" src="https://react-simple-portfolio-codewithvk.netlify.app/images/icons/amazon_aws-icon.svg" alt="aws"/>
              <h4>AWS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>SQL</h4>
            </article>
          </div>
          <div className="lottie">
          <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9rfdfjek.json" background="transparent" speed="1" loop controls autoplay></lottie-player>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience